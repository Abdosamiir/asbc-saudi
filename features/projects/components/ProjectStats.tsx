import { useTranslations } from "next-intl"

import { StatItem } from "./StatItem"
import { projectStats } from "./data/project-stats"

export default function ProjectStats() {
  // Translation
  const t = useTranslations("ProjectStats")

  return (
    <section
      aria-label={t("ariaLabel")}
      className="bg-surface-sunken py-16 md:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {projectStats.map((stat) => (
            <StatItem key={stat.key} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
