import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/shared/components/theme-provider"
import { cn } from "@/shared/lib/utils"

import Header from "@/shared/components/header/header"
import Footer from "@/shared/components/footer/footer"
import ScrollReveal from "@/shared/components/ScrollReveal"

const bodyFont = localFont({
  src: [
    { path: "./fonts/dm-sans-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/dm-sans-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/dm-sans-600.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
})
const headingFont = localFont({
  src: [
    { path: "./fonts/sora-700.ttf", weight: "700", style: "normal" },
    { path: "./fonts/sora-800.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
})

const fontMono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        bodyFont.variable,
        headingFont.variable
      )}
    >
      <body>
        <ThemeProvider>
          <Header />

          <ScrollReveal className="pt-20">{children}</ScrollReveal>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
