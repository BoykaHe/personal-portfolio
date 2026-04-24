import Link from "next/link";

import { StatusPill } from "@/components/ui/status-pill";
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
      <div className="grid gap-5 border-y border-line py-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Project evidence
          </p>
          <h3 className="mt-3 max-w-xl text-2xl font-medium leading-tight text-text md:text-3xl">
            Representative engineering work, led by the clearest autonomous-systems dossier.
          </h3>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted lg:justify-self-end">
          The first project carries the proof moment for autonomous systems, vehicle dynamics, and
          path planning / control. The following summaries keep the wider project evidence close at
          hand.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.28fr)_minmax(18rem,0.72fr)]">
        {featuredProject ? (
          <FeaturedDossier locale={locale} project={featuredProject} />
        ) : null}

        <div className="grid gap-0 border-y border-line">
          {secondarySummaries.map((project) => (
            <CompactDossier
              key={project.slug}
              locale={locale}
              project={project}
            />
          ))}
        </div>
      </div>

      <Link
        href={`/${locale}/projects`}
        className="inline-flex min-h-10 items-center rounded-[4px] border border-line px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-text transition-colors hover:border-accent/60 hover:bg-[var(--color-accent-bg-soft)] hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20"
      >
        {dictionary.labels.allProjects === "All projects" ? "View project dossiers" : dictionary.labels.allProjects}
      </Link>
    </div>
  );
}

function FeaturedDossier({ locale, project }: { locale: Locale; project: Project }) {
  return (
    <article className="group rounded-[5px] border border-line bg-[var(--color-panel-soft)] p-5 transition-colors hover:border-accent/45 focus-within:border-accent/60 md:p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Featured dossier
          </p>
          <h3 className="mt-5 max-w-3xl text-3xl font-medium leading-tight text-text md:text-5xl">
            {project.title}
          </h3>
        </div>
        <StatusPill status={project.status} />
      </div>

      <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{project.summary}</p>

      <div className="mt-7 grid gap-5 border-y border-line py-5 md:grid-cols-2">
        <DossierNote label="Contribution" value={project.responsibilities[0]} />
        <DossierNote label="Evidence" value={project.highlights[0]} />
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <StackMetadata stack={project.stack} limit={4} />
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="inline-flex self-start border-b border-accent pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-[var(--color-accent-hover)] hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20 md:self-auto"
        >
          Open dossier
        </Link>
      </div>
    </article>
  );
}

function CompactDossier({ locale, project }: { locale: Locale; project: Project }) {
  return (
    <article className="group border-b border-line py-5 transition-colors last:border-b-0 hover:bg-[var(--color-accent-bg-soft)] focus-within:bg-[var(--color-accent-bg-soft)] lg:px-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {project.timeframe}
      </p>
      <h3 className="mt-3 text-xl font-medium leading-tight text-text">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-col gap-5">
        <StackMetadata stack={project.stack} limit={3} />
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="inline-flex self-start border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors group-hover:border-accent/60 group-hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          Open dossier
        </Link>
      </div>
    </article>
  );
}

function DossierNote({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <p className="mt-3 text-sm leading-7 text-text/85">{value}</p>
    </div>
  );
}

function StackMetadata({ stack, limit }: { stack: string[]; limit: number }) {
  const visibleStack = stack.slice(0, limit);
  const hiddenStackCount = Math.max(stack.length - visibleStack.length, 0);

  return (
    <div className="flex flex-wrap gap-1.5">
      {visibleStack.map((item) => (
        <span
          key={item}
          className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:border-accent/35 group-hover:text-text/85"
        >
          {item}
        </span>
      ))}
      {hiddenStackCount > 0 ? (
        <span className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          +{hiddenStackCount}
        </span>
      ) : null}
    </div>
  );
}
