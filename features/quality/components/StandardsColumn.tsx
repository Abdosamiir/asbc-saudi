import type { ReactNode } from "react"

type StandardsColumnProps = {
  title: string
  children: ReactNode
}

/** One of the three columns on the navy standards band. */
export default function StandardsColumn({
  title,
  children,
}: StandardsColumnProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <h3 className="type-heading-sm text-gold lg:min-h-14">{title}</h3>

      {children}
    </div>
  )
}
