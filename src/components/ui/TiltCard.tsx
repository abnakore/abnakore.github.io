import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useTilt } from '../../hooks/useTilt';

interface Props {
  children: ReactNode;
  className?: string;
}

/** Bento-mode card that tilts toward the cursor. Used only in grid mode. */
export default function TiltCard({ children, className = '' }: Props) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(8);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
