import { useTranslations } from "next-intl"

import CountUp from "@/features/home/components/countup"

import type { ProjectStat } from "./data/project-stats"

type StatItemProps = {
  stat: ProjectStat
}

/**
 * A single figure in the metrics band: a counted-up number with its caption.
 *
 * `CountUp` only writes the digits once it is on screen, so the full figure is
 * mirrored in a screen-reader-only copy and the animated one is hidden.
 */
export function StatItem({ stat }: StatItemProps) {
  // Translation
  const t = useTranslations("ProjectStats")
  const tUnits = useTranslations("Units")
  // Variables
  const { key, value, unit } = stat
  const suffix = unit ? tUnits(unit) : ""

  return (
    <div className="flex flex-col gap-2 text-center">
      <p className="type-display-md text-brand md:type-display-lg">
        <span className="sr-only">{`${value}${suffix}`}</span>

        <span aria-hidden="true">
          <CountUp from={0} to={value} duration={1} />
          {suffix}
        </span>
      </p>

      <p className="type-body-sm text-muted-foreground">{t(`stats.${key}`)}</p>
    </div>
  )
}
