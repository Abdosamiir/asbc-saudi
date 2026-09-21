"use client"

import { ProjectCard } from "./ProjectCard"
import { featuredProjects } from "./data/project-data"

export default function FeaturedProjects() {
  return (
    <section
      aria-labelledby="featured-projects-title"
      className="surface-inverse py-16 md:py-24"
    >
      <div className="container">
        {/* Section heading */}
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">FEATURED PROJECTS</p>

          <h2
            id="featured-projects-title"
            className="type-heading-xl text-balance text-content md:type-display-lg"
          >
            Landmark Installation
          </h2>
        </header>

        {/* Projects */}
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map(
            (project: (typeof featuredProjects)[number]) => (
              <ProjectCard
                key={`${project.year}-${project.title}`}
                project={project}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
