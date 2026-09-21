"use client"

import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"

import SectionHeading from "@/features/services/components/SectionHeading"

import { CompletedProjectCard } from "./CompletedProjectCard"
import ProjectFilters from "./ProjectFilters"
import { ProjectsCountPill } from "./ProjectsCountPill"
import { projects } from "./data/project-data"
import { DEFAULT_PROJECT_FILTER, filterProjects } from "./data/project-filters"

export default function CompletedProjects() {
  // Translation
  const t = useTranslations("ProjectsCompleted")
  // State
  const [activeFilter, setActiveFilter] = useState(DEFAULT_PROJECT_FILTER)

  // Variables
  const visibleProjects = useMemo(
    () => filterProjects(projects, activeFilter),
    [activeFilter]
  )

  const featuredCount = projects.filter((project) => project.featured).length

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <SectionHeading
          className="max-w-4xl"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-10 md:mt-12">
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <ProjectsCountPill
            shown={visibleProjects.length}
            total={projects.length}
            featured={featuredCount}
          />
        </div>

        {visibleProjects.length > 0 ? (
          <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <CompletedProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-center type-body-md text-muted-foreground">
            {t("empty")}
          </p>
        )}
      </div>
    </section>
  )
}
