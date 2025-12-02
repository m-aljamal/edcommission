"use client"

import { PostBody } from '@/components/post-body'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Event } from '@/types'
import { ArrowLeft, Calendar, Clock, FileText, MapPin, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'




export default function EventDetail({ event }: { event: Event }) {

  const {
    title,
    date,
    time,
    location,
    cover,
    shortDescription,
    content,
    contactEmail,
    registrationLink
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



  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative min-h-[600px] md:h-[450px] lg:h-[550px]">
          <Image
            src={cover || '/placeholder.svg'}
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-white/80" />
                <span>{date}</span>
              </div>
              {time &&
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-white/80" />
                  <span>{time}</span>
                </div>
              }
              {
                location &&

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="h-5 w-5 text-white/80" />
                  <span>{location}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <div className="w-full justify-start mb-32 sm:mb-8   grid grid-cols-1 sm:flex ">
              <div className="prose prose-lg max-w-none space-y-8"  >
                <h2 className='text-xl text-[#203441] mb-10'>{shortDescription}</h2>
                <div  >
                  <PostBody content={content} />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Action Card */}
          <div>
            <div className="sticky top-24">
              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#203441] mb-4"  >
                    سجل في الفعالية
                  </h3>

                  <div className="space-y-4">
                    {/* Registration Button */}
                    {registrationLink && (
                      <Button className="w-full bg-[#39576f] hover:bg-[#203441]" asChild>
                        <Link href={registrationLink}>
                          التسجيل في الفعالية
                        </Link>
                      </Button>
                    )}


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


                  {contactEmail && (
                    <>
                      <Separator className="my-6" />
                      <div  >
                        <h4 className="font-medium text-[#203441] mb-2">للتواصل:</h4>
                        <p className="text-[#39576f]">{event.contactEmail}</p>
                        <p dir="ltr" className="text-[#39576f] text-right">
                          +90 531 507 45 47
                        </p>


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




