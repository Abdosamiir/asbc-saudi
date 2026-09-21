import { BadgeCheck, FlaskConical, Landmark } from "lucide-react"
import EdgeCard from "./EdgeCard"

const edges = [
  {
    icon: BadgeCheck,
    title: "API 1104 Certified Welding",
    description:
      "Our welders operate under API 1104 & ASME IX. Radiography and dye penetrant testing on all structural welds. Zero-defect philosophy.",
  },
  {
    icon: FlaskConical,
    title: "Deep-Well Specialists to 460m",
    description:
      "From 10HP domestic submersibles to 450HP/4160V high-voltage units at 460 metres — we've installed and commissioned them all.",
  },
  {
    icon: Landmark,
    title: "Trusted by Saudi Arabia's Top Institutions",
    description:
      "NWC, Saudi Electricity, NOMAC, Royal Commission for AlUla, Maaden, KAFD — our client list is our credential.",
  },
]
export default function EdgeSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">OUR EDGE</p>

          <h2 className="type-heading-xl text-balance text-heading md:type-display-md">
            What Makes ASBC Different
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {edges.map((edge) => (
            <EdgeCard
              key={edge.title}
              icon={edge.icon}
              title={edge.title}
              description={edge.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
