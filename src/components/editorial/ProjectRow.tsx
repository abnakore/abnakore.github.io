import { Link } from 'react-router-dom';
import type { Project } from '../../types';

export default function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border-t border-e-border py-7 transition-[padding] duration-300 hover:pl-4"
    >
      <div className="font-fraunces text-e-accent text-sm mb-2">{String(index + 1).padStart(2, '0')}</div>
      <h4 className="font-fraunces font-semibold text-2xl md:text-3xl text-e-text group-hover:text-e-accent transition-colors duration-300">
        {project.title}
      </h4>
      <p className="font-archivo text-e-dim text-sm mt-1.5 max-w-xl">{project.description}</p>
    </Link>
  );
}