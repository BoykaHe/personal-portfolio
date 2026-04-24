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
        <main className="mx-auto flex w-full max-w-[76rem] flex-col gap-20 px-5 py-10 md:gap-24 md:px-6 md:py-14">
          {children}
        </main>
        <footer className="mx-auto flex w-full max-w-[76rem] items-center justify-between border-t border-line px-5 py-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:px-6">
          <span>Boyka He</span>
          <span>Autonomous systems dossier</span>
        </footer>
      </div>
    </div>
  );
}
