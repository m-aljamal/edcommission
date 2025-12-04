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
  Landmark,
  CreditCard,
  Phone,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GOOGLE_URL } from '@/lib/constant'
import { ButtonIcon } from '@/components/button-icon'

export default function CampaignDetail({ campaign }) {
  const [isInterested, setIsInterested] = useState(false)
  const [donationAmount, setDonationAmount] = useState('100')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [customAmount, setCustomAmount] = useState('')

  const {
    id,
    title,
    startDate,
    createdAt,
    location,
    image,

    shortDescription,
    fullDescription,
    targetAmount,
    raisedAmount,
    beneficiaries,
    donors,

    gallery,
    updates,
    testimonials,

    coordinator,
    donationOptions,
    impactStats,
  } = campaign

  // Calculate progress percentage
  const progressPercentage = Math.min(Math.round((raisedAmount / targetAmount) * 100), 100)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: shortDescription,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('تم نسخ رابط الحملة إلى الحافظة')
    }
  }

  const handleDonationAmountChange = (value) => {
    setDonationAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setDonationAmount('custom')
  }

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <Image src={`${GOOGLE_URL}${image}`} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

        {/* Back Button */}
        <div className="absolute top-6 right-6">
          <Link href="/campaigns">
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة للحملات
            </Button>
          </Link>
        </div>

        {/* Campaign Title and Basic Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{title}</h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>تاريخ النشر: {createdAt}</span>
              </div>

              {location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{location}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>المستفيدون: {beneficiaries.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="details" className="w-full" dir="rtl">
              <TabsList className="w-full justify-start mb-6 bg-gray-100 flex-wrap">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                >
                  التفاصيل
                </TabsTrigger>

                <TabsTrigger
                  value="updates"
                  className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                >
                  التحديثات
                </TabsTrigger>

                {gallery && gallery.length > 0 && (
                  <TabsTrigger
                    value="gallery"
                    className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                  >
                    معرض الصور
                  </TabsTrigger>
                )}

                {testimonials && testimonials.length > 0 && (
                  <TabsTrigger
                    value="testimonials"
                    className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                  >
                    قصص النجاح
                  </TabsTrigger>
                )}
              </TabsList>

              {/* Details Tab */}
              <TabsContent value="details" className="mt-0">
                <div className="prose prose-lg max-w-none" dir="rtl">
                  <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
                </div>

                {/* Impact Stats */}
                {impactStats && impactStats.length > 0 && (
                  <div className="mt-10 bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-[#203441] mb-6">أثر هذه الحملة</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {impactStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                            <span className="text-2xl font-bold text-[#39576f]">{stat.value}</span>
                          </div>
                          <p className="text-gray-700">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Updates Tab */}

              <TabsContent value="updates" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4">
                    {updates.length > 0 ? (
                      <span>.آخر تحديثات الحملة</span>
                    ) : (
                      <span>لا يوجد تحديثات</span>
                    )}
                  </h3>

                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-0 bottom-0 right-[19px] w-1 bg-gray-200 rounded"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                      {updates.map((update, index) => (
                        <div key={index} className="relative flex items-start gap-4">
                          <div className="absolute right-0 w-10 h-10 bg-[#39576f] rounded-full flex items-center justify-center z-10">
                            <Clock className="h-5 w-5 text-white" />
                          </div>

                          <div className="mr-16 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-gray-500">{update.date}</span>
                              <Badge className="bg-[#39576f]/10 text-[#39576f]">
                                {update.type}
                              </Badge>
                            </div>
                            <h4 className="font-bold text-[#203441] mb-2">{update.title}</h4>
                            <p className="text-gray-700">{update.content}</p>
                            {update.image && (
                              <div className="mt-3 relative h-48 rounded-lg overflow-hidden">
                                <Image
                                  src={update.image || '/placeholder.svg'}
                                  alt={update.title}
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
                </div>
              </TabsContent>

              {/* Gallery Tab */}
              {gallery && gallery.length > 0 && (
                <TabsContent value="gallery" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">معرض الصور</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {gallery.map((item, index) => (
                        <div
                          key={index}
                          className="relative h-64 rounded-lg overflow-hidden shadow-md"
                        >
                          <Image
                            src={`${GOOGLE_URL}${item}`}
                            alt={item}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              )}

              {/* Testimonials Tab */}
              {testimonials && testimonials.length > 0 && (
                <TabsContent value="testimonials" className="mt-0">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">قصص النجاح</h3>
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
                                <p className="text-gray-500 text-sm mb-3">{testimonial.role}</p>
                                <p className="text-gray-700">{testimonial.content}</p>
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

          {/* Right Column - Donation Card */}
          <div>
            <div className="sticky top-24">
              {/* Campaign Stats Card */}
              <Card className="overflow-hidden mb-6">
                <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4" dir="rtl">
                    تفاصيل الحملة
                  </h3>

                  {/* Progress Bar */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        تم جمع: {raisedAmount.toLocaleString()} $
                      </span>
                      <span className="font-medium text-[#39576f]">
                        الهدف: {targetAmount.toLocaleString()} $
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{progressPercentage}% مكتمل</span>
                      <span className="text-gray-500">
                        متبقي {(targetAmount - raisedAmount).toLocaleString()} $
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Users className="h-5 w-5 text-[#39576f] mx-auto mb-1" />
                      <span className="block text-sm text-gray-500">المستفيدون</span>
                      <span className="block font-bold text-[#203441]">
                        {beneficiaries.toLocaleString()}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Target className="h-5 w-5 text-[#39576f] mx-auto mb-1" />
                      <span className="block text-sm text-gray-500">المتبرعون</span>
                      <span className="block font-bold text-[#203441]">
                        {donors.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Interested Button */}
                    <Button
                      variant={isInterested ? 'default' : 'outline'}
                      className={`w-full ${isInterested ? 'bg-red-500 hover:bg-red-600' : 'text-red-500 hover:text-red-600'}`}
                      onClick={() => setIsInterested(!isInterested)}
                    >
                      <Heart className={`mr-2 h-4 w-4 ${isInterested ? 'fill-white' : ''}`} />
                      {isInterested ? 'مهتم' : 'أنا مهتم'}
                    </Button>

                    {/* Share Button */}
                    <Button variant="outline" className="w-full" onClick={handleShare}>
                      <Share2 className="mr-2 h-4 w-4" />
                      مشاركة
                    </Button>
                    <Link href="/donate">
                      <Button className="w-full bg-[#39576f] hover:bg-[#203441]">
                        <Heart className="mr-2 h-5 w-5" />
                        تبرع الآن
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Coordinator Info */}
              {coordinator && (
                <Card className="overflow-hidden mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#203441] mb-4" dir="rtl">
                      للاستفسار عن الحملة
                    </h3>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-medium text-[#203441]">{coordinator.name}</p>
                        <p className="text-gray-500 text-sm">{coordinator.title}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm flex items-center gap-2">
                            <Phone className="h-4 w-4 text-[#39576f]" />
                            <a
                              href={`tel:${coordinator.phone}`}
                              className="text-[#39576f] hover:underline"
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

      {/* Related Campaigns */}
      {/* <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-[#203441] mb-8 text-center">حملات أخرى قد تهمك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-500">سيتم عرض حملات مشابهة هنا</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-500">سيتم عرض حملات مشابهة هنا</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-500">سيتم عرض حملات مشابهة هنا</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
