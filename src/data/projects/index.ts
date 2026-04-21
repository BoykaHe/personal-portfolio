import { projectsEn } from "@/data/projects/en";
import { projectsZh } from "@/data/projects/zh";
import type { Locale, Project } from "@/data/types";

const projectMap: Record<Locale, Project[]> = {
  en: projectsEn,
  zh: projectsZh
};

export function getProjects(locale: Locale): Project[] {
  return projectMap[locale];
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((project) => project.featured);
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}
