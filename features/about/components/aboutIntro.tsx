import CountUp from "@/features/home/components/countup"

const stats = [
  {
    value: 35,
    suffix: "+",
    label: "COMPLETED PROJECTS",
  },
  {
    value: 2016,
    suffix: "",
    label: "YEAR ESTABLISHED",
  },
  {
    value: 20,
    suffix: "+",
    label: "INDUSTRIES SERVED",
  },
  {
    value: 460,
    suffix: "m",
    label: (
      <>
        DEEPEST PUMP
        <br />
        INSTALLATION
      </>
    ),
  },
  {
    value: 6,
    suffix: "",
    label: "SERVICE DIVISIONS",
  },
]

export default function AboutIntro() {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* Left Side */}
        <div>
          <p className="mb-4 type-eyebrow-md text-gold">01 - ABOUT</p>

          <h2 className="max-w-xl type-heading-xl text-balance text-heading md:type-display-md">
            Built on Precision. Grown on Trust.
          </h2>

          <p className="mt-8 max-w-xl type-body-md text-muted-foreground">
            Arabian Solutions Beacon Est. was founded in Riyadh with a singular
            commitment: deliver world-class industrial contracting services
            through two specialized divisions — a precision welding and
            machining workshop, and a field operations arm covering pumping
            systems, electromechanical installations, and structural
            fabrication. Our specialized technical team operates with
            military-grade precision across Saudi Arabia’s most demanding
            infrastructure environments — from deep-well pump installations at
            460m depth to curtain wall systems at Lulu Hypermarket Riyadh.
          </p>

          <div className="mt-8 h-0.5 w-10 bg-accent-gold" />

          <p className="mt-6 max-w-xl font-serif text-lg leading-7 font-semibold text-brand italic">
            “Aspire to be the pioneer in providing best-in-class welding
            services and a recognized contributor to the Kingdom&apos;s growth.”
          </p>
        </div>

        {/* Right Side - Same Cards Style as Home */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex min-h-44 min-w-0 flex-col items-center justify-center rounded-xl border border-line-brand/40 bg-surface-raised p-4 text-center"
            >
              <div className="flex items-center type-display-md text-brand xl:type-display-lg">
                <CountUp from={0} to={stat.value} duration={1} startWhen />

                {stat.suffix && <span>{stat.suffix}</span>}
              </div>

              <div className="my-4 h-0.5 w-10 bg-accent-gold" />

              <p className="type-eyebrow-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
