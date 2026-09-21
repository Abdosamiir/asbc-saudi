export type PageHeroContent = {
  eyebrow: string
  title: string
  description?: string
}

/** Hero content per top-level route inside the (pages) group. */
export const PAGE_HERO_CONTENT = {
  "/about": { eyebrow: "ABOUT US", title: "About Us" },
  "/services": {
    eyebrow: "OUR SERVICES",
    title: "Our Services",
  },
  "/projects": {
    eyebrow: "OUR PROJECTS",
    title: "Our Projects",
  },
  "/quality": {
    eyebrow: "EXCELLENCE",
    title: "Quality & Certifications",
    description:
      "Built on a foundation of rigorous standards and continuous improvement",
  },
  "/clients": {
    eyebrow: "OUR NETWORK",
    title: "Our Clients",
    description:
      "Trusted by Saudi Arabia's leading organizations across critical industries",
  },
  "/contact": {
    eyebrow: "GET IN TOUCH",
    title: "Contact Us",
  },
} satisfies Record<string, PageHeroContent>

/**
 * Resolves hero content from a pathname, matching on the first segment so
 * nested routes (/projects/riyadh-tower) keep their section hero.
 * Returns null for routes that should not render a hero.
 */
export function resolvePageHero(pathname: string): PageHeroContent | null {
  const [segment] = pathname.split("/").filter(Boolean)
  if (!segment) return null

  return (
    PAGE_HERO_CONTENT[`/${segment}` as keyof typeof PAGE_HERO_CONTENT] ?? null
  )
}
