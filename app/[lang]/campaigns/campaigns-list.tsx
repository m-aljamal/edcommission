import { Locale } from '@/lib/i18n'
import CampaignCard from './campaign-card'
import { campaignsData } from './campaigns-data'

export default function CampaignsList({ lang }: { lang: Locale }) {
  const t = {
    ar: {
      empty: 'لا توجد حملات حالياً',
    },
    en: {
      empty: 'There are no campaigns at the moment',
    },
  }[lang]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaignsData.length > 0 ? (
        campaignsData.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} lang={lang} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">{t.empty}</p>
        </div>
      )}
    </div>
  )
}