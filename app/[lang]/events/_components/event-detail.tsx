'use client'

import { PostBody } from '@/components/post-body'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Locale } from '@/lib/i18n'
import { Event } from '@/types'
import { ArrowLeft, Calendar, Clock, FileText, MapPin, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function EventDetail({ event, lang }: { event: Event; lang: Locale }) {
  const isArabic = lang === 'ar'

  const t = {
    ar: {
      back: 'العودة للفعاليات',
      registerTitle: 'سجل في الفعالية',
      registerButton: 'التسجيل في الفعالية',
      share: 'مشاركة',
      details: 'عرض التفاصيل',
      contact: 'للتواصل:',
      copied: 'تم نسخ رابط الفعالية',
    },
    en: {
      back: 'Back to Events',
      registerTitle: 'Register for the Event',
      registerButton: 'Register for the Event',
      share: 'Share',
      details: 'View Details',
      contact: 'Contact:',
      copied: 'Event link copied',
    },
  }[lang]

  const {
    title,
    date,
    time,
    location,
    cover,
    shortDescription,
    content,
    contactEmail,
    registrationLink,
  } = event

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: shortDescription,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert(t.copied)
      }
    } catch (error) {
      console.log('Error sharing', error)
    }
  }

  return (
    <div className="pb-16" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="relative">
        <div className="relative min-h-[600px] md:h-[450px] lg:h-[550px]">
          <Image
            src={cover || '/placeholder.svg'}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#39576f]/20 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#203441]/20 blur-3xl" />
        </div>

        <div className={`absolute top-6 z-10 ${isArabic ? 'right-6' : 'left-6'}`}>
          <Link href={`/${lang}/events`}>
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:text-whigte text-white border-white/20 rounded-full group"
            >
              <ArrowLeft
                className={`h-4 w-4 transition-transform ${
                  isArabic ? 'ml-2 group-hover:-translate-x-1' : 'mr-2 rotate-180 group-hover:translate-x-1'
                }`}
              />
              {t.back}
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-white/80" />
                <span>{date}</span>
              </div>

              {time && (
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-white/80" />
                  <span>{time}</span>
                </div>
              )}

              {location && (
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="h-5 w-5 text-white/80" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="w-full justify-start mb-32 sm:mb-8 grid grid-cols-1 sm:flex">
              <div className="prose prose-lg max-w-none space-y-8">
                <h2 className="text-xl text-[#203441] mb-10">{shortDescription}</h2>
                <div>
                  <PostBody content={content} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4">{t.registerTitle}</h3>

                  <div className="space-y-4">
                    {registrationLink && (
                      <Button className="w-full bg-[#39576f] hover:bg-[#203441]" asChild>
                        <Link href={registrationLink} target="_blank" rel="noopener noreferrer">
                          {t.registerButton}
                        </Link>
                      </Button>
                    )}

                    <Button variant="outline" className="w-full" onClick={handleShare}>
                      <Share2 className={isArabic ? 'mr-2 h-4 w-4' : 'ml-2 h-4 w-4'} />
                      {t.share}
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#476c86] text-[#476c86] hover:bg-[#476c86]/10 group"
                    >
                      <Link
                        href="https://edc-education-conference.my.canva.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className={isArabic ? 'ml-2 h-4 w-4' : 'mr-2 h-4 w-4'} />
                        <span>{t.details}</span>
                      </Link>
                    </Button>
                  </div>

                  {contactEmail && (
                    <>
                      <Separator className="my-6" />
                      <div>
                        <h4 className="font-medium text-[#203441] mb-2">{t.contact}</h4>
                        <p className="text-[#39576f]">{contactEmail}</p>
                        <p dir="ltr" className={`text-[#39576f] ${isArabic ? 'text-right' : 'text-left'}`}>
                          +90 531 507 45 47
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}