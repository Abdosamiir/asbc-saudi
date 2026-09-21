import DivisionsSection from "@/features/services/components/DivisionsSection"
import FacilitiesSection from "@/features/services/components/FacilitiesSection"
import { initPageLocale } from "@/shared/i18n/page-locale"

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  await initPageLocale(params)

  return (
    <>
      <DivisionsSection />
      <FacilitiesSection />
    </>
  )
}
