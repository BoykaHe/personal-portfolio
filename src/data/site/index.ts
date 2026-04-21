import { siteContentEn } from "@/data/site/en";
import { siteContentZh } from "@/data/site/zh";
import { defaultLocale, isLocale } from "@/data/site/locales";
import type { Locale, SiteContent } from "@/data/types";

const siteContentMap: Record<Locale, SiteContent> = {
  en: siteContentEn,
  zh: siteContentZh
};

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getSiteContent(locale: Locale): SiteContent {
  return siteContentMap[locale];
}
