import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatCard } from './state-card'
import { School, UserCheck, Users } from 'lucide-react'

interface ImportanceSectionProps {
  t: {
    title: string
    description: string
    points: string[]
    achievementsTitle: string
    closingText: string
    learnMoreButton: string
  }
  stats: {
    centersValue: string
    centers: string
    teachersValue: string
    teachers: string
    studentsValue: string
    students: string
  }
}

export function ImportanceSection({ t, stats }: ImportanceSectionProps) {
  const statItems = [
    { title: stats.centers, value: stats.centersValue, icon: School },
    { title: stats.teachers, value: stats.teachersValue, icon: UserCheck },
    { title: stats.students, value: stats.studentsValue, icon: Users },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-[#203441] to-[#39576f] p-8 lg:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.title}</h2>
            <p className="mb-6 text-white/90">{t.description}</p>
            <div className="space-y-5">
              {t.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-full mt-1 backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white/90">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 p-8 lg:p-10">
            <h3 className="text-xl font-bold text-[#203441] mb-8 text-center">
              {t.achievementsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statItems.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">{t.closingText}</p>
              <Button className="mt-6 bg-[#39576f] hover:bg-[#203441]">
                {t.learnMoreButton}
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}