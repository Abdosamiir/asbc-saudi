import HeaderPages from "@/shared/layouts/components/header-pages"

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderPages />
      {children}
    </>
  )
}
