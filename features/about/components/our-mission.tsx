import { useTranslations, type Messages } from "next-intl"
import { Card, CardContent } from "@/shared/components/ui/card"

type MissionKey = keyof Messages["AboutMission"]["items"]

const MISSION_CARDS: MissionKey[] = [
  "caringApproach",
  "competitiveServices",
  "stakeholderPartnerships",
  "qualitySafety",
]

export default function OurMission() {
  // Translation
  const t = useTranslations("AboutMission")

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <h2 className="mb-4 type-eyebrow-md text-gold">{t("eyebrow")}</h2>

          <p className="type-body-lg text-muted-foreground">{t("intro")}</p>
        </div>

        {/* Mission Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {MISSION_CARDS.map((card) => (
            <Card
              key={card}
              className="h-full rounded-xl border border-line-brand/40 bg-surface-raised py-0 shadow-none ring-0"
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-3 type-heading-sm text-heading">
                  {t(`items.${card}.title`)}
                </h3>

                <p className="type-body-md text-muted-foreground">
                  {t(`items.${card}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
