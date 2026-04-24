import { Suspense } from "react";
import Link from "next/link";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import type { Locale, SiteDictionary } from "@/data/types";

type HeaderProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[rgba(8,10,9,0.92)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-[76rem] items-center justify-between gap-4 px-5 py-4 md:px-6">
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-[0.28em] text-muted transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          YN
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          <a href="#intro" className="transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20">
            {dictionary.nav.intro}
          </a>
          <a href="#projects" className="transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20">
            {dictionary.nav.projects}
          </a>
          <a href="#experiences" className="transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20">
            {dictionary.nav.experiences}
          </a>
          <a href="#skills" className="transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20">
            {dictionary.nav.skills}
          </a>
          <a href="#now" className="transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20">
            {dictionary.nav.now}
          </a>
          <a href="#resume" className="transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20">
            {dictionary.nav.resume}
          </a>
        </nav>

        <Suspense
          fallback={
            <div className="rounded-[4px] border border-line bg-[var(--color-panel-soft)] px-3 py-2 text-xs uppercase tracking-[0.24em] text-muted">
              {locale}
            </div>
          }
        >
          <LocaleSwitcher currentLocale={locale} />
        </Suspense>
      </div>
    </header>
  );
}
