'use client'

import { useRouter } from 'next/navigation'
import { RefreshCw, Link2, Bell, Info, Building2, LogOut, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MobileHeader } from '@/components/mobile-header'

export default function More() {
  const router = useRouter()

  const menuItems = [
    { icon: RefreshCw, label: 'ESG Data Permission Centre' },
    { icon: Link2, label: 'Open Banking Connections' },
    { icon: Bell, label: 'Notifications Centre' },
    { icon: Info, label: 'Help & Support' },
    { icon: Building2, label: 'Company Profile' },
  ]

  return (
    <>
      <MobileHeader title="More" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-6 bg-[#F0EDE8]">
        <h1 className="text-2xl font-bold text-[#1a2e2a]">Menu</h1>
      </div>

      {/* Main Content */}
      <div className="p-4 md:px-8 md:pb-8 bg-[#F0EDE8] min-h-screen space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Card
              key={index}
              className="p-4 md:p-5 cursor-pointer hover:shadow-md transition-shadow border-0 bg-white rounded-2xl group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e6f2ee] rounded-full flex items-center justify-center group-hover:bg-[#2a7a6e]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#2a7a6e]" />
                  </div>
                  <h3 className="font-bold text-[#1a2e2a] text-base">{item.label}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-[#6b7c78] group-hover:text-[#2a7a6e] transition-colors" />
              </div>
            </Card>
          )
        })}

        {/* Logout */}
        <div className="pt-4 mt-4">
          <Button
            variant="outline"
            onClick={() => router.push('/login')}
            className="w-full h-12 text-base flex items-center justify-center gap-2 rounded-full border-[#d5d0c8] text-[#1a2e2a] hover:bg-red-50 hover:text-red-600 hover:border-red-200"
          >
            <LogOut className="w-5 h-5" />
            Log out
          </Button>
        </div>
      </div>
    </>
  )
}
