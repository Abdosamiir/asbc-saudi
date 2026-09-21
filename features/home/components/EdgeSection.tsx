import { BadgeCheck, FlaskConical, Landmark } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useTranslations, type Messages } from "next-intl"
import EdgeCard from "./EdgeCard"

type EdgeKey = keyof Messages["HomeEdge"]["items"]

const edges: { key: EdgeKey; icon: LucideIcon }[] = [
  { key: "certifiedWelding", icon: BadgeCheck },
  { key: "deepWell", icon: FlaskConical },
  { key: "trustedInstitutions", icon: Landmark },
]

export default function EdgeSection() {
  // Translation
  const t = useTranslations("HomeEdge")

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">{t("eyebrow")}</p>

          <h2 className="type-heading-xl text-balance text-heading md:type-display-md">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {edges.map((edge) => (
            <EdgeCard
              key={edge.key}
              icon={edge.icon}
              title={t(`items.${edge.key}.title`)}
              description={t(`items.${edge.key}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
