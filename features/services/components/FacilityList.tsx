"use client"

import { motion, useReducedMotion } from "motion/react"

type FacilityListProps = {
  items: string[]
}

/** Bulleted equipment list beside the facilities copy. */
export default function FacilityList({ items }: FacilityListProps) {
  const reduceMotion = useReducedMotion()

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => (
        <motion.li
          key={item}
          className="flex items-start gap-3 motion-reduce:transform-none! motion-reduce:opacity-100!"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : index * 0.06,
            ease: "easeOut",
          }}
        >
          <span
            aria-hidden
            className="mt-2 size-2 shrink-0 rounded-full bg-interactive"
          />

          <span className="type-body-md text-content">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}
