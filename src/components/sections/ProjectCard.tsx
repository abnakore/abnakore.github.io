import { Link } from 'react-router-dom';
import { useMode } from '../../hooks/useMode';
import TiltCard from '../ui/TiltCard';
import type { Project } from '../../types';

import ProjectRow from "../editorial/ProjectRow";

export default function ProjectCard({ project }: { project: Project }) {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const isEditorial = mode === 'editorial';

  if (isEditorial) {
    return <ProjectRow project={project} index={0} />;
  }

  if (isTerminal) {
    return (
      <div className="group bg-t-panel border border-t-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-t-accent/60 hover:shadow-[0_0_20px_rgba(255,176,0,0.05)]">
        <div className="flex items-center justify-between mb-3">
          <div className="font-mono text-t-accent text-xs">{project.fileName}</div>
          {project.type && (
            <span className="font-mono text-[10px] text-t-dim border border-t-border rounded px-1.5 py-0.5 uppercase tracking-wider">
              {project.type}
            </span>
          )}
        </div>
        <h4 className="text-[16px] font-semibold mb-2 text-t-text group-hover:text-t-accent transition-colors duration-300">{project.title}</h4>
        <p className="text-[13px] text-t-dim leading-relaxed mb-3">{project.description}</p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-[10px] text-t-dim/70 border border-t-border/50 px-1.5 py-0.5 rounded">
                {t}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="font-mono text-[10px] text-t-dim/50">+{project.tags.length - 3}</span>
            )}
          </div>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="inline-block mt-1 font-mono text-xs text-t-green group-hover:text-t-accent transition-colors duration-300"
        >
          view details →
        </Link>
      </div>
    );
  }

  return (
    <TiltCard className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(24,20,37,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(79,70,229,0.10)]">
      <div className={`h-[140px] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute bottom-3 left-3">
          {project.type && (
            <span className="text-[10px] font-semibold text-white/80 bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase tracking-wider">
              {project.type}
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-sora text-[16px] mb-1.5 text-b-ink group-hover:text-b-accent transition-colors duration-300">{project.title}</h4>
        <p className="text-[13px] text-b-sub leading-relaxed mb-3">{project.description}</p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-semibold bg-b-bg text-b-accent/80 px-2 py-0.5 rounded-full">
                {t}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[10px] text-b-sub/50 font-semibold">+{project.tags.length - 3}</span>
            )}
          </div>
        )}
        <Link
          to={`/projects/${project.slug}`}
          className="inline-block mt-1 text-xs font-bold text-b-accent group-hover:text-b-accent2 transition-colors duration-300"
        >
          View details →
        </Link>
      </div>
    </TiltCard>
  );
}
