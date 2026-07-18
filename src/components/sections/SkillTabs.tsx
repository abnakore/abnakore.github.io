import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import { useMode } from '../../hooks/useMode';

export default function SkillTabs() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGroup = skillGroups[activeIndex];

  return (
    <div className="mt-2">
      {/* Tab headers */}
      <div className={`flex flex-wrap gap-1.5 mb-6 ${isTerminal ? 'font-mono' : ''}`}>
        {skillGroups.map((g, i) => (
          <button
            key={g.category}
            onClick={() => setActiveIndex(i)}
            className={`relative text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 ${
              isTerminal
                ? i === activeIndex
                  ? 'text-t-bg'
                  : 'text-t-dim hover:text-t-text'
                : i === activeIndex
                ? 'text-white'
                : 'text-b-sub hover:text-b-ink'
            }`}
          >
            {i === activeIndex && (
              <motion.span
                layoutId="skillTabBg"
                className={`absolute inset-0 rounded-lg ${
                  isTerminal ? 'bg-t-accent' : 'bg-b-ink'
                }`}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{g.category}</span>
          </button>
        ))}
      </div>

      {/* Skill bars */}
      <motion.div
        key={activeGroup.category}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {activeGroup.items.map((s, i) => (
          <div key={s.label} className="mb-4">
            <div className={`flex justify-between text-sm mb-1.5 ${isTerminal ? 'font-mono' : 'font-semibold'}`}>
              <span>{s.label}</span>
              <span className={isTerminal ? 'text-t-accent' : 'text-b-accent'}>{s.value}%</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${isTerminal ? 'bg-[#1E1D14]' : 'bg-[#EEEBFA]'}`}>
              <motion.div
                className={`h-full rounded-full ${
                  isTerminal
                    ? 'bg-gradient-to-r from-t-accent to-[#FFD166]'
                    : 'bg-gradient-to-r from-b-accent to-b-accent2'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${s.value}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}