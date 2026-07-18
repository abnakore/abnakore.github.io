import { useMode } from "../../hooks/useMode";
import SectionTag from "../ui/SectionTag";
import WaveDivider from "../layout/WaveDivider";
import ScrollReveal from "../ui/ScrollReveal";
import { Link } from "react-router-dom";

export default function About() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? "bg-b-bg" : ""}`}
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

            <Link
              to="/about"
              className="inline-block mt-6 font-mono text-sm text-t-accent hover:text-t-accent/80 transition-colors border border-t-accent/30 hover:border-t-accent/60 rounded-lg px-4 py-2"
            >
              $ cat full_bio.md →
            </Link>
          </ScrollReveal>
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
            <Link
              to="/about"
              className="inline-block mt-6 font-sora text-sm font-semibold text-b-accent hover:text-b-accent/80 transition-colors border border-b-accent/30 hover:border-b-accent/60 rounded-xl px-5 py-2.5"
            >
              Read the full story →
            </Link>
          </ScrollReveal>
        )}
      </div>
      {!isTerminal && <WaveDivider fill="#FFFFFF" />}
    </section>
  );
}