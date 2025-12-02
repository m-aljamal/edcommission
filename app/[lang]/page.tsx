import { type Locale, getTranslations } from "@/lib/i18n"


export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params

  return (
   <div></div>
  )
}
