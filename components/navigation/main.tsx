'use client'
 import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { Logo } from './logo'
 import { Locale } from '@/lib/i18n'
import { LinksPorps } from '@/types'

export default function Main({
  mainLinks,
  dropdownLinks,
}: {
  mainLinks: LinksPorps[]
  dropdownLinks: LinksPorps[]
}) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { lang } = useParams<{ lang: Locale }>()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={` py-3 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 '
          : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between lg:justify-start">
          <Logo lang={lang} />

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-1 w-full">
            <div className="w-0.5 h-7 bg-gray-500/30 mx-5" />
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-3 ">
                {mainLinks.map((link) => {
                  // todo need to fix active color
                  return (
                    <Link
                      lang={lang}
                      key={link.name}
                      href={link.href}
                      className={cn(
                        'relative px-2 py-2 rounded-full text-sm font-medium transition-colors duration-300 ',
                        pathname === link.href
                          ? ` text-main-blue after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[3px]  after:${link.bg} after:rounded-full after:transition-all after:duration-300 `
                          : 'text-gray-700',
                      )}
                    >
                      <div className="flex items-center">
                        <link.icon className={cn(' hidden lg:flex size-5', link.color)} />
                        <span className="mr-1.5 text-xs lg:text-sm">{link.name}</span>
                      </div>
                    </Link>
                  )
                })}

                <NavigationMenu className="[&_div.absolute]:-left-[3rem] ">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="cursor-pointer">
                        <MenuIcon className="text-secound-blue " />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {dropdownLinks.map((link) => (
                          <Link href={link.href} passHref key={link.href}>
                            <NavigationMenuLink className="w-[170px]" asChild>
                              <div className="flex flex-row gap-2 justify-center">
                                {link.name}
                                <link.icon className={cn('size-5  ', link.color)} />
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
