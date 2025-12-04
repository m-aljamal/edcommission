import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Users, Calendar, Target, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { campaignsData } from './campaigns-data'
import { GOOGLE_URL } from '@/lib/constant'

export default function CurrentCampaign() {
  // Get the current (active) campaign - usually the first one in the list
  const currentCampaign = campaignsData[0]

  // Calculate progress percentage
  const progressPercentage = Math.min(
    Math.round((currentCampaign.raisedAmount / currentCampaign.targetAmount) * 100),
    100,
  )

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Campaign Image */}
        <div className="relative h-64 lg:h-auto">
          <Image
            src={`${GOOGLE_URL}${currentCampaign.image}`}
            alt={currentCampaign.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/80 text-[#203441] backdrop-blur-sm">
              <Calendar className="h-3 w-3 mr-1" />
              {currentCampaign.endDate}
            </Badge>
          </div>
        </div>

        {/* Right side - Campaign Info */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-[#39576f]/10 text-[#39576f] hover:bg-[#39576f]/20">
              {currentCampaign.category}
            </Badge>
            {currentCampaign.featured && (
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">مميزة</Badge>
            )}
          </div>

          <h3 className="text-2xl font-bold text-[#203441] mb-3">{currentCampaign.title}</h3>
          <p className="text-gray-600 mb-6">{currentCampaign.shortDescription}</p>

          <div className="space-y-6 mb-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  تم جمع: {currentCampaign.raisedAmount.toLocaleString()} $
                </span>
                <span className="font-medium text-[#39576f]">
                  الهدف: {currentCampaign.targetAmount.toLocaleString()} $
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{progressPercentage}% مكتمل</span>
                <span className="text-gray-500">
                  متبقي{' '}
                  {(currentCampaign.targetAmount - currentCampaign.raisedAmount).toLocaleString()} $
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <Users className="h-5 w-5 text-[#39576f] mx-auto mb-1" />
                <span className="block text-sm text-gray-500">المستفيدون</span>
                <span className="block font-bold text-[#203441]">
                  {currentCampaign.beneficiaries.toLocaleString()}
                </span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <Target className="h-5 w-5 text-[#39576f] mx-auto mb-1" />
                <span className="block text-sm text-gray-500">المتبرعون</span>
                <span className="block font-bold text-[#203441]">
                  {currentCampaign.donors.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-[#39576f] hover:bg-[#203441] flex-1">
              <Heart className="mr-2 h-5 w-5" />
              تبرع الآن
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <Link href={`/campaigns/${currentCampaign.id}`}>
                التفاصيل
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
