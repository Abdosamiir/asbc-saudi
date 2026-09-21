import { useTranslations } from "next-intl"
import Particles from "@/shared/components/Particles"
import { Button } from "@/shared/components/ui/button"

import HeroDepthText from "@/features/home/components/HeroDepthText"
import HeroHeadline from "@/features/home/components/HeroHeadline"
import TextCarousel from "@/features/home/components/scrollbar"
import CountUpCards from "@/features/home/components/countupcard"
import EdgeSection from "@/features/home/components/EdgeSection"

export default function HomePage() {
  // Translation
  const t = useTranslations("HomeHero")

  return (
    <>
      <section className="relative overflow-hidden surface-inverse">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#C8A96E"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container grid gap-12 py-16 md:py-24 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <HeroDepthText />

          <div className="max-w-2xl min-w-0 lg:order-first">
            {/* Small Text */}
            <p className="mb-6 type-eyebrow-sm text-content-muted sm:type-eyebrow-md">
              {t("eyebrow")}
            </p>

            {/* Heading */}
            <HeroHeadline />

            {/* Description */}
            <p className="mt-8 max-w-xl type-body-md text-content-muted">
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button size="lg">{t("exploreWork")}</Button>

              <Button variant="outline-on-navy" size="lg">
                {t("downloadProfile")}
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 type-body-sm text-content-subtle">
              <span>
                <strong className="block type-heading-md text-content">
                  35+
                </strong>
                {t("statProjects")}
              </span>

              <span>
                <strong className="block type-heading-md text-content">
                  7+
                </strong>
                {t("statYears")}
              </span>

              <span>
                <strong className="block type-heading-md text-content">
                  20+
                </strong>
                {t("statIndustries")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <TextCarousel />

      {/* Numbers */}
      <CountUpCards />

      <EdgeSection />
    </>
  )
}
