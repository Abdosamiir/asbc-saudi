import {
  Shield,
  UsersRound,
  UserRound,
  CircleCheck,
  Layers,
  FileText,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useTranslations, type Messages } from "next-intl"

type PrincipleKey = keyof Messages["AboutPrinciples"]["items"]

const principles: { key: PrincipleKey; icon: LucideIcon }[] = [
  { key: "integrity", icon: Shield },
  { key: "respect", icon: UsersRound },
  { key: "customerCentric", icon: UserRound },
  { key: "responsibility", icon: CircleCheck },
  { key: "sustainability", icon: Layers },
  { key: "accountability", icon: FileText },
]

export default function PrinciplesSection() {
  // Translation
  const t = useTranslations("AboutPrinciples")

  return (
    <section className="surface-inverse py-16 md:py-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">{t("eyebrow")}</p>

          <h2 className="type-heading-xl text-balance text-content md:type-display-md">
            {t("title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <div
                key={principle.key}
                className="h-full rounded-xl border border-line bg-interactive-ghost p-6 transition-colors duration-200 hover:border-accent-gold/50 md:p-8"
              >
                {/* Icon */}
                <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-accent-gold/10">
                  <Icon size={24} strokeWidth={1.7} className="text-gold" />
                </div>

                {/* Title */}
                <h3 className="mb-3 type-heading-sm text-content">
                  {t(`items.${principle.key}.title`)}
                </h3>

                {/* Description */}
                <p className="type-body-md text-content-muted">
                  {t(`items.${principle.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
