import Image from 'next/image'
import { Calendar, Sparkles } from 'lucide-react'
import { Locale } from '@/lib/i18n'
import { eventsText } from './text'
export default function EventsHeader({lang}:{lang:Locale}) {
    const t = eventsText[lang]
    return (
        <div className="relative overflow-hidden">
            {/* Background with Image component and gradient overlay */}
            <div className="absolute inset-0">
                <Image
                    src={`https://res.cloudinary.com/dokawmydv/image/upload/v1762079030/d16f98b9-0be2-4476-9889-19744be21e3a_fvlq4g.jpg`}
                    alt="Events background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#203441]/95 to-[#39576f]/90"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>

            <div className="container relative mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8 shadow-lg border border-white/10">
                        <Calendar className="h-10 w-10 text-white" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {t.title}
                        <span className="inline-flex items-center ml-3">
                            <Sparkles className="h-6 w-6 text-yellow-300" />
                        </span>
                    </h1>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-white/20 rounded-lg blur-md"></div>
                        <p className="relative text-white/90 text-lg md:text-xl leading-relaxed px-4 py-2">
                           {t.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full h-full"
                >
                    <path
                        fill="#203441"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>
        </div>
    )
}
