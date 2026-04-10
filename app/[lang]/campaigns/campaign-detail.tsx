'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  MapPin,
  Users,
  Share2,
  ArrowLeft,
  Heart,
  Target,
  Clock,
  Phone,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { GOOGLE_URL } from '@/lib/constant'
import { Locale } from '@/lib/i18n'

type TranslatedText = {
  ar: string
  en: string
}

type CampaignUpdate = {
  date: string
  title: TranslatedText
  content: TranslatedText
  type: TranslatedText
  image?: string
}

type CampaignTestimonial = {
  name: string
  role: TranslatedText
  image?: string
  content: TranslatedText
}

type CampaignCoordinator = {
  name: string
  title: TranslatedText
  phone: string
  email: string
}

type CampaignImpactStat = {
  label: TranslatedText
  value: string
}

type Campaign = {
  id: string
  title: TranslatedText
  createdAt: string
  location?: TranslatedText
  image: string
  shortDescription: TranslatedText
  fullDescription: TranslatedText
  targetAmount: number
  raisedAmount: number
  beneficiaries: number
  donors: number
  gallery?: string[]
  updates?: CampaignUpdate[]
  testimonials?: CampaignTestimonial[]
  coordinator?: CampaignCoordinator
  impactStats?: CampaignImpactStat[]
}

