'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, BarChart3, PoundSterling, Route, MoreHorizontal, ChevronDown, LogOut, Settings, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/scorecard', icon: BarChart3, label: 'Scorecard' },
  { href: '/funding', icon: PoundSterling, label: 'Funding' },
  { href: '/roadmap', icon: Route, label: 'Roadmap' },
  { href: '/more', icon: MoreHorizontal, label: 'More' },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <aside className="hidden bg-[var(--color-charcoal-teal)] md:flex flex-col w-64  text-sidebar-foreground h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Logo href="/" hasBg={true} variant="dark" showText={false} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? 'default' : 'ghost'}
                className={cn(
                  'w-full justify-start gap-3 text-base font-medium h-11 rounded-xl transition-colors',
                  isActive
                    ? 'bg-white/15 text-sidebar-foreground hover:bg-white/20'
                    : 'text-sidebar-foreground hover:bg-white/10'
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Organization Selector with Popover */}
      <div className="p-4 border-t border-sidebar-border">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-bold leading-none text-center">GF</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs opacity-60 font-medium">Organisation</div>
                <div className="text-sm font-medium truncate text-sidebar-foreground">Greenfield Manufa...</div>
              </div>
              <ChevronDown className="w-4 h-4 opacity-60 flex-shrink-0" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            align="start"
            sideOffset={8}
            className="w-60 p-0 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
          >
            {/* Profile header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-teal-data)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[8px] font-bold">GF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--color-text-dark)] truncate">Greenfield Manufacturing</p>
                  <p className="text-xs text-[var(--color-text-body)]">admin@greenfield.co.uk</p>
                </div>
              </div>
            </div>
            {/* Menu items */}
            <div className="p-2">
              <button
                onClick={() => router.push('/more')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--color-text-dark)] hover:bg-[var(--color-bg-light)] transition-colors"
              >
                <User className="w-4 h-4 text-[var(--color-text-body)]" />
                Company Profile
              </button>
              <button
                onClick={() => router.push('/more')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--color-text-dark)] hover:bg-[var(--color-bg-light)] transition-colors"
              >
                <Settings className="w-4 h-4 text-[var(--color-text-body)]" />
                Settings
              </button>
              <div className="my-1 h-px bg-gray-100" />
              <Link href="/" className="block">
                <button
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--color-text-dark)] hover:bg-[var(--color-bg-light)] transition-colors"
                >
                  <span className="text-[var(--color-text-body)]">🏠</span>
                  Visit Landing Page
                </button>
              </Link>
              <div className="my-1 h-px bg-gray-100" />
              <button
                onClick={() => router.push('/login')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  )
}
