'use client'

import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Check } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

export default function ContactNewsletter({ lang }: { lang: Locale }) {
  const [activeOffice, setActiveOffice] = useState<'turkey' | 'damascus'>('turkey')
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp')

  const isArabic = lang === 'ar'

  const content = {
    ar: {
      sectionTitle: 'تواصل معنا',
      sectionDescription:
        'يمكنك التواصل معنا من خلال مكاتبنا في تركيا أو سوريا، أو الاشتراك في نشرتنا الإخبارية للبقاء على اطلاع بأحدث الأخبار والفعاليات.',

      officesTitle: 'مكاتبنا',
      officeTabs: {
        turkey: 'تركيا',
        damascus: 'سوريا',
      },

      labels: {
        address: 'العنوان',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        followUs: 'تابعنا على',
      },

      officeNames: {
        damascusOffice: 'مكتب دمشق:',
        aleppoOffice: 'مكتب حلب:',
      },

      locations: {
        turkey: 'تركيا',
        damascus: 'دمشق',
        aleppo: 'حلب',
      },

      addresses: {
        turkey: 'DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS',
        damascus: 'دمشق - كفربطنا',
        aleppo: 'حلب - المنشية',
      },

      newsletter: {
        title: 'اشترك في النشرة الإخبارية',
        description:
          'اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والتحديثات والفعاليات القادمة.',
        name: 'الاسم',
        namePlaceholder: 'أدخل اسمك',
        preferredContactMethod: 'طريقة التواصل المفضلة',
        email: 'إيميل',
        whatsapp: 'واتساب',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        whatsappLabel: 'رقم الواتساب',
        whatsappPlaceholder: 'أدخل رقم الواتساب الخاص بك',
        submit: 'اشترك الآن',
      },

      social: {
        facebook: 'فيسبوك',
        twitter: 'تويتر',
        instagram: 'إنستغرام',
        youtube: 'يوتيوب',
      },
    },

    en: {
      sectionTitle: 'Contact Us',
      sectionDescription:
        'You can contact us through our offices in Turkey or Syria, or subscribe to our newsletter to stay updated with the latest news and events.',

      officesTitle: 'Our Offices',
      officeTabs: {
        turkey: 'Turkey',
        damascus: 'Syria',
      },

      labels: {
        address: 'Address',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        followUs: 'Follow Us',
      },

      officeNames: {
        damascusOffice: 'Damascus Office:',
        aleppoOffice: 'Aleppo Office:',
      },

      locations: {
        turkey: 'Turkey',
        damascus: 'Damascus',
        aleppo: 'Aleppo',
      },

      addresses: {
        turkey: 'DOĞAN GÜREŞ PAŞA MAH. MUSTAFA EREN CAD. 4/34 MERKEZ/KİLİS',
        damascus: 'Damascus - Kafr Batna',
        aleppo: 'Aleppo - Al-Manshiyah',
      },

      newsletter: {
        title: 'Subscribe to the Newsletter',
        description:
          'Subscribe to our newsletter to receive the latest news, updates, and upcoming events.',
        name: 'Name',
        namePlaceholder: 'Enter your name',
        preferredContactMethod: 'Preferred Contact Method',
        email: 'Email',
        whatsapp: 'WhatsApp',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        whatsappLabel: 'WhatsApp Number',
        whatsappPlaceholder: 'Enter your WhatsApp number',
        submit: 'Subscribe Now',
      },

      social: {
        facebook: 'Facebook',
        twitter: 'Twitter',
        instagram: 'Instagram',
        youtube: 'YouTube',
      },
    },
  } as const

  const t = content[lang]

  const socialLinks = [
    {
      href: 'https://www.facebook.com/edcmission',
      label: t.social.facebook,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: 'https://twitter.com/edcmission',
      label: t.social.twitter,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/educationdevelopmentcommission/',
      label: t.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      href: 'https://www.youtube.com/channel/UC8wDR05WxNOVrC-mlo_GwQQ',
      label: t.social.youtube,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ] as const

  return (
    <section className="py-16 bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#203441]">{t.sectionTitle}</h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-[#476c86] to-[#203441] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.sectionDescription}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-md col-span-2">
              <h3 className="text-2xl font-bold text-[#203441] mb-6">{t.officesTitle}</h3>

              <div className="flex mb-8 bg-white rounded-lg p-1 shadow-sm">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg text-center transition-all ${
                    activeOffice === 'turkey'
                      ? 'bg-[#39576f] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveOffice('turkey')}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium">{t.officeTabs.turkey}</span>
                    {activeOffice === 'turkey' && <Check className="w-4 h-4" />}
                  </span>
                </button>

                <button
                  className={`flex-1 py-2 px-4 rounded-lg text-center transition-all ${
                    activeOffice === 'damascus'
                      ? 'bg-[#39576f] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveOffice('damascus')}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-sm font-medium">{t.officeTabs.damascus}</span>
                    {activeOffice === 'damascus' && <Check className="w-4 h-4" />}
                  </span>
                </button>
              </div>

              <div
                className={`space-y-6 transition-all duration-300 ${
                  activeOffice === 'turkey' ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#39576f] p-3 rounded-full text-white shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-[#203441] mb-1">{t.labels.address}</h4>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {t.locations.turkey}
                      </span>
                    </div>
                    <p className="text-gray-600">{t.addresses.turkey}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#39576f] p-3 rounded-full text-white shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#203441] mb-1">{t.labels.phone}</h4>
                    <p className="text-gray-600 hover:text-[#476c86] transition-colors">
                      <a href="tel:+905123456789" dir="ltr">
                        +90 531 507 45 47
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366] p-3 rounded-full text-white shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#203441] mb-1">{t.labels.whatsapp}</h4>
                    <p className="text-gray-600 hover:text-[#25D366] transition-colors">
                      <a
                        href="https://wa.me/905315074547"
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                      >
                        +90 531 507 45 47
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`space-y-6 transition-all duration-300 ${
                  activeOffice === 'damascus' ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#203441] mb-3">
                      {t.officeNames.damascusOffice}
                    </h4>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#39576f] p-3 rounded-full text-white shrink-0 shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[#203441] mb-1">{t.labels.address}</h4>
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {t.locations.damascus}
                          </span>
                        </div>
                        <p className="text-gray-600">{t.addresses.damascus}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#39576f] p-3 rounded-full text-white shrink-0 shadow-md">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#203441] mb-1">{t.labels.phone}</h4>
                        <p className="text-gray-600 hover:text-[#476c86] transition-colors">
                          <a href="tel:+963112345678" dir="ltr">
                            +963 998 147 601
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#25D366] p-3 rounded-full text-white shrink-0 shadow-md">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#203441] mb-1">{t.labels.whatsapp}</h4>
                        <p className="text-gray-600 hover:text-[#25D366] transition-colors">
                          <a
                            href="https://wa.me/963912345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            dir="ltr"
                          >
                            +963 998 147 601
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#203441] mb-3">
                      {t.officeNames.aleppoOffice}
                    </h4>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#39576f] p-3 rounded-full text-white shrink-0 shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[#203441] mb-1">{t.labels.address}</h4>
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {t.locations.aleppo}
                          </span>
                        </div>
                        <p className="text-gray-600">{t.addresses.aleppo}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#39576f] p-3 rounded-full text-white shrink-0 shadow-md">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#203441] mb-1">{t.labels.phone}</h4>
                        <p className="text-gray-600 hover:text-[#476c86] transition-colors">
                          <a href="tel:+905343536659" dir="ltr">
                            +90 534 353 66 59
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-[#25D366] p-3 rounded-full text-white shrink-0 shadow-md">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#203441] mb-1">{t.labels.whatsapp}</h4>
                        <p className="text-gray-600 hover:text-[#25D366] transition-colors">
                          <a
                            href="https://wa.me/905343536659"
                            target="_blank"
                            rel="noopener noreferrer"
                            dir="ltr"
                          >
                            +90 534 353 66 59
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-[#203441] mb-4">{t.labels.followUs}</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full text-[#39576f] hover:bg-[#39576f] hover:text-white transition-all shadow-sm hover:shadow-md"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#203441] to-[#39576f] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">{t.newsletter.title}</h3>
                <p className="mb-6 text-white/80">{t.newsletter.description}</p>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      {t.newsletter.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-1 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                      placeholder={t.newsletter.namePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block mb-2 text-sm font-medium">
                      {t.newsletter.preferredContactMethod}
                    </label>
                    <div className="flex bg-white/10 rounded-lg p-1">
                      <button
                        type="button"
                        className={`flex-1 py-2 px-4 rounded-lg text-center transition-all flex items-center justify-center gap-2 ${
                          contactMethod === 'whatsapp'
                            ? 'bg-white text-[#203441] shadow-md'
                            : 'text-white hover:bg-white/10'
                        }`}
                        onClick={() => setContactMethod('whatsapp')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="text-sm font-medium">{t.newsletter.whatsapp}</span>
                      </button>

                      <button
                        type="button"
                        className={`flex-1 py-2 px-4 rounded-lg text-center transition-all flex items-center justify-center gap-2 ${
                          contactMethod === 'email'
                            ? 'bg-white text-[#203441] shadow-md'
                            : 'text-white hover:bg-white/10'
                        }`}
                        onClick={() => setContactMethod('email')}
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium">{t.newsletter.email}</span>
                      </button>
                    </div>
                  </div>

                  {contactMethod === 'email' ? (
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        {t.newsletter.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-1 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                        placeholder={t.newsletter.emailPlaceholder}
                        dir="ltr"
                      />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">
                        {t.newsletter.whatsappLabel}
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        className="w-full px-4 py-1 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/50"
                        placeholder={t.newsletter.whatsappPlaceholder}
                        dir="ltr"
                      />
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-white text-[#203441] font-medium py-2 px-6 rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>{t.newsletter.submit}</span>
                      <Send
                        className={`w-5 h-5 transition-transform ${
                          isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}