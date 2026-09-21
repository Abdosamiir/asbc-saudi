import CountUp from "@/features/home/components/countup"

const stats = [
  { value: 35, suffix: "+", label: "Completed projects" },
  { value: 2016, suffix: "", label: "Year established" },
  { value: 20, suffix: "+", label: "Industries served" },
  { value: 460, suffix: "m", label: "Deepest pump installation" },
  { value: 6, suffix: "", label: "Service divisions" },
]

const CountUpCards = () => {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 type-eyebrow-md text-gold">OUR TRACK RECORD</p>

          <h2 className="type-heading-xl text-balance text-heading md:type-display-md">
            Numbers That Speak
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
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

export default CountUpCards
