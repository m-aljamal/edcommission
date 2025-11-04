import { LucideIcon } from "lucide-react"

interface StatCardProps {
    icon: LucideIcon
    value: string
    title: string
  }
  
  export function StatCard({ icon: Icon, value, title }: StatCardProps) {
    return (
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#203441]/5 to-[#39576f]/5 rounded-xl blur-sm"></div>
        <div className="relative bg-white rounded-xl p-6 border border-gray-100 flex items-center gap-6 hover:shadow-md transition-all">
          <div className="relative">
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#203441]/10 to-[#39576f]/10 flex items-center justify-center">
              <Icon className="h-8 w-8 text-[#39576f]" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#203441]">{value}</div>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    )
  }