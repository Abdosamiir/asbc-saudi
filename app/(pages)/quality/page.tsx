import CredentialsStrip from "@/features/quality/components/CredentialsStrip"
import QaProcessSection from "@/features/quality/components/QaProcessSection"
import StandardsSection from "@/features/quality/components/StandardsSection"
import VisionStatement from "@/features/quality/components/VisionStatement"

export default function OurQualityPage() {
  return (
    <>
      <CredentialsStrip />
      <StandardsSection />
      <QaProcessSection />
      <VisionStatement />
    </>
  )
}
