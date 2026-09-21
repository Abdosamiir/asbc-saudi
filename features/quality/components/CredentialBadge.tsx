import Image from "next/image"

type CredentialBadgeProps = {
  label: string
}

/** Verified-standard chip: exported Figma badge mark plus the standard's name. */
export default function CredentialBadge({ label }: CredentialBadgeProps) {
  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-line bg-surface-sunken px-4 py-2 font-mono text-xs leading-4 text-brand">
      <Image
        src="/icons/badge-check.svg"
        alt=""
        width={16}
        height={16}
        className="size-4 shrink-0"
      />
      {label}
    </span>
  )
}
