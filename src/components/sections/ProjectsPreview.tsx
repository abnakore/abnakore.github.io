import { useState } from "react";
import { useMode } from "../../hooks/useMode";
import { shippedProjects, flagshipProjects } from "../../data/projects";
import SectionTag from "../ui/SectionTag";
import WaveDivider from "../layout/WaveDivider";
import ProjectCard from "./ProjectCard";
import ProjectRow from "../editorial/ProjectRow";
import FlagshipCard from "./FlagshipCard";
import Button from "../ui/Button";
import ScrollReveal, {
  ScrollRevealContainer,
  ScrollRevealItem,
} from "../ui/ScrollReveal";
import type { ProjectType } from "../../types";

const FILTERS: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Embedded", value: "embedded" },
  { label: "Game", value: "game" },
];

export default function ProjectsPreview() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const isEditorial = mode === "editorial";
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filteredProjects = shippedProjects.filter(
    (p) => (activeFilter === "all" || p.type === activeFilter) && !p.flagship,
  );

  return (
    <section
      id="projects"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? (isEditorial ? "bg-e-bg" : "bg-b-bg") : ""}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">
        <ScrollReveal variant="fadeUp">
          <SectionTag>
            {isTerminal ? "$ ls ./projects" : isEditorial ? "03" : "Latest projects"}
          </SectionTag>
          <h2
            className={`text-2xl md:text-4xl font-extrabold mt-3 ${isTerminal ? "font-mono" : isEditorial ? "font-fraunces font-semibold text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-[-0.02em]" : "font-sora"}`}
          >
            {isTerminal ? "Selected work" : isEditorial ? "Selected Work" : "Selected Work"}
          </h2>
          <p
            className={`text-sm mt-2 ${isTerminal ? "text-t-dim font-mono" : isEditorial ? "text-e-dim font-archivo" : "text-b-sub"}`}
          >
            {isTerminal
              ? "# Full case studies below, more projects further down"
              : "Full case studies below, more projects further down"}
          </p>
        </ScrollReveal>

        {/* Flagship Projects */}
        <div className="mt-10 space-y-6">
          {flagshipProjects.map((p, i) => (
            <ScrollReveal key={p.slug} variant="fadeUp" delay={i * 0.12}>
              <FlagshipCard project={p} />
            </ScrollReveal>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="mt-16 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <ScrollReveal variant="fadeUp">
              <h3
                className={`text-xl font-semibold ${isTerminal ? "font-mono" : isEditorial ? "font-fraunces text-e-text" : "font-sora"}`}
              >
                {isTerminal ? "$ ls ./more-projects" : "More Projects"}
              </h3>
            </ScrollReveal>

            {/* Filter Buttons */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="flex gap-2 flex-wrap">
                {FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`px-3.5 py-1.5 text-xs transition-all duration-300 ${
                      isTerminal
                        ? activeFilter === f.value
                          ? "bg-t-accent/15 text-t-accent border border-t-accent/40 font-mono rounded-lg"
                          : "bg-t-panel text-t-dim border border-t-border font-mono rounded-lg hover:border-t-accent/30 hover:text-t-text"
                        : isEditorial
                          ? activeFilter === f.value
                            ? "bg-e-accent text-e-bg font-archivo font-bold"
                            : "text-e-dim font-archivo font-bold hover:text-e-text"
                          : activeFilter === f.value
                            ? "bg-b-accent text-white font-semibold rounded-lg"
                            : "bg-white text-b-sub border border-b-bg font-semibold rounded-lg hover:border-b-accent/30 hover:text-b-ink"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Project Grid / List — key forces remount on filter change so scroll-reveal re-triggers */}
        {isEditorial ? (
          <div key={activeFilter}>
            {filteredProjects.length > 0 ? (
              filteredProjects.slice(0, 3).map((p, i) => (
                <ScrollReveal key={p.slug} variant="fadeUp" delay={i * 0.08}>
                  <ProjectRow project={p} index={i} />
                </ScrollReveal>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-sm text-e-dim font-archivo">No projects match this filter</p>
              </div>
            )}
          </div>
        ) : (
          <ScrollRevealContainer
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.slice(0, 3).map((p) => (
                <ScrollRevealItem key={p.slug}>
                  <ProjectCard project={p} />
                </ScrollRevealItem>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p
                  className={`text-sm ${isTerminal ? "text-t-dim font-mono" : "text-b-sub"}`}
                >
                  {isTerminal
                    ? "# No projects match this filter"
                    : "No projects match this filter"}
                </p>
              </div>
            )}
          </ScrollRevealContainer>
        )}

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-8">
            <Button to="/projects" variant="ghost">
              {isTerminal ? "$ view --all-projects" : "See all projects →"}
            </Button>
          </div>
        </ScrollReveal>
      </div>
      {!isTerminal && !isEditorial && <WaveDivider fill="#FFFFFF" />}
      {isEditorial && <div className="absolute bottom-0 left-0 right-0 border-t border-e-border" />}
    </section>
  );
}
