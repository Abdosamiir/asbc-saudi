import { useTranslations, type Messages } from "next-intl"

type CompanyKey = keyof Messages["HomeClients"]["companies"]

const COMPANIES: CompanyKey[] = [
  "nwc",
  "nomac",
  "saudiElectricity",
  "royalCommissionAlUla",
  "kafd",
  "maaden",
  "civilWorks",
  "posco",
  "nwwc",
  "toledoArabia",
]

export default function TextCarousel() {
  // Translation
  const t = useTranslations("HomeClients")

  return (
    <section
      aria-label={t("ariaLabel")}
      className="w-full min-w-0 overflow-hidden border-b border-line bg-surface py-8 font-sans"
    >
      <p className="container mb-6 text-center type-eyebrow-md text-muted-foreground">
        {t("title")}
      </p>
      {/* The marquee track scrolls the same way in both languages. */}
      <div className="flex overflow-hidden" dir="ltr">
        {/* Equal-width groups meet at the loop boundary without a reset gap. */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex w-max min-w-full shrink-0 animate-[client-marquee_35s_linear_infinite] items-center justify-around motion-reduce:animate-none"
          >
            {COMPANIES.map((company) => (
              <li
                key={company}
                className="shrink-0 px-6 type-label-md whitespace-nowrap text-heading"
              >
                {t(`companies.${company}`)}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
