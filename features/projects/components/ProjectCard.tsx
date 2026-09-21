"use client"

import { Card, CardContent } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
type Project = {
  year: string | number
  title: string
  description: string
  tags: string[]
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full gap-0 border border-line bg-interactive-ghost ring-0 transition-colors duration-300 hover:border-accent-gold/50">
      <CardContent className="flex flex-1 flex-col">
        <p className="mb-4 type-eyebrow-md text-gold">{project.year}</p>

        <h3 className="type-heading-sm text-content">{project.title}</h3>

        <p className="mt-3 type-body-sm text-content-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="h-auto min-h-6 max-w-full rounded-full border-line bg-interactive-ghost px-2.5 py-1 type-body-xs whitespace-normal text-content-muted"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
