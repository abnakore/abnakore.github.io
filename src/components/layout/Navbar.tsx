import { Link } from 'react-router-dom';
import { useMode } from '../../hooks/useMode';
import ModeToggle from './ModeToggle';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-4 backdrop-blur-md transition-colors duration-300 ${
        isTerminal ? 'bg-t-bg/75 border-b border-t-border' : 'bg-b-bg/80 border-b border-black/5'
      }`}
    >
      <Link
        to="/"
        className={`font-extrabold text-lg tracking-tight ${isTerminal ? 'font-mono text-t-accent' : 'font-sora text-b-ink'}`}
      >
        AB.NAKORE
      </Link>

      <div className={`hidden md:flex gap-7 text-sm font-semibold ${isTerminal ? 'text-t-text' : 'text-b-ink'}`}>
        {links.map((l) => (
          <Link key={l.label} to={l.href} className="opacity-75 hover:opacity-100 transition-opacity">
            {l.label}
          </Link>
        ))}
      </div>

      <ModeToggle />
    </nav>
  );
}
