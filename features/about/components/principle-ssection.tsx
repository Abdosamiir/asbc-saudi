import {
  Shield,
  UsersRound,
  UserRound,
  CircleCheck,
  Layers,
  FileText,
} from "lucide-react"

const principles = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Making choices informed by honest intentions, and that leads to correct actions.",
  },
  {
    icon: UsersRound,
    title: "Respect",
    description:
      "Promoting a culture of decency and concern for those around us by setting the expectation for all our staff that they treat others with utmost care and compassion.",
  },
  {
    icon: UserRound,
    title: "Customer Centric",
    description:
      "Putting our customers first, by demonstrating our understanding of their service needs and priorities.",
  },
  {
    icon: CircleCheck,
    title: "Responsibility",
    description:
      "Taking pride in delivering consistently great service to our customers and stakeholders, driven by a firm dedication and commitment to their interests.",
  },
  {
    icon: Layers,
    title: "Sustainability",
    description:
      "Growing our business with the support of lasting partnerships, great customer service, and a concern for the environment.",
  },
  {
    icon: FileText,
    title: "Accountability",
    description:
      "Creating a culture of transparency and a foundation on top of which all our actions and decisions are justified.",
  },
]

export default function PrinciplesSection() {
  return (
    <section className="surface-inverse py-16 md:py-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">OUR FOUNDATION</p>

          <h2 className="type-heading-xl text-balance text-content md:type-display-md">
            Six Principles That Drive Everything
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <div
                key={principle.title}
                className="h-full rounded-xl border border-line bg-interactive-ghost p-6 transition-colors duration-200 hover:border-accent-gold/50 md:p-8"
              >
                {/* Icon */}
                <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-accent-gold/10">
                  <Icon size={24} strokeWidth={1.7} className="text-gold" />
                </div>

                {/* Title */}
                <h3 className="mb-3 type-heading-sm text-content">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="type-body-md text-content-muted">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
