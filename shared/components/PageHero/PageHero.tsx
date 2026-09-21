import StrokeText from "@/shared/components/StrokeText"

type HeaderTitleProps = {
  eyebrow: string
  title: string
  /** Optional lead under the title; pages without one keep the tighter hero. */
  description?: string
}

export default function HeaderTitle({
  eyebrow,
  title,
  description,
}: HeaderTitleProps) {
  return (
    <section className="relative isolate overflow-hidden surface-gradient-ink py-16 md:py-24">
      {/* Brand wash: a single off-centre glow so the panel is not a flat fill. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-interactive/20 blur-3xl"
      />

      <div className="container flex flex-col items-center justify-center text-center">
        <p className="mb-5 type-eyebrow-md text-gold">{eyebrow}</p>

        {/* The h1 keeps the heading semantics and hands down the display face;
            StrokeText draws the glyphs and carries the accessible name. */}
        <h1 className="w-full max-w-4xl">
          <StrokeText
            text={title}
            strokeColor="var(--content-gold)"
            fillColor="var(--content-heading)"
            strokeWidth={1.4}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={72}
            fontWeight={800}
            letterSpacing={0}
          />
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl type-body-md text-pretty text-content-muted sm:type-body-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
