import { Heart } from "lucide-react"
import Image from "next/image"

interface PsychologicalHeroSectionProps {
    t: {
        title: string
        description: string
    }
    backgroundImage: string
}

export function PsychologicalHeroSection({ t, backgroundImage }: PsychologicalHeroSectionProps) {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#476c86] to-[#203441] text-white mb-16">
            <div className="absolute inset-0 opacity-10">
                <Image
                    src={backgroundImage}
                    alt="Psychological support background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 py-16 relative">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm mb-6">
                        <Heart className="h-8 w-8 text-white" fill="white" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>

                    <div className="h-1 w-32 bg-white/50 mx-auto rounded-full mb-6"></div>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed">{t.description}</p>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path
                        fill="#f9fafb"
                        fillOpacity="1"
                        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </div>
    )
}