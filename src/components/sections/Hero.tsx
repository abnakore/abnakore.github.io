import { motion } from 'framer-motion';
import { useMode } from '../../hooks/useMode';
import { useTypewriter } from '../../hooks/useTypewriter';
import Button from '../ui/Button';
import SectionTag from '../ui/SectionTag';
import WaveDivider from '../layout/WaveDivider';

export default function Hero() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const typed = useTypewriter('Abdullahi Nakore', 55, 400);

  return (
    <section id="hero" className={`relative pt-32 px-[6vw] pb-24 ${!isTerminal ? 'bg-white' : ''}`}>
      <div className="max-w-[1180px] mx-auto">
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
                <span className="text-t-accent">abdul@buk</span>:~$ whoami
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-t-text tracking-tight">
                {typed}
                <span className="inline-block w-[0.5ch] bg-t-accent animate-blink ml-0.5">&nbsp;</span>
              </h1>
              <div className="text-t-green mt-3 mb-5">&gt; full-stack developer · UI/UX designer · CS student</div>
              <p className="text-t-dim text-[14.5px] leading-relaxed max-w-xl">
                300-level Software Engineering student at Bayero University Kano. I build full-stack
                products with React, TypeScript, Django &amp; DRF — and design the screens they live in.
                Trained at NITDA&apos;s NCAIR across data science, embedded systems, and UI/UX.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {['react', 'typescript', 'django', 'python', 'figma', 'tailwind'].map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-t-accent/35 text-t-accent px-2.5 py-1.5 rounded-md hover:bg-t-accent/10 hover:-translate-y-0.5 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3.5 mt-8">
                <Button href="#projects" variant="primary">./view-projects</Button>
                <Button to="/contact" variant="ghost">$ contact --now</Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionTag>Available for work</SectionTag>
            <h1 className="font-sora font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.06] mt-4 text-b-ink">
              Building software with <span className="text-b-accent2">craft</span> &amp; clarity.
            </h1>
            <p className="text-b-sub text-[16.5px] leading-relaxed max-w-lg mt-4">
              Abdullahi Nakore — full-stack developer and UI/UX designer based in Nigeria. I like clean
              systems, tidy code, and interfaces that don&apos;t need instructions.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-7">
              <Button href="#projects" variant="primary">View my work</Button>
              <Button to="/contact" variant="ghost">Get in touch</Button>
            </div>
          </motion.div>
        )}
      </div>
      {!isTerminal && <WaveDivider fill="#F3F1FB" />}
    </section>
  );
}
