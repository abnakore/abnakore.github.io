import { useMode } from "../../hooks/useMode";
import { services } from "../../data/services";
import type { ReactNode } from "react";
import SectionTag from "../ui/SectionTag";
import WaveDivider from "../layout/WaveDivider";
import TiltCard from "../ui/TiltCard";
import ScrollReveal, {
  ScrollRevealContainer,
  ScrollRevealItem,
} from "../ui/ScrollReveal";

export default function Services() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";

  let bgClass: string;
  if (isTerminal) bgClass = "";
  else if (isEditorial) bgClass = "bg-e-bg";
  else bgClass = "bg-white";

  return (
    <section
      id="services"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? bgClass : ""}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">
        <ScrollReveal variant="fadeUp">
          <SectionTag>
            {isTerminal ? "$ services --list" : isEditorial ? "02" : "My services"}
          </SectionTag>
          <h2
            className={`text-2xl md:text-4xl font-extrabold mt-3 ${isTerminal ? "font-mono" : isEditorial ? "font-fraunces font-semibold" : "font-sora"}`}
          >
            {isTerminal ? "What I can build" : isEditorial ? "Where I add value" : "Where I add value"}
          </h2>
        </ScrollReveal>

        <ScrollRevealContainer
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8`}
          staggerDelay={0.1}
        >
          {services.map((s, i) =>
            isTerminal ? (
              <ScrollRevealItem key={s.title}>
                <div className="bg-t-panel border border-t-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-accent">
                  <div className="font-mono text-t-accent text-xs mb-2.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-[15px] font-semibold mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-[12.5px] text-t-dim leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </ScrollRevealItem>
            ) : isEditorial ? (
              <ScrollRevealItem key={s.title}>
                <div className="border-t border-e-border pt-5 transition-[padding] duration-300 hover:pl-2">
                  <div className="font-fraunces text-e-accent text-sm mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="font-fraunces font-semibold text-lg text-e-text mb-1.5">{s.title}</h4>
                  <p className="font-archivo text-[13px] text-e-dim leading-relaxed">{s.description}</p>
                </div>
              </ScrollRevealItem>
            ) : (
              <ScrollRevealItem key={s.title}>
                <TiltCard className="bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(24,20,37,0.05)]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-b-accent to-b-accent2 mb-3.5 flex items-center justify-center text-white">
                    {s.icon as ReactNode}
                  </div>
                  <h4 className="font-sora text-[15.5px] mb-1.5">{s.title}</h4>
                  <p className="text-[13px] text-b-sub leading-relaxed">
                    {s.description}
                  </p>
                </TiltCard>
              </ScrollRevealItem>
            ),
          )}
        </ScrollRevealContainer>
      </div>
      {!isTerminal && !isEditorial && <WaveDivider fill="#F3F1FB" />}
      {isEditorial && <div className="absolute bottom-0 left-0 right-0 border-t border-e-border" />}
    </section>
  );
}
