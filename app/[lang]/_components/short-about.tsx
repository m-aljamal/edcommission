import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ButtonIcon } from './button-icon'
function ShortAbout() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ShortAboutDescription />

          <ShortAboutVideo />
        </div>
      </div>
    </section>
  )
}

export default ShortAbout

function ShortAboutDescription() {
  return (
    <div className="flex flex-col items-start space-y-6">
      <Image src={`/logo.png`} alt="هيئة تطوير التعليم" width={115} height={115} priority />

      <div className="space-y-4 text-right mt-1.5">
        <p className="text-gray-700 leading-relaxed text-justify">
          <span className="font-bold text-main-blue mx-2">هيئة تطوير التعليم</span>
          هي منظمة رائدة تهدف إلى تحسين جودة التعليم وتوفير فرص تعليمية متميزة للطلاب في جميع أنحاء
          المنطقة. نعمل على تطوير المناهج الدراسية وتدريب المعلمين وتوفير البنية التحتية اللازمة
          للمدارس والمراكز التعليمية.
        </p>
      </div>

      <ButtonIcon
        className="bg-first-blue text-white hover:bg-main-blue shadow-md transition-all group cursor-pointer"
        icon={ArrowRight}
        iconClassName="transition-transform group-hover:translate-x-1"
        href="/about/annual-reports"
      >
        التقارير السنوية
      </ButtonIcon>
    </div>
  )
}

function ShortAboutVideo() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video bg-white">
        {/* YouTube Video Embed */}
        <div className="relative w-full h-full p-2">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/z8kGZ6DZxec?si=62upwfSk2TrRAcB-"
            title="هيئة تطوير التعليم"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Simple decorative border */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secound-blue to-main-blue"></div>
      </div>
    </div>
  )
}
