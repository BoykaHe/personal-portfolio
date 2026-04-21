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
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const active = tab.key === activeTab;

        return (
          <Link
            key={tab.key}
            href={`/${locale}/projects/${projectSlug}?tab=${tab.key}`}
            className={[
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active
                ? "border-white/10 bg-text text-bg"
                : "border-white/10 text-muted hover:bg-white/5 hover:text-text"
            ].join(" ")}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
