/** Equipment bullets shown beside the "State-of-the-Art Facilities" copy. */
export const WORKSHOP_EQUIPMENT: string[] = [
  "CNC Machining Centers",
  "Lathe Machines (Various Capacities)",
  "GTAW/GMAW Welding Stations",
  "Pipe Fabrication Equipment",
  "Material Testing Equipment",
  "Quality Inspection Tools",
]

export type WorkshopCapability = {
  label: string
  value: string
}

/** Rows of the "Workshop Capabilities" specification table. */
export const WORKSHOP_CAPABILITIES: WorkshopCapability[] = [
  { label: "Pipe Fabrication", value: "All Sizes" },
  { label: "Tank Manufacturing", value: "SS & Carbon Steel" },
  { label: "Welding Processes", value: "GTAW, GMAW, SMAW" },
  { label: "Machining", value: "CNC & Manual" },
  { label: "Assembly", value: "Complete Systems" },
]
