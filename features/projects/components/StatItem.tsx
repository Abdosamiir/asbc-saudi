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
  const { value, suffix = "", label } = stat

  return (
    <div className="flex flex-col gap-2 text-center">
      <p className="type-display-md text-brand md:type-display-lg">
        <span className="sr-only">{`${value}${suffix}`}</span>

        <span aria-hidden="true">
          <CountUp from={0} to={value} duration={1} />
          {suffix}
        </span>
      </p>

      <p className="type-body-sm text-muted-foreground">{label}</p>
    </div>
  )
}
