import type { Metadata } from 'next'
import { AboutView } from './_components/aboutview'
import { Locale } from '@/lib/i18n'

 
export const metadata: Metadata = {
  title: 'من نحن | جعية تطوير التعليم',
  description: 'تعرف على جعية تطوير التعليم ورسالتنا في تحسين جودة التعليم',
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
   const { lang } = await params

 
  return <AboutView  lang={lang}/>
}
