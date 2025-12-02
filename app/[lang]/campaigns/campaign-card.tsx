import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Users, ArrowLeft, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
 
export default function CampaignCard({ campaign }) {
  const {
    id,
    title,
    image,
    shortDescription,
    category,
    endDate,
    targetAmount,
    raisedAmount,
    beneficiaries,
  } = campaign

  // Calculate progress percentage
  const progressPercentage = Math.min(Math.round((raisedAmount / targetAmount) * 100), 100)

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dokawmydv/image/upload/v1762079023/7_fzqlc7.jpg"
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Category Badge */}
        {/* <div className="absolute top-4 right-4">
          <Badge className="bg-white/80 text-[#203441] backdrop-blur-sm">{category}</Badge>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#203441] mb-3 line-clamp-2">{title}</h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>

        {/* Progress Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{progressPercentage}%</span>
            <span className="font-medium text-[#39576f]">
              {raisedAmount.toLocaleString()} / {targetAmount.toLocaleString()} $
            </span>
          </div>
          <Progress value={progressPercentage} className="h-1.5 " />
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <Link href={`/campaigns/${id}`}>
            <Button className="w-full bg-[#39576f] hover:bg-[#203441] group">
              <span>عرض التفاصيل</span>
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
