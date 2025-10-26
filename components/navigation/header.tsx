"use client"
import { BookCheck, BookOpenText, GraduationCap, HeartHandshake, Library, PartyPopper, Users } from "lucide-react"
import Main from "./main"
import UpperNav from "./upper-nav"
import MobileNavigation from "./mobile-navigation"
import { useParams } from "next/navigation"
import { type Locale, getTranslations } from "@/lib/i18n"

export default function Header() {
  const { lang } = useParams<{ lang: Locale }>()
  const t = getTranslations(lang)

  const upperLinks = [
    {
      title: t.nav.donate,
      href: `/${lang}/donate`,
    },
    {
      title: t.nav.about,
      href: `/${lang}/about`,
      children: [
        { href: `/${lang}/about`, title: t.nav.aboutCommission },
        { href: `/${lang}/about/team`, title: t.nav.team },
        { href: `/${lang}/about/message-vission`, title: t.nav.visionMessage },
        { href: `/${lang}/about/target`, title: t.nav.target },
        {
          href: `/${lang}/about/annual-reports`,
          title: t.nav.annualReports,
        },
      ],
    },
  ]

  const mainLinks = [
    {
      name: t.nav.formalEducation,
      href: `/${lang}/formal-education`,
      icon: GraduationCap,
      color: "text-cyan-700",
      bg: "bg-cyan-700",
    },
    {
      name: t.nav.nonformalEducation,
      href: `/${lang}/nonformal-education`,
      icon: BookOpenText,
      color: "text-stone-600",
      bg: "bg-stone-600",
    },
    {
      name: t.nav.educationQuality,
      href: `/${lang}/education-quality`,
      icon: BookCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-600",
    },
    {
      name: t.nav.psychologicalSupport,
      href: `/${lang}/psychological-support`,
      icon: PartyPopper,
      color: "text-amber-600",
      bg: "bg-amber-600",
    },
    {
      name: t.nav.events,
      href: `/${lang}/events`,
      icon: Users,
      color: "text-violet-700",
      bg: "bg-violet-700",
    },
  ]

  const dropDownLinks = [
    {
      name: t.nav.campaigns,
      href: `/${lang}/campaigns`,
      icon: Library,
      color: "text-cyan-600",
      bg: "bg-cyan-600",
    },
    {
      name: t.nav.orphanSponsorship,
      href: `/${lang}/orphans`,
      icon: HeartHandshake,
      color: "text-pink-600",
      bg: "bg-pink-600",
    },
  ]

  return (
    <div>
      <UpperNav upperLinks={upperLinks} />
      <Main mainLinks={mainLinks} dropdownLinks={dropDownLinks} />
      <MobileNavigation links={[...mainLinks, ...dropDownLinks]} />
    </div>
  )
}
