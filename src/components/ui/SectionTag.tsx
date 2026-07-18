import type { ReactNode } from 'react';
import { useMode } from '../../hooks/useMode';

export default function SectionTag({ children }: { children: ReactNode }) {
  const { mode } = useMode();

  if (mode === 'terminal') {
    return (
      <span className="inline-block font-mono text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-md text-t-accent bg-t-accent/10 border border-t-accent/30">
        {children}
      </span>
    );
  }

  if (mode === 'editorial') {
    return (
      <span className="inline-block font-archivo font-bold text-[11px] tracking-[0.18em] uppercase text-e-accent">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-b-accent bg-b-accent/10">
      {children}
    </span>
  );
}
