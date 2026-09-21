import { useTranslations, type Messages } from "next-intl"
import CountUp from "@/features/home/components/countup"

type StatKey = keyof Messages["AboutIntro"]["stats"]
type UnitKey = keyof Messages["Units"]

const stats: { key: StatKey; value: number; unit?: UnitKey }[] = [
  { key: "completedProjects", value: 35, unit: "plus" },
  { key: "yearEstablished", value: 2016 },
  { key: "industriesServed", value: 20, unit: "plus" },
  { key: "deepestPumpInstallation", value: 460, unit: "metres" },
  { key: "serviceDivisions", value: 6 },
]

export default function AboutIntro() {
  // Translation
  const t = useTranslations("AboutIntro")
  const tUnits = useTranslations("Units")

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* Left Side */}
        <div>
          <p className="mb-4 type-eyebrow-md text-gold">{t("eyebrow")}</p>

          <h2 className="max-w-xl type-heading-xl text-balance text-heading md:type-display-md">
            {t("title")}
          </h2>

          <p className="mt-8 max-w-xl type-body-md text-muted-foreground">
            {t("body")}
          </p>

          <div className="mt-8 h-0.5 w-10 bg-accent-gold" />

          {/* Arabic has no true italic; a slanted serif fallback reads poorly. */}
          <p className="mt-6 max-w-xl font-serif text-lg leading-7 font-semibold text-brand italic rtl:font-sans rtl:not-italic">
            {t("quote")}
          </p>
        </div>

        {/* Right Side - Same Cards Style as Home */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
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
                {t.rich(`stats.${stat.key}`, { br: () => <br /> })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
