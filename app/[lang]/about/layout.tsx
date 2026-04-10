import type { ReactNode } from 'react'
import AboutSidebar from './_components/AboutSidebar'
import { Locale } from '@/lib/i18n'

interface AboutLayoutProps {
  children: ReactNode
  params: Promise<{ lang: Locale }>
}

export default async function AboutLayout({ children, params }: AboutLayoutProps) {
  const { lang } = await params
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      title: 'جمعية تطوير التعليم',
      description:
        'تعرّف على جمعية تطوير التعليم، رسالتنا، رؤيتنا، وكيف يمكنك المساهمة في دعم مستقبل التعليم',
    },
    en: {
      title: 'Education Development Association',
      description:
        'Learn about the Education Development Association, our mission, our vision, and how you can contribute to supporting the future of education',
    },
  } as const

  const t = content[lang]

  return (
    <main className="pb-16" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="bg-gradient-to-r from-[#203441] to-[#39576f] py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-white/80 max-w-3xl">{t.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <AboutSidebar lang={lang} />
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">{children}</div>
        </div>
      </div>
    </main>
  )
}