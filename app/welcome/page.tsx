'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Welcome() {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#F0EDE8]">
      <div className="min-h-screen flex flex-col">
        {/* Hero Image Area */}
        <div className="relative h-[55vh] bg-gradient-to-br from-[#0E2F2A] via-[#153D35] to-[#1F6F68] overflow-hidden">
          {/* Decorative elements representing the sustainability cityscape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md px-8">
              {/* Abstract sustainability visual */}
              <div className="flex items-end justify-center gap-2">
                <div className="w-8 h-20 bg-[#2a7a6e]/40 rounded-t-lg" />
                <div className="w-10 h-32 bg-[#2a7a6e]/50 rounded-t-lg" />
                <div className="w-12 h-44 bg-[#2a7a6e]/60 rounded-t-lg" />
                <div className="w-10 h-36 bg-[#2a7a6e]/50 rounded-t-lg" />
                <div className="w-14 h-48 bg-[#2a7a6e]/70 rounded-t-lg" />
                <div className="w-10 h-28 bg-[#2a7a6e]/45 rounded-t-lg" />
                <div className="w-8 h-24 bg-[#2a7a6e]/40 rounded-t-lg" />
              </div>
              {/* Green base */}
              <div className="w-full h-6 bg-gradient-to-r from-[#2a7a6e]/30 via-[#CBA052]/20 to-[#2a7a6e]/30 rounded-full mt-1" />
            </div>
          </div>

          {/* Subtle glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#CBA052]/10 rounded-full blur-3xl" />
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white rounded-t-[2rem] -mt-8 relative z-10 px-6 pt-8 pb-12">
          <div className="max-w-md mx-auto text-center space-y-6">
            <h1 className="text-2xl font-bold text-[#1a2e2a] leading-tight">
              Bridging Finance and Sustainability for SMEs and Corporates
            </h1>

            <p className="text-[#6b7c78] text-sm leading-relaxed">
              Juskel turns your ESG progress into cheaper, faster and more accessible finance. See where you stand, improve what matters, and unlock funding with confidence.
            </p>

            <div className="space-y-3 pt-4">
              <Link href="/setup">
                <Button className="w-full h-14 text-base font-semibold bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full">
                  Get started
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="w-full h-14 text-base font-semibold border-2 border-[#d5d0c8] text-[#1a2e2a] rounded-full bg-[#e8e5df] hover:bg-[#ddd9d2] mt-3"
                >
                  I already have an account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
