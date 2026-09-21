import { useTranslations } from "next-intl"

/** Supporting note about ASBC's building envelope work. */
export default function BuildingEnvelopeNote() {
  // Translation
  const t = useTranslations("ServiceDivisions")

  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-surface-sunken p-6">
      <p className="type-body-sm text-content">
        {t.rich("envelopeNote", {
          label: (chunks) => (
            <span className="font-medium text-brand">{chunks}</span>
          ),
        })}
      </p>
    </div>
  )
}
