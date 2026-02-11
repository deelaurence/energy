'use client'

import { useRouter } from 'next/navigation'
import { Bell, LogOut, Settings, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

interface MobileHeaderProps {
  title?: string
  showNotification?: boolean
}

export function MobileHeader({ showNotification = true }: MobileHeaderProps) {
  const router = useRouter()

  return (
    <header className="md:hidden sticky top-0 z-50 bg-gradient-to-br from-[#0E2F2A] via-[#153D35] to-[#1F6F68] text-white px-4 pt-4 pb-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/20 cursor-pointer hover:border-white/40 transition-colors">
                <div className="text-center leading-none">
                  <div className="text-[6px] font-bold text-white">GREENFIELD</div>
                  <div className="text-[5px] text-white/80">GLOBAL</div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="start"
              sideOffset={8}
              className="w-60 p-0 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-[60]"
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
          <div>
            <p className="text-sm text-white/70">Good Morning,</p>
            <p className="text-base font-bold">Greenfield Manufacturing Ltd 👋</p>
          </div>
        </div>
        {showNotification && (
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
          </Button>
        )}
      </div>
      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-sm">✨</span>
        <span className="text-sm font-medium">
          <span className="font-bold">Estimated APR benefit:</span> Up to -0.65%
        </span>
      </div>
    </header>
  )
}
