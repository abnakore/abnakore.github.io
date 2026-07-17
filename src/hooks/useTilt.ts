import { useRef, type MouseEvent } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Playful "tilt toward cursor" effect for cards.
 * Returns motion values + handlers to spread onto a framer-motion element.
 */
export function useTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [strength, -strength]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-strength, strength]), {
    stiffness: 300,
    damping: 25,
  });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
