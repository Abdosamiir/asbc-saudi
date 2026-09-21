import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"
import SectionHeading from "@/shared/components/SectionHeading"

import StandardsColumn from "./StandardsColumn"
import TracedList from "./TracedList"
import { KEY_CERTIFICATIONS, REGISTRATIONS } from "../data/quality"

/** "Quality is Not an Option. It's Our Architecture." */
export default function StandardsSection() {
  // Translation
  const t = useTranslations("QualityStandards")
  // Variables
  const registrations = REGISTRATIONS.map((key) => t(`registrations.${key}`))
  const keyCertifications = KEY_CERTIFICATIONS.map((key) =>
    t(`keyCertifications.${key}`)
  )

  return (
    <section className="surface-inverse py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            tone="navy"
            className="max-w-none"
          />
        </Reveal>

        <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-3 lg:gap-8">
          <Reveal>
            <StandardsColumn title={t("certificationsTitle")}>
              <TracedList items={registrations} />
            </StandardsColumn>
          </Reveal>

          <Reveal delay={0.08}>
            <StandardsColumn title={t("qualityManagementTitle")}>
              <p className="type-body-sm text-content-muted">
                {t("qualityManagementSummary")}
              </p>
            </StandardsColumn>
          </Reveal>

          <Reveal delay={0.16}>
            <StandardsColumn title={t("keyCertificationsTitle")}>
              <TracedList items={keyCertifications} tone="blue" />
            </StandardsColumn>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
