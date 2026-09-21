import { StatItem } from "./StatItem"
import { projectStats } from "./data/project-stats"

export default function ProjectStats() {
  return (
    <section
      aria-label="Project track record in numbers"
      className="bg-surface-sunken py-16 md:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {projectStats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
