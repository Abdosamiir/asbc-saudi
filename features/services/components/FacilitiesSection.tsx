import { useTranslations } from "next-intl"
import FacilityList from "./FacilityList"
import Reveal from "./Reveal"
import WorkshopCapabilities from "./WorkshopCapabilities"
import { WORKSHOP_EQUIPMENT } from "../data/facilities"

export default function FacilitiesSection() {
  // Translation
  const t = useTranslations("ServiceFacilities")
  // Variables
  const equipment = WORKSHOP_EQUIPMENT.map((key) => t(`equipment.${key}`))

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="type-eyebrow-md text-gold">{t("eyebrow")}</p>

            <h2 className="mt-4 type-heading-xl text-balance text-brand md:type-display-md">
              {t("title")}
            </h2>

            <p className="mt-4 type-body-md text-content">{t("description")}</p>

            <div className="mt-6">
              <FacilityList items={equipment} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <WorkshopCapabilities />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
