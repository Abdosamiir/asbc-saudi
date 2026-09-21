import type { Messages } from "next-intl"

type WorkshopEquipmentKey = keyof Messages["ServiceFacilities"]["equipment"]
type WorkshopCapabilityKey = keyof Messages["ServiceFacilities"]["capabilities"]

/** Equipment bullets shown beside the "State-of-the-Art Facilities" copy. */
export const WORKSHOP_EQUIPMENT: WorkshopEquipmentKey[] = [
  "cncCenters",
  "lathes",
  "weldingStations",
  "pipeFabrication",
  "materialTesting",
  "qualityInspection",
]

/** Rows of the "Workshop Capabilities" specification table. */
export const WORKSHOP_CAPABILITIES: WorkshopCapabilityKey[] = [
  "pipeFabrication",
  "tankManufacturing",
  "weldingProcesses",
  "machining",
  "assembly",
]
