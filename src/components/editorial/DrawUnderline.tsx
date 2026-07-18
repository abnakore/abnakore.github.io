import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function DrawUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        className="absolute left-0 bottom-[2px] h-[0.28em] w-full bg-e-accent -z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </span>
  );
}