import { Link } from 'react-router-dom';
import { useMode } from '../../hooks/useMode';
import TiltCard from '../ui/TiltCard';
import type { Project } from '../../types';

export default function ProjectCard({ project }: { project: Project }) {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  if (isTerminal) {
    return (
      <div className="bg-t-panel border border-t-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-accent">
        <div className="font-mono text-t-accent text-xs mb-2.5">{project.fileName}</div>
        <h4 className="text-[16px] font-semibold mb-2">{project.title}</h4>
        <p className="text-[13px] text-t-dim leading-relaxed">{project.description}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="inline-block mt-3.5 font-mono text-xs text-t-green hover:underline"
        >
          view details →
        </Link>
      </div>
    );
  }

  return (
    <TiltCard className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(24,20,37,0.06)]">
      <div className={`h-[140px] bg-gradient-to-br ${project.gradient}`} />
      <div className="p-5">
        <h4 className="font-sora text-[16px] mb-1.5">{project.title}</h4>
        <p className="text-[13px] text-b-sub leading-relaxed">{project.description}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="inline-block mt-3.5 text-xs font-bold text-b-accent hover:underline"
        >
          View details →
        </Link>
      </div>
    </TiltCard>
  );
}
