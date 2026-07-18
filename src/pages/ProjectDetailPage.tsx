import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionTag from '../components/ui/SectionTag';
import { projects } from '../data/projects';
import { useMode } from '../hooks/useMode';
import { useTypewriter } from '../hooks/useTypewriter';
import ScrollReveal from '../components/ui/ScrollReveal';
import ImageViewer from '../components/ui/ImageViewer';

function StatusBadge({ status, isTerminal }: { status: string; isTerminal: boolean }) {
  const isShipped = status === 'shipped';
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
      isTerminal
        ? 'font-mono'
        : ''
    }`}>
      <span className={`w-2 h-2 rounded-full ${
        isShipped
          ? isTerminal ? 'bg-t-green' : 'bg-green-500'
          : isTerminal ? 'bg-t-accent' : 'bg-amber-500'
      }`} />
      <span className={
        isTerminal
          ? isShipped ? 'text-t-green' : 'text-t-accent'
          : isShipped ? 'text-green-600' : 'text-amber-600'
      }>
        {isShipped ? 'Completed' : 'In progress'}
      </span>
    </span>
  );
}

function DetailSection({ title, children, isTerminal, isEditorial = false, delay = 0 }: { title: string; children: React.ReactNode; isTerminal: boolean; isEditorial?: boolean; delay?: number }) {
  return (
    <ScrollReveal variant="fadeUp" delay={delay}>
      <div className={`${isTerminal ? 'mb-8' : 'mb-10'}`}>
        <h3 className={`${isTerminal ? 'font-mono text-t-accent' : isEditorial ? 'font-fraunces text-e-accent' : 'font-sora text-b-ink'} text-lg font-semibold mb-3 flex items-center gap-2`}>
          {isTerminal && <span className="text-t-dim">#</span>}
          {title}
        </h3>
        {children}
      </div>
    </ScrollReveal>
  );
}

function TechStackTable({ stacks, isTerminal }: { stacks: { category: string; items: string[] }[] | Record<string, string[]>; isTerminal: boolean }) {
  // Normalize to array format
  const stackArray = Array.isArray(stacks)
    ? stacks
    : Object.entries(stacks).map(([category, items]) => ({ category, items }));

  if (isTerminal) {
    return (
      <div className="space-y-3">
        {stackArray.map((s) => (
          <div key={s.category} className="group border border-t-border rounded-lg p-4 transition-all duration-300 hover:border-t-accent/30 hover:shadow-[0_0_15px_rgba(255,176,0,0.04)]">
            <div className="font-mono text-t-accent text-xs mb-2"># {s.category}</div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="font-mono text-[12px] border border-t-border bg-t-panel text-t-dim px-2.5 py-1 rounded-md transition-all duration-200 hover:border-t-accent/30 hover:text-t-text">
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
      {stackArray.map((s) => (
        <div key={s.category} className="group bg-b-bg rounded-xl p-4 border border-transparent transition-all duration-300 hover:border-b-accent/15 hover:shadow-[0_4px_20px_rgba(79,70,229,0.06)] hover:-translate-y-0.5">
          <div className="text-xs font-semibold text-b-accent mb-2 uppercase tracking-wider">{s.category}</div>
          <div className="flex flex-wrap gap-1.5">
            {s.items.map((item) => (
              <span key={item} className="text-[12px] font-medium bg-white text-b-sub px-2.5 py-1 rounded-full shadow-sm transition-all duration-200 hover:bg-b-accent/10 hover:text-b-accent">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenshotPlaceholder({ label, description, isTerminal, isEditorial = false, gradient, image, onClick }: { label: string; description: string; isTerminal: boolean; isEditorial?: boolean; gradient: string; image?: string; onClick?: () => void }) {
  return (
    <div 
      className={`group relative ${isTerminal ? 'border border-t-border rounded-xl overflow-hidden transition-all duration-300 hover:border-t-accent/30 hover:shadow-[0_0_15px_rgba(255,176,0,0.04)]' : isEditorial ? 'border border-e-border overflow-hidden' : 'rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(24,20,37,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(79,70,229,0.10)] hover:-translate-y-0.5'} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className={`aspect-video bg-gradient-to-br ${gradient} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        {image ? (
          <img src={image} alt={label} className="w-full h-full object-cover relative z-10" />
        ) : (
          <div className="text-center relative z-10">
            <svg className={`w-8 h-8 mx-auto mb-2 ${isTerminal ? 'text-t-dim/40' : isEditorial ? 'text-e-dim/40' : 'text-white/60'} group-hover:scale-110 group-hover:opacity-100 transition-all duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className={`text-xs ${isTerminal ? 'font-mono text-t-dim/60' : isEditorial ? 'font-archivo text-e-dim/60' : 'font-semibold text-white/70'}`}>
              {label}
            </span>
          </div>
        )}
        {onClick && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-20">
            <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        )}
      </div>
      <div className={`p-3 ${isTerminal ? 'bg-t-panel border-t border-t-border' : isEditorial ? 'bg-e-panel border-t border-e-border' : 'bg-white'}`}>
        <p className={`text-xs ${isTerminal ? 'text-t-dim font-mono' : isEditorial ? 'text-e-dim font-archivo' : 'text-b-sub'}`}>{description}</p>
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { mode } = useMode();
  const isTerminal = mode === 'terminal';
  const isEditorial = mode === 'editorial';
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  const hasCaseStudy = project.caseStudy !== undefined;
  const typedRole = useTypewriter(project.role ? `> ${project.role}` : '', 40, 300);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Layout>
      <section className={`relative px-[6vw] pt-28 pb-24 ${!isTerminal ? (isEditorial ? 'bg-e-bg' : 'bg-white') : ''}`}>
        <div className="max-w-[820px] mx-auto">
          {/* Back link */}
          <ScrollReveal variant="fadeUp">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold mb-6 group ${
                isTerminal ? 'font-mono text-t-accent' : isEditorial ? 'font-archivo text-e-accent' : 'text-b-accent'
              } transition-all duration-200`}
            >
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className={`${isTerminal ? 'group-hover:text-t-accent/80' : isEditorial ? 'group-hover:text-e-accent/80' : 'group-hover:text-b-accent/80'} transition-colors`}>
                {isTerminal ? '../projects' : 'Back to projects'}
              </span>
            </Link>
          </ScrollReveal>

          {/* Hero Section */}
          <ScrollReveal variant="fadeUp" delay={0.05}>
            <div className={`mb-8 ${
              isTerminal
                ? 'border border-transparent rounded-2xl p-8 md:p-10 hover:border-t-border/50 hover:shadow-[0_0_20px_rgba(255,176,0,0.03)] transition-all duration-300'
                : isEditorial
                  ? 'border border-e-border p-8 md:p-10'
                  : 'bg-b-bg rounded-2xl p-8 md:p-10'
            }`}>
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <SectionTag>
                  {isTerminal ? project.fileName : project.status === 'shipped' ? 'Shipped' : 'In progress'}
                </SectionTag>
                <StatusBadge status={project.status} isTerminal={isTerminal} />
                {project.timeline && (
                  <span className={`text-xs ${isTerminal ? 'font-mono text-t-dim' : 'font-semibold text-b-sub'}`}>
                    {project.timeline}
                  </span>
                )}
              </div>

              <h1 className={`text-3xl md:text-5xl font-extrabold mt-2 ${isTerminal ? 'font-mono' : isEditorial ? 'font-fraunces font-semibold' : 'font-sora'}`}>
                {project.title}
              </h1>

              {project.role && (
                <p className={`text-sm mt-2 min-h-[1.25rem] ${isTerminal ? 'font-mono text-t-accent/70' : isEditorial ? 'font-archivo text-e-accent' : 'text-b-accent font-semibold'}`}>
                  {isTerminal ? (
                    <span>
                      {typedRole}
                      <span className="animate-blink text-t-accent">_</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      <span className={isEditorial ? 'text-e-dim/50 font-archivo text-xs' : 'text-b-accent/50 font-mono text-xs'}>{'>'}</span>
                      {project.role}
                    </span>
                  )}
                </p>
              )}

              <p className={`mt-4 leading-relaxed ${isTerminal ? 'text-t-dim text-[14.5px]' : isEditorial ? 'text-e-dim text-[16px] font-archivo' : 'text-b-sub text-[16px]'}`}>
                {project.longDescription ?? project.description}
              </p>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((t) =>
                    isTerminal ? (
                      <span key={t} className="text-xs font-mono border border-t-accent/35 text-t-accent px-2.5 py-1.5 rounded-md transition-all duration-200 hover:bg-t-accent/10 hover:border-t-accent/60">
                        {t}
                      </span>
                    ) : isEditorial ? (
                      <span key={t} className="text-xs font-archivo border border-e-border text-e-dim px-2.5 py-1.5 transition-all duration-200 hover:border-e-accent hover:text-e-accent">
                        {t}
                      </span>
                    ) : (
                      <span key={t} className="text-xs font-semibold bg-white text-b-accent px-3 py-1.5 rounded-full shadow-sm border border-b-bg transition-all duration-200 hover:bg-b-accent hover:text-white hover:border-b-accent hover:shadow-md">
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
                    className={`text-sm font-bold inline-flex items-center gap-1 group/link ${
                      isTerminal ? 'font-mono text-t-accent' : isEditorial ? 'font-archivo text-e-accent' : 'text-b-accent'
                    } transition-all duration-200`}
                  >
                    <span>Live demo</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm inline-flex items-center gap-1 group/link ${
                      isTerminal ? 'font-mono text-t-dim hover:text-t-text' : isEditorial ? 'font-archivo text-e-dim hover:text-e-text' : 'text-b-sub hover:text-b-ink'
                    } transition-colors duration-200`}
                  >
                    <span>GitHub</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                  </a>
                )}
                {project.links?.caseStudy && (
                  <a
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm inline-flex items-center gap-1 group/link ${
                      isTerminal ? 'font-mono text-t-dim hover:text-t-text' : isEditorial ? 'font-archivo text-e-dim hover:text-e-text' : 'text-b-sub hover:text-b-ink'
                    } transition-colors duration-200`}
                  >
                    <span>Full case study</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
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
                <div className={`${isTerminal ? 'border-t border-t-border my-10' : isEditorial ? 'border-t border-e-border my-10' : 'border-t border-b-bg my-8'}`} />
              </ScrollReveal>

              {/* Problem */}
              <DetailSection title={isTerminal ? 'Problem' : 'The Problem'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.1}>
                <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-dim font-mono' : isEditorial ? 'text-e-dim font-archivo' : 'text-b-sub'}`}>
                  {project.caseStudy!.problem}
                </p>
              </DetailSection>

              {/* Approach / Role */}
              <DetailSection title={isTerminal ? 'Approach' : 'My Approach & Role'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.15}>
                <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-dim font-mono' : isEditorial ? 'text-e-dim font-archivo' : 'text-b-sub'}`}>
                  {project.caseStudy!.approach}
                </p>
              </DetailSection>

              {/* Tech Stack */}
              <DetailSection title={isTerminal ? 'Tech Stack' : 'Technology Stack'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.2}>
                <TechStackTable stacks={project.caseStudy!.techStack} isTerminal={isTerminal} />
              </DetailSection>

              {/* Key Features */}
              {project.caseStudy!.features && project.caseStudy!.features.length > 0 && (
                <DetailSection title={isTerminal ? 'Key Features' : 'Key Features'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.22}>
                  <ul className="space-y-2.5">
                    {project.caseStudy!.features.map((f, i) => (
                      <li key={i} className={`flex gap-3 text-sm leading-relaxed ${isTerminal ? 'font-mono text-t-dim' : isEditorial ? 'font-archivo text-e-dim' : 'text-b-sub'}`}>
                        <span className={`mt-0.5 shrink-0 w-1.5 h-1.5 mt-1.5 ${isTerminal ? 'bg-t-accent/50 rounded-full' : isEditorial ? 'bg-e-accent' : 'bg-b-accent rounded-full'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Design Considerations */}
              {project.caseStudy!.designConsiderations && (
                <DetailSection title={isTerminal ? 'Design Considerations' : 'Design Considerations'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.24}>
                  <div className={`p-5 transition-all duration-300 ${
                    isTerminal
                      ? 'rounded-xl bg-t-panel border border-t-border hover:border-t-accent/20 hover:shadow-[0_0_20px_rgba(255,176,0,0.04)]'
                      : isEditorial
                        ? 'border border-e-border'
                        : 'rounded-xl bg-b-bg border border-transparent hover:border-b-accent/10 hover:shadow-[0_4px_20px_rgba(79,70,229,0.06)]'
                  }`}>
                    <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-text font-mono' : isEditorial ? 'text-e-text font-archivo' : 'text-b-ink'}`}>
                      {project.caseStudy!.designConsiderations}
                    </p>
                  </div>
                </DetailSection>
              )}

              {/* Screenshots */}
              {project.caseStudy!.screenshots && project.caseStudy!.screenshots.length > 0 && (
                <DetailSection title={isTerminal ? 'Screenshots' : 'Screenshots & Demos'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.25}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.caseStudy!.screenshots.map((ss, index) => (
                      <ScreenshotPlaceholder
                        key={ss.label}
                        label={ss.label}
                        description={ss.description}
                        isTerminal={isTerminal}
                        isEditorial={isEditorial}
                        gradient={project.gradient}
                        image={ss.image}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setViewerOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </DetailSection>
              )}

              {/* Challenges */}
              {project.caseStudy!.challenges && project.caseStudy!.challenges.length > 0 && (
                <DetailSection title={isTerminal ? 'Challenges' : 'Challenges & Solutions'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.3}>
                  <ul className="space-y-3">
                    {project.caseStudy!.challenges.map((c, i) => (
                      <li key={i} className={`flex gap-3 text-sm leading-relaxed ${isTerminal ? 'font-mono text-t-dim' : isEditorial ? 'font-archivo text-e-dim' : 'text-b-sub'}`}>
                        <span className={`mt-0.5 shrink-0 w-1.5 h-1.5 mt-1.5 ${isTerminal ? 'bg-t-accent/50 rounded-full' : isEditorial ? 'bg-e-accent' : 'bg-b-accent rounded-full'}`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Outcome */}
              <DetailSection title={isTerminal ? 'Outcome' : 'Outcome & Learnings'} isTerminal={isTerminal} isEditorial={isEditorial} delay={0.35}>
                <div className={`p-5 transition-all duration-300 ${
                  isTerminal
                    ? 'rounded-xl bg-t-panel border border-t-border hover:border-t-accent/20 hover:shadow-[0_0_20px_rgba(255,176,0,0.04)]'
                    : isEditorial
                      ? 'border border-e-border'
                      : 'rounded-xl bg-b-bg border border-transparent hover:border-b-accent/10 hover:shadow-[0_4px_20px_rgba(79,70,229,0.06)]'
                }`}>
                  <p className={`text-sm leading-relaxed ${isTerminal ? 'text-t-text font-mono' : isEditorial ? 'text-e-text font-archivo' : 'text-b-ink'}`}>
                    {project.caseStudy!.outcome}
                  </p>
                </div>
              </DetailSection>
            </div>
          )}

          {/* ── For non-case-study projects (minimal details) ── */}
          {!hasCaseStudy && (
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className={`p-8 text-center transition-all duration-300 ${
                isTerminal
                  ? 'rounded-xl bg-t-panel border border-t-border hover:border-t-accent/20 hover:shadow-[0_0_20px_rgba(255,176,0,0.03)]'
                  : isEditorial
                    ? 'border border-e-border'
                    : 'rounded-xl bg-b-bg hover:shadow-[0_4px_20px_rgba(79,70,229,0.04)]'
              }`}>
                <svg className={`w-10 h-10 mx-auto mb-3 ${isTerminal ? 'text-t-dim/30' : isEditorial ? 'text-e-dim/30' : 'text-b-sub/30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p className={`text-sm ${isTerminal ? 'font-mono text-t-dim' : isEditorial ? 'font-archivo text-e-dim' : 'text-b-sub'}`}>
                  {isTerminal ? '# Case study details coming soon.' : 'Additional details coming soon.'}
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* ── CTA Section ── */}
          <ScrollReveal variant="fadeUp" delay={0.4}>
            <div className={`mt-16 pt-8 ${isTerminal ? 'border-t border-t-border' : isEditorial ? 'border-t border-e-border' : 'border-t border-b-bg'} text-center`}>
              <Link
                to="/projects"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold group ${
                  isTerminal ? 'font-mono text-t-accent' : isEditorial ? 'font-archivo text-e-accent' : 'text-b-accent'
                } transition-all duration-200`}
              >
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className={`${isTerminal ? 'group-hover:text-t-accent/80' : isEditorial ? 'group-hover:text-e-accent/80' : 'group-hover:text-b-accent/80'} transition-colors`}>
                  {isTerminal ? 'cd ../projects' : 'Back to all projects'}
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {viewerOpen && project.caseStudy!.screenshots && (
        <ImageViewer
          screenshots={project.caseStudy!.screenshots}
          currentIndex={currentImageIndex}
          onClose={() => setViewerOpen(false)}
          onNavigate={setCurrentImageIndex}
          gradient={project.gradient}
        />
      )}
    </Layout>
  );
}
