import Reveal from "@/shared/components/Reveal"
import SectionHeading from "@/shared/components/SectionHeading"

import StrategicClientCard from "./StrategicClientCard"
import { STRATEGIC_CLIENTS } from "../data/clients"

/** "Strategic Client Relationships" — six key accounts on the navy band. */
export default function StrategicClientsSection() {
  return (
    <section className="surface-inverse py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Key Partners"
            title="Strategic Client Relationships"
            tone="navy"
          />
        </Reveal>

        <ul className="mt-8 grid auto-rows-fr gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {STRATEGIC_CLIENTS.map((client, index) => (
            <li key={client.name} className="h-full">
              <Reveal delay={index * 0.06} className="h-full">
                <StrategicClientCard client={client} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
