import { useMode } from "../../hooks/useMode";
import SectionTag from "../ui/SectionTag";
import WaveDivider from "../layout/WaveDivider";
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from "../ui/ScrollReveal";
import TiltCard from "../ui/TiltCard";
import { Link } from "react-router-dom";
import KineticHeadline from "../editorial/KineticHeadline";
import SkillsMarquee from "../editorial/SkillsMarquee";
import { skillGroups } from "../../data/skills";

const metrics = [
  {
    value: "20+",
    label: "Projects Built",
    description: "Ideas transformed into working products",
  },
  {
    value: "3+",
    label: "Years Coding",
    description: "Still learning, still leveling up",
  },
  {
    value: "∞",
    label: "Bugs Encountered",
    description: "Most fixed. Some became features 😄",
  },
  {
    value: "6+",
    label: "Tech Fields Explored",
    description: "Web, mobile, AI, data & beyond",
  },
];

export default function About() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";

  let bgClass: string;
  if (isTerminal) bgClass = "";
  else if (isEditorial) bgClass = "bg-e-bg";
  else bgClass = "bg-b-bg";

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? bgClass : ""}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">
        {isTerminal ? (
          <ScrollReveal variant="fadeUp">
            <SectionTag>$ cat about.md</SectionTag>
            <h2 className="font-mono text-2xl md:text-4xl font-extrabold mt-3">
              A bit about me
            </h2>
            <p className="text-t-dim text-[14.5px] leading-relaxed max-w-2xl mt-4">
              I don't just enjoy writing code — I enjoy building things people
              actually use. There's something exciting about taking a rough
              idea, asking{" "}
              <span className="font-mono text-t-fg">"What if?"</span>, and
              turning it into a polished product that solves a real problem.
              That's the part that keeps me coming back every day.
            </p>

            <p className="text-t-dim text-[14.5px] leading-relaxed max-w-2xl mt-4">
              Curiosity has taken me far beyond traditional web development.
              I've explored mobile apps, AI, backend engineering, data science,
              embedded systems, UI/UX design, and even game development. I love
              learning how different technologies work together because the best
              solutions rarely come from staying in one lane.
            </p>

            <ScrollRevealContainer className="grid grid-cols-2 gap-3 mt-8" staggerDelay={0.06}>
              {metrics.map((m) => (
                <ScrollRevealItem key={m.label} variant="fadeUp">
                  <div className="group border border-t-border rounded-lg p-4 transition-all duration-300 hover:border-t-accent/40 hover:bg-t-panel/60 hover:-translate-y-0.5">
                    <div className="font-mono text-2xl md:text-3xl font-bold text-t-accent">
                      {m.value}
                    </div>
                    <div className="font-mono text-sm text-t-text mt-1.5 font-semibold">
                      {m.label}
                    </div>
                    <div className="font-mono text-xs text-t-dim mt-1 leading-relaxed">
                      {m.description}
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </ScrollRevealContainer>

            <Link
              to="/about"
              className="inline-block mt-8 font-mono text-sm text-t-accent hover:text-t-accent/80 transition-colors border border-t-accent/30 hover:border-t-accent/60 rounded-lg px-4 py-2"
            >
              $ cat full_bio.md →
            </Link>
          </ScrollReveal>
        ) : isEditorial ? (
          <>
            <ScrollReveal variant="fadeUp">
              <SectionTag>01</SectionTag>
              <h2 className="font-fraunces font-semibold text-[clamp(44px,6vw,80px)] leading-[1.02] tracking-[-0.03em] text-e-text mt-3">
                <KineticHeadline
                  text="Building things that actually ship."
                  emphasize={["ship"]}
                />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="font-archivo text-e-text text-[16.5px] leading-relaxed">
                    I don't just enjoy writing code — I enjoy building things people
                    actually use. There's something exciting about taking a rough
                    idea, asking "What if?", and turning it into a polished product
                    that solves a real problem.
                  </p>
                  <p className="font-archivo text-e-dim text-[16.5px] leading-relaxed mt-4">
                    Curiosity has taken me far beyond traditional web development.
                    I've explored mobile apps, AI, backend engineering, data science,
                    embedded systems, UI/UX design, and even game development.
                  </p>
                  <Link
                    to="/about"
                    className="inline-block mt-6 font-archivo font-bold text-sm text-e-accent hover:text-e-accent/80 transition-colors"
                  >
                    Read the full story →
                  </Link>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-e-border md:pl-8 pt-6 md:pt-0">
                  <div className="space-y-5">
                    {metrics.map((m) => (
                      <div key={m.label} className="border-b border-e-border pb-4">
                        <div className="font-fraunces text-2xl font-semibold text-e-accent">{m.value}</div>
                        <div className="font-archivo text-sm font-semibold text-e-text mt-1">{m.label}</div>
                        <div className="font-archivo text-xs text-e-dim mt-0.5">{m.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <div className="mt-16">
              <SkillsMarquee items={skillGroups.flatMap((g) => g.items.map((i) => i.label))} />
            </div>
          </>
        ) : (
          <ScrollReveal variant="fadeUp">
            <SectionTag>About me</SectionTag>
            <h2 className="font-sora text-2xl md:text-4xl font-extrabold mt-3">
              Hi, I'm here to help your next project
            </h2>
            <p className="text-b-sub text-[16.5px] leading-relaxed max-w-2xl mt-4 font-inter">
              I love the moment an idea stops living on paper and starts
              becoming something real. Whether it's a startup, a business tool,
              or a personal project, I enjoy building software that solves
              problems, feels effortless to use, and leaves people thinking,
              "This is exactly what I needed."
            </p>
            <p className="text-b-sub text-[16.5px] leading-relaxed max-w-2xl mt-4 font-inter">
              Curiosity keeps me moving. That's why I've explored web
              development, mobile apps, AI, backend engineering, embedded
              systems, UI/UX, data science, and even game development. The more
              I learn, the more creative my solutions become.
            </p>

            <ScrollRevealContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8" staggerDelay={0.06}>
              {metrics.map((m) => (
                <ScrollRevealItem key={m.label} variant="fadeUp">
                  <TiltCard>
                    <div className="group bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(24,20,37,0.04)] border border-transparent transition-all duration-300 hover:border-b-accent/10 hover:shadow-[0_8px_30px_rgba(79,70,229,0.08)]">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-b-accent to-b-accent2 bg-clip-text text-transparent">
                        {m.value}
                      </div>
                      <div className="text-sm font-sora font-semibold text-b-ink mt-2">
                        {m.label}
                      </div>
                      <div className="text-xs font-inter text-b-sub mt-1.5 leading-relaxed">
                        {m.description}
                      </div>
                    </div>
                  </TiltCard>
                </ScrollRevealItem>
              ))}
            </ScrollRevealContainer>

            <Link
              to="/about"
              className="inline-block mt-8 font-sora text-sm font-semibold text-b-accent hover:text-b-accent/80 transition-colors border border-b-accent/30 hover:border-b-accent/60 rounded-xl px-5 py-2.5"
            >
              Read the full story →
            </Link>
          </ScrollReveal>
        )}
      </div>
      {!isTerminal && !isEditorial && <WaveDivider fill="#FFFFFF" />}
      {isEditorial && <div className="absolute bottom-0 left-0 right-0 border-t border-e-border" />}
    </section>
  );
}