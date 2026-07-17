export type Mode = 'terminal' | 'bento';

export type ProjectType = 'web' | 'mobile' | 'desktop' | 'design' | 'other';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  fileName: string;
  status: 'shipped' | 'in-progress';
  links?: { live?: string; github?: string; caseStudy?: string };
  gradient: string;
  flagship?: boolean;
  type?: ProjectType;
}

export interface SkillGroup {
  category: string;
  items: { label: string; value: number }[];
}

export interface Service {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'mail';
}