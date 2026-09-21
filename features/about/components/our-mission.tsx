import { Card, CardContent } from "@/shared/components/ui/card"

const missionCards = [
  {
    title: "Caring Approach",
    description:
      "Promoting our caring and humane approach by delivering best of class services.",
  },
  {
    title: "Competitive Services",
    description:
      "Delivering competitive services that meet multi-industries requirements.",
  },
  {
    title: "Stakeholder Partnerships",
    description:
      "Partnering with our stakeholders for mutual growth and success.",
  },
  {
    title: "Quality & Safety",
    description:
      "Operating at the highest levels of quality, safety and environmental standards.",
  },
]

export default function OurMission() {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <h2 className="mb-4 type-eyebrow-md text-gold">OUR MISSION</h2>

          <p className="type-body-lg text-muted-foreground">
            Our purpose is to deliver customer centric services covering the
            entire value chain to serve the core businesses of multi-industries
            through:
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {missionCards.map((card) => (
            <Card
              key={card.title}
              className="h-full rounded-xl border border-line-brand/40 bg-surface-raised py-0 shadow-none ring-0"
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-3 type-heading-sm text-heading">
                  {card.title}
                </h3>

                <p className="type-body-md text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
