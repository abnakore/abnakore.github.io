import { useState } from "react";
import Layout from "../components/layout/Layout";
import SectionTag from "../components/ui/SectionTag";
import ProjectCard from "../components/sections/ProjectCard";
import FlagshipCard from "../components/sections/FlagshipCard";
import {
  shippedProjects,
  ongoingProjects,
  flagshipProjects,
} from "../data/projects";
import { useMode } from "../hooks/useMode";
import ScrollReveal, {
  ScrollRevealContainer,
  ScrollRevealItem,
} from "../components/ui/ScrollReveal";
import type { ProjectType } from "../types";

const FILTERS: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Embedded", value: "embedded" },
  { label: "Game", value: "game" },
];

export default function ProjectsPage() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filteredProjects = shippedProjects.filter(
    (p) => (activeFilter === "all" || p.type === activeFilter) && !p.flagship,
  );

  return (
    <Layout>
      <section
        className={`relative px-[6vw] pt-32 pb-24 ${!isTerminal ? "bg-white" : ""}`}
      >
        <div className="max-w-[1180px] mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionTag>
              {isTerminal ? "$ ls -la ./projects" : "All projects"}
            </SectionTag>
            <h1
              className={`text-3xl md:text-5xl font-extrabold mt-3 ${isTerminal ? "font-mono" : "font-sora"}`}
            >
              Everything I've built
            </h1>
            <p
              className={`text-sm mt-2 ${isTerminal ? "text-t-dim font-mono" : "text-b-sub"}`}
            >
              {isTerminal
                ? "# Flagship case studies, then all projects"
                : "Flagship case studies, then all projects"}
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

          {/* All Shipped Projects with Filter */}
          <div className="mt-16 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ScrollReveal variant="fadeUp">
                <h2
                  className={`text-xl font-semibold ${isTerminal ? "font-mono" : "font-sora"}`}
                >
                  {isTerminal ? "$ ls ./shipped" : "All Shipped Projects"}
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div className="flex gap-2 flex-wrap">
                  {FILTERS.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setActiveFilter(f.value)}
                      className={`px-3.5 py-1.5 text-xs rounded-lg transition-all duration-300 ${
                        isTerminal
                          ? activeFilter === f.value
                            ? "bg-t-accent/15 text-t-accent border border-t-accent/40 font-mono"
                            : "bg-t-panel text-t-dim border border-t-border font-mono hover:border-t-accent/30 hover:text-t-text"
                          : activeFilter === f.value
                            ? "bg-b-accent text-white font-semibold"
                            : "bg-b-bg text-b-sub border border-b-bg font-semibold hover:border-b-accent/30 hover:text-b-ink"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Project Grid — key forces remount on filter change so scroll-reveal re-triggers */}
          <ScrollRevealContainer
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((p) => (
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

          {/* In Progress Projects */}
          {ongoingProjects.length > 0 && (
            <div className="mt-16">
              <ScrollReveal variant="fadeUp">
                <SectionTag>
                  {isTerminal ? "$ ls ./in-progress" : "In progress"}
                </SectionTag>
              </ScrollReveal>
              <ScrollRevealContainer
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6"
                staggerDelay={0.08}
              >
                {ongoingProjects.map((p) => (
                  <ScrollRevealItem key={p.slug}>
                    <ProjectCard project={p} />
                  </ScrollRevealItem>
                ))}
              </ScrollRevealContainer>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
