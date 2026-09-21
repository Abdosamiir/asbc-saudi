import { cn } from "cn"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="type-eyebrow-md text-gold">{eyebrow}</p>

      <h2 className="mt-4 type-heading-xl text-balance text-brand md:type-display-md">
        {title}
      </h2>

      {description && (
        <p className="mt-4 type-body-md text-pretty text-muted-foreground md:type-body-lg">
          {description}
        </p>
      )}
    </div>
  )
}
