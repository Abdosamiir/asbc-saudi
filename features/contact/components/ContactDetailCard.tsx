import Link from "next/link"

import type { ContactDetail } from "../data/contact"

type ContactDetailCardProps = {
  detail: ContactDetail
}

/** One outlined contact card: icon, label, value, and optional second line. */
export default function ContactDetailCard({ detail }: ContactDetailCardProps) {
  const { icon: Icon, label, value, href, note } = detail

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface-raised p-4 transition-colors duration-300 hover:border-line-brand/25 sm:p-5">
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-interactive-ghost text-brand"
      >
        <Icon size={20} />
      </span>

      <div className="flex min-w-0 flex-col gap-1 wrap-break-word">
        <p className="font-mono text-xs leading-4 tracking-[0.6px] text-gold uppercase">
          {label}
        </p>

        {href ? (
          <Link
            href={href}
            className="type-body-md font-medium text-content transition-colors duration-200 hover:text-brand"
          >
            {value}
          </Link>
        ) : (
          <p className="type-body-md font-medium text-content">{value}</p>
        )}

        {note && <p className="type-body-sm text-muted-foreground">{note}</p>}
      </div>
    </div>
  )
}
