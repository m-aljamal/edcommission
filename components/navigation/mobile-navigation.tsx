'use client'

 import { ChevronLeft, Heart, Home, Info, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Logo } from './logo'
import LanguageSwitcher from './language-switcher'
import { LinksPorps } from '@/types'
import { Locale } from '@/lib/i18n'

interface Props {
  links: LinksPorps[]
}

export default function MobileNavigation({ links }: Props) {
  const pathname = usePathname()
  const { lang } = useParams<{ lang: Locale }>()
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md right-0 z-50">
      <div className="flex justify-center items-center gap-10 py-4 text-gray-700">
        <Link href={`/`} className="flex flex-col items-center">
          <Home className="size-5" />
          <span className="text-[10px]  line-clamp-1 tracking-tighter ">الرئيسية</span>
        </Link>
        <Link href={`/donate`} className="flex flex-col items-center">
          <Heart className="size-5" />
          <span className="text-[10px]  line-clamp-1 tracking-tighter ">التبرع</span>
        </Link>
        <div className="flex flex-col items-center">
          <LanguageSwitcher className="text-gray-700 size-5" />
          <span className="text-[10px]  line-clamp-1 tracking-tighter">اللغة</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => setOpen(true)}>
          <Menu className="text-gray-700 size-5" />
          <span className="text-[10px]  line-clamp-1 tracking-tighter">القائمة</span>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <Button
          variant="secondary"
          size="icon"
          className={'bg-white/20 text-white hover:bg-white/30 '}
          asChild
        >
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetContent
              side="right"
              className="p-0 flex flex-col [&>button:first-of-type]:hidden w-[250px]"
            >
              <div className="flex-1 overflow-auto">
                <SheetHeader className="p-3 text-right border-b">
                  <SheetTitle className="text-main-blue flex items-center justify-between">
                    <span>القائمة</span>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <div className="p-6 space-y-6">
                  {/* User Welcome */}
                  <div className="bg-gray-50 rounded-md p-3 mb-6">
                    <div className="  flex items-center justify-center gap-3">
                      <p className="text-gray-500 text-xs">مرحباً بكم في</p>
                      <Logo lang={lang} width={50} hight={50} onClick={() => setOpen(false)} />
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-1">
                    {links.map((link) => (
                      <SheetClose key={link.name} asChild>
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between p-3 rounded-lg text-right ${
                            pathname === link.href
                              ? 'bg-text-ma/10 text-text-ma font-medium'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-xs">{link.name}</span>
                          <ChevronLeft className="h-4 w-4 text-gray-400" />
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Bottom Navigation */}
              <div className="border-t">
                <div className="grid grid-cols-3 divide-x">
                  <SheetClose asChild>
                    <Link
                      href={`/`}
                      className="flex  gap-1 items-center justify-center py-2 text-gray-700 hover:text-[#203441] hover:bg-gray-50"
                    >
                      <Home className="h-3 w-3 " />
                      <span className="text-[10px]">الرئيسية</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href={`/about`}
                      className="flex gap-1 items-center justify-center py-2 text-gray-700 hover:text-[#203441] hover:bg-gray-50"
                    >
                      <Info className="h-3 w-3 " />
                      <span className="text-[10px]">من نحن</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href={`/donate`}
                      className="flex gap-1 items-center justify-center py-2   text-red-900 hover:bg-gray-50  "
                    >
                      <Heart className="h-3 w-" />
                      <span className="text-[10px]">التبرع</span>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </Button>
      </div>
    </div>
  )
}
 