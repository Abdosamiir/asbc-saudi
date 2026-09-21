"use client"

import { cn } from "cn"
import { useTranslations } from "next-intl"

import { ALL_PROJECTS_FILTER, projectFilters } from "./data/project-filters"

type ProjectFiltersProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  // Translation
  const t = useTranslations("ProjectsCompleted")

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {projectFilters.map(({ id }) => {
        const isActive = activeFilter === id

        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(id)}
            className={cn(
              "min-h-11 rounded-xl border px-4 py-2 type-label-md transition-colors duration-200",
              "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
              isActive
                ? "border-transparent bg-interactive text-on-brand"
                : "border-line bg-surface-raised text-content hover:border-line-brand/30"
            )}
          >
            {id === ALL_PROJECTS_FILTER ? t("filterAll") : id}
          </button>
        )
      })}
    </div>
  )
}
