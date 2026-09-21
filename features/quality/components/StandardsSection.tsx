import Reveal from "@/shared/components/Reveal"
import SectionHeading from "@/shared/components/SectionHeading"

import StandardsColumn from "./StandardsColumn"
import TracedList from "./TracedList"
import {
  KEY_CERTIFICATIONS,
  QUALITY_MANAGEMENT_SUMMARY,
  REGISTRATIONS,
} from "../data/quality"

/** "Quality is Not an Option. It's Our Architecture." */
export default function StandardsSection() {
  return (
    <section className="surface-inverse py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Standards"
            title="Quality is Not an Option. It's Our Architecture."
            tone="navy"
            className="max-w-none"
          />
        </Reveal>

        <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-3 lg:gap-8">
          <Reveal>
            <StandardsColumn title="Certifications">
              <TracedList items={REGISTRATIONS} />
            </StandardsColumn>
          </Reveal>

          <Reveal delay={0.08}>
            <StandardsColumn title="Quality Management">
              <p className="type-body-sm text-content-muted">
                {QUALITY_MANAGEMENT_SUMMARY}
              </p>
            </StandardsColumn>
          </Reveal>

          <Reveal delay={0.16}>
            <StandardsColumn title="Key Certifications (Earned)">
              <TracedList items={KEY_CERTIFICATIONS} tone="blue" />
            </StandardsColumn>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
