import type { Metadata } from 'next'
import CampaignsHeader from './campaigns-header'
import CampaignsList from './campaigns-list'
import { Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'حملات دعم التعليم | هيئة تطوير التعليم',
  description:
    'تعرف على حملات دعم التعليم التي تنفذها هيئة تطوير التعليم لدعم الأطفال والفئات الأشد ضعفاً',
}

export default async function CampaignsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params

  return (
    <main className="pb-16">
      {/* Hero Section */}
      <CampaignsHeader lang={lang} />
      {/* All Campaigns Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CampaignsList lang={lang} />
        </div>
      </section>
    </main>
  )
}
