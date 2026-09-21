import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
})

export type Locale = (typeof routing.locales)[number]

const RTL_LOCALES: ReadonlySet<Locale> = new Set(["ar"])

export function getLocaleDirection(locale: Locale) {
  return RTL_LOCALES.has(locale) ? "rtl" : "ltr"
}
