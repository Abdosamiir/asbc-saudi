"use client"

import { useMemo, useState } from "react"

import SectionHeading from "@/features/services/components/SectionHeading"

import { CompletedProjectCard } from "./CompletedProjectCard"
import ProjectFilters from "./ProjectFilters"
import { ProjectsCountPill } from "./ProjectsCountPill"
import { projects } from "./data/project-data"
import { DEFAULT_PROJECT_FILTER, filterProjects } from "./data/project-filters"

export default function CompletedProjects() {
  const [activeFilter, setActiveFilter] = useState(DEFAULT_PROJECT_FILTER)

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
          eyebrow="03 — Projects"
          title="Completed Projects. Zero Compromises."
          description="A selection of our completed works across Saudi Arabia"
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
            No completed projects in this period yet.
          </p>
        )}
      </div>
    </section>
  )
}
