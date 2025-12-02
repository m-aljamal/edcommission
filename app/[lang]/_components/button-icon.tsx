import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ButtonIconProps {
  icon: LucideIcon
  children: React.ReactNode
  className?: string
  iconClassName?: string
  href?: string
}

export function ButtonIcon({ icon, children, className, iconClassName, href }: ButtonIconProps) {
  const Icon = icon

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          ' lg:px-6 px-3 lg:py-3 py-2 rounded-full font-medium transition-all flex items-center gap-2',
          className,
        )}
      >
        <Icon className={cn('size-4 lg:size-5', iconClassName)} />
        <span className="text-[10px] lg:text-sm">{children}</span>
      </Link>
    )
  }
  return (
    <button
      className={cn(
        ' lg:px-6 px-3 lg:py-3 py-2 rounded-full font-medium transition-all flex items-center gap-2',
        className,
      )}
    >
      <Icon className={cn('size-4 lg:size-5', iconClassName)} />
      <span className="text-[10px] lg:text-sm">{children}</span>
    </button>
  )
}
