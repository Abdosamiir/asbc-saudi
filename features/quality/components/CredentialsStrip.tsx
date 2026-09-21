import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"

import CredentialBadge from "./CredentialBadge"
import { CREDENTIAL_BADGES } from "../data/quality"

/** Thin credentials strip between the hero and the standards band. */
export default function CredentialsStrip() {
  // Translation
  const t = useTranslations("QualityCredentials")

  return (
    <section className="border-b border-border bg-surface-sunken py-10 md:py-12">
      <div className="container">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {CREDENTIAL_BADGES.map((badge) => (
              <li key={badge}>
                <CredentialBadge label={t(badge)} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
