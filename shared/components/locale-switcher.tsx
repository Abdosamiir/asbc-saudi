"use client"

import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/shared/i18n/navigation"
import { routing } from "@/shared/i18n/routing"
import { cn } from "@/shared/lib/utils"

type LocaleSwitcherProps = {
  className?: string
}

/** Links to the current page in the other language, labelled in that language. */
export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  // Translation
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()
  // Navigation
  const pathname = usePathname()
  // Variables
  const targetLocale =
    routing.locales.find((candidate) => candidate !== locale) ??
    routing.defaultLocale

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      lang={targetLocale}
      hrefLang={targetLocale}
      className={cn(
        "inline-flex h-11 shrink-0 items-center justify-center rounded-full px-4",
        "border border-line type-label-md text-content-muted",
        "transition-colors duration-200 hover:bg-interactive-ghost hover:text-brand",
        className
      )}
    >
      {t("targetLanguage")}
    </Link>
  )
}
