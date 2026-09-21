import { Card, CardContent } from "@/shared/components/ui/card"
import type { LucideIcon } from "lucide-react"

type EdgeCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function EdgeCard({
  icon: Icon,
  title,
  description,
}: EdgeCardProps) {
  return (
    <Card className="h-full rounded-xl border border-border bg-surface-raised py-0 shadow-none ring-0">
      <CardContent className="p-6 md:p-8">
        <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-interactive-ghost text-brand">
          <Icon size={22} />
        </div>

        <h3 className="mb-3 type-heading-sm text-heading">{title}</h3>

        <p className="type-body-md text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
