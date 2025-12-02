import { Calendar, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
export default function CampaignsHeader() {
  return (
    <div className="relative bg-gradient-to-r from-[#203441] to-[#39576f] py-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0   ">
          <Image
            src="https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg"
            alt="خلفية جودة التعليم"
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
            حملات دعم التعليم
          </h1>
          <p className="text-white/80 text-lg mb-8">
            تنفّذ جمعيّة تطوير التعليم سلسلة من الحملات الدوريّة والموسميّة سنويًّا، في إطار سعيها
            لتعزيز مقوّمات الاستقرار والنموّ التعليميّ للأطفال، لا سيّما الأيتام والفئات الأشدّ
            ضعفًا من الفقراء والنازحين.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-[#203441] hover:bg-white/90">
                تبرع الآن
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"

                variant="outline"
                className="bg-transparent text-white border-white  "
              >
                تواصل معنا
                <Calendar className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
