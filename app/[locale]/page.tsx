import HomePage from "@/features/home/components/home"
import { initPageLocale } from "@/shared/i18n/page-locale"

export default async function Page({ params }: PageProps<"/[locale]">) {
  await initPageLocale(params)

  return <HomePage />
}
