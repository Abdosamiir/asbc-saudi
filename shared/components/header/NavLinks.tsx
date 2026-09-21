"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/shared/lib/utils"
import { SheetClose } from "../ui/sheet"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
]

type NavLinksProps = {
  mobile?: boolean
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav
      aria-label={mobile ? "Mobile navigation" : "Main navigation"}
      className={
        mobile ? "flex flex-col px-6" : "flex items-center gap-5 xl:gap-7"
      }
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href

        const link = (
          <Link
            key={item.href}
            href={item.href}
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
            {item.label}
          </Link>
        )

        return mobile ? (
          <SheetClose
            key={item.href}
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
