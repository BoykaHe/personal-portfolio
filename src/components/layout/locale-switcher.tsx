"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { locales } from "@/data/site/locales";
import type { Locale } from "@/data/types";

function buildLocaleHref(pathname: string, locale: Locale, search: string) {
  const segments = pathname.split("/");

  if (segments.length > 1) {
    segments[1] = locale;
  } else {
    segments.push(locale);
  }

  const nextPath = segments.join("/") || `/${locale}`;
  return search ? `${nextPath}?${search}` : nextPath;
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  return (
    <div className="flex items-center gap-2 rounded-full border border-line bg-panel/70 p-1 text-xs uppercase tracking-[0.24em] text-muted">
      {locales.map((locale) => {
        const active = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={buildLocaleHref(pathname, locale, search)}
            className={[
              "rounded-full px-3 py-1 transition-colors",
              active ? "bg-text text-bg" : "hover:bg-white/5"
            ].join(" ")}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
