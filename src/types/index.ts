export type Mode = "terminal" | "bento" | "editorial";

export type ProjectType =
  | "web"
  | "mobile"
  | "desktop"
  | "design"
  | "embedded"
  | "game"
  | "ai"
  | "web3"
  | "other";

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  techStack: { category: string; items: string[] }[] | Record<string, string[]>;
  outcome: string;
  challenges?: string[];
  features?: string[];
  designConsiderations?: string;
  screenshots?: { label: string; description: string; image?: string }[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  fileName: string;
  status: "shipped" | "in-progress";
  links?: { live?: string; github?: string; caseStudy?: string };
  gradient: string;
  flagship?: boolean;
  type?: ProjectType;
  caseStudy?: ProjectCaseStudy;
  role?: string;
  timeline?: string;
  thumbnail?: string;
}

export interface SkillGroup {
  category: string;
  items: { label: string; value: number }[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JourneyItem {
  id: string;
  type: "education" | "work" | "milestone" | "training";
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isActive: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "mail" | "x" | "scratch";
}
