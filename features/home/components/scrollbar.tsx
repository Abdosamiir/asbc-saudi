const companies = [
  "NWC",
  "NOMAC",
  "Saudi Electricity",
  "Royal Commission AlUla",
  "KAFD",
  "Maaden",
  "Civil Works Company",
  "POSCO E&C",
  "NWWC",
  "Toledo Arabia",
]

export default function TextCarousel() {
  return (
    <section
      aria-label="Our clients"
      className="w-full min-w-0 overflow-hidden border-b border-line bg-surface py-8 font-sans"
    >
      <p className="container mb-6 text-center type-eyebrow-md text-muted-foreground">
        TRUSTED BY SAUDI ARABIA&apos;S LEADING ORGANIZATIONS
      </p>
      <div className="flex overflow-hidden" dir="ltr">
        {/* Equal-width groups meet at the loop boundary without a reset gap. */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex w-max min-w-full shrink-0 animate-[client-marquee_35s_linear_infinite] items-center justify-around motion-reduce:animate-none"
          >
            {companies.map((company) => (
              <li
                key={company}
                className="shrink-0 px-6 type-label-md whitespace-nowrap text-heading"
              >
                {company}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
