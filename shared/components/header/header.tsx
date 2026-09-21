import { Menu } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import NavLinks from "./NavLinks"
import Image from "next/image"
import Logo from "@/public/logo.png"
import LocaleSwitcher from "@/shared/components/locale-switcher"
import ThemeToggle from "@/shared/components/theme-toggle"
import { Link } from "@/shared/i18n/navigation"
import { getLocaleDirection } from "@/shared/i18n/routing"
import { ROUTES } from "@/shared/lib/routes"

export default function Header() {
  // Translation
  const t = useTranslations("Header")
  const locale = useLocale()
  // Variables
  const menuSide = getLocaleDirection(locale) === "rtl" ? "left" : "right"

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link
          href={ROUTES.home}
          aria-label={t("homeLabel")}
          className="w-30 shrink-0"
        >
          <Image
            src={Logo}
            alt={t("logoAlt")}
            className="h-auto w-full dark:brightness-0 dark:invert"
            sizes="120px"
            loading="eager"
          />
        </Link>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          {/* Phones carry the switcher in the menu, where there is room. */}
          <LocaleSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle />

          {/* Desktop Button */}
          <Button
            render={<Link href={ROUTES.contact} />}
            nativeButton={false}
            role="link"
            className="hidden lg:inline-flex"
          >
            {t("getInTouch")}
          </Button>

          <Sheet>
            <SheetTrigger
              aria-label={t("openMenu")}
              className="flex size-11 shrink-0 items-center justify-center rounded-full text-brand transition-colors hover:bg-interactive-ghost lg:hidden"
            >
              <Menu size={26} aria-hidden="true" />
            </SheetTrigger>

            <SheetContent
              side={menuSide}
              closeLabel={t("closeMenu")}
              className="overflow-y-auto bg-surface-overlay data-[side=left]:w-[min(22rem,85vw)] data-[side=right]:w-[min(22rem,85vw)]"
            >
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-brand">
                  {t("brand")}
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t("menuDescription")}
                </SheetDescription>
              </SheetHeader>

              <NavLinks mobile />

              <SheetFooter>
                <LocaleSwitcher className="sm:hidden" />

                <SheetClose
                  render={<Link href={ROUTES.contact} />}
                  nativeButton={false}
                  role="link"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-interactive px-6 font-medium text-on-brand transition-colors hover:bg-interactive-hover"
                >
                  {t("getInTouch")}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
