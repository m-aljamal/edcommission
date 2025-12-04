import type { Metadata } from 'next'
import OrphansClientPage from './OrphansClientPage'

export const metadata: Metadata = {
  title: 'كفالات الأيتام | جمعية تطوير التعليم',
  description:
    'برنامج كفالة الأيتام من جمعية تطوير التعليم - ساهم في تغيير حياة طفل يتيم من خلال الكفالة الحياتية أو التعليمية',
}

export default function OrphansPage() {
  return <OrphansClientPage />
}
