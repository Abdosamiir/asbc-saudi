import { Badge } from "@/shared/components/ui/badge"

type ProjectsCountPillProps = {
  shown: number
  total: number
  featured: number
}

/** The "1 of 12 shown · 3 featured" status pill above the project grid. */
export function ProjectsCountPill({
  shown,
  total,
  featured,
}: ProjectsCountPillProps) {
  return (
    <Badge className="h-auto min-h-8 max-w-full flex-wrap gap-x-2 gap-y-1 border-transparent bg-surface-sunken px-3 py-1.5 whitespace-normal">
      <span className="type-data-md text-brand">{shown}</span>
      <span className="type-body-sm text-muted-foreground">of</span>
      <span className="type-data-md text-brand">{total}</span>
      <span className="type-body-sm text-muted-foreground">shown</span>
      <span className="type-body-sm text-gold">·</span>
      <span className="type-body-sm text-gold">{featured} featured</span>
    </Badge>
  )
}
