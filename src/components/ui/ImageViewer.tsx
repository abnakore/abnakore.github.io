import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useMode } from "../../hooks/useMode";

interface Screenshot {
  label: string;
  description: string;
  image?: string;
}

interface ImageViewerProps {
  screenshots: Screenshot[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  gradient: string;
}

export default function ImageViewer({
  screenshots,
  currentIndex,
  onClose,
  onNavigate,
  gradient,
}: ImageViewerProps) {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const [isClosing, setIsClosing] = useState(false);

  const requestClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(onClose, 420);
  }, [isClosing, onClose]);

  const goToPrevious = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, screenshots.length, onNavigate]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, screenshots.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [requestClose, goToPrevious, goToNext]);

  const currentScreenshot = screenshots[currentIndex];

  const panelRadius = isTerminal ? "16px" : "28px";
  const genieVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.04,
      scaleX: 0.35,
      y: 140,
      borderRadius: "999px",
    },
    visible: {
      opacity: 1,
      scaleY: [0.04, 1.06, 0.97, 1],
      scaleX: [0.35, 1.07, 0.97, 1],
      y: [140, -10, 4, 0],
      borderRadius: ["999px", "32px", "20px", panelRadius],
      transition: {
        duration: 0.62,
        ease: [0.34, 1.15, 0.64, 1] as any,
        times: [0, 0.55, 0.8, 1],
      },
    },
    exit: {
      opacity: [1, 1, 0],
      scaleY: [1, 0.88, 0.04],
      scaleX: [1, 0.5, 0.32],
      y: [0, 24, 140],
      borderRadius: [panelRadius, "48px", "999px"],
      transition: {
        duration: 0.42,
        ease: [0.55, 0, 0.85, 0.35] as any,
        times: [0, 0.4, 1],
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.35, delay: 0.08 } },
  };

  const animateState = isClosing ? "exit" : "visible";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{
        background: isTerminal ? "rgba(0,0,0,0.85)" : "rgba(24,20,37,0.55)",
        backdropFilter: "blur(6px)",
      }}
      variants={backdropVariants}
      initial="hidden"
      animate={animateState}
      onClick={requestClose}
    >
      <motion.div
        className={`relative w-full max-w-5xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-6rem)] flex flex-col overflow-hidden ${
          isTerminal
            ? "border border-t-border bg-t-panel shadow-[0_30px_90px_rgba(255,176,0,0.1)]"
            : "bg-white shadow-[0_30px_80px_rgba(24,20,37,0.25)]"
        }`}
        style={{ transformOrigin: "bottom center" }}
        variants={genieVariants}
        initial="hidden"
        animate={animateState}
        onClick={(e) => e.stopPropagation()}
      >
        {isTerminal ? (
          <>
            <div className="flex items-center gap-2 bg-[#17160E] px-4 py-3 border-b border-t-border shrink-0">
              <span
                className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] cursor-pointer"
                onClick={requestClose}
              />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-t-dim truncate">
                ~/screenshots/
                {currentScreenshot.label.toLowerCase().replace(/\s+/g, "-")}.png
              </span>
            </div>

            <div className="px-6 pt-5 pb-4 border-b border-t-border shrink-0 font-mono">
              <div className="text-t-dim text-xs">
                <span className="text-t-accent">abdul@buk</span>:~$ open{" "}
                {currentScreenshot.label.toLowerCase().replace(/\s+/g, "-")}.png
              </div>
              <h3 className="text-t-text text-lg font-bold mt-1.5">
                {currentScreenshot.label}
              </h3>
              <p className="text-t-dim text-[13px] mt-1">
                // {currentScreenshot.description}
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 md:p-10 min-h-[360px] overflow-auto">
              {currentScreenshot.image ? (
                <img
                  src={currentScreenshot.image}
                  alt={currentScreenshot.label}
                  className="max-w-full max-h-[56vh] object-contain rounded-md border border-t-border"
                />
              ) : (
                <div
                  className={`w-full aspect-video bg-gradient-to-br ${gradient} rounded-md flex items-center justify-center border border-t-border`}
                >
                  <PlaceholderIcon
                    className="text-t-dim/40"
                    label={currentScreenshot.label}
                    labelClass="font-mono text-t-dim/70"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t border-t-border font-mono text-xs shrink-0">
              <button
                onClick={goToPrevious}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-t-border text-t-accent hover:border-t-accent hover:bg-t-accent/10 transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft /> <span className="hidden sm:inline">$ prev</span>
              </button>

              <div className="text-t-dim">
                [{currentIndex + 1}/{screenshots.length}]
              </div>

              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-t-border text-t-accent hover:border-t-accent hover:bg-t-accent/10 transition-all duration-200"
                aria-label="Next image"
              >
                <span className="hidden sm:inline">$ next</span>{" "}
                <ChevronRight />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between p-6 md:p-7 border-b border-black/5 shrink-0">
              <div className="min-w-0">
                <h3 className="font-sora text-lg md:text-xl font-bold text-b-ink truncate">
                  {currentScreenshot.label}
                </h3>
                <p className="text-b-sub text-sm mt-1.5">
                  {currentScreenshot.description}
                </p>
              </div>
              <button
                onClick={requestClose}
                className="ml-4 w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-b-bg text-b-ink hover:bg-b-accent hover:text-white transition-all duration-200"
                aria-label="Close viewer"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-b-bg/40 min-h-[360px] overflow-auto">
              {currentScreenshot.image ? (
                <img
                  src={currentScreenshot.image}
                  alt={currentScreenshot.label}
                  className="max-w-full max-h-[56vh] object-contain rounded-2xl shadow-[0_8px_30px_rgba(24,20,37,0.1)]"
                />
              ) : (
                <div
                  className={`w-full aspect-video bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(24,20,37,0.1)]`}
                >
                  <PlaceholderIcon
                    className="text-white/70"
                    label={currentScreenshot.label}
                    labelClass="font-sora text-white/85"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between p-6 md:p-7 border-t border-black/5 shrink-0">
              <button
                onClick={goToPrevious}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-[1.5px] border-black/10 text-sm font-bold text-b-ink hover:bg-b-bg transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Previous image"
              >
                <ChevronLeft />{" "}
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="text-sm font-semibold text-b-sub">
                {currentIndex + 1} / {screenshots.length}
              </div>

              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-b-ink text-white text-sm font-bold hover:shadow-lg hover:shadow-b-ink/25 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Next image"
              >
                <span className="hidden sm:inline">Next</span> <ChevronRight />
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

function PlaceholderIcon({
  className = "",
  label,
  labelClass = "",
}: {
  className?: string;
  label: string;
  labelClass?: string;
}) {
  return (
    <div className="text-center">
      <svg
        className={`w-16 h-16 mx-auto mb-3 ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className={`text-sm ${labelClass}`}>{label}</span>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}