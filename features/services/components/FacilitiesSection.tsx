import FacilityList from "./FacilityList"
import Reveal from "./Reveal"
import WorkshopCapabilities from "./WorkshopCapabilities"
import { WORKSHOP_EQUIPMENT } from "../data/facilities"

export default function FacilitiesSection() {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="type-eyebrow-md text-gold">
              Equipment &amp; Machines
            </p>

            <h2 className="mt-4 type-heading-xl text-balance text-brand md:type-display-md">
              State-of-the-Art Facilities
            </h2>

            <p className="mt-4 type-body-md text-content">
              Our workshop is equipped with modern CNC machines, lathe
              equipment, and specialized welding stations capable of handling
              projects from small precision parts to large industrial
              fabrications.
            </p>

            <div className="mt-6">
              <FacilityList items={WORKSHOP_EQUIPMENT} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <WorkshopCapabilities />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
