import Reveal from "@/shared/components/Reveal"

/**
 * Reserved frame for the Riyadh location map. The Figma design leaves the
 * panel empty, so it stays an outlined placeholder until a map is embedded.
 */
export default function LocationMapSection() {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div
            aria-hidden
            className="h-64 rounded-2xl border border-border md:h-100"
          />
        </Reveal>
      </div>
    </section>
  )
}
