"use client"

import { useEffect, useRef, useState } from "react"
import { Button, type ButtonProps } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"

const variants: ButtonProps["variant"][] = [
  "primary",
  "secondary",
  "accent",
  "ghost",
  "danger",
]
/* Layer 1. Fixed values. Listed here for reference only — a component that
   reaches for one of these has skipped the semantic layer. */
const ramps: Array<[string, string[]]> = [
  [
    "Saudi blue",
    [
      "bg-saudi-50",
      "bg-saudi-100",
      "bg-saudi-200",
      "bg-saudi-300",
      "bg-saudi-400",
      "bg-saudi-500",
      "bg-saudi-600",
      "bg-saudi-700",
      "bg-saudi-800",
      "bg-saudi-900",
      "bg-saudi-950",
    ],
  ],
  [
    "Signal gold",
    [
      "bg-gold-50",
      "bg-gold-100",
      "bg-gold-200",
      "bg-gold-300",
      "bg-gold-400",
      "bg-gold-500",
      "bg-gold-600",
      "bg-gold-700",
      "bg-gold-800",
    ],
  ],
  [
    "Steel",
    [
      "bg-steel-50",
      "bg-steel-100",
      "bg-steel-200",
      "bg-steel-300",
      "bg-steel-400",
      "bg-steel-500",
      "bg-steel-600",
      "bg-steel-700",
      "bg-steel-800",
      "bg-steel-900",
      "bg-steel-1000",
    ],
  ],
]

/* Layer 2. What components actually use. Each row re-resolves per theme and
   per surface scope, which is the whole point of the indirection. */
const contentTokens: Array<[string, string, string]> = [
  ["text-heading", "text-heading", "Section and card titles"],
  ["text-content", "text-content", "Body copy"],
  ["text-content-muted", "text-content-muted", "Supporting copy"],
  ["text-content-subtle", "text-content-subtle", "Metadata, captions"],
  ["text-brand", "text-brand", "Links and brand emphasis"],
  ["text-gold", "text-gold", "Eyebrows and accents"],
  ["text-positive", "text-positive", "Success"],
  ["text-caution", "text-caution", "Warning"],
  ["text-critical", "text-critical", "Error"],
]

const surfaceTokens: Array<[string, string]> = [
  ["bg-surface-sunken", "Page bands"],
  ["bg-surface", "Page base"],
  ["bg-surface-raised", "Cards"],
  ["bg-surface-overlay", "Popovers, sheets"],
  ["bg-interactive", "Primary action"],
  ["bg-accent-gold", "Accent action"],
]

/* Layer 2, scoped. Applying one of these rewrites the tokens for everything
   inside it, so the same child classes work on any field. */
const scopes: Array<[string, string]> = [
  ["surface-default", "Page palette"],
  ["surface-inverse", "Navy panel"],
  ["surface-brand", "Saudi blue panel"],
  ["surface-ink", "Deepest ink"],
]

