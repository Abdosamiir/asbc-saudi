import type { Messages } from "next-intl"

export type DivisionKey = keyof Messages["ServiceDivisions"]["divisions"]
export type DivisionCapabilityKey = keyof Messages["DivisionCapabilities"]

export type Division = {
  id: string
  /** Two-digit ordinal shown in the mono label. */
  number: string
  /** Title and description live under `ServiceDivisions.divisions.<key>`. */
  key: DivisionKey
  /** Keys into the `DivisionCapabilities` messages, in display order. */
  capabilities: DivisionCapabilityKey[]
}

/**
 * NOTE: Figma (5:3428) only specifies the detail copy for division 06.
 * Divisions 01–05 use interim copy derived from existing ASBC content and
 * should be replaced with the approved marketing text.
 */
export const DIVISIONS: Division[] = [
  {
    id: "welding-machining-assembly",
    number: "01",
    key: "welding",
    capabilities: [
      "gtawGmawSmaw",
      "precisionMachining",
      "structuralFabrication",
      "weldTesting",
      "pipeSpooling",
      "pressureVessels",
      "weldQualification",
      "repairWelding",
    ],
  },
  {
    id: "maintenance-overhauling",
    number: "02",
    key: "maintenance",
    capabilities: [
      "maintenancePrograms",
      "pumpOverhauling",
      "alignmentBalancing",
      "valveServicing",
      "gearboxCoupling",
      "bearingsSeals",
      "shutdownSupport",
      "spareParts",
    ],
  },
  {
    id: "installation-testing-commissioning",
    number: "03",
    key: "installation",
    capabilities: [
      "equipmentInstallation",
      "pipingErection",
      "pressureTesting",
      "controlPanels",
      "functionalTesting",
      "commissioning",
      "asBuiltDocumentation",
      "operatorTraining",
    ],
  },
  {
    id: "water-sewage-pumping-systems",
    number: "04",
    key: "pumping",
    capabilities: [
      "deepWellInstallation",
      "pumpRange",
      "pumpTypes",
      "liftStations",
      "boosterSets",
      "wellheadAssembly",
      "instrumentation",
      "pumpTesting",
    ],
  },
  {
    id: "workshop-machining-services",
    number: "05",
    key: "workshop",
    capabilities: [
      "cncCentres",
      "latheMachining",
      "pipeFabrication",
      "tankManufacturing",
      "materialTesting",
      "qualityInspection",
      "reverseEngineering",
      "surfaceFinishing",
    ],
  },
  {
    id: "supply-trading",
    number: "06",
    key: "supply",
    capabilities: [
      "pipesFittings",
      "pumps",
      "valves",
      "pinchValves",
      "flowMeters",
      "actuators",
      "pressureDevices",
      "levelSensors",
      "controlPanelsAccessories",
    ],
  },
]
