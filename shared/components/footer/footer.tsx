import Link from "next/link"
import { useTranslations } from "next-intl"
import BackToTop from "@/shared/components/footer/BackToTop"
import { Link as LocaleLink } from "@/shared/i18n/navigation"
import { ROUTES, type RouteKey } from "@/shared/lib/routes"

const QUICK_LINKS: RouteKey[] = ["home", "services", "clients", "contact"]

const COMPANY_LINKS: RouteKey[] = ["about", "projects", "quality"]

export default function Footer() {
  // Translation
  const t = useTranslations("Footer")
  const tNavigation = useTranslations("Navigation")

  return (
    <footer className="surface-ink">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <LocaleLink
              href={ROUTES.home}
              className="font-heading text-2xl font-bold"
            >
              {t("brand")}
            </LocaleLink>

            <p className="mt-4 max-w-sm type-body-sm leading-6 text-content-muted">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="type-heading-xs text-heading">{t("quickLinks")}</h3>

            <div className="mt-5 grid grid-cols-2 gap-x-8">
              {/* First Column */}
              <div className="flex flex-col gap-4">
                {QUICK_LINKS.map((link) => (
                  <LocaleLink
                    key={link}
                    href={ROUTES[link]}
                    className="w-fit type-body-sm text-content-muted transition-colors duration-200 hover:text-content"
                  >
                    {tNavigation(link)}
                  </LocaleLink>
                ))}
              </div>

              {/* Second Column */}
              <div className="flex flex-col gap-4">
                {COMPANY_LINKS.map((link) => (
                  <LocaleLink
                    key={link}
                    href={ROUTES[link]}
                    className="w-fit type-body-sm text-content-muted transition-colors duration-200 hover:text-content"
                  >
                    {tNavigation(link)}
                  </LocaleLink>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="type-heading-xs text-heading">{t("contact")}</h3>

            <div className="mt-5 flex flex-col gap-3 type-body-sm leading-6 text-content-muted">
              <p>
                {t("addressLine")}
                <br />
                {t("country")}
              </p>

              {/* Phone numbers and emails read left-to-right, even in Arabic. */}
              <Link
                href="tel:+966541120717"
                dir="ltr"
                className="w-fit transition-colors duration-200 hover:text-content"
              >
                +966 541120717
              </Link>

              <Link
                href="mailto:Sales@asbc-sa.net"
                dir="ltr"
                className="w-fit transition-colors duration-200 hover:text-content"
              >
                Sales@asbc-sa.net
              </Link>

              <p>
                {t("workingDays")}
                <br />
                {t("workingHours")}
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
              {t("copyright")}
            </span>
          </div>

          {/* Company Numbers */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 type-body-xs text-content-subtle">
            <span>{t("commercialRegistration")}</span>
            <span>{t("chamber")}</span>
            <span>{t("vat")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
