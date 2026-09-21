import OrganizationsSection from "@/features/clients/components/OrganizationsSection"
import SectorsSection from "@/features/clients/components/SectorsSection"
import StrategicClientsSection from "@/features/clients/components/StrategicClientsSection"
import { initPageLocale } from "@/shared/i18n/page-locale"

export default async function ClientsPage({
  params,
}: PageProps<"/[locale]/clients">) {
  await initPageLocale(params)

  return (
    <>
      <SectorsSection />
      <StrategicClientsSection />
      <OrganizationsSection />
    </>
  )
}
