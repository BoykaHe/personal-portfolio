import type { Locale } from "@/data/types";

export const locales: Locale[] = ["en", "zh"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
