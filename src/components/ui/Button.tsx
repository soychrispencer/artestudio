import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  external?: boolean
  className?: string
  onClick?: () => void
}

const variants = {
  primary: 'btn-whatsapp rounded-full !shadow-[0_0_32px_rgba(131,37,253,0.25)]',
  outline: 'btn-outline rounded-full',
  ghost: 'text-muted-light hover:text-white',
}

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  onClick,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  )
}
