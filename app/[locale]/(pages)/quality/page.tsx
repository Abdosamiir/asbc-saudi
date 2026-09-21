import CredentialsStrip from "@/features/quality/components/CredentialsStrip"
import QaProcessSection from "@/features/quality/components/QaProcessSection"
import StandardsSection from "@/features/quality/components/StandardsSection"
import VisionStatement from "@/features/quality/components/VisionStatement"
import { initPageLocale } from "@/shared/i18n/page-locale"

export default async function OurQualityPage({
  params,
}: PageProps<"/[locale]/quality">) {
  await initPageLocale(params)

  return (
    <>
      <CredentialsStrip />
      <StandardsSection />
      <QaProcessSection />
      <VisionStatement />
    </>
  )
}
