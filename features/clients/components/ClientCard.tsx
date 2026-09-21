type ClientCardProps = {
  name: string
}

/** White name plate used inside each client category grid. */
export default function ClientCard({ name }: ClientCardProps) {
  return (
    <div className="flex h-full min-h-24 items-center justify-center rounded-2xl border border-border bg-surface-raised px-5 py-6 text-center type-body-sm font-medium text-content transition-colors duration-300 hover:border-line-brand/25">
      {name}
    </div>
  )
}
