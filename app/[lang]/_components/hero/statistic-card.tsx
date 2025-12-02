import { Card, CardContent } from '@/components/ui/card'
import { useCountUp } from '@/lib/use-count-up'

interface StatisticProps {
  title: string
  number: number
  Icon: React.ElementType
  color: string
  delay: number
  isVisible: boolean
}

export function StatisticCard({ title, number, Icon, color, delay, isVisible }: StatisticProps) {
  const count = useCountUp(number, 2500)



  return (
    <Card
      className={`overflow-hidden border backdrop-blur-sm bg-white/10 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle gradient overlay for visual interest while maintaining transparency */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`}></div>

      <CardContent className="relative p-3 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm">
          <Icon className="size-6 text-white" />
        </div>
        <p className="text-white font-bold">{title}</p>
        <div className="relative mt-2">
          <p className="font-bold text-white text-xl tabular-nums">{count.toLocaleString()}</p>
          <div className="absolute -inset-1 bg-white/10 blur-sm rounded-full -z-10"></div>
        </div>
      </CardContent>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/30"></div>
    </Card>
  )
}


