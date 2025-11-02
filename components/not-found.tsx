import { getTranslations, Locale } from "@/lib/i18n";
import { Button } from "./ui/button";
import Link from "next/link";

 
export default function NotFound({lang}:{lang:Locale}) {
    const t = getTranslations(lang)
  return (
    <div className="container mx-auto px-4 py-24 text-center">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">{t.notFound.title}</h1>
    <p className="text-gray-600 mb-8">{t.notFound.subtitle}</p>
    <Button asChild>
      <Link href="/formal-education">{t.notFound.return}</Link>
    </Button>
  </div>
  )
}
