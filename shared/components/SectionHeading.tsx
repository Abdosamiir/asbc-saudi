import { cn } from "cn"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  /**
   * @deprecated Surfaces now carry their own palette. Wrap the section in
   * `surface-inverse` (or `surface-ink`) and the heading inverts with it.
   */
  tone?: "light" | "navy"
  /** Adjusts the default `max-w-3xl` wrapper for wider headings. */
  className?: string
}

/** Centered eyebrow / title / lead used at the top of a page section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="type-eyebrow-md text-gold">{eyebrow}</p>

      <h2 className="mt-4 type-heading-xl text-balance md:type-display-md">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl type-body-md text-pretty text-content-muted">
          {description}
        </p>
      )}
    </div>
  )
}
