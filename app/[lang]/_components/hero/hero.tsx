'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import Fade from 'embla-carousel-fade'
 import HeroContent from './hero-content'
import { heroImages } from './data'
import { Locale } from '@/lib/i18n'

function Hero({lang}:{lang:Locale}) {
  const [autoplay] = useState(() => Autoplay({ delay: 5000, stopOnInteraction: false }))

  return (
    <Carousel
      className="w-full  "
      dir="ltr"
      plugins={[autoplay, Fade()]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1 h-[calc(100vh-106.4667px)]">
        {heroImages.map((image, index) => (
          <CarouselItem className=" relative " key={index}>
            <Image src={image} fill alt="image" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

            <HeroContent lang={lang} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Hero
