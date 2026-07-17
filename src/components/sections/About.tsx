import { useMode } from '../../hooks/useMode';
import SectionTag from '../ui/SectionTag';
import WaveDivider from '../layout/WaveDivider';
import TiltCard from '../ui/TiltCard';
import SkillBars from './SkillBars';

export default function About() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <section id="about" className={`relative px-[6vw] py-24 md:py-28 ${!isTerminal ? 'bg-b-bg' : ''}`}>
      <div className="max-w-[1180px] mx-auto">
        {isTerminal ? (
          <div>
            <SectionTag>$ cat about.md</SectionTag>
            <h2 className="font-mono text-2xl md:text-4xl font-extrabold mt-3">A bit about me</h2>
            <p className="text-t-dim text-[14.5px] leading-relaxed max-w-2xl mt-4">
              I&apos;m a versatile developer with experience across web, mobile and embedded platforms.
              I care about clean architecture as much as clean UI — whether that&apos;s a Django API or a
              Figma file.
            </p>
            <div id="skills" className="max-w-xl mt-8">
              <SkillBars />
            </div>
          </div>
        ) : (
          <div>
            <SectionTag>About me</SectionTag>
            <h2 className="font-sora text-2xl md:text-4xl font-extrabold mt-3">
              Hi, I&apos;m here to help your next project
            </h2>
            <div id="skills" className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              <TiltCard className="md:col-span-3 md:row-span-2 bg-b-ink text-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(24,20,37,0.06)]">
                <h3 className="font-sora text-lg mb-2">What I do</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Full-stack web apps, dashboards and design systems — from Figma to production code.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Django', 'DRF', 'Figma'].map((t) => (
                    <span key={t} className="text-xs bg-white/10 text-white px-2.5 py-1.5 rounded-full font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>

              <TiltCard className="md:col-span-3 bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(24,20,37,0.06)]">
                <h3 className="font-sora text-lg mb-2">Skill focus</h3>
                <SkillBars />
              </TiltCard>

              <TiltCard className="md:col-span-3 bg-gradient-to-br from-b-accent to-purple-500 text-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(24,20,37,0.06)] flex flex-col justify-center">
                <div className="font-sora font-extrabold text-4xl">300L</div>
                <p className="text-sm text-white/80 mt-2">Software Engineering, Bayero University Kano</p>
              </TiltCard>
            </div>
          </div>
        )}
      </div>
      {!isTerminal && <WaveDivider fill="#FFFFFF" />}
    </section>
  );
}
