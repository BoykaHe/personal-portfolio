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
    <header className="sticky top-0 z-20 border-b border-white/5 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-6 py-4">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-[0.28em] text-muted">
          YN
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          <a href="#intro" className="hover:text-text">
            {dictionary.nav.intro}
          </a>
          <a href="#projects" className="hover:text-text">
            {dictionary.nav.projects}
          </a>
          <a href="#experiences" className="hover:text-text">
            {dictionary.nav.experiences}
          </a>
          <a href="#skills" className="hover:text-text">
            {dictionary.nav.skills}
          </a>
          <a href="#now" className="hover:text-text">
            {dictionary.nav.now}
          </a>
          <a href="#resume" className="hover:text-text">
            {dictionary.nav.resume}
          </a>
        </nav>

        <Suspense
          fallback={
            <div className="rounded-full border border-line bg-panel/70 px-3 py-2 text-xs uppercase tracking-[0.24em] text-muted">
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
