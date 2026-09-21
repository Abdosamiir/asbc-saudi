"use client"

import DepthText from "@/shared/components/DepthText"

export default function HeroDepthText() {
  return (
    <div className="pointer-events-none flex min-w-0 items-center justify-center py-6 lg:justify-end">
      <DepthText
        text="ASBC"
        layers={34}
        depth={2.4}
        faceColor="#f2f5fc"
        depthColor="#1b4fe8"
        tilt={7.5}
        pointerTracking
        smoothing={0.14}
        perspective={900}
        autoOrbit
        orbitSpeed={0.35}
        fontSize="clamp(4rem, 9vw, 9rem)"
        fontWeight={900}
        shadow
      />
    </div>
  )
}
