import { useTranslations } from "next-intl"

/** Eyebrow, headline, and lead beside the inquiry form. */
export default function ContactIntro() {
  // Translation
  const t = useTranslations("ContactIntro")

  return (
    <div>
      <p className="type-eyebrow-md text-gold">{t("eyebrow")}</p>

      <h2 className="mt-4 type-heading-xl text-balance text-brand md:type-display-md">
        {t("title")}
      </h2>

      <p className="mt-4 max-w-xl type-body-md text-muted-foreground md:type-body-lg">
        {t("description")}
      </p>
    </div>
  )
}
