import { cn } from "cn"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/shared/components/ui/card"
import { WORKSHOP_CAPABILITIES } from "../data/facilities"

/** Specification table of workshop capabilities. */
export default function WorkshopCapabilities() {
  // Translation
  const t = useTranslations("ServiceFacilities")

  return (
    <Card className="border border-border bg-surface-raised shadow-none ring-0 sm:[--card-spacing:--spacing(8)]">
      <CardContent>
        <h3 className="type-heading-md text-brand">{t("capabilitiesTitle")}</h3>

        <dl className="mt-4">
          {WORKSHOP_CAPABILITIES.map((capability, index) => (
            <div
              key={capability}
              className={cn(
                "grid items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[minmax(0,1fr)_auto]",
                index < WORKSHOP_CAPABILITIES.length - 1 &&
                  "border-b border-line"
              )}
            >
              <dt className="type-body-md text-content">
                {t(`capabilities.${capability}.label`)}
              </dt>

              <dd className="type-data-md text-brand sm:text-end">
                {t(`capabilities.${capability}.value`)}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}
