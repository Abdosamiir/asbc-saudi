import AboutIntro from "@/features/about/components/aboutIntro"
import PrinciplesSection from "@/features/about/components/principle-ssection"
import OurMission from "@/features/about/components/our-mission"
import { initPageLocale } from "@/shared/i18n/page-locale"

const AboutPage = async ({ params }: PageProps<"/[locale]/about">) => {
  await initPageLocale(params)

  return (
    <>
      <AboutIntro />
      <PrinciplesSection />
      <OurMission />
    </>
  )
}

export default AboutPage
