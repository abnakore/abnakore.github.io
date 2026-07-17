import { useMode } from '../../hooks/useMode';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <footer
      className={`relative z-10 flex flex-col md:flex-row gap-4 items-center justify-between px-[6vw] py-8 text-sm ${
        isTerminal ? 'bg-black text-t-dim font-mono border-t border-t-border' : 'bg-white text-b-sub'
      }`}
    >
      <span>© {new Date().getFullYear()} Abdullahi Nakore — {isTerminal ? 'CLI mode' : 'Grid mode'}</span>
      <SocialLinks />
      <a href="#hero" className="hover:opacity-70 transition-opacity">↑ top</a>
    </footer>
  );
}
