import { createContext, useState, type ReactNode } from 'react';
import type { Mode } from '../types';

interface ModeContextType {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
}

export const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('terminal');

  const toggleMode = () =>
    setMode((prev) => {
      if (prev === 'terminal') return 'bento';
      if (prev === 'bento') return 'editorial';
      return 'terminal';
    });

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
