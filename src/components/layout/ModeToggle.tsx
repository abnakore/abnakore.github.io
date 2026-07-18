import { motion } from "framer-motion";
import { useMode } from "../../hooks/useMode";

const modeLabels = ["CLI", "GRID", "EDT"] as const;
const modeValues = ["terminal", "bento", "editorial"] as const;

const modeColors: Record<string, string> = {
  terminal: "#FFB000",
  bento: "#4F46E5",
  editorial: "#FFD23F",
};

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  const activeIndex = modeValues.indexOf(mode as (typeof modeValues)[number]);

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
      <motion.div
        className="absolute top-1 bottom-1 left-1 rounded-full"
        style={{ width: "calc(33.333% - 4px)" }}
        animate={{
          x: activeIndex * 100 + "%",
          backgroundColor: modeColors[mode],
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      />
      {modeLabels.map((label, i) => (
        <button
          key={label}
          onClick={() => setMode(modeValues[i] as any)}
          className={`relative z-10 px-3.5 py-2 text-xs font-bold rounded-full transition-colors ${
            mode === modeValues[i]
              ? mode === "terminal"
                ? "text-t-bg"
                : "text-white"
              : "text-gray-400"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
