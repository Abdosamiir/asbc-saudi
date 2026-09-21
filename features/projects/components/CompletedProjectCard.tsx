import { Star } from "lucide-react"

import { Badge } from "@/shared/components/ui/badge"
import { Card, CardContent } from "@/shared/components/ui/card"

import type { ProjectEntry } from "./data/project-data"

/** "Royal Commission for AlUla" → "RC", the watermark sunk into each card. */
function getInitials(source: string) {
  return source
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
}

type CompletedProjectCardProps = {
  project: ProjectEntry
}

export function CompletedProjectCard({ project }: CompletedProjectCardProps) {
  const { year, category, title, description, location, featured } = project

  return (
    <Card className="relative h-full gap-0 border border-border ring-0 transition-colors duration-300 hover:border-brand/30">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -bottom-4 font-heading text-[80px] leading-30 font-extrabold text-brand/5"
      >
        {getInitials(location)}
      </span>

      <CardContent className="relative flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge className="h-6 rounded-sm border-transparent bg-interactive/10 px-2 py-1 font-mono text-xs font-normal text-brand">
            {year}
          </Badge>

          {featured && (
            <Badge className="h-6 gap-1 border-transparent bg-accent-gold/15 px-2 py-1 type-label-sm text-heading">
              <Star className="fill-current text-gold" />
              Featured
            </Badge>
          )}
        </div>

        <p className="mt-4 type-label-sm font-semibold tracking-[0.6px] text-brand uppercase">
          {category}
        </p>

        <h3 className="mt-2 type-heading-sm text-content">{title}</h3>

        <p className="mt-2 type-body-sm text-muted-foreground">{description}</p>

        <p className="mt-auto pt-4 type-label-sm text-brand">{location}</p>
      </CardContent>
    </Card>
  )
}
