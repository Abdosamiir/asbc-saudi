import type { ProjectEntry } from "./project-data"

export type ProjectFilter = {
  /** Year ranges read the same in every locale, so the id doubles as the label. */
  id: string
  /** Left off "all", which matches every year. An open `to` means "and later". */
  range?: { from: number; to?: number }
}

export const ALL_PROJECTS_FILTER = "all"

export const projectFilters: ProjectFilter[] = [
  { id: ALL_PROJECTS_FILTER },
  { id: "2017-18", range: { from: 2017, to: 2018 } },
  { id: "2019-20", range: { from: 2019, to: 2020 } },
  { id: "2021-22", range: { from: 2021, to: 2022 } },
  { id: "2023+", range: { from: 2023 } },
]

export const DEFAULT_PROJECT_FILTER = ALL_PROJECTS_FILTER

export function filterProjects(projects: ProjectEntry[], filterId: string) {
  const range = projectFilters.find((filter) => filter.id === filterId)?.range

  if (!range) return projects

  return projects.filter(
    (project) =>
      project.year >= range.from &&
      (range.to === undefined || project.year <= range.to)
  )
}
