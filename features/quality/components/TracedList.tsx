import { cn } from "cn"

type TracedListProps = {
  items: string[]
  /** Bullet colour: gold traces registrations, blue traces earned certificates. */
  tone?: "gold" | "blue"
}

/** Bulleted list used in the standards columns. */
export default function TracedList({ items, tone = "gold" }: TracedListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className={cn(
              "mt-2 size-1.5 shrink-0 rounded-full",
              tone === "gold" ? "bg-accent-gold" : "bg-interactive"
            )}
          />

          <span className="type-body-sm text-content-muted">{item}</span>
        </li>
      ))}
    </ul>
  )
}
