import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"
import SectionHeading from "@/shared/components/SectionHeading"

import AllClientsGrid from "./AllClientsGrid"
import ClientCategoryGroup from "./ClientCategoryGroup"
import { CLIENT_CATEGORIES } from "../data/clients"

/** "The Organizations That Trust ASBC" — clients by category, then the roster. */
export default function OrganizationsSection() {
  // Translation
  const t = useTranslations("ClientOrganizations")

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

        <div className="mt-8 flex flex-col gap-10 md:mt-12 md:gap-12">
          {CLIENT_CATEGORIES.map((category, index) => (
            <Reveal key={category.key} delay={index * 0.05}>
              <ClientCategoryGroup category={category} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <AllClientsGrid />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
