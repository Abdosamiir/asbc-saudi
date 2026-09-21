import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"
import SectionHeading from "@/shared/components/SectionHeading"

import SectorPill from "./SectorPill"
import { CLIENT_SECTORS } from "../data/clients"

/** "Trusted Across Saudi Arabia's Critical Sectors." */
export default function SectorsSection() {
  // Translation
  const t = useTranslations("ClientSectors")

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            className="max-w-none"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-12">
            {CLIENT_SECTORS.map((sector) => (
              <li key={sector}>
                <SectorPill label={t(`sectors.${sector}`)} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center type-body-md text-muted-foreground">
            {t("description")}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
