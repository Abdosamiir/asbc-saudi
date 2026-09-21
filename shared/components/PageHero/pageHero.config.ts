/** Top-level routes inside the (pages) group, keyed as in the `PageHero` messages. */
const PAGE_HERO_KEYS = [
  "about",
  "services",
  "projects",
  "quality",
  "clients",
  "contact",
] as const

/** Heroes that carry a lead under the title. */
const DESCRIBED_PAGE_HERO_KEYS = ["quality", "clients"] as const

export type PageHeroKey = (typeof PAGE_HERO_KEYS)[number]
type DescribedPageHeroKey = (typeof DESCRIBED_PAGE_HERO_KEYS)[number]

export function hasPageHeroDescription(
  key: PageHeroKey
): key is DescribedPageHeroKey {
  return (DESCRIBED_PAGE_HERO_KEYS as readonly PageHeroKey[]).includes(key)
}

/**
 * Resolves the hero from a locale-free pathname, matching on the first
 * segment so nested routes (/projects/riyadh-tower) keep their section hero.
 * Returns null for routes that should not render a hero.
 */
export function resolvePageHeroKey(pathname: string): PageHeroKey | null {
  const [segment] = pathname.split("/").filter(Boolean)

  return PAGE_HERO_KEYS.find((key) => key === segment) ?? null
}
