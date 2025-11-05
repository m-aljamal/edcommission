import { ChevronLeftIcon, ChevronRightIcon, LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Locale } from "@/lib/i18n"
interface ProjectCardProps {
    project: {
        id: string
        title: string
        description: string
        image: string
        icon: LucideIcon
        color: string
        slug: string
    }
    readMoreText: string,
    lang: Locale
}

export function ProjectCard({ project, readMoreText, lang }: ProjectCardProps) {
    const { title, description, image, icon: Icon, color, slug } = project

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 group-hover:opacity-100 transition-opacity z-10`}
                ></div>
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover mix-blend-overlay opacity-30"
                    />
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Icon className="h-16 w-16 text-white opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-[#203441] mb-3 group-hover:text-[#476c86] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>

                <Link
                    href={`/psychological-support/${slug}`}
                    className="inline-flex items-center text-[#476c86] font-medium hover:text-[#203441] transition-colors"
                >
                    <span>{readMoreText}</span>
                    {
                        lang === "ar" ?
                            <ChevronLeftIcon className="h-4 w-4 mx-1 transition-transform group-hover:translate-x-1" />
                            :
                            <ChevronRightIcon className="h-4 w-4 mx-1 transition-transform group-hover:translate-x-1" />

                    }
                </Link>
            </div>
        </div>
    )
}