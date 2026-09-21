import { useTranslations } from "next-intl"

import { ALL_CLIENTS } from "../data/clients"

/** The closing roster: every client and partner, in a dense five-up grid. */
export default function AllClientsGrid() {
  // Translation
  const t = useTranslations("ClientOrganizations")
  const tNames = useTranslations("ClientNames")

  return (
    <div className="border-t border-border pt-10 md:pt-12">
      <p className="text-center type-eyebrow-md text-muted-foreground">
        {t("allClientsTitle")}
      </p>

      <ul className="mt-6 grid auto-rows-fr grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {ALL_CLIENTS.map((client) => (
          <li
            key={client}
            className="flex min-h-20 items-center justify-center rounded-xl border border-border bg-surface-raised p-4 text-center type-label-sm text-content transition-colors duration-300 hover:border-line-brand/25"
          >
            {tNames(client)}
          </li>
        ))}
      </ul>
    </div>
  )
}
