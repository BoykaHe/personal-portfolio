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
  const [featuredProject, ...secondaryProjects] = projects;
  const secondarySummaries = secondaryProjects.slice(0, 2);

  return (
    <div className="space-y-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)]">
        {featuredProject ? (
          <ProjectCard
            locale={locale}
            project={featuredProject}
            detailLabel={dictionary.labels.viewDetails}
            variant="featured"
            badgeLimit={4}
          />
        ) : null}

        <div className="grid gap-4">
          {secondarySummaries.map((project) => (
            <ProjectCard
              key={project.slug}
              locale={locale}
              project={project}
              detailLabel={dictionary.labels.viewDetails}
              variant="compact"
              badgeLimit={3}
            />
          ))}
        </div>
      </div>

      <Link
        href={`/${locale}/projects`}
        className="inline-flex border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-accent/60 hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20"
      >
        {dictionary.labels.allProjects}
      </Link>
    </div>
  );
}
