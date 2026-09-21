type SectorPillProps = {
  label: string
}

/** Outlined sector chip in the "Trusted Across…" band. */
export default function SectorPill({ label }: SectorPillProps) {
  return (
    <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-line-brand px-4 py-2.5 text-center type-body-sm font-medium text-brand transition-colors duration-200 hover:bg-interactive/8 md:px-5 md:py-3 md:type-body-md">
      {label}
    </span>
  )
}
