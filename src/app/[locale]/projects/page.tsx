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
  const dossierCount = projects.length.toString().padStart(2, "0");

  return (
    <SiteShell locale={locale} dictionary={site.dictionary}>
      <SectionContainer id="projects" title={site.dictionary.nav.projects} eyebrow="Project index">
        <div className="mb-10 grid gap-7 border-y border-line py-7 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-end">
          <div className="space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Engineering dossier index
            </p>
            <h3 className="max-w-4xl text-4xl font-medium leading-[1.04] text-text md:text-5xl">
              Selected engineering cases for autonomous systems, vehicle dynamics, planning, and
              control evidence.
            </h3>
            <p className="max-w-3xl text-base leading-8 text-[var(--color-body)]">
              The index starts with the Formula Student AI dossier as the dominant proof case, then
              keeps two supporting dossiers compact for quick scanning. Each entry foregrounds the
              system context, contribution cue, timeframe, and evidence path before the full case
              study.
            </p>
          </div>
          <div className="border-t border-line font-mono text-[11px] uppercase tracking-[0.16em] text-muted lg:border-l lg:border-t-0 lg:pl-5">
            <div className="grid gap-0">
              <p className="border-b border-line py-3">
                <span className="text-text">{dossierCount}</span> project dossiers
              </p>
              <p className="border-b border-line py-3">
                Dominant case / Formula Student AI
              </p>
              <p className="py-3">
                Technical focus / planning + control
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.42fr)_minmax(18rem,0.58fr)]">
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
