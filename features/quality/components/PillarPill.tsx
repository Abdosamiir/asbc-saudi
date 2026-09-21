type PillarPillProps = {
  label: string
}

/** Outlined pillar chip under the closing statement. */
export default function PillarPill({ label }: PillarPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line-brand px-4.5 py-2.5 type-body-sm font-medium text-brand transition-colors duration-200 hover:bg-interactive/8">
      {label}
    </span>
  )
}
