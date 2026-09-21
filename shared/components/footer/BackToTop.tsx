"use client"

import { Button } from "../ui/button"

export default function BackToTop() {
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
      aria-label="Back to top"
      className="shrink-0"
    >
      ↑
    </Button>
  )
}
