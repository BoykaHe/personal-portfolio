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
  const [dominantProject, ...compactProjects] = projects;

  return (
    <SiteShell locale={locale} dictionary={site.dictionary}>
      <SectionContainer id="projects" title={site.dictionary.nav.projects} eyebrow="Project index">
        <div className="mb-8 grid gap-5 border-y border-line py-6 lg:grid-cols-[1fr_0.5fr]">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Editorial summary
            </p>
            <p className="max-w-3xl text-lg leading-8 text-text/90">
              A compact index of engineering dossiers: autonomous racing work first, followed by
              CAV concept design and self-driving system architecture. Each entry is written to
              make the system, contribution, and evidence path legible before the full detail page.
            </p>
          </div>
          <div className="space-y-2 border-l-0 border-line font-mono text-[11px] uppercase leading-6 tracking-[0.16em] text-muted lg:border-l lg:pl-5">
            <p>{projects.length} project dossiers</p>
            <p>Dominant case + compact summaries</p>
            <p>Links staged for evidence replacement</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)]">
          {dominantProject ? (
            <ProjectCard
              locale={locale}
              project={dominantProject}
              detailLabel={site.dictionary.labels.viewDetails}
              variant="featured"
              badgeLimit={4}
            />
          ) : null}

          <div className="grid gap-4">
            {compactProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                locale={locale}
                project={project}
                detailLabel={site.dictionary.labels.viewDetails}
                variant="compact"
                badgeLimit={3}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </SiteShell>
  );
}
