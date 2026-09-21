"use client"
import HeaderTitle from "@/shared/components/PageHero/PageHero"
import { resolvePageHero } from "@/shared/components/PageHero/pageHero.config"
import { usePathname } from "next/navigation"

const HeaderPages = () => {
  // Navigation
  const pathname = usePathname()
  // Variables
  const hero = resolvePageHero(pathname)

  if (!hero) return null

  return (
    <HeaderTitle
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
    />
  )
}

export default HeaderPages
