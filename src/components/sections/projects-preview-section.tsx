import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import type { Locale, Project, SiteDictionary } from "@/data/types";

type ProjectsPreviewSectionProps = {
  locale: Locale;
  projects: Project[];
  dictionary: SiteDictionary;
};

export function ProjectsPreviewSection({
  locale,
  projects,
  dictionary
}: ProjectsPreviewSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            locale={locale}
            project={project}
            detailLabel={dictionary.labels.viewDetails}
          />
        ))}
      </div>

      <Link
        href={`/${locale}/projects`}
        className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text hover:bg-white/5"
      >
        {dictionary.labels.allProjects}
      </Link>
    </div>
  );
}
