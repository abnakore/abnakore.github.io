import type { ReactNode, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../../hooks/useMode';

interface Props {
  to?: string;
  href?: string;
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
}

export default function Button({ to, href, variant = 'primary', children, onClick, type = 'button' }: Props) {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  const base = `inline-block font-bold text-sm px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 ${
    isTerminal ? 'font-mono rounded-lg' : 'rounded-xl'
  }`;

  const styles = isTerminal
    ? variant === 'primary'
      ? 'bg-t-accent text-t-bg hover:shadow-lg hover:shadow-t-accent/30'
      : 'border border-t-border text-t-text hover:border-t-accent hover:text-t-accent'
    : variant === 'primary'
    ? 'bg-b-ink text-white hover:shadow-xl hover:shadow-b-ink/25'
    : 'border-[1.5px] border-black/15 text-b-ink hover:bg-white';

  const cls = `${base} ${styles}`;

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
