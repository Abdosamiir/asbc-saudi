export type Project = {
  year: string
  title: string
  description: string
  tags: string[]
}

export const featuredProjects: Project[] = [
  {
    year: "2018",
    title: "Maaden Phosphate Dee Well",
    description:
      "Installation of 2x deep well pump unit 450HP at 460m depth — one of the deepest well installations in the region.",
    tags: ["450HP Motors", "460m Deep", "Deepwell Pumps"],
  },
  {
    year: "2019",
    title: "NWC TGC Water Station",
    description:
      "Complete water installation and pipeline fabrication for Riyadh's major water transmission station.",
    tags: [
      '24" Water Supply',
      "Pipeline Fabrication",
      "Testing & Commissioning",
    ],
  },
  {
    year: "2022",
    title: "Royal Commission AlUla",
    description:
      "Firefighting system installation for one of Saudi Arabia's most prestigious heritage sites.",
    tags: ["1000m2 Site", "MSP", "Design + Elect. + Joinery"],
  },
]

export type ProjectEntry = {
  id: number
  year: number
  category: string
  title: string
  description: string
  location: string
  featured?: boolean
}

export const projects: ProjectEntry[] = [
  {
    id: 1,
    year: 2022,
    category: "ROYAL COMMISSION",
    title: "Firefighting pump set 1000 US GPM @145 PSI",
    description: "Diesel + electric + jockey pumps",
    location: "Royal Commission for AlUla",
    featured: true,
  },
  {
    id: 2,
    year: 2023,
    category: "PRE-QUALIFICATION",
    title: "Prequalified: Tatweer Industrial City Project",
    description: "Toledo Arabia — status B, conditionally approved",
    location: "Toledo Arabia",
  },
]
