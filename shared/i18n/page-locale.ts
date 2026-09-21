import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { routing } from "./routing"

/**
 * Validates the `[locale]` segment and hands it to next-intl, which keeps the
 * route statically renderable. Call it at the top of every layout and page.
 */
export async function initPageLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)
  return locale
}
