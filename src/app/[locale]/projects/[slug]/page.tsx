import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { ProjectOverviewTab } from "@/components/projects/project-overview-tab";
import { ProjectReadmeTab } from "@/components/projects/project-readme-tab";
import { ProjectTabs, type ProjectTabKey } from "@/components/projects/project-tabs";
import { ProjectWebsiteTab } from "@/components/projects/project-website-tab";
import { StatusPill } from "@/components/ui/status-pill";
import { getProjectBySlug, getProjects } from "@/data/projects";
import { getSiteContent, resolveLocale } from "@/data/site";
import { locales } from "@/data/site/locales";

type ProjectDetailPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
  searchParams: Promise<{
    tab?: string;
  }>;
};

const allowedTabs: ProjectTabKey[] = ["overview", "readme", "website"];

const legacyProjectSlugRedirects = {
  en: {
    "formula-student-autonomous-car-path-planning-tracking":
      "formula-student-autonomous-car-path-planning-and-tracking"
  }
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      locale,
      slug: project.slug
    }))
  );
}

function resolveActiveTab(value?: string): ProjectTabKey {
  if (value && allowedTabs.includes(value as ProjectTabKey)) {
    return value as ProjectTabKey;
  }

  return "overview";
}

function resolveLegacyProjectSlug(locale: string, slug: string): string | undefined {
  if (locale !== "en") {
    return undefined;
  }

  return legacyProjectSlugRedirects.en[
    slug as keyof typeof legacyProjectSlugRedirects.en
  ];
}

export default async function ProjectDetailPage({
  params,
  searchParams
}: ProjectDetailPageProps) {
  const { locale: localeParam, slug } = await params;
  const { tab } = await searchParams;
  const locale = resolveLocale(localeParam);
  const site = getSiteContent(locale);
  const project = getProjectBySlug(locale, slug);
  const activeTab = resolveActiveTab(tab);

  if (!project) {
    const replacementSlug = resolveLegacyProjectSlug(locale, slug);

    if (replacementSlug) {
      const tabQuery = tab ? `?tab=${activeTab}` : "";
      redirect(`/${locale}/projects/${replacementSlug}${tabQuery}`);
    }

    notFound();
  }

  return (
    <SiteShell locale={locale} dictionary={site.dictionary}>
      <div className="space-y-8">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:border-accent/60 hover:text-text"
        >
          {site.dictionary.labels.backToProjects}
        </Link>

        <section className="grid gap-8 border-y border-line py-8 lg:grid-cols-[minmax(0,1.38fr)_minmax(18rem,0.62fr)]">
          <div className="space-y-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Technical dossier cover
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-medium leading-[1.04] text-text md:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-muted">{project.summary}</p>
            </div>

            <div className="grid gap-5 border-l border-accent/45 pl-5 md:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Thesis
                </p>
                <p className="mt-2 text-sm leading-7 text-text/85">{project.problemSolved}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Contribution
                </p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-text/85">
                  {project.responsibilities.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="border-y border-line lg:border-l lg:border-y-0 lg:pl-5">
            <div className="divide-y divide-line">
              <div className="py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Status
                </p>
                <div className="mt-3">
                  <StatusPill status={project.status} />
                </div>
              </div>
              <div className="py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Timeframe
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-text/85">
                  {project.timeframe}
                </p>
              </div>
              <div className="py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Links
                </p>
                <div className="mt-3 flex flex-col items-start gap-2">
                  {project.links.map((link, index) => (
                    <a
                      key={`${link.href}-${link.label}-${index}`}
                      href={link.href}
                      className="border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-text transition-colors hover:border-accent/60 hover:text-[var(--color-accent-hover)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 6).map((item) => (
                    <span
                      key={item}
                      className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <div className="grid gap-4 border-b border-line pb-6 md:grid-cols-3">
          {project.highlights.slice(0, 3).map((item, index) => (
            <div key={item} className="border-l border-line pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Evidence {index + 1}
              </p>
              <p className="mt-2 text-sm leading-7 text-text/85">{item}</p>
            </div>
          ))}
        </div>

        <ProjectTabs
          activeTab={activeTab}
          locale={locale}
          projectSlug={project.slug}
          dictionary={site.dictionary}
        />

        {activeTab === "overview" ? <ProjectOverviewTab project={project} /> : null}
        {activeTab === "readme" ? <ProjectReadmeTab project={project} /> : null}
        {activeTab === "website" ? <ProjectWebsiteTab project={project} /> : null}
      </div>
    </SiteShell>
  );
}
