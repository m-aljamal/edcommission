import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Locale } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Locale }) {
  const currentYear = new Date().getFullYear()
  const isArabic = lang === 'ar'

  const content = {
    ar: {
      title: 'جمعية تطوير التعليم',
      description:
        'نعمل على تطوير التعليم وتوفير فرص تعليمية متميزة للطلاب في جميع أنحاء المنطقة من خلال برامجنا المبتكرة ومبادراتنا المتنوعة.',
      contactTitle: 'معلومات الاتصال',
      address: 'DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS',
      phone: '+90 531 507 45 47',
      email: 'info@edcommission.com',
      copyright: `© ${currentYear} جمعية تطوير التعليم. جميع الحقوق محفوظة.`,
    },
    en: {
      title: 'Education Development Association',
      description:
        'We work to develop education and provide outstanding educational opportunities for students across the region through our innovative programs and diverse initiatives.',
      contactTitle: 'Contact Information',
      address: 'DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS',
      phone: '+90 531 507 45 47',
      email: 'info@edcommission.com',
      copyright: `© ${currentYear} Education Development Association. All rights reserved.`,
    },
  } as const

  const t = content[lang]

  return (
    <footer className="bg-[#203441] text-white" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="font-bold text-xl">{t.title}</div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{t.description}</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold relative inline-block">
              {t.contactTitle}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#476c86] to-transparent"></span>
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">{t.address}</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300" dir="ltr">
                    {t.phone}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">{t.email}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#182a34] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-gray-400 text-sm text-center">{t.copyright}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}