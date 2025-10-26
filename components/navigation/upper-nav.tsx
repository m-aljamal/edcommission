import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import LanguageSwitcher from './language-switcher'

interface UpperLinksProps {
  title: string
  href: string
  children?: {
    href: string
    title: string
  }[]
}

function UpperNav({ upperLinks }: { upperLinks: UpperLinksProps[] }) {
  const pathname = usePathname()

  return (
    <div className="bg-sky-700 py-1 hidden md:flex">
      <div className="container flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {upperLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.children && link.children.length > 0 ? (
                  // If item has children, use NavigationMenuTrigger with dropdown
                  <>
                    <NavigationMenuTrigger className="text-white/80 hover:text-white transition-all bg-sky-700 data-[active=true]:text-accent-foreground ring-ring/10 text-xs lg:text-sm">
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[160px] text-right">
                        {link.children.map((child) => (
                          <ListItem
                            active={pathname === child.href}
                            key={child.href}
                            title={child.title}
                            href={child.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  // If no children, just use a Link without arrow
                  <Link
                    href={link.href}
                    className="h-10 flex items-center justify-between px-4 py-2 text-white/80 hover:text-white transition-all text-xs lg:text-sm"
                  >
                    {link.title}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
         
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default UpperNav

interface ListItemProps {
  title: string
  href: string
  active: boolean
}

function ListItem({ title, href, active }: ListItemProps) {
  return (
    <li>
      <Link passHref href={href}>
        <NavigationMenuLink asChild className={cn(active && 'hover:text-sky-700 ')}>
          <h2
            className={cn(
              'font-medium text-color text-gray-700',
              active && 'bg-accent text-sky-700 ',
            )}
          >
            {title}
          </h2>
        </NavigationMenuLink>
      </Link>
    </li>
  )
}
ListItem.displayName = 'ListItem'
