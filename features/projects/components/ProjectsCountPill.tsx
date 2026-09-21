import { useTranslations } from "next-intl"

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
  // Translation
  const t = useTranslations("ProjectsCompleted")

  return (
    <Badge className="h-auto min-h-8 max-w-full flex-wrap gap-x-2 gap-y-1 border-transparent bg-surface-sunken px-3 py-1.5 whitespace-normal">
      <span className="type-body-sm text-muted-foreground">
        {t.rich("countSummary", {
          shown,
          total,
          num: (chunks) => (
            <span className="type-data-md text-brand">{chunks}</span>
          ),
        })}
      </span>
      <span className="type-body-sm text-gold">·</span>
      <span className="type-body-sm text-gold">
        {t("featuredCount", { count: featured })}
      </span>
    </Badge>
  )
}
