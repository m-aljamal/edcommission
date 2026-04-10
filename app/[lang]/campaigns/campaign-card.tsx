import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { GOOGLE_URL } from '@/lib/constant'
import { Locale } from '@/lib/i18n'
import type { CampaignData } from './campaigns-data'

export default function CampaignCard({
  campaign,
  lang,
}: {
  campaign: CampaignData
  lang: Locale
}) {
  const isArabic = lang === 'ar'

  const t = {
    ar: {
      details: 'عرض التفاصيل',
    },
    en: {
      details: 'View Details',
    },
  }[lang]

  const {
    id,
    title,
    image,
    shortDescription,
    targetAmount,
    raisedAmount,
  } = campaign

  const progressPercentage =
    targetAmount > 0
      ? Math.min(Math.round((raisedAmount / targetAmount) * 100), 100)
      : 0

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`${GOOGLE_URL}${image}`}
          alt={title[lang]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#203441] mb-3 line-clamp-2">
          {title[lang]}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {shortDescription[lang]}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{progressPercentage}%</span>
            <span className="font-medium text-[#39576f]">
              {raisedAmount.toLocaleString()} / {targetAmount.toLocaleString()} $
            </span>
          </div>
          <Progress value={progressPercentage} className="h-1.5" />
        </div>

        <div className="mt-auto pt-4">
          <Link href={`/${lang}/campaigns/${id}`}>
            <Button className="w-full bg-[#39576f] hover:bg-[#203441] group">
              <span>{t.details}</span>
              <ArrowLeft
                className={
                  isArabic
                    ? 'mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
                    : 'ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1'
                }
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}