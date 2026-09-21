/** Pills under "Trusted Across Saudi Arabia's Critical Sectors." */
export const CLIENT_SECTORS: string[] = [
  "Water & Wastewater",
  "Heavy Industry",
  "Petrochemical",
  "Infrastructure",
  "Steel & Cement",
  "Defence & Security",
]

export type StrategicClient = {
  name: string
  description: string
  /** Mono footnote naming the work done for this client. */
  engagement: string
}

/** Cards in the "Strategic Client Relationships" band. */
export const STRATEGIC_CLIENTS: StrategicClient[] = [
  {
    name: "National Water Company (NWC)",
    description: "Major water utility serving millions across Saudi Arabia",
    engagement: "Multiple Projects Since 2017",
  },
  {
    name: "Saudi Electricity Company",
    description: "Kingdom's primary power generation and distribution",
    engagement: "Deep Well Installations",
  },
  {
    name: "Royal Commission for AlUla",
    description: "Heritage preservation and development authority",
    engagement: "Firefighting Systems 2022",
  },
  {
    name: "NOMAC",
    description: "Leading operations and maintenance company",
    engagement: "Compressor Water Wash Units",
  },
  {
    name: "Maaden Phosphate",
    description: "Major mining and industrial company",
    engagement: "Deep Well Pumps at 460m",
  },
  {
    name: "POSCO E&C Saudi Arabia",
    description: "International engineering and construction",
    engagement: "Infrastructure Projects",
  },
]

export type ClientCategory = {
  label: string
  clients: string[]
}

/** Grouped client cards under "The Organizations That Trust ASBC". */
export const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    label: "Water Authorities",
    clients: [
      "National Water Company (NWC)",
      "National Water Works Company (NWWC)",
      "TAWZEA (International Water Distribution Co.)",
    ],
  },
  {
    label: "Energy & Power",
    clients: ["NOMAC", "Saudi Electricity Company"],
  },
  {
    label: "Industrial",
    clients: [
      "Maaden Phosphate",
      "Hail Cement Factory",
      "Najran Cement Factory",
      "Al Watn Cable Factory",
      "Gulf Cable Factory",
    ],
  },
  {
    label: "Government",
    clients: [
      "Royal Commission for AlUla",
      "Presidency of State Security",
      "Ministry of Environment, Water & Agriculture",
      "Majmah University",
    ],
  },
]

/** The full roster in the "All Clients & Partners" grid. */
export const ALL_CLIENTS: string[] = [
  "National Water Company (NWC)",
  "National Water Works Company (NWWC)",
  "NOMAC",
  "Saudi Electricity Company",
  "Royal Commission for AlUla",
  "King Abdullah Financial District (KAFD)",
  "Maaden Phosphate",
  "POSCO E&C Saudi Arabia LLC",
  "Civil Works Company (CWC)",
  "SEJONG Saudi Arabia LLC",
  "Toledo Arabia",
  "Presidency of State Security",
  "Ministry of Environment, Water & Agriculture",
  "Majmah University",
  "TAWZEA (International Water Distribution Co.)",
  "Azmeel Contracting Co.",
  "Saudi Sdn. Water & Energy Co.",
  "Ibn Omairah Contracting Co.",
  "Advanced Building Care Est.",
  "Hail Cement Factory",
  "Najran Cement Factory",
  "Al Watn Cable Factory",
  "Gulf Cable Factory",
]
