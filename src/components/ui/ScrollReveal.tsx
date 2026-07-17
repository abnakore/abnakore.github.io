import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn";

const getTransition = (delay: number, duration: number) => ({
  duration,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
});

const getInitial = (variant: AnimationVariant) => {
  switch (variant) {
    case "fadeUp":
      return { opacity: 0, y: 32 };
    case "fadeLeft":
      return { opacity: 0, x: -40 };
    case "fadeRight":
      return { opacity: 0, x: 40 };
    case "fadeIn":
      return { opacity: 0 };
  }
};

const getAnimate = (variant: AnimationVariant) => {
  switch (variant) {
    case "fadeUp":
      return { opacity: 1, y: 0 };
    case "fadeLeft":
      return { opacity: 1, x: 0 };
    case "fadeRight":
      return { opacity: 1, x: 0 };
    case "fadeIn":
      return { opacity: 1 };
  }
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
  duration = 0.55,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(variant)}
      whileInView={getAnimate(variant)}
      viewport={{ once: true, margin: "-80px" }}
      transition={getTransition(delay, duration)}
    >
      {children}
    </motion.div>
  );
}

/**
 * For staggering multiple children inside a container.
 * Each child gets a progressively delayed animation.
 */
export function ScrollRevealContainer({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: getInitial(variant),
        visible: {
          ...getAnimate(variant),
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}