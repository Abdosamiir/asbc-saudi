import { useTranslations } from "next-intl"

import { Card, CardContent } from "@/shared/components/ui/card"

import type { QaStep } from "../data/quality"

type QaStepCardProps = {
  step: QaStep
}

/** One stage of the QA process, with its numeral watermarked in the corner. */
export default function QaStepCard({ step }: QaStepCardProps) {
  // Translation
  const t = useTranslations("QualityProcess")

  return (
    <Card className="h-full gap-0 rounded-2xl border border-border bg-surface-raised py-0 ring-0 transition-colors duration-300 hover:border-line-brand/25">
      <CardContent className="relative h-full p-6 pt-16">
        <span
          aria-hidden
          className="absolute end-4 top-4 font-mono text-4xl font-bold text-gold/20"
        >
          {step.numeral}
        </span>

        <h3 className="type-heading-sm text-brand">
          {t(`steps.${step.key}.title`)}
        </h3>

        <p className="mt-2 type-body-sm text-muted-foreground">
          {t(`steps.${step.key}.description`)}
        </p>
      </CardContent>
    </Card>
  )
}
