import type { Messages } from "next-intl"

export type ProjectStat = {
  /** Caption lives under `ProjectStats.stats.<key>`. */
  key: keyof Messages["ProjectStats"]["stats"]
  /** Numeric part of the figure; counted up when the stat scrolls into view. */
  value: number
  /** Rendered straight after the number, from the `Units` messages. */
  unit?: keyof Messages["Units"]
}

export const projectStats: ProjectStat[] = [
  { key: "completedProjects", value: 35, unit: "plus" },
  { key: "clientsServed", value: 23, unit: "plus" },
  { key: "deepestInstallation", value: 460, unit: "metres" },
  { key: "yearsExperience", value: 7, unit: "plus" },
]
