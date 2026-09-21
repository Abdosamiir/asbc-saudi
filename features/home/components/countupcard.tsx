import { useTranslations, type Messages } from "next-intl"
import CountUp from "@/features/home/components/countup"

type StatKey = keyof Messages["HomeTrackRecord"]["stats"]
type UnitKey = keyof Messages["Units"]

const stats: { key: StatKey; value: number; unit?: UnitKey }[] = [
  { key: "completedProjects", value: 35, unit: "plus" },
  { key: "yearEstablished", value: 2016 },
  { key: "industriesServed", value: 20, unit: "plus" },
  { key: "deepestPumpInstallation", value: 460, unit: "metres" },
  { key: "serviceDivisions", value: 6 },
]

const CountUpCards = () => {
  // Translation
  const t = useTranslations("HomeTrackRecord")
  const tUnits = useTranslations("Units")

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">{t("eyebrow")}</p>

          <h2 className="type-heading-xl text-balance text-heading md:type-display-md">
            {t("title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="flex min-h-44 min-w-0 flex-col items-center justify-center rounded-xl border border-line-brand/40 bg-surface-raised p-4 text-center"
            >
              <div className="flex items-center type-display-md text-brand xl:type-display-lg">
                <CountUp from={0} to={stat.value} duration={1} startWhen />
                {stat.unit && <span>{tUnits(stat.unit)}</span>}
              </div>

              <div className="my-4 h-0.5 w-10 bg-accent-gold" />

              <p className="type-eyebrow-sm text-muted-foreground">
                {t(`stats.${stat.key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountUpCards
