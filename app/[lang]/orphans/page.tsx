import type { Metadata } from 'next'
import OrphansClientPage from './OrphansClientPage'
import { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'كفالات الأيتام | جمعية تطوير التعليم',
  description:
    'برنامج كفالة الأيتام من جمعية تطوير التعليم - ساهم في تغيير حياة طفل يتيم من خلال الكفالة الحياتية أو التعليمية',
}

export default async function OrphansPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params


  return <OrphansClientPage lang={lang} />
}
