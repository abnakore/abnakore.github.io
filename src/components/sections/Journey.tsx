import { motion } from "framer-motion";
import { useMode } from "../../hooks/useMode";
import { journey } from "../../data/journey";
import SectionTag from "../ui/SectionTag";
import ScrollReveal from "../ui/ScrollReveal";
import WaveDivider from "../layout/WaveDivider";

/* Terminal Roadmap Item */
function TerminalRoadmapItem({
  item,
  index,
  isLast,
}: {
  item: (typeof journey)[0];
  index: number;
  isLast: boolean;
}) {
  const isActive = item.isActive;

  const typeLabels: Record<string, string> = {
    education: "sys.edu",
    work: "sys.work",
    milestone: "sys.stage",
  };

  return (
    <div
      className={`font-mono text-sm relative pl-8 md:pl-12 pb-10 last:pb-2 ${!isActive ? "opacity-40" : ""}`}
    >
      {/* File-tree connector track */}
      {!isLast && (
        <div className="absolute left-[7px] md:left-[15px] top-4 bottom-0 w-px bg-t-border/50" />
      )}

      {/* Interactive Node Point using CSS Classes from your file */}
      <div className="absolute left-0 md:left-2 top-1.5 z-10 flex items-center justify-center">
        <div
          className={`w-3 h-3 rounded-full border transition-all duration-300 ${
            isActive
              ? "bg-t-accent border-t-accent terminal-node-glow"
              : "bg-t-bg border-t-dim/40"
          }`}
        />
      </div>

      {/* Log Entry Body */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="space-y-2"
      >
        {/* Environment Line Metadata */}
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-t-dim select-none">
          <span className="text-t-accent">❯</span>
          <span className="text-t-green font-semibold">
            {typeLabels[item.type] || "sys.log"}
          </span>
          <span>•</span>
          <span className="text-t-accent/90">{item.date}</span>
        </div>

        {/* Clean, Readable Log Card */}
        <div
          className={`border border-t-border rounded-lg p-4 md:p-5 transition-all duration-300 ${
            isActive
              ? "bg-t-panel/60 border-t-border hover:border-t-accent/40"
              : "bg-t-panel/20"
          }`}
        >
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3
              className={`text-base font-bold tracking-tight ${isActive ? "text-t-text" : "text-t-dim"}`}
            >
              {item.title}
            </h3>
            <span className="text-t-dim/70 text-xs italic font-sans font-medium">
              // {item.subtitle}
            </span>
          </div>

          {/* Clean Readable Prose Description using font-plex or font-inter for extreme readability */}
          <p
            className={`mt-3 leading-relaxed text-[13.5px] font-plex ${
              isActive ? "text-t-text/90" : "text-t-dim/70"
            }`}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* Editorial Roadmap Item (Sharp, minimal, numbered) */
function EditorialRoadmapItem({
  item,
  index,
  isLast,
}: {
  item: (typeof journey)[0];
  index: number;
  isLast: boolean;
}) {
  const isActive = item.isActive;

  return (
    <div className={`relative pl-10 md:pl-12 ${!isLast ? "pb-12" : "pb-2"}`}>
      {/* Vertical connector line */}
      {!isLast && (
        <div className="absolute left-[7px] md:left-[15px] top-3 bottom-0 w-px bg-e-border" />
      )}

      {/* Numbered dot */}
      <div className="absolute left-0 md:left-2 top-1.5 z-10 flex items-center justify-center">
        <div className={`w-3.5 h-3.5 flex items-center justify-center font-fraunces text-[10px] font-semibold ${
          isActive ? "text-e-bg bg-e-accent" : "text-e-dim bg-e-panel border border-e-border"
        }`}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="space-y-2"
      >
        {/* Meta line */}
        <div className="flex items-center gap-2 text-[11px] font-archivo font-bold tracking-[0.18em] uppercase text-e-accent">
          <span>{item.type}</span>
          <span className="text-e-dim">•</span>
          <span className="text-e-dim">{item.date}</span>
        </div>

        {/* Content */}
        <h3 className="font-fraunces font-semibold text-xl md:text-2xl text-e-text leading-tight">
          {item.title}
        </h3>
        <p className="font-archivo text-sm text-e-dim italic font-medium">
          {item.subtitle}
        </p>
        <p className="font-archivo text-[14.5px] leading-relaxed text-e-dim/80">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

/* Bento Roadmap Item (Alternating Center Timeline) */
function BentoRoadmapItem({
  item,
  index,
  isLast,
}: {
  item: (typeof journey)[0];
  index: number;
  isLast: boolean;
}) {
  const isActive = item.isActive;
  const isEven = index % 2 === 0;

  const dotColors: Record<string, string> = {
    education: "bg-b-accent",
    work: "bg-b-accent2",
    milestone: "bg-indigo-400",
  };

  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12 items-start w-full min-h-[200px]">
      {/* Central Axis Elements */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full top-2">
        {!isLast && (
          <motion.div
            className={`w-px mx-auto h-full ${isActive ? "bg-b-accent/30" : "bg-gray-200"}`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <motion.div
          className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-b-bg flex items-center justify-center transition-all duration-300 ${
            isActive ? "border-b-accent journey-node-active" : "border-gray-300"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-b-accent" : "bg-gray-300"}`}
          />
        </motion.div>
      </div>

      {/* Content wrapper */}
      <div
        className={`md:col-span-1 pb-10 md:pb-14 ${isEven ? "md:col-start-2 md:text-left md:pl-6" : "md:col-start-1 md:text-right md:pr-6"}`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`relative transition-all duration-300 ${isActive ? "" : "opacity-40"}`}
        >
          {/* Mobile timeline line element */}
          <div className="md:hidden absolute -left-5 top-2 bottom-0 w-px bg-gray-200">
            <div
              className={`absolute top-0 -left-[3px] w-2 h-2 rounded-full ${dotColors[item.type] || "bg-gray-400"} ${isActive ? "journey-node-active" : ""}`}
            />
          </div>

          {/* Subheader category label */}
          <div
            className={`flex items-center gap-2 mb-2 text-[11px] font-mono tracking-widest uppercase font-semibold ${
              isEven ? "md:justify-start" : "md:justify-end"
            } text-b-sub/70`}
          >
            <span
              className={`w-2 h-2 rounded-full ${dotColors[item.type] || "bg-gray-400"}`}
            />
            <span>{item.type}</span>
            <span className="opacity-40">•</span>
            <span>{item.date}</span>
          </div>

          <h3 className="font-sora font-bold text-xl md:text-2xl text-b-ink leading-tight">
            {item.title}
          </h3>

          <p className="text-b-sub/80 italic text-sm md:text-base font-medium mt-1 font-inter">
            {item.subtitle}
          </p>

          <p
            className={`text-sm md:text-[14.5px] leading-relaxed mt-3 max-w-xl font-inter ${
              isEven ? "md:mr-auto" : "md:ml-auto"
            } text-b-sub/80`}
          >
            {item.description}
          </p>
        </motion.div>
      </div>

      <div className="hidden md:block md:col-span-1" />
    </div>
  );
}

export default function Journey() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";

  let sectionClass: string;
  if (isTerminal) sectionClass = "bg-t-bg terminal-scanline";
  else if (isEditorial) sectionClass = "bg-e-bg";
  else sectionClass = "bg-b-bg";

  return (
    <section
      id="journey"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-32 overflow-hidden transition-colors duration-300 ${sectionClass}`}
    >
      <div className="max-w-[1180px] mx-auto w-full relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionTag>
            {isTerminal ? "$ cat journey.log" : isEditorial ? "02" : "My journey"}
          </SectionTag>
          <h2
            className={`text-2xl md:text-4xl font-extrabold mt-3 ${
              isTerminal ? "font-mono text-t-text" : isEditorial ? "font-fraunces font-semibold text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.02em] text-e-text" : "font-sora text-b-ink"
            }`}
          >
            {isTerminal ? "The Builder's Log" : "The path that brought me here"}
          </h2>
          <p
            className={`leading-relaxed max-w-2xl mt-4 ${
              isTerminal
                ? "text-t-dim text-[14.5px] font-mono"
                : isEditorial
                  ? "text-e-dim text-[16.5px] font-archivo"
                  : "text-b-sub text-[16.5px] font-inter"
            }`}
          >
            {isTerminal
              ? "A timeline of curiosity, experiments, failures, and breakthroughs that shaped the engineer behind the code."
              : "Curiosity turned into code. Code turned into products. Here's how the journey unfolded."}
          </p>
        </ScrollReveal>

        <div className={isTerminal ? "mt-16 max-w-3xl" : "mt-24 w-full"}>
          {isTerminal ? (
            <div className="flex flex-col relative">
              {journey.map((item, index) => (
                <TerminalRoadmapItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === journey.length - 1}
                />
              ))}

              {/* Terminal trailing system line marker */}
              <div className="font-mono text-xs text-t-dim/40 pl-8 md:pl-12 mt-2 select-none flex items-center gap-2">
                <span className="text-t-accent">❯</span>
                <span>exit_code: 0 | status: still_building</span>
                <span className="w-1.5 h-3 bg-t-accent inline-block animate-blink" />
              </div>
            </div>
          ) : isEditorial ? (
            <div className="max-w-3xl">
              {journey.map((item, index) => (
                <EditorialRoadmapItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === journey.length - 1}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col pl-4 md:pl-0">
              {journey.map((item, index) => (
                <BentoRoadmapItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === journey.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {!isTerminal && !isEditorial && <WaveDivider fill="#FFFFFF" />}
    </section>
  );
}
