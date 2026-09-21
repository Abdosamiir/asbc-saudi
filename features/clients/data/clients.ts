import type { Messages } from "next-intl"

type SectorKey = keyof Messages["ClientSectors"]["sectors"]
export type StrategicClientKey = keyof Messages["StrategicClients"]["items"]
type ClientCategoryKey = keyof Messages["ClientOrganizations"]["categories"]
type ClientNameKey = keyof Messages["ClientNames"]

/** Pills under "Trusted Across Saudi Arabia's Critical Sectors." */
export const CLIENT_SECTORS: SectorKey[] = [
  "waterWastewater",
  "heavyIndustry",
  "petrochemical",
  "infrastructure",
  "steelCement",
  "defenceSecurity",
]

/** Cards in the "Strategic Client Relationships" band. */
export const STRATEGIC_CLIENTS: StrategicClientKey[] = [
  "nwc",
  "saudiElectricity",
  "royalCommissionAlUla",
  "nomac",
  "maaden",
  "posco",
]

export type ClientCategory = {
  key: ClientCategoryKey
  clients: ClientNameKey[]
}

/** Grouped client cards under "The Organizations That Trust ASBC". */
export const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    key: "waterAuthorities",
    clients: ["nwc", "nwwc", "tawzea"],
  },
  {
    key: "energyPower",
    clients: ["nomac", "saudiElectricity"],
  },
  {
    key: "industrial",
    clients: [
      "maadenPhosphate",
      "hailCement",
      "najranCement",
      "alWatnCable",
      "gulfCable",
    ],
  },
  {
    key: "government",
    clients: [
      "royalCommissionAlUla",
      "stateSecurity",
      "mewa",
      "majmahUniversity",
    ],
  },
]

/** The full roster in the "All Clients & Partners" grid. */
export const ALL_CLIENTS: ClientNameKey[] = [
  "nwc",
  "nwwc",
  "nomac",
  "saudiElectricity",
  "royalCommissionAlUla",
  "kafd",
  "maadenPhosphate",
  "posco",
  "civilWorks",
  "sejong",
  "toledoArabia",
  "stateSecurity",
  "mewa",
  "majmahUniversity",
  "tawzea",
  "azmeel",
  "saudiSdnWater",
  "ibnOmairah",
  "advancedBuildingCare",
  "hailCement",
  "najranCement",
  "alWatnCable",
  "gulfCable",
]
