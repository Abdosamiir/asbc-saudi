export type ProjectStat = {
  /** Numeric part of the figure; counted up when the stat scrolls into view. */
  value: number
  /** Rendered straight after the number, e.g. "+" or "m". */
  suffix?: string
  label: string
}

export const projectStats: ProjectStat[] = [
  { value: 35, suffix: "+", label: "Completed Projects" },
  { value: 23, suffix: "+", label: "Clients Served" },
  { value: 460, suffix: "m", label: "Deepest Installation" },
  { value: 7, suffix: "+", label: "Years Experience" },
]
