import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"

import PillarPill from "./PillarPill"
import { VISION_PILLARS } from "../data/quality"

/** Closing statement: the company vision and the pillars it rests on. */
export default function VisionStatement() {
  // Translation
  const t = useTranslations("QualityVision")

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="relative mx-auto max-w-4xl">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[200px] leading-none text-brand/10"
            >
              &ldquo;
            </span>

            {/* Arabic has no true italic; a slanted serif fallback reads poorly. */}
            <blockquote className="relative text-center font-serif text-[28px] leading-9 font-normal text-brand italic md:text-4xl md:leading-10 rtl:font-sans rtl:not-italic">
              {t("statement")}
            </blockquote>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-12">
            {VISION_PILLARS.map((pillar) => (
              <li key={pillar}>
                <PillarPill label={t(`pillars.${pillar}`)} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
