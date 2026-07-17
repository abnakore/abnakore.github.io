import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionTag from '../components/ui/SectionTag';
import { projects } from '../data/projects';
import { useMode } from '../hooks/useMode';
import ScrollReveal from '../components/ui/ScrollReveal';

function DetailSection({ title, children, isTerminal, delay = 0 }: { title: string; children: React.ReactNode; isTerminal: boolean; delay?: number }) {
  return (
    <ScrollReveal variant="fadeUp" delay={delay}>
      <div className={`${isTerminal ? 'mb-8' : 'mb-10'}`}>
        <h3 className={`${isTerminal ? 'font-mono text-t-accent' : 'font-sora text-b-ink'} text-lg font-semibold mb-3 flex items-center gap-2`}>
          {isTerminal && <span className="text-t-dim">#</span>}
          {title}
        </h3>
        {children}
      </div>
    </ScrollReveal>
  );
}

function TechStackTable({ stacks, isTerminal }: { stacks: { category: string; items: string[] }[]; isTerminal: boolean }) {
  if (isTerminal) {
    return (
      <div className="space-y-3">
        {stacks.map((s) => (
          <div key={s.category} className="border border-t-border rounded-lg p-4">
            <div className="font-mono text-t-accent text-xs mb-2"># {s.category}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="font-mono text-[12px] border border-t-border bg-t-panel text-t-dim px-2.5 py-1 rounded-md">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stacks.map((s) => (
        <div key={s.category} className="bg-b-bg rounded-xl p-4 border border-transparent hover:border-b-accent/10 transition-colors duration-300">
          <div className="text-xs font-semibold text-b-accent mb-2 uppercase tracking-wider">{s.category}</div>
          <div className="flex flex-wrap gap-1.5">
            {s.items.map((item) => (
              <span key={item} className="text-[12px] font-medium bg-white text-b-sub px-2.5 py-1 rounded-full shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenshotPlaceholder({ label, description, isTerminal, gradient }: { label: string; description: string; isTerminal: boolean; gradient: string }) {
  return (
    <div className={`group relative ${isTerminal ? 'border border-t-border rounded-xl overflow-hidden' : 'rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(24,20,37,0.06)]'}`}>
      <div className={`aspect-video bg-gradient-to-br ${gradient} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="text-center relative z-10">
          <svg className={`w-8 h-8 mx-auto mb-2 ${isTerminal ? 'text-t-dim/40' : 'text-white/60'} group-hover:scale-110 transition-transform duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className={`text-xs ${isTerminal ? 'font-mono text-t-dim/60' : 'font-semibold text-white/70'}`}>
            {label}
          </span>
        </div>
      </div>
      <div className={`p-3 ${isTerminal ? 'bg-t-panel border-t border-t-border' : 'bg-white'}`}>
        <p className={`text-xs ${isTerminal ? 'text-t-dim font-mono' : 'text-b-sub'}`}>{description}</p>
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  const hasCaseStudy = project.caseStudy !== undefined;

  return (
    <Layout>
      <section className={`relative px-[6vw] pt-28 pb-24 ${!isTerminal ? 'bg-white' : ''}`}>
        <div className="max-w-[820px] mx-auto">
          {/* Back link */}
          <ScrollReveal variant="fadeUp">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-1 text-sm font-semibold mb-6 ${
                isTerminal ? 'font-mono text-t-accent hover:text-t-accent/80' : 'text-b-accent hover:text-b-accent/80'
              } transition-colors duration-200`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isTerminal ? '../projects' : 'Back to projects'}
            </Link>
          </ScrollReveal>

          {/* Hero Section */}
          <ScrollReveal variant="fadeUp" delay={0.05}>
            <div className={`mb-8 ${isTerminal ? '' : 'bg-b-bg rounded-2xl p-8 md:p-10'}`}>
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <SectionTag>
                  {isTerminal ? project.fileName : project.status === 'shipped' ? 'Shipped' : 'In progress'}
                </SectionTag>
                {project.timeline && (
                  <span className={`text-xs ${isTerminal ? 'font-mono text-t-dim' : 'font-semibold text-b-sub'}`}>
                    {project.timeline}
                  </span>
                )}
              </div>

              <h1 className={`text-3xl md:text-5xl font-extrabold mt-2 ${isTerminal ? 'font-mono' : 'font-sora'}`}>
                {project.title}
              </h1>

              {project.role && (
                <p className={`text-sm mt-2 ${isTerminal ? 'font-mono text-t-accent/70' : 'text-b-accent font-semibold'}`}>
                  {project.role}
                </p>
              )}

              <p className={`mt-4 leading-relaxed ${isTerminal ? 'text-t-dim text-[14.5px]' : 'text-b-sub text-[16px]'}`}>
                {project.longDescription ?? project.description}
              </p>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((t) =>
                    isTerminal ? (
                      <span key={t} className="text-xs font-mono border border-t-accent/35 text-t-accent px-2.5 py-1.5 rounded-md">
                        {t}
                      </span>
                    ) : (
                      <span key={t} className="text-xs font-semibold bg-white text-b-accent px-3 py-1.5 rounded-full shadow-sm border border-b-bg">
                        {t}
                      </span>
                    )
                  )}
                </div>
              )}

              {/* Action Links */}
              <div className="flex gap-4 flex-wrap mt-6">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold ${isTerminal ? 'font-mono text-t-accent hover:underline' : 'text-b-accent hover:underline'} transition-all`}
                  >
                    Live demo →
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${isTerminal ? 'font-mono text-t-dim hover:text-t-text' : 'text-b-sub hover:text-b-ink'} transition-colors`}
                  >
                    GitHub →
                  </a>
                )}
                {project.links?.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${isTerminal ? 'font-mono text-t-dim hover:text-t-text' : 'text-b-sub hover:text-b-ink'} transition-colors`}
                  >
                    Full case study →
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Case Study Sections ── */}
          {hasCaseStudy && (
            <div className={`mt-6 ${isTerminal ? '' : 'space-y-4'}`}>
              {/* Divider */}
              <ScrollReveal variant="fadeUp">
                <div className={`${isTerminal ? 'border-t border-t-border my-10' : 'border-t border-b-bg my-8'}`} />
              </ScrollReveal>

              {/* Problem */}
              <DetailSection title={isTerminal ? 'Problem' : 'The Problem'} isTerminal={isTerminal} delay={0.1}>
                <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-dim font-mono' : 'text-b-sub'}`}>
                  {project.caseStudy!.problem}
                </p>
              </DetailSection>

              {/* Approach / Role */}
              <DetailSection title={isTerminal ? 'Approach' : 'My Approach & Role'} isTerminal={isTerminal} delay={0.15}>
                <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-dim font-mono' : 'text-b-sub'}`}>
                  {project.caseStudy!.approach}
                </p>
              </DetailSection>

              {/* Tech Stack */}
              <DetailSection title={isTerminal ? 'Tech Stack' : 'Technology Stack'} isTerminal={isTerminal} delay={0.2}>
                <TechStackTable stacks={project.caseStudy!.techStack} isTerminal={isTerminal} />
              </DetailSection>

              {/* Screenshots */}
              {project.caseStudy!.screenshots && project.caseStudy!.screenshots.length > 0 && (
                <DetailSection title={isTerminal ? 'Screenshots' : 'Screenshots & Demos'} isTerminal={isTerminal} delay={0.25}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.caseStudy!.screenshots.map((ss, i) => (
                      <ScreenshotPlaceholder
                        key={ss.label}
                        label={ss.label}
                        description={ss.description}
                        isTerminal={isTerminal}
                        gradient={project.gradient}
                      />
                    ))}
                  </div>
                </DetailSection>
              )}

              {/* Challenges */}
              {project.caseStudy!.challenges && project.caseStudy!.challenges.length > 0 && (
                <DetailSection title={isTerminal ? 'Challenges' : 'Challenges & Solutions'} isTerminal={isTerminal} delay={0.3}>
                  <ul className={`space-y-3 ${isTerminal ? '' : ''}`}>
                    {project.caseStudy!.challenges.map((c, i) => (
                      <li key={i} className={`flex gap-3 text-sm leading-relaxed ${isTerminal ? 'font-mono text-t-dim' : 'text-b-sub'}`}>
                        <span className={`mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${isTerminal ? 'bg-t-accent/50' : 'bg-b-accent'}`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Outcome */}
              <DetailSection title={isTerminal ? 'Outcome' : 'Outcome & Learnings'} isTerminal={isTerminal} delay={0.35}>
                <div className={`p-5 rounded-xl ${isTerminal ? 'bg-t-panel border border-t-border' : 'bg-b-bg border border-transparent'}`}>
                  <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-text font-mono' : 'text-b-ink'}`}>
                    {project.caseStudy!.outcome}
                  </p>
                </div>
              </DetailSection>
            </div>
          )}

          {/* ── For non-case-study projects (minimal details) ── */}
          {!hasCaseStudy && (
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className={`p-6 rounded-xl text-center ${isTerminal ? 'bg-t-panel border border-t-border' : 'bg-b-bg'}`}>
                <p className={`text-sm ${isTerminal ? 'font-mono text-t-dim' : 'text-b-sub'}`}>
                  {isTerminal ? '# Case study details coming soon.' : 'Additional details coming soon.'}
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* ── CTA Section ── */}
          <ScrollReveal variant="fadeUp" delay={0.4}>
            <div className={`mt-16 pt-8 ${isTerminal ? 'border-t border-t-border' : 'border-t border-b-bg'} text-center`}>
              <Link
                to="/projects"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  isTerminal ? 'font-mono text-t-accent hover:text-t-accent/80' : 'text-b-accent hover:text-b-accent/80'
                } transition-colors duration-200`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {isTerminal ? 'cd ../projects' : 'Back to all projects'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}