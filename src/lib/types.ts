export interface Profile {
  name: string;
  headline: string;
  status: string;
  bio: string[];
  resumeUrl: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    blog?: string;
  };
  skills: { category: string; items: string[] }[];
  education?: {
    title: string;
    institution: string;
    period: string;
    description: string;
  }[];
}

export type StackCategory = {
  category: string;
  items: string[];
  highlight?: boolean;
};

export type Experience = {
  company: string;
  companyDescription: string;
  period: { start: string; end: string | "Present" };
  role: string;
  achievements: string[];
};

export type ProjectDetail = {
  background: string;
  approach: string[];
  highlight?: {
    label: string;
    text: string;
  };
  results: {
    metrics: {
      value: string;
      label: string;
    }[];
    details: string[];
  };
  reflection: string;
};

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  period: { start: string; end: string };
  team: string;
  role: string;
  contributions: string[];
  stack: string[];
  links?: {
    live?: string;
    github?: string;
    notion?: string;
  };
  type: "work" | "personal";
  detail?: ProjectDetail;
};

export type AICase = {
  slug: string;
  title: string;
  summary: string;
  before: string;
  approach: string;
  after: string;
  spread?: string;
  tools: string[];
};
