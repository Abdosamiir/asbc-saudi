import OrganizationsSection from "@/features/clients/components/OrganizationsSection"
import SectorsSection from "@/features/clients/components/SectorsSection"
import StrategicClientsSection from "@/features/clients/components/StrategicClientsSection"

export default function ClientsPage() {
  return (
    <>
      <SectorsSection />
      <StrategicClientsSection />
      <OrganizationsSection />
    </>
  )
}
