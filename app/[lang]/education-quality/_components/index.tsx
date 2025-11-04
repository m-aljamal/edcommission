// components/quality/HeroSection.tsx
import Image from 'next/image'
import { Award, Search, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GOOGLE_URL } from '@/lib/constant'


// components/quality/StatCard.tsx
import { LucideIcon } from 'lucide-react'



// components/quality/CheckListItem.tsx
import { CheckCircle } from 'lucide-react'

interface CheckListItemProps {
  text: string
}

export function CheckListItem({ text }: CheckListItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-[#39576f]/10 p-2 rounded-full mt-1">
        <CheckCircle className="h-5 w-5 text-[#39576f]" />
      </div>
      <div>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  )
}

// components/quality/ImportanceSection.tsx


// components/quality/ProgramImage.tsx
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { GOOGLE_URL } from '@/lib/constant'

interface ProgramImageProps {
  imageId: string
  alt: string
  badge: string
  caption: string
}

export function ProgramImage({ imageId, alt, badge, caption }: ProgramImageProps) {
  return (
    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
      <Image src={`${GOOGLE_URL}${imageId}`} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Badge className="bg-white/20 text-white backdrop-blur-sm mb-2">{badge}</Badge>
        <h4 className="text-white text-xl font-bold">{caption}</h4>
      </div>
    </div>
  )
}

// components/quality/CompetitionCard.tsx
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface CompetitionCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function CompetitionCard({ icon: Icon, title, description }: CompetitionCardProps) {
  return (
    <Card className="bg-[#39576f]/5 border-0">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#39576f]/20 p-2 rounded-full">
            <Icon className="h-5 w-5 text-[#39576f]" />
          </div>
          <h4 className="font-bold text-[#203441]">{title}</h4>
        </div>
        <p className="text-gray-700 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

// components/quality/ProgressBar.tsx
interface ProgressBarProps {
  label: string
  value: number
}

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{label}</span>
        <span className="text-[#39576f] font-bold">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-[#39576f] h-2 rounded-full" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  )
}

// components/quality/DocumentCard.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { FileDown } from 'lucide-react'

interface DocumentCardProps {
  title: string
  description: string
  type: string
  url: string
  downloadButton: string
}

export function DocumentCard({ title, description, type, url, downloadButton }: DocumentCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-[#203441]">{title}</CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Badge variant="outline" className="bg-[#39576f]/5">
            {type}
          </Badge>
          <Separator orientation="vertical" className="h-4" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={url || ''} download>
            <FileDown className="ml-2 h-4 w-4" />
            {downloadButton}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}