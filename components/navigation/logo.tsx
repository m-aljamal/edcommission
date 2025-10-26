import Link from 'next/link'
 import Image from 'next/image'
 import { Locale } from '@/lib/i18n'
 
interface Props {
  lang: Locale
  width?: number
  hight?: number
  onClick?: () => void
}

export function Logo({ lang, width = 75, hight = 75, onClick }: Props) {
  return (
    <Link href={`/`} onClick={onClick}>
      <Image src={`/logo.png`} alt="Logo" width={width} height={hight} priority />
    </Link>
  )
}
