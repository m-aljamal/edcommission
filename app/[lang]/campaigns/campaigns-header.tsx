import { Calendar, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GOOGLE_URL } from '@/lib/constant'
import Link from 'next/link'
import { Locale } from '@/lib/i18n'

export default function CampaignsHeader({ lang }: { lang: Locale }) {
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      imageAlt: 'خلفية حملات دعم التعليم',
      title: 'حملات دعم التعليم',
      description:
        'تنفّذ جمعيّة تطوير التعليم سلسلة من الحملات الدوريّة والموسميّة سنويًّا، في إطار سعيها لتعزيز مقوّمات الاستقرار والنموّ التعليميّ للأطفال، لا سيّما الأيتام والفئات الأشدّ ضعفًا من الفقراء والنازحين.',
      donate: 'تبرع الآن',
      contact: 'تواصل معنا',
    },
    en: {
      imageAlt: 'Education Support Campaigns Background',
      title: 'Education Support Campaigns',
      description:
        'The Education Development Association carries out a series of regular and seasonal campaigns each year as part of its efforts to strengthen the foundations of stability and educational growth for children, especially orphans and the most vulnerable groups among the poor and displaced.',
      donate: 'Donate Now',
      contact: 'Contact Us',
    },
  } as const

  const t = content[lang]

  return (
    <div
      className="relative bg-gradient-to-r from-[#203441] to-[#39576f] py-16 px-4"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${GOOGLE_URL}1-o0nmtBbv217xlIlb02gkW-LBVqNaxmn`}
            alt={t.imageAlt}
            fill
            priority
            className="object-cover object-center opacity-10"
          />
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Megaphone className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h1>

          <p className="text-white/80 text-lg mb-8">{t.description}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/donate`}>
              <Button size="lg" className="bg-white text-[#203441] hover:bg-white/90">
                {t.donate}
              </Button>
            </Link>

            <Link href={`/${lang}#contact-us`}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white"
              >
                {t.contact}
                <Calendar className={isArabic ? 'mr-2 h-5 w-5' : 'ml-2 h-5 w-5'} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}