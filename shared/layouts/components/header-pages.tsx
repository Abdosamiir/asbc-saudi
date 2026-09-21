"use client"
import { useTranslations } from "next-intl"
import HeaderTitle from "@/shared/components/PageHero/PageHero"
import {
  hasPageHeroDescription,
  resolvePageHeroKey,
} from "@/shared/components/PageHero/pageHero.config"
import { usePathname } from "@/shared/i18n/navigation"

const HeaderPages = () => {
  // Translation
  const t = useTranslations("PageHero")
  // Navigation
  const pathname = usePathname()
  // Variables
  const heroKey = resolvePageHeroKey(pathname)

  if (!heroKey) return null

  return (
    <HeaderTitle
      eyebrow={t(`${heroKey}.eyebrow`)}
      title={t(`${heroKey}.title`)}
      description={
        hasPageHeroDescription(heroKey)
          ? t(`${heroKey}.description`)
          : undefined
      }
    />
  )
}

export default HeaderPages
