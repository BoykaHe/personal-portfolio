export type Locale = "en" | "zh";

export type ProjectStatus = "live" | "building" | "archived";

export type ReadmeSource =
  | {
      kind: "inline";
      content: string;
    }
  | {
      kind: "local-file";
      path: string;
    }
  | {
      kind: "remote-url";
      url: string;
    };

export interface SiteProfile {
  name: string;
  role: string;
  tagline: string;
  focus: string[];
  location: string;
  availability: string;
  intro: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  kind: "external" | "email";
  copyValue?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organisation: string;
  location: string;
  summary: string;
  technologies: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  order: number;
  items: string[];
}

export interface NowItem {
  id: string;
  title: string;
  description: string;
}

export interface ResumeInfo {
  summary: string;
  downloadUrl: string;
  updatedAt: string;
  contactLabel: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  weekStart: string;
  days: ContributionDay[];
}

export interface RepositoryHighlight {
  name: string;
  description: string;
  url: string;
}

export interface GitHubActivitySnapshot {
  username: string;
  rangeLabel: string;
  totalContributions: number;
  weeks: ContributionWeek[];
  palette: string[];
  repositories: RepositoryHighlight[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  timeframe: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  responsibilities: string[];
  problemSolved: string;
  cover: ProjectImage;
  screenshots: ProjectImage[];
  links: ProjectLink[];
  readmeSource: ReadmeSource;
}

export interface SiteDictionary {
  nav: {
    intro: string;
    projects: string;
    experiences: string;
    skills: string;
    now: string;
    resume: string;
  };
  labels: {
    featuredProjects: string;
    allProjects: string;
    viewDetails: string;
    githubActivity: string;
    projectOverview: string;
    readme: string;
    website: string;
    backToProjects: string;
  };
}

export interface SiteContent {
  dictionary: SiteDictionary;
  profile: SiteProfile;
  socials: SocialLink[];
  experiences: ExperienceItem[];
  skills: SkillGroup[];
  now: NowItem[];
  resume: ResumeInfo;
  githubActivity: GitHubActivitySnapshot;
}
