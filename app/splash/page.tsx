'use client'

import { Logo } from '@/components/logo'
import Link from 'next/link'

export default function Splash() {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-gradient-to-b from-[#0E2F2A] via-[#153D35] to-[#1F6F68]">
      {/* Back to Landing */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
            <span className="text-white text-xl">←</span>
          </div>
        </Link>
      </div>
      {/* Subtle network pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-white rounded-full" />
        <div className="absolute top-[35%] left-[30%] w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-[20%] right-[40%] w-1.5 h-1.5 bg-white rounded-full" />
        <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-[18%] left-[45%] w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-white rounded-full" />
        <div className="absolute top-[12%] right-[30%] w-1 h-1 bg-white rounded-full" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-between py-16">
        {/* Logo Section */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <Logo />
        </div>

        {/* Businessman placeholder area */}
        <div className="flex-1 flex items-end justify-center relative w-full">
          {/* Silhouette placeholder - represents the businessman image */}
          <div className="relative">
            <div className="w-64 h-72 bg-gradient-to-t from-[#0E2F2A]/80 to-transparent rounded-t-full flex items-center justify-center">
              <div className="w-48 h-56 bg-[#1a3a2e] rounded-t-full opacity-60" />
            </div>

            {/* Start Now Button */}
            <Link href="/welcome">
              <div className="absolute bottom-16 right-[-20px] w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-all cursor-pointer">
                <span className="text-[#1a2e2a] font-bold text-base">Get Started</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
