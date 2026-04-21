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
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(89,210,197,0.14),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_20%)]" />
      <div className="relative">
        <Header locale={locale} dictionary={dictionary} />
        <main className="mx-auto flex w-full max-w-content flex-col gap-10 px-6 py-10">
          {children}
        </main>
        <footer className="mx-auto flex w-full max-w-content items-center justify-between border-t border-white/5 px-6 py-8 text-sm text-muted">
          <span>Portfolio skeleton for iterative development.</span>
          <span>Windows native setup</span>
        </footer>
      </div>
    </div>
  );
}
