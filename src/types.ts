export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  role?: string;
  period?: string;
  company?: string;
  metrics?: { label: string; value: string; detail?: string }[];
  liveUrl?: string;
  repoUrl?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  technologies: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface SecondaryProject {
  title: string;
  domain: string;
  tech: string[];
  summary: string;
}
