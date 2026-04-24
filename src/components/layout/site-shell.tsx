import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";
import type { Locale, SiteDictionary } from "@/data/types";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
  dictionary: SiteDictionary;
};

export function SiteShell({ children, locale, dictionary }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="relative">
        <Header locale={locale} dictionary={dictionary} />
        <main className="mx-auto flex w-full max-w-content flex-col gap-16 px-6 py-12 md:gap-20 md:py-16">
          {children}
        </main>
        <footer className="mx-auto flex w-full max-w-content items-center justify-between border-t border-line px-6 py-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span>Boyka He</span>
          <span>Autonomous systems dossier</span>
        </footer>
      </div>
    </div>
  );
}
