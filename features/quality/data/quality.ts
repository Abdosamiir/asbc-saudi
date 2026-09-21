/** Chips in the credentials strip directly under the hero. */
export const CREDENTIAL_BADGES: string[] = [
  "API 1104",
  "ASME IX",
  "GTAW Certified",
  "VAT Registered",
  "Chamber of Commerce",
]

/** Left column of the "Quality is Not an Option" band. */
export const REGISTRATIONS: string[] = [
  "Commercial Registration: 1010999342",
  "Riyadh Chamber Membership: No. 351949",
  "VAT Registration: 310078962900003",
  "Monsha'at (SME Authority) Certified — Dec 2022",
  "GOSI (Social Insurance) Registered",
  "Nitaqat Saudization: Active",
]

/** Middle column of the "Quality is Not an Option" band. */
export const QUALITY_MANAGEMENT_SUMMARY =
  "ASBC's welding quality management system covers pre-weld, in-process, and post-weld inspection — including WPS/PQR approval, Welders Performance Tests, DP Testing (100% root + final), Radiographic Examination (10% weld joints), Pickling & Passivation, and Final Dimensional Inspection. Materials tested to ASME IX / ASTM A312 / A182 standards."

/** Right column of the "Quality is Not an Option" band. */
export const KEY_CERTIFICATIONS: string[] = [
  "RT & PT Certified (API 1104 Standard) — Gulf Engineering House / 2017",
  "Welding Procedure Qualification Record (PQR) — AL HOTY-STANGER / 2016",
  "ASBC Approved as manufacturer/subcontractor — NWC / DIYAR / 2016–2023",
  "Prequalification Status B — Toledo Arabia / Tatweer Industrial City / 2023",
]

export type QaStep = {
  /** Roman numeral watermark in the corner of the card. */
  numeral: string
  title: string
  description: string
}

/** The four stages of the QA process. */
export const QA_STEPS: QaStep[] = [
  {
    numeral: "I",
    title: "Pre-Weld Inspection",
    description:
      "Material verification, WPS review, welder qualification checks, joint preparation inspection",
  },
  {
    numeral: "II",
    title: "In-Process Monitoring",
    description:
      "Real-time welding parameter monitoring, interpass temperature control, visual inspection",
  },
  {
    numeral: "III",
    title: "Post-Weld Testing",
    description:
      "DP testing (100% root + final), radiographic examination (10% joints), dimensional inspection",
  },
  {
    numeral: "IV",
    title: "Final Documentation",
    description:
      "Complete traceability records, test certificates, as-built documentation package",
  },
]

/** Closing statement and the pillars listed beneath it. */
export const VISION_STATEMENT =
  "Aspire to be the pioneer in providing best-in-class welding services and recognized as a contributor to the Kingdom's growth."

export const VISION_PILLARS: string[] = [
  "Customer-Centric Value Chain",
  "Multi-Industry Competitiveness",
  "Stakeholder Partnerships",
  "Quality, Safety & Environment",
]
