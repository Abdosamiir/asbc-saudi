import { Clock, Mail, MapPin, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ContactDetail = {
  icon: LucideIcon
  label: string
  /** Emphasised first line — a link when `href` is set. */
  value: string
  href?: string
  /** Muted second line. */
  note?: string
}

/** The four cards beside the inquiry form. */
export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    label: "Location",
    value: "P.O Box 275591, Riyadh 11314",
    note: "Saudi Arabia",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 541120717",
    href: "tel:+966541120717",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Sales@asbc-sa.net",
    href: "mailto:Sales@asbc-sa.net",
    note: "info@asbc-sa.net",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sunday – Thursday",
    note: "08:00 – 17:00 AST",
  },
]

/** Options for the form's "Service Interest" select. */
export const SERVICE_OPTIONS: string[] = [
  "Welding & Fabrication",
  "Water & Wastewater Systems",
  "Electromechanical Works",
  "Structural Steel",
  "Pipeline Services",
  "Maintenance & Operations",
  "Other",
]

/** Minimum length enforced on the project brief. */
export const MESSAGE_MIN_LENGTH = 20
