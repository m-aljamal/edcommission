import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowLeft, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventProps } from "./text";
import { Locale, translations } from "@/lib/i18n";


export default function EventCard({ event, lang }: { event: EventProps, lang: Locale }) {
  const {
    id,
    title,
    date,
    time,
    location,
    image,
    shortDescription,

  } = event;
  const t = translations[lang]
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#203441]/10 to-transparent rounded-bl-3xl z-10"></div>

      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>



        {/* Date Badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#203441] px-3 py-1 rounded-full text-sm font-medium shadow-sm flex items-center">
          <Calendar className="h-4 w-4 mx-1.5 text-[#39576f]" />
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold   text-[#203441] mb-3 line-clamp-2 group-hover:text-[#39576f] transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>

        {/* Event Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-7 h-7 rounded-full bg-[#39576f]/10 flex items-center justify-center">
              <Clock className="h-3.5 w-3.5 text-[#39576f]" />
            </div>
            <span>{time}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-7 h-7 rounded-full bg-[#39576f]/10 flex items-center justify-center">
              <MapPin className="h-3.5 w-3.5 text-[#39576f]" />
            </div>
            <span>{location}</span>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <Link href={`/${lang}/events/${id}`}>
            <Button className="w-full bg-gradient-to-r from-[#203441] to-[#39576f] hover:from-[#39576f] hover:to-[#203441] group border-0 cursor-pointer">
              <span>{t.seeMore}</span>
              {
                lang === "ar" ?
                  <ArrowLeft className="mx-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  :
                  <ArrowRight className="mx-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              }
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#203441] to-[#39576f]"></div>
    </div>
  );
}