export default function DesignSystemPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )

  return (
    <main className="container grid gap-16 py-16 md:py-24">
      <header className="grid gap-4">
        <p className="type-eyebrow-md text-gold">ASBC Saudi · Design system</p>
        <h1 className="type-display-md md:type-display-xl">
          Foundations & controls
        </h1>
        <p className="max-w-2xl type-body-lg text-content-muted">
          Colors, typography, and interactive component states. Tab through
          controls to inspect keyboard focus; hover and press to inspect
          interaction states.
        </p>
      </header>
      <section aria-labelledby="ramps" className="grid gap-4">
        <h2 id="ramps" className="type-heading-xl">
          1 · Primitives
        </h2>
        <p className="max-w-2xl type-body-md text-content-muted">
          Fixed tonal ramps. They never appear in a component — they only feed
          the semantic layer below, which is what lets a single class change
          meaning between themes.
        </p>
        {ramps.map(([name, steps]) => (
          <div key={name} className="grid gap-2">
            <p className="type-label-sm text-content-muted">{name}</p>
            <div className="flex overflow-hidden rounded-lg ring-1 ring-line">
              {steps.map((step) => (
                <div key={step} className={step + " h-12 flex-1"} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section aria-labelledby="semantic" className="grid gap-6">
        <h2 id="semantic" className="type-heading-xl">
          2 · Semantic tokens
        </h2>
        <p className="max-w-2xl type-body-md text-content-muted">
          Roles, not values. Toggle the theme and every swatch below re-resolves
          while keeping its contrast budget: body text at 4.5:1, controls and
          focus rings at 3:1.
        </p>

        <div className="grid gap-px overflow-hidden rounded-lg bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {contentTokens.map(([name, className, use]) => (
            <div key={name} className="grid gap-1 bg-surface-raised p-4">
              <p className={className + " type-heading-sm"}>Aa</p>
              <p className="type-data-md text-content">{name}</p>
              <p className="type-body-sm text-content-muted">{use}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {surfaceTokens.map(([className, use]) => (
            <div
              key={className}
              className="overflow-hidden rounded-lg ring-1 ring-line"
            >
              <div className={className + " h-16"} />
              <div className="grid gap-1 bg-surface-raised p-3">
                <p className="type-data-md text-content">{className}</p>
                <p className="type-body-xs text-content-muted">{use}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="scopes" className="grid gap-6">
        <h2 id="scopes" className="type-heading-xl">
          3 · Surface scopes
        </h2>
        <p className="max-w-2xl type-body-md text-content-muted">
          Each panel below carries the same four child classes. The scope
          rewrites the tokens underneath them, so nothing inside needs a{" "}
          <code className="type-data-md text-brand">dark:</code> override or a
          hand-tuned <code className="type-data-md text-brand">/70</code>{" "}
          opacity.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {scopes.map(([scope, label]) => (
            <div
              key={scope}
              className={
                scope + " grid gap-3 rounded-xl p-6 shadow-e2 ring-1 ring-line"
              }
            >
              <p className="type-eyebrow-sm text-gold">{label}</p>
              <p className="type-heading-sm text-heading">{scope}</p>
              <p className="type-body-sm text-content-muted">
                Supporting copy stays legible on every field.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="typography" className="grid gap-6">
        <h2 id="typography" className="type-heading-xl">
          Typography
        </h2>
        <p className="type-display-md text-balance sm:type-display-lg">
          Sora · Built on expertise.
        </p>
        <p className="type-body-md text-content-muted">
          DM Sans · Engineering solutions, delivered with care.
        </p>
        <p className="type-eyebrow-md">JetBrains Mono · Technical precision</p>
        <p className="type-data-bold">API 1104 / ISO 9001 / 2026</p>
      </section>
      <section aria-labelledby="buttons" className="grid gap-6">
        <h2 id="buttons" className="type-heading-xl">
          Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        {variants.map((variant) => (
          <div key={variant} className="grid gap-4 rounded-lg border p-6">
            <h3 className="type-heading-xs capitalize">{variant}</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant={variant}>Explore services</Button>
              <Button variant={variant} disabled>
                Unavailable
              </Button>
              <Button variant={variant} loading loadingText="Processing…" />
            </div>
          </div>
        ))}
        <div className="flex flex-wrap gap-4 rounded-lg surface-inverse p-6">
          <Button variant="primary-on-navy">Explore services</Button>
          <Button variant="outline-on-navy">Download profile</Button>
          <Button variant="accent-on-navy">Get in touch</Button>
          <Button variant="glass-on-navy">View projects</Button>
        </div>
        <div className="grid justify-items-start gap-2">
          <Button error="The request could not be completed. Please try again.">
            Retry request
          </Button>
        </div>
      </section>
      <section aria-labelledby="inputs" className="grid gap-6">
        <h2 id="inputs" className="type-heading-xl">
          Inputs
        </h2>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <Input
            label="Company name"
            placeholder="Enter your company name"
            required
            helperText="As registered with the Ministry of Commerce."
          />
          <Input
            label="Filled value"
            defaultValue="Arabian Solutions Beacon Co."
          />
          <Input
            label="Filled surface"
            variant="filled"
            placeholder="Enter your project reference"
          />
          <Input
            label="Work email"
            type="email"
            defaultValue="ahmed@"
            error="Enter a valid work email address."
            required
          />
          <Input
            label="CR number"
            defaultValue="1010XXXXXX"
            disabled
            helperText="Locked — pulled from your account record."
          />
          <Input label="Read-only reference" value="ASBC-2026" readOnly />
          <Input label="Checking company" value="Arabian Solutions" loading />
        </div>
      </section>
      <section aria-labelledby="demo" className="grid max-w-xl gap-6">
        <h2 id="demo" className="type-heading-xl">
          Try validation & loading
        </h2>
        <form
          noValidate
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            if (loading) return
            setMessage("")
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              setError("Enter a valid work email address.")
              return
            }
            setError("")
            setLoading(true)
            timer.current = setTimeout(() => {
              setLoading(false)
              setMessage("Demo complete. No information was sent.")
            }, 1200)
          }}
        >
          <Input
            label="Work email"
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setError("")
              setMessage("")
            }}
            error={error}
            loading={loading}
          />
          <Button
            type="submit"
            loading={loading}
            loadingText="Checking enquiry…"
          >
            Check enquiry
          </Button>
          <p role="status" className="type-body-sm text-positive">
            {message}
          </p>
        </form>
      </section>
    </main>
  )
}
