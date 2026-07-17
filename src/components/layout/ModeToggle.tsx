import { motion } from 'framer-motion';
import { useMode } from '../../hooks/useMode';

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
      <motion.div
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full"
        animate={{
          x: mode === 'terminal' ? 0 : '100%',
          backgroundColor: mode === 'terminal' ? '#FFB000' : '#4F46E5',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      />
      <button
        onClick={() => setMode('terminal')}
        className={`relative z-10 px-3.5 py-2 text-xs font-bold rounded-full transition-colors ${
          mode === 'terminal' ? 'text-t-bg' : 'text-gray-400'
        }`}
      >
        CLI
      </button>
      <button
        onClick={() => setMode('bento')}
        className={`relative z-10 px-3.5 py-2 text-xs font-bold rounded-full transition-colors ${
          mode === 'bento' ? 'text-white' : 'text-gray-400'
        }`}
      >
        GRID
      </button>
    </div>
  );
}
