import type { Metadata } from 'next'
import { Megaphone } from 'lucide-react'
import CampaignsHeader from './campaigns-header'
import CurrentCampaign from './current-campaign'
import CampaignsList from './campaigns-list'

export const metadata: Metadata = {
  title: 'حملات دعم التعليم | هيئة تطوير التعليم',
  description:
    'تعرف على حملات دعم التعليم التي تنفذها هيئة تطوير التعليم لدعم الأطفال والفئات الأشد ضعفاً',
}

export default function CampaignsPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <CampaignsHeader />



      {/* All Campaigns Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-2xl font-bold text-[#203441]   text-cente mb-10">جميع الحملات</h2> */}
          <CampaignsList />
        </div>
      </section>
    </main>
  )
}
