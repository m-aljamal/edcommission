// components/quality/HeroSection.tsx
import Image from 'next/image'
import { Award, Search, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'


// components/quality/StatCard.tsx


interface HeroSectionProps {
    t: {
        title: string
        description: string
        exploreButton: string
        downloadButton: string
    }
}

export function HeroSection({ t }: HeroSectionProps) {
    return (
        <div className="relative bg-gradient-to-r from-[#203441] to-[#39576f] py-16 px-4">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={`https://res.cloudinary.com/dokawmydv/image/upload/v1762079058/WhatsApp_Image_2025-05-07_at_11.08.03_AM_troig3.jpg`}
                        alt="Background"
                        fill
                        priority
                        className="object-cover object-center opacity-10"
                    />
                </div>
            </div>
            <div className="container mx-auto relative">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                        <Award className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t.title}
                    </h1>
                    <p className="text-white/80 text-lg mb-8">{t.description}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#programs">
                            <Button size="lg" className="bg-white text-main-blue hover:bg-white/90">
                                {t.exploreButton}
                                <Search className="mr-2 h-5 w-5" />
                            </Button>
                        </a>
                        <a href="#documents">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent text-white border-white hover:bg-white/10"
                            >
                                {t.downloadButton}
                                <Download className="mr-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
