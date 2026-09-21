import type { ProjectEntry } from "./project-data"

export type ProjectFilter = {
  /** Button label, exactly as it reads in the design. */
  label: string
  /** Left off "All", which matches every year. An open `to` means "and later". */
  range?: { from: number; to?: number }
}

export const projectFilters: ProjectFilter[] = [
  { label: "All" },
  { label: "2017-18", range: { from: 2017, to: 2018 } },
  { label: "2019-20", range: { from: 2019, to: 2020 } },
  { label: "2021-22", range: { from: 2021, to: 2022 } },
  { label: "2023+", range: { from: 2023 } },
]

export const DEFAULT_PROJECT_FILTER = "All"

export function filterProjects(projects: ProjectEntry[], label: string) {
  const range = projectFilters.find((filter) => filter.label === label)?.range

  if (!range) return projects

  return projects.filter(
    (project) =>
      project.year >= range.from &&
      (range.to === undefined || project.year <= range.to)
  )
}
