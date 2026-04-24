import Link from "next/link";

import type { Locale, SiteDictionary } from "@/data/types";

export type ProjectTabKey = "overview" | "readme" | "website";

type ProjectTabsProps = {
  activeTab: ProjectTabKey;
  locale: Locale;
  projectSlug: string;
  dictionary: SiteDictionary;
};

export function ProjectTabs({
  activeTab,
  locale,
  projectSlug,
  dictionary
}: ProjectTabsProps) {
  const tabs: Array<{ key: ProjectTabKey; label: string }> = [
    { key: "overview", label: dictionary.labels.projectOverview },
    { key: "readme", label: dictionary.labels.readme },
    { key: "website", label: dictionary.labels.website }
  ];

  return (
    <nav className="flex flex-wrap gap-7 border-b border-line" aria-label="Project dossier tabs">
      {tabs.map((tab) => {
        const active = tab.key === activeTab;

        return (
          <Link
            key={tab.key}
            href={`/${locale}/projects/${projectSlug}?tab=${tab.key}`}
            aria-current={active ? "page" : undefined}
            className={[
              "border-b py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20",
              active
                ? "border-accent text-text"
                : "border-transparent text-muted hover:border-accent/35 hover:text-text"
            ].join(" ")}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
