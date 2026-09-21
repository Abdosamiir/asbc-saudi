"use client"

import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/shared/i18n/navigation"
import { ROUTES, type RouteKey } from "@/shared/lib/routes"
import { cn } from "@/shared/lib/utils"
import { SheetClose } from "../ui/sheet"

const NAV_ITEMS: RouteKey[] = [
  "home",
  "about",
  "services",
  "projects",
  "clients",
  "quality",
  "contact",
]

type NavLinksProps = {
  mobile?: boolean
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  // Translation
  const t = useTranslations("Navigation")
  // Navigation
  const pathname = usePathname()

  return (
    <nav
      aria-label={mobile ? t("mobileLabel") : t("mainLabel")}
      className={
        mobile ? "flex flex-col px-6" : "flex items-center gap-5 xl:gap-7"
      }
    >
      {NAV_ITEMS.map((item) => {
        const href = ROUTES[item]
        const isActive = pathname === href

        const link = (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "font-medium transition-colors duration-200 hover:text-heading",
              mobile
                ? "border-b border-line px-4 py-4 text-base hover:bg-interactive-ghost"
                : "border-b-2 border-transparent py-2 text-sm hover:border-line-brand",
              isActive ? "text-heading" : "text-content-muted",
              isActive && !mobile && "border-brand"
            )}
          >
            {t(item)}
          </Link>
        )

        return mobile ? (
          <SheetClose
            key={href}
            render={link}
            nativeButton={false}
            role="link"
          />
        ) : (
          link
        )
      })}
    </nav>
  )
}
