import type { LucideIcon } from "lucide-react"
import type { Messages } from "next-intl"

export type ContactDetail = {
  icon: LucideIcon
  label: string
  /** Emphasised first line — a link when `href` is set. */
  value: string
  href?: string
  /** Muted second line. */
  note?: string
  /** Keeps phone numbers and emails left-to-right inside Arabic text. */
  dir?: "ltr"
}

/** Phone and email read the same in every locale, so they stay out of the messages. */
export const CONTACT_PHONE = {
  display: "+966 541120717",
  href: "tel:+966541120717",
}

export const CONTACT_EMAIL = {
  display: "Sales@asbc-sa.net",
  href: "mailto:Sales@asbc-sa.net",
  secondary: "info@asbc-sa.net",
}

type ServiceKey = keyof Messages["InquiryForm"]["services"]

/** Options for the form's "Service Interest" select; the key is the submitted value. */
export const SERVICE_OPTIONS: ServiceKey[] = [
  "weldingFabrication",
  "waterWastewater",
  "electromechanical",
  "structuralSteel",
  "pipeline",
  "maintenanceOperations",
  "other",
]

/** Minimum length enforced on the project brief. */
export const MESSAGE_MIN_LENGTH = 20
