import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionTag from '../components/ui/SectionTag';
import { projects } from '../data/projects';
import { useMode } from '../hooks/useMode';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <Layout>
      <section className={`relative px-[6vw] pt-32 pb-24 ${!isTerminal ? 'bg-white' : ''}`}>
        <div className="max-w-205 mx-auto">
          <Link
            to="/projects"
            className={`text-sm font-semibold ${isTerminal ? 'font-mono text-t-accent' : 'text-b-accent'} hover:underline`}
          >
            ← back to projects
          </Link>

          <SectionTag>
            {isTerminal ? project.fileName : project.status === 'shipped' ? 'Shipped' : 'In progress'}
          </SectionTag>

          <h1 className={`text-3xl md:text-5xl font-extrabold mt-4 ${isTerminal ? 'font-mono' : 'font-sora'}`}>
            {project.title}
          </h1>

          <p className={`mt-5 leading-relaxed ${isTerminal ? 'text-t-dim text-[14.5px]' : 'text-b-sub text-[16px]'}`}>
            {project.longDescription ?? project.description}
          </p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mt-6">
              {project.tags.map((t) =>
                isTerminal ? (
                  <span key={t} className="text-xs font-mono border border-t-accent/35 text-t-accent px-2.5 py-1.5 rounded-md">
                    {t}
                  </span>
                ) : (
                  <span key={t} className="text-xs font-semibold bg-b-bg text-b-accent px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
