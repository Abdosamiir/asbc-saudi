import Link from "next/link"
import BackToTop from "@/shared/components/footer/BackToTop"

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Clients",
    href: "/clients",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

const companyLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Quality",
    href: "/quality",
  },
]

export default function Footer() {
  return (
    <footer className="surface-ink">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold">
              ASBC
            </Link>

            <p className="mt-4 max-w-sm type-body-sm leading-6 text-content-muted">
              Industrial-grade welding, water systems, electromechanical
              commissioning, and structural fabrication for Saudi Arabia&apos;s
              most critical infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="type-heading-xs text-heading">Quick Links</h3>

            <div className="mt-5 grid grid-cols-2 gap-x-8">
              {/* First Column */}
              <div className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit type-body-sm text-content-muted transition-colors duration-200 hover:text-content"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Second Column */}
              <div className="flex flex-col gap-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit type-body-sm text-content-muted transition-colors duration-200 hover:text-content"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="type-heading-xs text-heading">Contact</h3>

            <div className="mt-5 flex flex-col gap-3 type-body-sm leading-6 text-content-muted">
              <p>
                PO Box 27559, Riyadh 11314
                <br />
                Saudi Arabia
              </p>

              <Link
                href="tel:+966541120717"
                className="w-fit transition-colors duration-200 hover:text-content"
              >
                +966 541120717
              </Link>

              <Link
                href="mailto:Sales@asbc-sa.net"
                className="w-fit transition-colors duration-200 hover:text-content"
              >
                Sales@asbc-sa.net
              </Link>

              <p>
                Sunday – Thursday
                <br />
                08:00 – 17:00 AST
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-line" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <BackToTop />

            <span className="type-body-xs text-content-subtle">
              © 2026 ASBC. All rights reserved.
            </span>
          </div>

          {/* Company Numbers */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 type-body-xs text-content-subtle">
            <span>CR: 1010999342</span>
            <span>Chamber: 351949</span>
            <span>VAT: 310078962900003</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
