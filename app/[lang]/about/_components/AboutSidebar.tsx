'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Info,
  Target,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Users,
  Newspaper,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Locale } from '@/lib/i18n'

interface SidebarLink {
  href: string
  label: string
  icon: React.ElementType
}

export default function AboutSidebar({ lang }: { lang: Locale }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      title: 'عن الجمعية',
      links: [
        {
          href: `/${lang}/about`,
          label: 'من نحن',
          icon: Info,
        },
        {
          href: `/${lang}/about/team`,
          label: 'نبذة عن الفريق',
          icon: Users,
        },
        {
          href: `/${lang}/about/message-vission`,
          label: 'الرؤية والرسالة',
          icon: MessageSquare,
        },
        {
          href: `/${lang}/about/target`,
          label: 'الهدف',
          icon: Target,
        },
        {
          href: `/${lang}/about/annual-reports`,
          label: 'التقارير السنوية',
          icon: Newspaper,
        },
      ] satisfies SidebarLink[],
    },
    en: {
      title: 'About the Association',
      links: [
        {
          href: `/${lang}/about`,
          label: 'About Us',
          icon: Info,
        },
        {
          href: `/${lang}/about/team`,
          label: 'About the Team',
          icon: Users,
        },
        {
          href: `/${lang}/about/message-vission`,
          label: 'Vision and Mission',
          icon: MessageSquare,
        },
        {
          href: `/${lang}/about/target`,
          label: 'Target',
          icon: Target,
        },
        {
          href: `/${lang}/about/annual-reports`,
          label: 'Annual Reports',
          icon: Newspaper,
        },
      ] satisfies SidebarLink[],
    },
  } as const

  const t = content[lang]
  const links = t.links

  return (
    <>
      <div className="hidden md:block w-64 shrink-0" dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="sticky top-24 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#203441] text-white p-4">
            <h2 className="text-xl font-bold">{t.title}</h2>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((link) => {
                const isActive = pathname === link.href
                const Icon = link.icon

                return (
                  <li key={link.href}>
                    <Link
                      lang={lang}
                      href={link.href}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-md transition-colors',
                        isActive ? 'bg-[#39576f] text-white' : 'text-gray-700 hover:bg-gray-100',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="md:hidden w-full mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-[#203441] text-white p-4 flex items-center justify-between"
          >
            <h2 className="text-xl font-bold">{t.title}</h2>
            {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {isOpen && (
            <nav className="p-4">
              <ul className="space-y-2">
                {links.map((link) => {
                  const isActive = pathname === link.href
                  const Icon = link.icon

                  return (
                    <li key={link.href}>
                      <Link
                        lang={lang}
                        href={link.href}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-md transition-colors',
                          isActive ? 'bg-[#39576f] text-white' : 'text-gray-700 hover:bg-gray-100',
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  )
}