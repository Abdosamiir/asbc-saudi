"use client"

import { motion, useReducedMotion } from "motion/react"

type CapabilityListProps = {
  capabilities: string[]
}

/** Two-column bulleted capability list inside the division details card. */
export default function CapabilityList({ capabilities }: CapabilityListProps) {
  const reduceMotion = useReducedMotion()

  return (
    <ul className="grid gap-x-3 gap-y-3 sm:grid-cols-2">
      {capabilities.map((capability, index) => (
        <motion.li
          key={capability}
          className="flex gap-3.5 motion-reduce:transform-none! motion-reduce:opacity-100!"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.3,
            delay: reduceMotion ? 0 : 0.06 + index * 0.035,
            ease: "easeOut",
          }}
        >
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-interactive"
          />

          <span className="type-body-sm text-content">{capability}</span>
        </motion.li>
      ))}
    </ul>
  )
}
