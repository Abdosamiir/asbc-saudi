import type { Messages } from "next-intl"

type FeaturedProjectKey = keyof Messages["ProjectsFeatured"]["items"]
type ProjectTagKey = keyof Messages["ProjectsFeatured"]["tags"]
type ProjectEntryKey = keyof Messages["ProjectsCompleted"]["items"]

export type FeaturedProject = {
  /** Title and description live under `ProjectsFeatured.items.<key>`. */
  key: FeaturedProjectKey
  year: string
  tags: ProjectTagKey[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    key: "maadenDeepWell",
    year: "2018",
    tags: ["hp450Motors", "depth460m", "deepwellPumps"],
  },
  {
    key: "nwcTgcStation",
    year: "2019",
    tags: ["waterSupply24", "pipelineFabrication", "testingCommissioning"],
  },
  {
    key: "alulaFirefighting",
    year: "2022",
    tags: ["site1000m2", "msp", "designElectricalJoinery"],
  },
]

export type ProjectEntry = {
  id: number
  /** Category, title, description and location live under `ProjectsCompleted.items.<key>`. */
  key: ProjectEntryKey
  year: number
  /** Latin initials of the client, watermarked into the card in every locale. */
  monogram: string
  featured?: boolean
}

export const projects: ProjectEntry[] = [
  {
    id: 1,
    key: "alulaFirefighting",
    year: 2022,
    monogram: "RC",
    featured: true,
  },
  {
    id: 2,
    key: "tatweerPrequalification",
    year: 2023,
    monogram: "TA",
  },
]
