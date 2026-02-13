import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  href?: string
  showText?: boolean
  onClick?: () => void
  variant?: 'light' | 'dark'
  hasBg?: boolean
}

export function Logo({ className = '', href = '/', showText = true, onClick, variant = 'light', hasBg = false }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#1a2e2a]'
  const bgColor = hasBg ? 'bg-[#0E2F2A]' : ''
  const padding = hasBg ? 'px-4 py-2.5 rounded-lg' : ''
  const content = (
    <div className={`flex h-full items-center gap-2.5 ${bgColor} ${padding} ${className}`}>
      <img
        src="/logo.png"
        alt="JusKel Logo"
        className="h-10"
      />
      {/* {showText && <span className={`text-xl font-bold ${textColor}`}>JusKel</span>} */}
    </div>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return content
}
