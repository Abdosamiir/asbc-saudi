"use client"

import { useTranslations } from "next-intl"
import { Button } from "../ui/button"

export default function BackToTop() {
  // Translation
  const t = useTranslations("Footer")
  // Functions
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      type="button"
      variant="outline-on-navy"
      size="icon"
      onClick={handleBackToTop}
      aria-label={t("backToTop")}
      className="shrink-0"
    >
      ↑
    </Button>
  )
}
