import { motion } from "framer-motion";
import { useMode } from "../../hooks/useMode";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useTypewriterMulti } from "../../hooks/useTypewriterMulti";
import Button from "../ui/Button";
import SectionTag from "../ui/SectionTag";
import WaveDivider from "../layout/WaveDivider";

const roles = [
  "software engineer",
  "full-stack developer",
  "mobile app developer",
  "game developer",
  "scratcher",
  "UI/UX designer",
  "CS student",
];

import KineticHeadline from "../editorial/KineticHeadline";

export default function Hero() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";
  const typed = useTypewriter("Abdullahi Nakore", 55, 400);
  const typedRole = useTypewriterMulti(roles, 50, 25, 2000, 400);
  const typedSub = useTypewriter(
    "Turning ambitious ideas into reliable software.",
    55,
    400,
  );

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center px-[6vw] py-32 md:py-36 ${!isTerminal ? (isEditorial ? "bg-e-bg" : "bg-white") : ""}`}
    >
      <div className="max-w-295 mx-auto w-full">
        {isTerminal ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-t-border bg-t-panel overflow-hidden shadow-2xl shadow-t-accent/5"
          >
            <div className="flex gap-2 bg-[#17160E] px-4 py-3 border-b border-t-border">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="p-8 md:p-10 font-mono">
              <div className="text-t-dim text-sm mb-2">
                <span className="text-t-accent">abdul@dev</span>:~$ whoami
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-t-text tracking-tight">
                {typed}
                <span className="inline-block w-[0.5ch] bg-t-accent animate-blink ml-0.5">
                  &nbsp;
                </span>
              </h1>
              <div className="text-t-green mt-3 mb-5 min-h-[1.5em]">
                {">"} {typedRole}
                <span className="animate-blink text-t-green">_</span>
              </div>
              <div className="text-t-green mt-3 mb-5 min-h-[1.5em]">
                {">"} {typedSub}
                <span className="animate-blink text-t-green">_</span>
              </div>
              <p className="text-t-dim text-[14.5px] leading-relaxed max-w-xl">
                I build digital products that are fast, scalable, and designed
                to make an impact. Whether it's a web platform, mobile app,
                backend system, or AI-powered solution, I turn ambitious ideas
                into experiences people love to use.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {[
                  "python",
                  "django",
                  "DRF",
                  "react",
                  "typescript",
                  "javascript",
                  "tailwind",
                  "figma",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-t-accent/35 text-t-accent px-2.5 py-1.5 rounded-md hover:bg-t-accent/10 hover:-translate-y-0.5 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3.5 mt-8">
                <Button href="#projects" variant="primary">
                  ./view-projects
                </Button>
                <Button to="/contact" variant="ghost">
                  $ contact --now
                </Button>
              </div>
            </div>
          </motion.div>
        ) : isEditorial ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTag>Available for work</SectionTag>
            <h1 className="font-fraunces font-medium text-[clamp(56px,10vw,140px)] leading-[0.96] tracking-[-0.03em] text-e-text mt-6">
              <KineticHeadline
                text="Abdul builds things that work and look like they mean it."
                emphasize={["work"]}
              />
            </h1>
            <p className="font-archivo text-e-dim text-[16.5px] leading-relaxed max-w-lg mt-6">
              I'm a software engineer who turns ambitious ideas into polished
              digital experiences. From modern web platforms and mobile apps to
              scalable backend systems and AI-powered solutions — I build
              software that's fast, reliable, and made to create real impact.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Button href="#projects" variant="primary">
                View my work
              </Button>
              <Button to="/contact" variant="ghost">
                Get in touch
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTag>Available for work</SectionTag>
            <h1 className="font-sora font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.06] mt-4 text-b-ink">
              Turning bold ideas into{" "}
              <span className="text-b-accent2">exceptional</span> software.
            </h1>
            <p className="text-b-sub text-[16.5px] leading-relaxed max-w-lg mt-4">
              I'm{" "}
              <span className="text-b-accent2 font-bold">Abdullahi Nakore</span>
              , a software engineer passionate about turning ambitious ideas
              into polished digital experiences. From modern web platforms and
              mobile apps to scalable backend systems and AI-powered solutions,
              I build software that's fast, reliable, and made to create real
              impact.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-7">
              <Button href="#projects" variant="primary">
                View my work
              </Button>
              <Button to="/contact" variant="ghost">
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </div>
      {!isTerminal && !isEditorial && <WaveDivider fill="#F3F1FB" />}
      {isEditorial && (
        <div className="absolute bottom-0 left-0 right-0 border-t border-e-border" />
      )}
    </section>
  );
}
