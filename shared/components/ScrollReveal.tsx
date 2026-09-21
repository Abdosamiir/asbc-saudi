"use client"

import { animate, inView, useReducedMotion } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
}

/** Every page in the app composes its content from top-level `<section>`s. */
const TARGET_SELECTOR = "section:not([data-revealed])"

const DISTANCE = 16
const DURATION = 0.55
const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Hides each section up front in CSS — so the resting state is already in the
 * server-rendered markup and nothing flashes before hydration — then fades and
 * lifts it back in the first time it scrolls into view.
 *
 * Sections are marked `data-revealed` as they animate, which drops them out of
 * both the selector and the CSS rule, so each one only ever reveals once.
 */
const REVEAL_CSS = `
[data-scroll-reveal] section:not([data-revealed]) {
  opacity: 0;
  transform: translateY(${DISTANCE}px);
  will-change: opacity, transform;
}
@media (prefers-reduced-motion: reduce) {
  [data-scroll-reveal] section {
    opacity: 1 !important;
    transform: none !important;
  }
}
`

export default function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  // Re-scan after a client-side navigation swaps in a new page's sections.
  const pathname = usePathname()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(TARGET_SELECTOR)
    )

    if (reduceMotion) {
      targets.forEach((el) => el.setAttribute("data-revealed", ""))
      return
    }

    const stops = targets.map((el) =>
      inView(
        el,
        () => {
          // Guard so a section that scrolls back into view doesn't replay.
          if (el.hasAttribute("data-revealed")) return
          el.setAttribute("data-revealed", "")

          animate(
            el,
            { opacity: [0, 1], y: [DISTANCE, 0] },
            { duration: DURATION, ease: EASE }
          )
        },
        // "some" rather than a ratio: a ratio taller than the viewport can
        // never be satisfied, which would strand a long section at opacity 0.
        // The negative bottom margin holds the trigger back to a natural point.
        { amount: "some", margin: "0px 0px -12% 0px" }
      )
    )

    return () => stops.forEach((stop) => stop())
  }, [pathname, reduceMotion])

  return (
    <>
      <style href="scroll-reveal" precedence="default">
        {REVEAL_CSS}
      </style>
      <noscript>
        <style>{`[data-scroll-reveal] section{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <div ref={rootRef} data-scroll-reveal className={className}>
        {children}
      </div>
    </>
  )
}
