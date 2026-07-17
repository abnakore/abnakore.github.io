import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { useMode } from '../../hooks/useMode';

export default function SkillBars() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <div className="mt-2">
      {skills.map((s, i) => (
        <div key={s.label} className="mb-4">
          <div className={`flex justify-between text-sm mb-1.5 ${isTerminal ? 'font-mono' : 'font-semibold'}`}>
            <span>{s.label}</span>
            <span className={isTerminal ? 'text-t-accent' : 'text-b-accent'}>{s.value}%</span>
          </div>
          <div className={`h-2 rounded-full overflow-hidden ${isTerminal ? 'bg-[#1E1D14]' : 'bg-[#EEEBFA]'}`}>
            <motion.div
              className={`h-full rounded-full ${
                isTerminal ? 'bg-gradient-to-r from-t-accent to-[#FFD166]' : 'bg-gradient-to-r from-b-accent to-b-accent2'
              }`}
              initial={{ width: 0 }}
              whileInView={{ width: `${s.value}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
