import Layout from '../components/layout/Layout';
import SectionTag from '../components/ui/SectionTag';
import WaveDivider from '../components/layout/WaveDivider';
import ProjectCard from '../components/sections/ProjectCard';
import { shippedProjects, ongoingProjects } from '../data/projects';
import { useMode } from '../hooks/useMode';

export default function ProjectsPage() {
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';

  return (
    <Layout>
      <section className={`relative px-[6vw] pt-32 pb-24 ${!isTerminal ? 'bg-white' : ''}`}>
        <div className="max-w-[1180px] mx-auto">
          <SectionTag>{isTerminal ? '$ ls -la ./projects' : 'All projects'}</SectionTag>
          <h1 className={`text-3xl md:text-5xl font-extrabold mt-3 ${isTerminal ? 'font-mono' : 'font-sora'}`}>
            Everything I&apos;ve built
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {shippedProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-16">
            <SectionTag>{isTerminal ? '$ ls ./in-progress' : 'In progress'}</SectionTag>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {ongoingProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </div>
        {!isTerminal && <WaveDivider fill="#F3F1FB" />}
      </section>
    </Layout>
  );
}
