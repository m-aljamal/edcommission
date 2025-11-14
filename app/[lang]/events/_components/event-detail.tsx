'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Share2, ArrowLeft, Heart, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { EventProps } from './text'

const categoryColors: Record<string, string> = {
  course: 'bg-blue-100 text-blue-800 border-blue-200',
  workshop: 'bg-purple-100 text-purple-800 border-purple-200',
  project: 'bg-green-100 text-green-800 border-green-200',
  confirance: 'bg-blue-100 text-blue-800 border-blue-200',
}

const categoryNames: Record<string, string> = {
  course: 'دورة تدريبية',
  project: 'مشروع',
  confirance: 'مؤتمر',
}

export default function EventDetail({ event }: { event: EventProps }) {
  const [isInterested, setIsInterested] = useState<boolean>(false)
  const [selectedDay, setSelectedDay] = useState('')
  const {
    title,
    date,
    time,
    location,
    image,
    category,
    shortDescription,
    fullDescription,
    registrationLink,
    conferenceDays,
    sessions,
    contactEmail,
    id, socialMedia,
    tracks,
    venue,
    registrationOptions,

  } = event

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: shortDescription,
          url: window.location.href,
        })
        .catch((error) => console.log('Error sharing', error))
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert('تم نسخ رابط الفعالية'))
        .catch((error) => console.log('Error copying to clipboard', error))
    }
  }

  const filteredSessions =
    sessions && selectedDay
      ? sessions.filter((session) => session.day === selectedDay)
      : sessions

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative min-h-[600px] md:h-[450px] lg:h-[550px]">
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#39576f]/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#203441]/20 blur-3xl"></div>
        </div>

        {/* Back Button */}
        <div className="absolute top-6 right-6 z-10">
          <Link href="/ar/events">
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 rounded-full group"
            >
              <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              العودة للفعاليات
            </Button>
          </Link>
        </div>

        {/* Event Title and Basic Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <Badge className={`mb-4 ${categoryColors[category]} border px-3 py-1 text-sm`}>
              {categoryNames[category]}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-white/80" />
                <span>{date}</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-white/80" />
                <span>{time}</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-white/80" />
                <span>{location}</span>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs dir="rtl" defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start mb-32 sm:mb-8 bg-gray-100  grid grid-cols-1 sm:flex ">
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                >
                  التفاصيل
                </TabsTrigger>






                {sessions && (
                  <TabsTrigger
                    value="sessions"
                    className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                  >
                    جلسات المؤتمر
                  </TabsTrigger>
                )}

                {venue && (
                  <TabsTrigger
                    value="venue"
                    className="data-[state=active]:bg-[#39576f] data-[state=active]:text-white"
                  >
                    مكان الانعقاد
                  </TabsTrigger>
                )}


              </TabsList>

              {/* Details Tab */}
              <TabsContent value="details" className="mt-0">
                <div className="prose prose-lg max-w-none space-y-4"  >
                  <h2 className='text-2xl font-bold text-[#203441] mb-4'>{fullDescription.title}</h2>
                  <p className='text-gray-700'>{fullDescription.subTitle}</p>
                  <ul className='list-disc list-inside text-gray-700 space-y-2'>
                    {fullDescription.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>



                {/* Conference Days */}
                {conferenceDays && (
                  <div className="mt-8" dir="rtl">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">أيام المؤتمر:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {conferenceDays.map((day, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="h-4 w-4 text-[#39576f]" />
                              <p className="font-bold text-[#203441]">{day.date}</p>
                            </div>
                            <h4 className="font-bold text-[#203441] mb-2">{day.title}</h4>
                            <p className="text-gray-700 text-sm">{day.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Registration Options */}
                {registrationOptions && (
                  <div className="mt-8" dir="rtl">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">خيارات التسجيل:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {registrationOptions.map((option, index) => (
                        <Card
                          key={index}
                          className={`overflow-hidden ${index === 2 ? 'border-amber-300 shadow-lg' : ''}`}
                        >
                          {index === 2 && (
                            <div className="bg-amber-400 text-amber-900 text-center py-1 font-bold text-sm">
                              الخيار المميز
                            </div>
                          )}
                          <div
                            className={`h-1 ${index === 2 ? 'bg-amber-400' : 'bg-gradient-to-r from-[#203441] to-[#39576f]'}`}
                          ></div>
                          <CardContent className="p-6">
                            <h4 className="font-bold text-[#203441] text-xl mb-2">{option.name}</h4>
                            <p className="text-2xl font-bold text-[#39576f] mb-4">{option.price}</p>

                            <div className="mb-4">
                              <p className="text-sm text-gray-600 mb-2">آخر موعد للتسجيل:</p>
                              <p className="font-medium">{option.deadline}</p>
                            </div>
                            {option.benefits.length > 0 && (
                              <h5 className="font-medium text-[#203441] mb-2">المميزات:</h5>
                            )}

                            <ul className="space-y-2 text-sm text-gray-700">
                              {option.benefits.length > 0 &&
                                option.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <div className="text-green-500 mt-1">
                                      <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    </div>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                            </ul>
                            {registrationLink && (
                              <Button
                                className="w-full mt-6 bg-[#39576f] hover:bg-[#203441]"
                                asChild
                              >
                                <Link href={registrationLink}>التسجيل الآن</Link>
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>




              {/* Conference Sessions Tab */}
              {sessions && (
                <TabsContent value="sessions" className="mt-0">
                  <div className="space-y-6" dir="rtl">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">جلسات المؤتمر:</h3>

                    {/* Day Selection */}
                    {conferenceDays && (
                      <div className="mb-6">
                        <h4 className="font-medium text-[#203441] mb-3">اختر اليوم:</h4>
                        <div className="flex flex-wrap gap-2">
                          {conferenceDays.map((day, index) => (
                            <Button
                              key={index}
                              variant={selectedDay === day.date ? 'default' : 'outline'}
                              className={selectedDay === day.date ? 'bg-[#39576f]' : ''}
                              onClick={() => setSelectedDay(day.date)}
                            >
                              {day.date}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tracks */}
                    {tracks && (
                      <div className="mb-6">
                        <h4 className="font-medium text-[#203441] mb-3">المحاور:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {tracks.map((track, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 p-3 rounded-lg border border-gray-100"
                            >
                              <h5 className="font-bold text-[#203441]">{track.name}</h5>
                              <p className="text-sm text-gray-600">{track.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}


                  </div>
                </TabsContent>
              )}

              {/* Venue Tab */}
              {venue && (
                <TabsContent value="venue" className="mt-0">
                  <div className="space-y-6" dir="rtl">
                    <h3 className="text-xl font-bold text-[#203441] mb-4">مكان انعقاد المؤتمر:</h3>

                    <Card className="overflow-hidden">
                      <div className="relative h-64 w-full">
                        <Image
                          src={venue.map || '/placeholder.svg'}
                          alt={venue.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-[#203441] text-xl mb-2">{venue.name}</h4>
                        <p className="text-gray-700 mb-4">{venue.address}</p>

                        <h5 className="font-medium text-[#203441] mb-2">المرافق:</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {venue.facilities.map((facility, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="text-[#39576f] mt-1">
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-gray-700">{facility}</span>
                            </li>
                          ))}
                        </ul>

                        <Button className="mt-6" variant="outline" asChild>
                          <Link href="https://maps.app.goo.gl/tKwmfokoWAX2VaQM9"  >
                            عرض الموقع على الخريطة
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              )}

              {/* Sponsors Tab */}

            </Tabs>
          </div>

          {/* Right Column - Action Card */}
          <div>
            <div className="sticky top-24">
              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4" dir="rtl">
                    {category === 'confirance'
                      ? ''
                      : category === 'project'
                        ? 'شارك في المشروع'
                        : 'سجل في الفعالية'}
                  </h3>

                  <div className="space-y-4">
                    {/* Registration Button */}
                    {registrationLink && (
                      <Button className="w-full bg-[#39576f] hover:bg-[#203441]" asChild>
                        <Link href={registrationLink}>
                          {category === 'confirance' ? 'التسجيل في المؤتمر' : 'التسجيل في الفعالية'}
                        </Link>
                      </Button>
                    )}

                    {/* Application Button */}


                    {/* Donation Button */}


                    {/* Volunteer Button */}


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

                    <Button
                      asChild
                      variant="outline"
                      className="w-full   border-[#476c86] text-[#476c86] hover:bg-[#476c86]/10 group"
                    >
                      <Link href="https://edc-education-conference.my.canva.site/">
                        <FileText className="ml-2 h-4 w-4" />
                        <span>عرض التفاصيل </span>
                      </Link>
                    </Button>
                  </div>

                  {/* Coordinator Info */}


                  {/* Conference Contact Info */}
                  {category === 'confirance' && event.contactEmail && (
                    <>
                      <Separator className="my-6" />
                      <div dir="rtl">
                        <h4 className="font-medium text-[#203441] mb-2">للتواصل:</h4>
                        <p className="text-[#39576f]">{event.contactEmail}</p>
                        <p dir="ltr" className="text-[#39576f] text-right">
                          +90 531 507 45 47
                        </p>

                        {event.socialMedia && (
                          <div className="mt-4">
                            <h4 className="font-medium text-[#203441] mb-2">تابعنا على:</h4>
                            <div className="flex gap-3">
                              {event.socialMedia.twitter && (
                                <a
                                  href={`https://twitter.com/edcmission`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 hover:text-blue-400"
                                >
                                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                  </svg>
                                </a>
                              )}
                              {event.socialMedia.facebook && (
                                <a
                                  href={`https://www.facebook.com/edcmission`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 hover:text-blue-600"
                                >
                                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                      fillRule="evenodd"
                                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </a>
                              )}
                              {event.socialMedia.instagram && (
                                <a
                                  href={`https://www.instagram.com/educationdevelopmentcommission/`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-600 hover:text-pink-600"
                                >
                                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                      fillRule="evenodd"
                                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Related Events - Could be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// I have this Nextjs page for display event details I want to rebuild it to dissply the data in different way   the data it come to this component is custome it comes form json file like this 

// {
// title: "", 
// description:"",
// cover:"",
