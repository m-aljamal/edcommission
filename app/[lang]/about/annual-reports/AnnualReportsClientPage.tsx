'use client'
import { annualReports } from './data'
import { Button } from '@/components/ui/button'
import { Locale } from '@/lib/i18n'
import { Download, Calendar, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function AnnualReportsClientPage({ lang }: { lang: Locale }) {
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      title: 'التقارير السنوية:',
      subtitle:
        'استعرض التقارير السنوية لجمعية تطوير التعليم واطلع على آخر المشاريع والإنجازات',
      viewReport: 'عرض التقرير',
    },
    en: {
      title: 'Annual Reports',
      subtitle:
        'Browse the annual reports of the Education Development Association and explore the latest projects and achievements',
      viewReport: 'View Report',
    },
  } as const

  const t = content[lang]

  const sortedReports = [...annualReports].sort((a, b) => b.year - a.year)

  return (
    <div className="space-y-8" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#203441] flex items-center gap-2">
          <span className="w-8 h-1 bg-[#39576f] rounded-full"></span>
          <span>{t.title}</span>
        </h3>

        <p className="text-lg text-gray-600">{t.subtitle}</p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedReports.map((report, index) => (
          <div
            key={report.id}
            className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-[#f8fafc]">
              <Image
                fill
                src={report.thumbnailUrl}
                alt={report.title[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#203441]/80 to-transparent p-4">
                <div className="flex items-center text-white">
                  <Calendar className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                  <span className="text-sm">{report.year}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 text-[#203441] line-clamp-2 group-hover:text-secound-blue">
                {report.title[lang]}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {report.description[lang]}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <Button
                  asChild
                  className="flex-1 bg-[#203441] hover:bg-[#152736] text-white"
                >
                  <a
                    href={`https://drive.google.com/file/d/${report.pdfUrl}/preview`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                    {t.viewReport}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="border-[#203441] text-[#203441] hover:bg-[#203441]/5"
                >
                  <a
                    href={`https://drive.google.com/uc?export=download&id=${report.pdfUrl}`}
                    download
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}