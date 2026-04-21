import { SiteShell } from "@/components/layout/site-shell";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionContainer } from "@/components/sections/section-container";
import { getProjects } from "@/data/projects";
import { getSiteContent, resolveLocale } from "@/data/site";

type ProjectsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale: localeParam } = await params;
  const locale = resolveLocale(localeParam);
  const site = getSiteContent(locale);
  const projects = getProjects(locale);

  return (
    <SiteShell locale={locale} dictionary={site.dictionary}>
      <SectionContainer id="projects" title={site.dictionary.nav.projects} eyebrow="Project index">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              locale={locale}
              project={project}
              detailLabel={site.dictionary.labels.viewDetails}
            />
          ))}
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
