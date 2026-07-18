import { Link } from "react-router-dom";
import { useMode } from "../../hooks/useMode";
import type { Project } from "../../types";

export default function FlagshipCard({ project }: { project: Project }) {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";

  if (isEditorial) {
    return (
      <div className="group relative border-t border-e-border py-8 md:py-10 grid md:grid-cols-2 gap-8 items-center transition-all duration-300 hover:pl-4">
        <div>
          <div className="font-fraunces text-e-accent text-sm mb-3 tracking-wider uppercase">
            {project.type === "web" ? "Web App" : project.type === "design" ? "UI/UX Design" : "Project"} · Flagship
          </div>
          <h3 className="font-fraunces font-semibold text-[clamp(28px,4vw,48px)] leading-[1.06] tracking-[-0.02em] text-e-text group-hover:text-e-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-archivo text-[14px] text-e-dim leading-relaxed mt-3 mb-5">
            {project.longDescription ?? project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span key={t} className="font-archivo text-[11px] text-e-dim/70 border border-e-border px-2.5 py-1 transition-all duration-300">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm flex-wrap">
            {project.links?.live && (
              <a href={project.links.live} className="font-archivo text-xs text-e-accent hover:text-e-accent/80 transition-colors" target="_blank" rel="noopener noreferrer">Live demo →</a>
            )}
            {project.links?.github && (
              <a href={project.links.github} className="font-archivo text-xs text-e-dim hover:text-e-text transition-colors" target="_blank" rel="noopener noreferrer">GitHub →</a>
            )}
            {project.links?.caseStudy && (
              <a href={project.links.caseStudy} className="font-archivo text-xs text-e-dim hover:text-e-text transition-colors" target="_blank" rel="noopener noreferrer">Case study →</a>
            )}
            <Link to={`/projects/${project.slug}`} className="font-archivo text-xs text-e-accent hover:underline transition-all">Details →</Link>
          </div>
        </div>
        <div className="aspect-video overflow-hidden relative border border-e-border">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-e-panel flex items-center justify-center text-e-dim text-sm">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-archivo text-[11px] opacity-60">[ screenshot ]</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isTerminal) {
    return (
      <div className="group relative rounded-2xl border border-t-border bg-t-panel p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center transition-all duration-500 hover:border-t-accent/60 hover:shadow-[0_0_30px_rgba(255,176,0,0.06)] hover:-translate-y-0.5">
        {/* Terminal decorative corner */}
        <div className="absolute top-3 left-4 flex gap-1.5 opacity-40">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>

        <div className="pt-4">
          <p className="font-mono text-[11px] text-t-accent/70 mb-3 tracking-wider uppercase">
            {project.type === "web"
              ? "Web App"
              : project.type === "design"
                ? "UI/UX Design"
                : "Project"}{" "}
            · Flagship
          </p>
          <h3 className="font-mono text-2xl font-semibold mb-3 text-t-text group-hover:text-t-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[14px] text-t-dim leading-relaxed mb-5">
            {project.longDescription ?? project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] border border-t-border text-t-dim px-2.5 py-1 rounded-md group-hover:border-t-accent/30 group-hover:text-t-text transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm flex-wrap">
            {project.links?.live && (
              <a
                href={project.links.live}
                className="font-mono text-xs text-t-accent hover:underline hover:brightness-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo →
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                className="font-mono text-xs text-t-dim hover:text-t-text transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            )}
            {project.links?.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="font-mono text-xs text-t-dim hover:text-t-text transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case study →
              </a>
            )}
            <Link
              to={`/projects/${project.slug}`}
              className="font-mono text-xs text-t-green hover:underline hover:brightness-110 transition-all"
            >
              Details →
            </Link>
          </div>
        </div>

        <div className="aspect-video rounded-xl overflow-hidden relative border border-t-border/50 group-hover:border-t-accent/20 group-hover:shadow-[inset_0_0_20px_rgba(255,176,0,0.04)] transition-all duration-500">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="aspect-video rounded-xl bg-gradient-to-br from-t-border/40 to-t-panel border border-t-border/50 flex items-center justify-center text-t-dim text-sm group-hover:border-t-accent/20 group-hover:shadow-[inset_0_0_20px_rgba(255,176,0,0.04)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-t-border/40 to-t-panel" />
              <div className="absolute inset-0 bg-gradient-to-br from-t-accent/0 via-t-accent/0 to-t-accent/[0.02] group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
              <div className="text-center relative z-10">
                <svg
                  className="w-10 h-10 mx-auto mb-2 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-mono text-[11px] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  [ screenshot ]
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-2xl bg-white p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center shadow-[0_8px_30px_rgba(24,20,37,0.06)] border border-transparent transition-all duration-500 hover:shadow-[0_12px_40px_rgba(79,70,229,0.10)] hover:border-b-accent/10 hover:-translate-y-0.5">
      <div>
        <p className="text-[11px] font-semibold text-b-accent/70 mb-3 tracking-wider uppercase">
          {project.type === "web"
            ? "Web App"
            : project.type === "design"
              ? "UI/UX Design"
              : "Project"}{" "}
          · Flagship
        </p>
        <h3 className="font-sora text-2xl font-semibold mb-3 text-b-ink group-hover:text-b-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[14.5px] text-b-sub leading-relaxed mb-5">
          {project.longDescription ?? project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold bg-b-bg text-b-accent px-3 py-1.5 rounded-full group-hover:bg-b-accent/10 group-hover:scale-105 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm flex-wrap">
          {project.links?.live && (
            <a
              href={project.links.live}
              className="text-[13px] font-bold text-b-accent hover:underline hover:brightness-110 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo →
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              className="text-[13px] text-b-sub hover:text-b-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
          {project.links?.caseStudy && (
            <a
              href={project.links.caseStudy}
              className="text-[13px] text-b-sub hover:text-b-ink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Case study →
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="text-[13px] font-bold text-b-accent2 hover:underline hover:brightness-110 transition-all"
          >
            Details →
          </Link>
        </div>
      </div>

      <div
        className={`aspect-video rounded-xl overflow-hidden relative shadow-inner group-hover:scale-[1.02] group-hover:shadow-lg transition-all duration-500`}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white/60 text-sm`}
          >
            <div className="text-center">
              <svg
                className="w-10 h-10 mx-auto mb-2 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[11px] font-semibold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                [ screenshot ]
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
