import Link from "next/link"
import { Menu } from "lucide-react"
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
import ThemeToggle from "@/shared/components/theme-toggle"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="ASBC home" className="w-30 shrink-0">
          <Image
            src={Logo}
            alt="ASBC"
            className="h-auto w-full dark:brightness-0 dark:invert"
            sizes="120px"
            loading="eager"
          />
        </Link>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Desktop Button */}
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            role="link"
            className="hidden lg:inline-flex"
          >
            Get In Touch
          </Button>

          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="flex size-11 shrink-0 items-center justify-center rounded-full text-brand transition-colors hover:bg-interactive-ghost lg:hidden"
            >
              <Menu size={26} aria-hidden="true" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="overflow-y-auto bg-surface-overlay data-[side=right]:w-[min(22rem,85vw)]"
            >
              <SheetHeader>
                <SheetTitle className="text-xl font-bold text-brand">
                  ASBC
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate the ASBC website.
                </SheetDescription>
              </SheetHeader>

              <NavLinks mobile />

              <SheetFooter>
                <SheetClose
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  role="link"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-interactive px-6 font-medium text-on-brand transition-colors hover:bg-interactive-hover"
                >
                  Get In Touch
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
