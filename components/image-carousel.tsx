"use client"
import { Project } from "@/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image
    from "next/image"
import { useRef, useState } from "react"

interface Props {
    gallery: Project["gallery"]
    title: Project["title"]
}

export default function ImageCarousel({ gallery, title }: Props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1,
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1,
        )
    }

    const scrollRef = useRef<HTMLDivElement>(null)


    return (
        <div className="relative">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                    src={gallery[currentImageIndex]}
                    alt={`${title} - صورة ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                />

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {gallery.length}
                </div>
            </div>

            {/* Thumbnails */}
            <div
                className="flex space-x-2 rtl:space-x-reverse overflow-x-auto pb-2"
                ref={scrollRef}
            >
                {gallery.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden transition-all ${currentImageIndex === index
                            ? 'ring-2 ring-main-blue opacity-100'
                            : 'opacity-70 hover:opacity-100'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}
