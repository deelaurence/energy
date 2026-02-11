'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, BarChart3, FileText, Route, MoreHorizontal, ChevronDown, LogOut, Settings, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/scorecard', icon: BarChart3, label: 'Scorecard' },
  { href: '/funding', icon: FileText, label: 'Funding' },
  { href: '/roadmap', icon: Route, label: 'Roadmap' },
  { href: '/more', icon: MoreHorizontal, label: 'More' },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <aside className="hidden md:flex flex-col w-64 bg-sidebar text-sidebar-foreground h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
          <span className="font-bold text-sidebar-background text-xl">J</span>
          <span className="font-bold text-accent text-lg">K</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-base leading-tight">JusKel</div>
          <div className="text-xs text-[#CBA052] leading-tight">Sustainability Finance Hub</div>
        </div>
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
                <div className="w-10 h-10 bg-[#2a7a6e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[8px] font-bold">GF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1a2e2a] truncate">Greenfield Manufacturing</p>
                  <p className="text-xs text-[#6b7c78]">admin@greenfield.co.uk</p>
                </div>
              </div>
            </div>
            {/* Menu items */}
            <div className="p-2">
              <button
                onClick={() => router.push('/more')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#1a2e2a] hover:bg-[#F0EDE8] transition-colors"
              >
                <User className="w-4 h-4 text-[#6b7c78]" />
                Company Profile
              </button>
              <button
                onClick={() => router.push('/more')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#1a2e2a] hover:bg-[#F0EDE8] transition-colors"
              >
                <Settings className="w-4 h-4 text-[#6b7c78]" />
                Settings
              </button>
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
