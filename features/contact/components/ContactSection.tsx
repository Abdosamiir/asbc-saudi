import Reveal from "@/shared/components/Reveal"

import ContactDetailCard from "./ContactDetailCard"
import ContactIntro from "./ContactIntro"
import InquiryForm from "./InquiryForm"
import { CONTACT_DETAILS } from "../data/contact"

/** "Let's Build Something That Lasts." — contact details beside the form. */
export default function ContactSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <Reveal>
            <ContactIntro />
          </Reveal>

          <ul className="mt-8 flex flex-col gap-4">
            {CONTACT_DETAILS.map((detail, index) => (
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
