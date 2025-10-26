"use client"

import { usePathname, useRouter } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Globe } from "lucide-react"
import type { Locale } from "@/lib/i18n"

export default function LanguageSwitcher({
  className = "text-white/80 size-5",
}: {
  className?: string
}) {
  const pathName = usePathname()
  const router = useRouter()

  const currentLocale = pathName.split("/")[1] as Locale

  const locales = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ]

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return

    const newPath = pathName.replace(`/${currentLocale}`, `/${locale}`)

    router.push(newPath)
  }

  const label = currentLocale === "ar" ? "لغة العرض" : "Display Language"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ring-0 focus:ring-0 active:ring-0">
        <Globe className={className} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="text-center">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((locale) => (
          <DropdownMenuItem className="flex justify-end" key={locale.code} onClick={() => switchLocale(locale.code)}>
            {locale.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
