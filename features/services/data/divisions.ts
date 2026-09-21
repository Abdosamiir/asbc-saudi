export type Division = {
  id: string
  /** Two-digit ordinal shown in the mono label. */
  number: string
  title: string
  description: string
  capabilities: string[]
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
    title: "Welding, Machining & Assembly",
    description:
      "Precision welding and machining executed under API 1104 and ASME IX, from small tolerance parts to large structural assemblies.",
    capabilities: [
      "GTAW, GMAW and SMAW welding on carbon and stainless steel",
      "CNC and manual machining of precision components",
      "Structural steel fabrication and assembly",
      "Radiography and dye penetrant testing on structural welds",
      "Pipe spooling, cutting, bevelling and fit-up",
      "Pressure vessel and tank manufacturing",
      "Weld procedure and welder qualification support",
      "On-site and in-workshop repair welding",
    ],
  },
  {
    id: "maintenance-overhauling",
    number: "02",
    title: "Maintenance & Overhauling",
    description:
      "Planned and corrective maintenance programmes that keep rotating equipment, pumps and electromechanical assets available and in tolerance.",
    capabilities: [
      "Preventive and corrective maintenance programmes",
      "Pump overhauling, rebuilding and performance restoration",
      "Rotating equipment alignment and balancing",
      "Valve servicing, reseating and actuator overhaul",
      "Gearbox and coupling inspection and replacement",
      "Bearing and mechanical seal replacement",
      "Shutdown and turnaround support",
      "Spare parts sourcing and refurbishment",
    ],
  },
  {
    id: "installation-testing-commissioning",
    number: "03",
    title: "Installation, Testing & Commissioning",
    description:
      "Full installation scope through to witnessed testing and handover, covering mechanical, piping and electromechanical systems.",
    capabilities: [
      "Mechanical and electromechanical equipment installation",
      "Piping erection, supports and alignment",
      "Hydrostatic and pneumatic pressure testing",
      "Control panel installation and loop checking",
      "Functional testing and performance verification",
      "Pre-commissioning, commissioning and start-up",
      "As-built documentation and handover dossiers",
      "Operator training and post-handover support",
    ],
  },
  {
    id: "water-sewage-pumping-systems",
    number: "04",
    title: "Water & Sewage Pumping Systems",
    description:
      "Deep-well, booster and sewage pumping systems installed and commissioned to depths of 460 metres for utility and municipal clients.",
    capabilities: [
      "Deep-well submersible pump installation to 460 m",
      "10 HP domestic to 450 HP / 4160 V high-voltage units",
      "End-suction, split case and in-line vertical pumps",
      "Sewage and wastewater lift station installation",
      "Booster sets, headers and manifold fabrication",
      "Column pipe, cable and wellhead assembly",
      "Flow, pressure and water level instrumentation",
      "Pump performance testing and commissioning",
    ],
  },
  {
    id: "workshop-machining-services",
    number: "05",
    title: "Workshop & Machining Services",
    description:
      "A fully equipped Riyadh workshop for precision machining, fabrication and material testing on parts and assemblies of every size.",
    capabilities: [
      "CNC machining centres for precision components",
      "Lathe machining across various capacities",
      "Pipe fabrication and spool production",
      "Tank manufacturing in stainless and carbon steel",
      "Material testing and dimensional inspection",
      "Quality inspection tooling and reporting",
      "Reverse engineering of obsolete parts",
      "Surface preparation, coating and finishing",
    ],
  },
  {
    id: "supply-trading",
    number: "06",
    title: "Supply & Trading",
    description:
      "Authorized supply chain for pumps, valves, piping, flow meters, and electromechanical components sourced from Europe, Taiwan, and Germany.",
    capabilities: [
      "Pipes and fittings with a cooperation with a specialist European and Taiwan manufactures",
      "Pumps: deep well, end-suction, high-pressure, axial split case, and in-line vertical pumps",
      "Valves DN15–DN3000 with electrical and pneumatic actuators",
      "Pinch valves with a cooperation with a specialist Germany manufacture",
      "Flow meters with a cooperation with a specialist European manufactures",
      "Pneumatic, Electrical actuators",
      "Pressure regulating valve, Pressure switch, Pressure transmitter",
      "Water level sensors",
      "Control panels and accessories for electro-mechanic's projects",
    ],
  },
]
