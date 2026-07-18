import Layout from "../components/layout/Layout";
import SkillTabs from "../components/sections/SkillTabs";
import Journey from "../components/sections/Journey";
import TiltCard from "../components/ui/TiltCard";
import SectionTag from "../components/ui/SectionTag";
import ScrollReveal from "../components/ui/ScrollReveal";
import WaveDivider from "../components/layout/WaveDivider";
import { useMode } from "../hooks/useMode";
import { useScrollToHash } from "../hooks/useScrollToHash";

function FullBio() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";

  return (
    <section
      className={`relative px-[6vw] py-24 md:py-28 ${
        !isTerminal ? "bg-b-bg" : "bg-t-bg"
      }`}
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

            <p className="text-t-dim text-[14.5px] leading-relaxed max-w-2xl mt-4">
              I'm currently a 400-level Software Engineering student at Bayero
              University Kano, constantly building, breaking, rebuilding, and
              improving my craft. Every project teaches me something new, every
              challenge sharpens my thinking, and every line of code is another
              step toward creating software that's reliable, impactful, and
              genuinely enjoyable to use.
            </p>

            <div className="max-w-xl mt-8">
              <SectionTag>$ cat skills.json</SectionTag>
              <SkillTabs />
            </div>
          </ScrollReveal>
        ) : (
          <div>
            <ScrollReveal variant="fadeUp">
              <SectionTag>About me</SectionTag>
              <h2 className="font-sora text-2xl md:text-4xl font-extrabold mt-3">
                The full story
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              <ScrollReveal
                variant="fadeUp"
                delay={0.1}
                className="md:col-span-3 md:row-span-2"
              >
                <TiltCard className="bg-b-ink text-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(24,20,37,0.06)]">
                  <h3 className="font-sora text-lg mb-2">What I do</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    I love the moment an idea stops living on paper and starts
                    becoming something real. Whether it's a startup, a business
                    tool, or a personal project, I enjoy building software that
                    solves problems, feels effortless to use, and leaves people
                    thinking,{" "}
                    <span className="italic">
                      "This is exactly what I needed."
                    </span>
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed mt-3">
                    Curiosity keeps me moving. That's why I've explored web
                    development, mobile apps, AI, backend engineering, embedded
                    systems, UI/UX, data science, and even game development. The
                    more I learn, the more creative my solutions become.
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed mt-3">
                    I'm currently a 400-level Software Engineering student at
                    Bayero University Kano, constantly building, breaking,
                    rebuilding, and improving my craft. Every project teaches me
                    something new, every challenge sharpens my thinking, and
                    every line of code is another step toward creating software
                    that's reliable, impactful, and genuinely enjoyable to use.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "Python",
                      "Django",
                      "DRF",
                      "React",
                      "Typescript",
                      "Javascript",
                      "Figma",
                      "Tailwind",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-white/10 text-white px-2.5 py-1.5 rounded-full font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal
                variant="fadeUp"
                delay={0.2}
                className="md:col-span-3"
              >
                <TiltCard className="bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(24,20,37,0.06)]">
                  <h3 className="font-sora text-lg mb-2">
                    Skills & expertise
                  </h3>
                  <SkillTabs />
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal
                variant="fadeUp"
                delay={0.3}
                className="md:col-span-3"
              >
                <TiltCard className="bg-gradient-to-br from-b-accent to-purple-500 text-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(24,20,37,0.06)] flex flex-col justify-center">
                  <div className="font-sora font-extrabold text-4xl">400L</div>
                  <p className="text-sm text-white/80 mt-2">
                    Software Engineering @ Bayero University Kano.
                  </p>
                </TiltCard>
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
      {!isTerminal && <WaveDivider fill="#FFFFFF" />}
    </section>
  );
}

export default function AboutPage() {
  useScrollToHash();

  return (
    <Layout>
      <FullBio />
      <Journey />
    </Layout>
  );
}