import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"
import SectionHeading from "@/shared/components/SectionHeading"

import QaStepCard from "./QaStepCard"
import { QA_STEPS } from "../data/quality"

/** "Our QA Process" — the four inspection stages. */
export default function QaProcessSection() {
  // Translation
  const t = useTranslations("QualityProcess")

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="max-w-xl"
          />
        </Reveal>

        <ul className="mt-8 grid auto-rows-fr gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
          {QA_STEPS.map((step, index) => (
            <li key={step.numeral} className="h-full">
              <Reveal delay={index * 0.08} className="h-full">
                <QaStepCard step={step} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
