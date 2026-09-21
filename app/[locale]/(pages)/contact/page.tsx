import ContactSection from "@/features/contact/components/ContactSection"
import LocationMapSection from "@/features/contact/components/LocationMapSection"
import { initPageLocale } from "@/shared/i18n/page-locale"

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  await initPageLocale(params)

  return (
    <>
      <ContactSection />
      <LocationMapSection />
    </>
  )
}
