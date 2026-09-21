"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Card, CardContent } from "@/shared/components/ui/card"
import CapabilityList from "./CapabilityList"
import type { Division } from "../data/divisions"

type DivisionDetailsProps = {
  division: Division
  panelId: string
  tabId: string
}

/** Right-hand card describing the currently selected division. */
export default function DivisionDetails({
  division,
  panelId,
  tabId,
}: DivisionDetailsProps) {
  const reduceMotion = useReducedMotion()

  return (
    <Card className="h-full min-w-0 border border-border bg-surface-raised shadow-none ring-0 sm:[--card-spacing:--spacing(8)]">
      <CardContent
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId}
        tabIndex={0}
        className="focus-visible:outline-none"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={division.id}
            className="motion-reduce:transform-none! motion-reduce:opacity-100!"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
          >
            <div className="flex items-start gap-3">
              <span className="shrink-0 font-mono text-2xl leading-8 text-gold">
                {division.number}
              </span>

              <h3 className="type-heading-lg text-balance text-brand">
                {division.title}
              </h3>
            </div>

            <p className="mt-6 type-body-md text-content">
              {division.description}
            </p>

            <div aria-hidden className="mt-6 h-0.5 w-10 bg-accent-gold" />

            <h4 className="mt-6 font-heading text-sm leading-5 font-bold tracking-[0.04375rem] text-muted-foreground uppercase">
              Capabilities
            </h4>

            <div className="mt-4">
              <CapabilityList
                key={division.id}
                capabilities={division.capabilities}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
