import { BookOpen, Building, GraduationCap, MessageCircle, School, Search } from 'lucide-react'
import { StatisticCard } from './statistic-card'
import { useEffect, useState } from 'react'
import { ButtonIcon } from '../button-icon'
import { VideoDialog } from './video-dialog'

const text = {
  title: 'جمعية تطوير التعليم',
  subTitle: 'تمكين - إكتشاف - إبتكار',
}

const statistics = [
  {
    title: 'طالب',
    number: 50000,
    icon: GraduationCap,
    color: 'from-first-blue to-main-blue',
  },
  {
    title: ' كفالات تعليمية ',
    number: 750,
    icon: BookOpen,
    color: 'from-secound-blue to-main-blue',
  },
  {
    title: 'مدارس',
    number: 25,
    icon: School,
    color: 'from-main-gray to-first-blue',
  },
  {
    title: 'مراكز ثقافية',
    number: 6,
    icon: Building,
    color: 'from-secound-blue to-main-gray',
  },
]

export default function HeroContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-4xl space-y-14">
        {/* title */}
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white md:text-4xl ">{text.title}</h1>
          <p className="text-sm text-white/80 md:text-2xl">{text.subTitle}</p>
        </div>
        {/* cards  */}
        <div className="mx-auto hidden lg:grid  grid-cols-4  gap-6">
          {statistics.map((item, index) => (
            <StatisticCard
              key={index}
              title={item.title}
              number={item.number}
              Icon={item.icon}
              color={item.color}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>
        {/* cards on mobile */}
        <div className="flex  justify-center gap-5 lg:hidden">
          {statistics.map((item, index) => (
            <div key={item.title} className="text-white flex gap-6">
              {index > 0 && <div className="w-[1px] h-12 bg-white/40 rounded-2xl" />}
              <div>
                <h2>{item.title}</h2>
                <p>{item.number}</p>
              </div>
            </div>
          ))}
        </div>
        <Buttons />
      </div>
    </div>
  )
}

function Buttons() {
  return (
    <div className=" flex flex-col lg:flex-row  items-center justify-center gap-8  ">
      <ButtonIcon
        className="bg-white text-main-blue hover:bg-white/90 shadow-lg"
        icon={MessageCircle}
        href="/contact"
      >
        تواصل معنا
      </ButtonIcon>
      <ButtonIcon
        className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/10"
        icon={Search}
        href="/about"
      >
        اكتشف المزيد
      </ButtonIcon>
      <VideoDialog videoId="cm4ek8bGF8Y" />
    </div>
  )
}
