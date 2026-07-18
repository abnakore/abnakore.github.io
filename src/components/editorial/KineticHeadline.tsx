import { motion } from 'framer-motion';

interface Props {
  text: string;
  emphasize?: string[];
  className?: string;
  once?: boolean;
}

export default function KineticHeadline({ text, emphasize = [], className = '', once = true }: Props) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => {
        const isEmphasized = emphasize.includes(word.replace(/[.,!?]/g, ''));
        return (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.8 }}
            transition={{ duration: 0.7, delay: i * 0.055, ease: [0.2, 0.8, 0.2, 1] }}
            className={`inline-block mr-[0.28em] ${isEmphasized ? 'italic text-e-accent' : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}