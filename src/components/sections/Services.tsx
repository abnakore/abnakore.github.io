import { useMode } from '../../hooks/useMode';
import { services } from '../../data/services';
import SectionTag from '../ui/SectionTag';
import WaveDivider from '../layout/WaveDivider';
import TiltCard from '../ui/TiltCard';

export default function Services() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <section id="services" className={`relative px-[6vw] py-24 md:py-28 ${!isTerminal ? 'bg-white' : ''}`}>
      <div className="max-w-[1180px] mx-auto">
        <SectionTag>{isTerminal ? '$ services --list' : 'My services'}</SectionTag>
        <h2 className={`text-2xl md:text-4xl font-extrabold mt-3 ${isTerminal ? 'font-mono' : 'font-sora'}`}>
          {isTerminal ? 'What I can build' : 'Where I add value'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {services.map((s, i) =>
            isTerminal ? (
              <div
                key={s.title}
                className="bg-t-panel border border-t-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-accent"
              >
                <div className="font-mono text-t-accent text-xs mb-2.5">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="text-[15px] font-semibold mb-1.5">{s.title}</h4>
                <p className="text-[12.5px] text-t-dim leading-relaxed">{s.description}</p>
              </div>
            ) : (
              <TiltCard key={s.title} className="bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(24,20,37,0.05)]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-b-accent to-b-accent2 mb-3.5" />
                <h4 className="font-sora text-[15.5px] mb-1.5">{s.title}</h4>
                <p className="text-[13px] text-b-sub leading-relaxed">{s.description}</p>
              </TiltCard>
            )
          )}
        </div>
      </div>
      {!isTerminal && <WaveDivider fill="#F3F1FB" />}
    </section>
  );
}
