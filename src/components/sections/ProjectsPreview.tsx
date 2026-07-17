import { useMode } from "../../hooks/useMode";
import { shippedProjects } from "../../data/projects";
import SectionTag from "../ui/SectionTag";
import WaveDivider from "../layout/WaveDivider";
import ProjectCard from "./ProjectCard";
import Button from "../ui/Button";
import ScrollReveal, {
  ScrollRevealContainer,
  ScrollRevealItem,
} from "../ui/ScrollReveal";

export default function ProjectsPreview() {
  const { mode } = useMode();
  const isTerminal = mode === "terminal";

  return (
    <section
      id="projects"
      className={`relative min-h-screen flex items-center px-[6vw] py-24 md:py-28 ${!isTerminal ? "bg-b-bg" : ""}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">
        <ScrollReveal variant="fadeUp">
          <SectionTag>
            {isTerminal ? "$ ls ./projects" : "Latest projects"}
          </SectionTag>
          <h2
            className={`text-2xl md:text-4xl font-extrabold mt-3 ${isTerminal ? "font-mono" : "font-sora"}`}
          >
            {isTerminal ? "Latest work" : "Things I've shipped"}
          </h2>
        </ScrollReveal>

        <ScrollRevealContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
          staggerDelay={0.1}
        >
          {shippedProjects.slice(0, 3).map((p) => (
            <ScrollRevealItem key={p.slug}>
              <ProjectCard project={p} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-8">
            <Button to="/projects" variant="ghost">
              {isTerminal ? "$ view --all-projects" : "See all projects →"}
            </Button>
          </div>
        </ScrollReveal>
      </div>
      {!isTerminal && <WaveDivider fill="#FFFFFF" />}
    </section>
  );
}