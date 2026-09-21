import type { Messages } from "next-intl"

type CredentialKey = keyof Messages["QualityCredentials"]
type RegistrationKey = keyof Messages["QualityStandards"]["registrations"]
type KeyCertificationKey =
  keyof Messages["QualityStandards"]["keyCertifications"]
type QaStepKey = keyof Messages["QualityProcess"]["steps"]
type VisionPillarKey = keyof Messages["QualityVision"]["pillars"]

/** Chips in the credentials strip directly under the hero. */
export const CREDENTIAL_BADGES: CredentialKey[] = [
  "api1104",
  "asmeIx",
  "gtawCertified",
  "vatRegistered",
  "chamberOfCommerce",
]

/** Left column of the "Quality is Not an Option" band. */
export const REGISTRATIONS: RegistrationKey[] = [
  "commercialRegistration",
  "riyadhChamber",
  "vat",
  "monshaat",
  "gosi",
  "nitaqat",
]

/** Right column of the "Quality is Not an Option" band. */
export const KEY_CERTIFICATIONS: KeyCertificationKey[] = [
  "rtPtCertified",
  "pqr",
  "nwcApproval",
  "toledoPrequalification",
]

export type QaStep = {
  /** Roman numeral watermark in the corner of the card. */
  numeral: string
  /** Title and description live under `QualityProcess.steps.<key>`. */
  key: QaStepKey
}

/** The four stages of the QA process. */
export const QA_STEPS: QaStep[] = [
  { numeral: "I", key: "preWeld" },
  { numeral: "II", key: "inProcess" },
  { numeral: "III", key: "postWeld" },
  { numeral: "IV", key: "finalDocumentation" },
]

/** Pillars listed beneath the closing vision statement. */
export const VISION_PILLARS: VisionPillarKey[] = [
  "customerCentric",
  "multiIndustry",
  "stakeholderPartnerships",
  "qualitySafetyEnvironment",
]
