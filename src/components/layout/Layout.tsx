import type { ReactNode } from 'react';
import { useMode } from '../../hooks/useMode';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <div
      className={`min-h-screen relative transition-colors duration-500 ${
        isTerminal ? 'bg-t-bg text-t-text font-plex' : 'bg-b-bg text-b-ink font-inter'
      }`}
    >
      {isTerminal && (
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px, #fff 3px)',
          }}
        />
      )}
      <Navbar />
      <main className="relative z-[2]">{children}</main>
      <Footer />
    </div>
  );
}
