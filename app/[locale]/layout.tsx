import localFont from "next/font/local"
import { NextIntlClientProvider } from "next-intl"

import "../globals.css"
import { ThemeProvider } from "@/shared/components/theme-provider"
import { getLocaleDirection, routing } from "@/shared/i18n/routing"
import { initPageLocale } from "@/shared/i18n/page-locale"
import { cn } from "@/shared/lib/utils"

import Header from "@/shared/components/header/header"
import Footer from "@/shared/components/footer/footer"
import ScrollReveal from "@/shared/components/ScrollReveal"

const bodyFont = localFont({
  src: [
    { path: "../fonts/dm-sans-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/dm-sans-500.ttf", weight: "500", style: "normal" },
    { path: "../fonts/dm-sans-600.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
})
const headingFont = localFont({
  src: [
    { path: "../fonts/sora-700.ttf", weight: "700", style: "normal" },
    { path: "../fonts/sora-800.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
})

const fontMono = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

/* The Latin faces carry no Arabic glyphs, so every font stack falls back to
   this one for Arabic. The unicode-range keeps English pages from downloading
   it, which is also why it is not preloaded. */
const arabicFont = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic-400.ttf", weight: "400" },
    { path: "../fonts/ibm-plex-sans-arabic-500.ttf", weight: "500" },
    { path: "../fonts/ibm-plex-sans-arabic-600.ttf", weight: "600" },
    { path: "../fonts/ibm-plex-sans-arabic-700.ttf", weight: "700" },
  ],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0600-06FF, U+0750-077F, U+0870-08FF, U+200C-200E, U+FB50-FDFF, U+FE70-FEFF",
    },
  ],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const locale = await initPageLocale(params)

  return (
    <html
      lang={locale}
      dir={getLocaleDirection(locale)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        bodyFont.variable,
        headingFont.variable,
        arabicFont.variable
      )}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            <Header />

            <ScrollReveal className="pt-20">{children}</ScrollReveal>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
