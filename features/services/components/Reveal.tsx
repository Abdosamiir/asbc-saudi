"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { cn } from "cn"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Seconds to wait before this element animates in. */
  delay?: number
}

/**
 * Fades and slides its children in the first time they scroll into view.
 * Collapses to a plain fade-free render when the visitor prefers reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "motion-reduce:transform-none! motion-reduce:opacity-100!",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
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
