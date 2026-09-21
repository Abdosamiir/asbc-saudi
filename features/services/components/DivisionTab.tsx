"use client"

import { cn } from "cn"

type DivisionTabProps = {
  number: string
  title: string
  isActive: boolean
  onSelect: () => void
  /** Id of the panel this tab controls, for aria-controls. */
  panelId: string
  tabId: string
}

/** One selectable division in the start-side list. */
export default function DivisionTab({
  number,
  title,
  isActive,
  onSelect,
  panelId,
  tabId,
}: DivisionTabProps) {
  return (
    <button
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={onSelect}
      className={cn(
        "w-full rounded-lg p-4 text-start transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none",
        // `surface-brand` re-scopes the tokens inside, so the number and
        // title invert with the fill instead of needing their own overrides.
        isActive ? "surface-brand shadow-e2" : "hover:bg-surface-sunken"
      )}
    >
      <span className="flex items-baseline gap-4">
        <span className="shrink-0 type-data-md text-gold">{number}</span>

        <span className="type-heading-sm text-content transition-colors duration-300 motion-reduce:transition-none">
          {title}
        </span>
      </span>

      <span
        aria-hidden
        className={cn(
          "mt-3 block h-0.5 rounded-sm bg-accent-gold transition-transform duration-300 motion-reduce:transition-none ltr:origin-left rtl:origin-right",
          isActive ? "scale-x-100" : "scale-x-0"
        )}
      />
    </button>
  )
}