export default function CampaignDetail({
  campaign,
  lang,
}: {
  campaign: Campaign
  lang: Locale
}) {
  const isArabic = lang === 'ar'
  const [isInterested, setIsInterested] = useState(false)

  const t = {
    ar: {
      back: 'العودة للحملات',
      publishedAt: 'تاريخ النشر:',
      beneficiaries: 'المستفيدون:',
      details: 'التفاصيل',
      updates: 'التحديثات',
      gallery: 'معرض الصور',
      testimonials: 'قصص النجاح',
      campaignImpact: 'أثر هذه الحملة',
      latestUpdates: 'آخر تحديثات الحملة',
      noUpdates: 'لا يوجد تحديثات',
      galleryTitle: 'معرض الصور',
      successStories: 'قصص النجاح',
      campaignDetails: 'تفاصيل الحملة',
      collected: 'تم جمع:',
      target: 'الهدف:',
      completed: 'مكتمل',
      remaining: 'متبقي',
      beneficiariesCard: 'المستفيدون',
      donorsCard: 'المتبرعون',
      interested: 'أنا مهتم',
      interestedActive: 'مهتم',
      share: 'مشاركة',
      donateNow: 'تبرع الآن',
      copied: 'تم نسخ رابط الحملة إلى الحافظة',
      askAboutCampaign: 'للاستفسار عن الحملة',
    },
    en: {
      back: 'Back to Campaigns',
      publishedAt: 'Published:',
      beneficiaries: 'Beneficiaries:',
      details: 'Details',
      updates: 'Updates',
      gallery: 'Gallery',
      testimonials: 'Success Stories',
      campaignImpact: 'Campaign Impact',
      latestUpdates: 'Latest Campaign Updates',
      noUpdates: 'No updates available',
      galleryTitle: 'Photo Gallery',
      successStories: 'Success Stories',
      campaignDetails: 'Campaign Details',
      collected: 'Collected:',
      target: 'Target:',
      completed: 'completed',
      remaining: 'Remaining',
      beneficiariesCard: 'Beneficiaries',
      donorsCard: 'Donors',
      interested: 'I’m Interested',
      interestedActive: 'Interested',
      share: 'Share',
      donateNow: 'Donate Now',
      copied: 'Campaign link copied to clipboard',
      askAboutCampaign: 'Campaign Inquiries',
    },
  }[lang]

  const {
    id,
    title,
    createdAt,
    location,
    image,
    shortDescription,
    fullDescription,
    targetAmount,
    raisedAmount,
    beneficiaries,
    donors,
    gallery = [],
    updates = [],
    testimonials = [],
    coordinator,
    impactStats = [],
  } = campaign

  const progressPercentage =
    targetAmount > 0 ? Math.min(Math.round((raisedAmount / targetAmount) * 100), 100) : 0

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title[lang],
          text: shortDescription[lang],
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
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={`${GOOGLE_URL}${image}`}
          alt={title[lang]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className={`absolute top-6 z-10 ${isArabic ? 'right-6' : 'left-6'}`}>
          <Link href={`/${lang}/campaigns`}>
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
            >
              <ArrowLeft
                className={
                  isArabic
                    ? 'ml-2 h-4 w-4'
                    : 'mr-2 h-4 w-4 rotate-180'
                }
              />
              {t.back}
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {title[lang]}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {t.publishedAt} {createdAt}
                </span>
              </div>

              {location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{location[lang]}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>
                  {t.beneficiaries} {beneficiaries.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Tabs defaultValue="details" className="w-full" dir={isArabic ? 'rtl' : 'ltr'}>
              <TabsList className="w-full justify-start mb-6 bg-gray-100 flex-wrap">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                >
                  {t.details}
                </TabsTrigger>

                <TabsTrigger
                  value="updates"
                  className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                >
                  {t.updates}
                </TabsTrigger>

                {gallery.length > 0 && (
                  <TabsTrigger
                    value="gallery"
                    className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                  >
                    {t.gallery}
                  </TabsTrigger>
                )}

                {testimonials.length > 0 && (
                  <TabsTrigger
                    value="testimonials"
                    className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                  >
                    {t.testimonials}
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="details" className="mt-0">
                <div className="prose prose-lg max-w-none" dir={isArabic ? 'rtl' : 'ltr'}>
                  <div dangerouslySetInnerHTML={{ __html: fullDescription[lang] }} />
                </div>

                {impactStats.length > 0 && (
                  <div className="mt-10 bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-[#203441] mb-6">
                      {t.campaignImpact}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {impactStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                            <span className="text-2xl font-bold text-[#39576f]">{stat.value}</span>
                          </div>
                          <p className="text-gray-700">{stat.label[lang]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="updates" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4">
                    {updates.length > 0 ? t.latestUpdates : t.noUpdates}
                  </h3>

                  {updates.length > 0 && (
                    <div className="relative">
                      <div
                        className={`absolute top-0 bottom-0 w-1 bg-gray-200 rounded ${
                          isArabic ? 'right-[19px]' : 'left-[19px]'
                        }`}
                      />

                      <div className="space-y-8">
                        {updates.map((update, index) => (
                          <div key={index} className="relative flex items-start gap-4">
                            <div
                              className={`absolute w-10 h-10 bg-[#39576f] rounded-full flex items-center justify-center z-10 ${
                                isArabic ? 'right-0' : 'left-0'
                              }`}
                            >
                              <Clock className="h-5 w-5 text-white" />
                            </div>

                            <div
                              className={`bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex-1 ${
                                isArabic ? 'mr-16' : 'ml-16'
                              }`}
                            >
                              <div className="flex justify-between mb-2">
                                <span className="text-sm text-gray-500">{update.date}</span>
                                <Badge className="bg-[#39576f]/10 text-[#39576f]">
                                  {update.type[lang]}
                                </Badge>
                              </div>
                              <h4 className="font-bold text-[#203441] mb-2">
                                {update.title[lang]}
                              </h4>
                              <p className="text-gray-700">{update.content[lang]}</p>

                              {update.image && (
                                <div className="mt-3 relative h-48 rounded-lg overflow-hidden">
                                  <Image
                                    src={update.image}
                                    alt={update.title[lang]}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              {gallery.length > 0 && (
                <TabsContent value="gallery" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">{t.galleryTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {gallery.map((item, index) => (
                        <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={`${GOOGLE_URL}${item}`}
                            alt={`${title[lang]} ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              )}

              {testimonials.length > 0 && (
                <TabsContent value="testimonials" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">{t.successStories}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {testimonials.map((testimonial, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                                <Image
                                  src={testimonial.image || '/placeholder.svg'}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-[#203441]">{testimonial.name}</h4>
                                <p className="text-gray-500 text-sm mb-3">
                                  {testimonial.role[lang]}
                                </p>
                                <p className="text-gray-700">{testimonial.content[lang]}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="overflow-hidden mb-6">
                <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4">
                    {t.campaignDetails}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        {t.collected} {raisedAmount.toLocaleString()} $
                      </span>
                      <span className="font-medium text-[#39576f]">
                        {t.target} {targetAmount.toLocaleString()} $
                      </span>
                    </div>

                    <Progress value={progressPercentage} className="h-2" />

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        {progressPercentage}% {t.completed}
                      </span>
                      <span className="text-gray-500">
                        {t.remaining} {(targetAmount - raisedAmount).toLocaleString()} $
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Users className="h-5 w-5 text-[#39576f] mx-auto mb-1" />
                      <span className="block text-sm text-gray-500">{t.beneficiariesCard}</span>
                      <span className="block font-bold text-[#203441]">
                        {beneficiaries.toLocaleString()}
                      </span>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Target className="h-5 w-5 text-[#39576f] mx-auto mb-1" />
                      <span className="block text-sm text-gray-500">{t.donorsCard}</span>
                      <span className="block font-bold text-[#203441]">
                        {donors.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      variant={isInterested ? 'default' : 'outline'}
                      className={`w-full ${
                        isInterested
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'text-red-500 hover:text-red-600'
                      }`}
                      onClick={() => setIsInterested(!isInterested)}
                    >
                      <Heart className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'} ${isInterested ? 'fill-white' : ''}`} />
                      {isInterested ? t.interestedActive : t.interested}
                    </Button>

                    <Button variant="outline" className="w-full" onClick={handleShare}>
                      <Share2 className={`h-4 w-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                      {t.share}
                    </Button>

                    <Link href={`/${lang}/donate`}>
                      <Button className="w-full bg-[#39576f] hover:bg-[#203441]">
                        <Heart className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                        {t.donateNow}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {coordinator && (
                <Card className="overflow-hidden mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#203441] mb-4">
                      {t.askAboutCampaign}
                    </h3>

                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-medium text-[#203441]">{coordinator.name}</p>
                        <p className="text-gray-500 text-sm">{coordinator.title[lang]}</p>

                        <div className="mt-2 space-y-1">
                          <p className="text-sm flex items-center gap-2">
                            <Phone className="h-4 w-4 text-[#39576f]" />
                            <a
                              href={`tel:${coordinator.phone}`}
                              className="text-[#39576f] hover:underline"
                              dir="ltr"
                            >
                              {coordinator.phone}
                            </a>
                          </p>

                          <p className="text-sm flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[#39576f]" />
                            <a
                              href={`mailto:${coordinator.email}`}
                              className="text-[#39576f] hover:underline"
                            >
                              {coordinator.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}