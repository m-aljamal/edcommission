'use client'

import SectionTitle from './section-title'
import { Award, BookOpen, Building, GraduationCap } from 'lucide-react'

import { useState } from 'react'
import Image from 'next/image'
import AchievementsChart from './achievements-chart'
import { i1, i2, i3, i4 } from '@/lib/constant'
const achievements = [
  {
    icon: GraduationCap,
    title: '50,000+',
    description: 'طالب مستفيد',
    color: 'bg-[#203441]',
    shadowColor: 'shadow-[#203441]/20',
    chartColor: '#203441',
    image: i1,
  },
  {
    icon: Building,
    title: '25+',
    description: 'مدرسة تم تطويرها',
    color: 'bg-[#39576f]',
    shadowColor: 'shadow-[#39576f]/20',
    chartColor: '#39576f',
    image: i2,
  },
  {
    icon: BookOpen,
    title: '35+',
    description: 'برنامج تعليمي',
    color: 'bg-[#476c86]',
    shadowColor: 'shadow-[#476c86]/20',
    chartColor: '#476c86',
    image: i3,
  },
  {
    icon: Award,
    title: '7000+',
    description: 'طالب متخرج',
    color: 'bg-[#606060]',
    shadowColor: 'shadow-[#606060]/20',
    chartColor: '#606060',
    image: i4,
  },
]

function AchievementsList() {
  const [activeChart, setActiveChart] = useState(0)

  return (
    <div className="mb-24">
      <SectionTitle title="أبرز الإنجازات" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative group"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setActiveChart(index)}
          >
            {/* Card with background image */}
            <div
              className={`relative bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 text-center h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border border-white/20 overflow-hidden ${item.shadowColor} cursor-pointer ${activeChart === index ? 'ring-2 ring-white/50' : ''}`}
            >
              {/* Background Image with gradient */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.description}
                  fill
                  className="object-cover opacity-20"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-main-blue/50 to-secound-blue
                /50"
                ></div>
              </div>

              {/* Content (in front of background) */}
              <div className="relative z-10">
                {/* Icon circle with background and glow effect */}
                <div
                  className={`w-20 h-20 ${item.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white transform transition-transform duration-500 group-hover:scale-110 shadow-lg`}
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-md"></div>
                  <item.icon className="w-10 h-10 relative z-10" />
                </div>

                {/* Achievement number with animated counting effect */}
                <h4 className="text-4xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>

                {/* Description */}
                <p className="text-white/90 text-lg">{item.description}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/5 rounded-full transform rotate-45"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/5 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
      <AchievementsChart activeChart={activeChart} setActiveChart={setActiveChart} />
    </div>
  )
}

export default AchievementsList
