import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

import Reveal from "@/shared/components/Reveal"

import ContactDetailCard from "./ContactDetailCard"
import ContactIntro from "./ContactIntro"
import InquiryForm from "./InquiryForm"
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  type ContactDetail,
} from "../data/contact"

/** "Let's Build Something That Lasts." — contact details beside the form. */
export default function ContactSection() {
  // Translation
  const t = useTranslations("ContactDetails")
  // Variables
  const contactDetails: ContactDetail[] = [
    {
      icon: MapPin,
      label: t("locationLabel"),
      value: t("locationValue"),
      note: t("locationNote"),
    },
    {
      icon: Phone,
      label: t("phoneLabel"),
      value: CONTACT_PHONE.display,
      href: CONTACT_PHONE.href,
      dir: "ltr",
    },
    {
      icon: Mail,
      label: t("emailLabel"),
      value: CONTACT_EMAIL.display,
      href: CONTACT_EMAIL.href,
      note: CONTACT_EMAIL.secondary,
      dir: "ltr",
    },
    {
      icon: Clock,
      label: t("businessHoursLabel"),
      value: t("businessHoursValue"),
      note: t("businessHoursNote"),
    },
  ]

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <Reveal>
            <ContactIntro />
          </Reveal>

          <ul className="mt-8 flex flex-col gap-4">
            {contactDetails.map((detail, index) => (
              <li key={detail.label}>
                <Reveal delay={0.05 + index * 0.06}>
                  <ContactDetailCard detail={detail} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="min-w-0">
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  )
}
