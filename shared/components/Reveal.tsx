"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { cn } from "@/shared/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Seconds to wait before this element animates in. */
  delay?: number
  /** Pixels the element travels while fading in. */
  distance?: number
}

/**
 * Fades and lifts its children in the first time they scroll into view.
 *
 * `ScrollReveal` in the root layout already reveals whole `<section>`s; this is
 * the finer-grained companion for the blocks inside one — headings, grids, and
 * cards — so they arrive in sequence instead of all at once.
 *
 * Renders without any animation when the visitor prefers reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "motion-reduce:transform-none! motion-reduce:opacity-100!",
        className
      )}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
