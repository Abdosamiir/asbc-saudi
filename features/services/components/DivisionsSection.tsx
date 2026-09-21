"use client"

import { useState } from "react"
import BuildingEnvelopeNote from "./BuildingEnvelopeNote"
import DivisionDetails from "./DivisionDetails"
import DivisionTab from "./DivisionTab"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { DIVISIONS } from "../data/divisions"

export default function DivisionsSection() {
  const [activeIndex, setActiveIndex] = useState(DIVISIONS.length - 1)
  const activeDivision = DIVISIONS[activeIndex]

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const step =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0

    if (step === 0) return

    event.preventDefault()
    const next = (activeIndex + step + DIVISIONS.length) % DIVISIONS.length
    setActiveIndex(next)
    document.getElementById(`division-tab-${DIVISIONS[next].id}`)?.focus()
  }

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Services"
            title="Six Specialized Divisions"
            description="From the workshop floor to a Saudi Aramco pipeline — ASBC operates across the full industrial value chain."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid items-stretch gap-6 md:mt-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-8">
            <div
              role="tablist"
              aria-label="ASBC service divisions"
              aria-orientation="vertical"
              onKeyDown={handleKeyDown}
              className="flex flex-col gap-2"
            >
              {DIVISIONS.map((division, index) => (
                <DivisionTab
                  key={division.id}
                  number={division.number}
                  title={division.title}
                  isActive={index === activeIndex}
                  onSelect={() => setActiveIndex(index)}
                  tabId={`division-tab-${division.id}`}
                  panelId={`division-panel-${division.id}`}
                />
              ))}
            </div>

            <DivisionDetails
              division={activeDivision}
              tabId={`division-tab-${activeDivision.id}`}
              panelId={`division-panel-${activeDivision.id}`}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <BuildingEnvelopeNote />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
