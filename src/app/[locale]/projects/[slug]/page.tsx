import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { ProjectOverviewTab } from "@/components/projects/project-overview-tab";
import { ProjectReadmeTab } from "@/components/projects/project-readme-tab";
import { ProjectTabs, type ProjectTabKey } from "@/components/projects/project-tabs";
import { ProjectWebsiteTab } from "@/components/projects/project-website-tab";
import { StatusPill } from "@/components/ui/status-pill";
import { SurfaceCard } from "@/components/ui/surface-card";
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
      <div className="space-y-6">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex text-sm text-muted hover:text-text"
        >
          {site.dictionary.labels.backToProjects}
        </Link>

        <SurfaceCard className="space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">{project.timeframe}</p>
              <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted">{project.summary}</p>
            </div>
            <StatusPill status={project.status} />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.links.map((link, index) => (
              <a
                key={`${link.href}-${link.label}-${index}`}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-text hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </SurfaceCard>

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
