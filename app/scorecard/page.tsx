import { ChevronDown, ChevronUp, TrendingUp, CheckCircle2, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MobileHeader } from '@/components/mobile-header'

const categories = [
  { name: 'Energy & emissions', score: 68, median: 61, expanded: true },
  { name: 'Waste & circularity', score: 72, median: 58, expanded: false },
  { name: 'Supply chain', score: 65, median: 62, expanded: false },
  { name: 'Governance', score: 78, median: 69, expanded: false },
  { name: 'Reporting', score: 0, median: 0, expanded: false },
]

export default function ScoreCard() {
  return (
    <>
      <MobileHeader title="Scorecard" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-6 bg-[#F0EDE8]">
        <h1 className="text-2xl font-bold text-[#1a2e2a]">Scorecard</h1>
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <Bell className="w-5 h-5 text-[#1a2e2a]" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="p-4 md:px-8 md:pb-8 bg-[#F0EDE8] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Column */}
          <div className="md:col-span-3 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto">
              {['Overview', 'Drivers', 'What-if'].map((tab) => (
                <Button
                  key={tab}
                  variant={tab === 'Overview' ? 'default' : 'outline'}
                  className={
                    tab === 'Overview'
                      ? 'px-6 rounded-full bg-[#1a2e2a] text-white hover:bg-[#1a2e2a]/90'
                      : 'px-6 rounded-full border-[#d5d0c8] text-[#1a2e2a] hover:bg-white bg-[#e8e5df]'
                  }
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Metric Categories */}
            <div className="space-y-4">
              {categories.map((cat) => (
                <Card key={cat.name} className="p-5 border-0 bg-white rounded-2xl shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between cursor-pointer">
                      <h3 className="font-bold text-[#1a2e2a]">{cat.name}</h3>
                      <div className="flex items-center gap-3">
                        {cat.score > 0 && (
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-[#e0ded8] rounded-full h-2 overflow-hidden">
                              <div className="h-full bg-[#2a7a6e] rounded-full" style={{ width: `${cat.score}%` }} />
                            </div>
                            <span className="font-bold text-[#1a2e2a]">{cat.score}/100</span>
                          </div>
                        )}
                        {cat.expanded ? (
                          <ChevronUp className="w-5 h-5 text-[#6b7c78]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#6b7c78]" />
                        )}
                      </div>
                    </div>
                    {cat.median > 0 && (
                      <p className="text-xs text-[#6b7c78]">Above sector median ({cat.median})</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Main Score Card - Teal gradient */}
            <Card className="bg-gradient-to-br from-[#0e3d36] via-[#1a5c4e] to-[#2a7a6e] text-white p-6 border-0 rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold">72</span>
                  <span className="text-xl text-white/70">/100</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium bg-green-500/20 text-green-200 px-3 py-1 rounded-full">Verified</span>
                </div>

                <p className="text-base font-semibold text-white/90">Silver – progressing</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Your score combines financial resilience and ESG performance
                </p>
              </div>
            </Card>

            {/* Energy & emissions metrics */}
            <Card className="p-6 border-0 bg-white rounded-2xl shadow-sm">
              <h3 className="text-base font-bold text-[#1a2e2a] mb-5">Energy & emissions metrics</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-[#6b7c78]">Energy intensity (kWh/£ revenue)</p>
                    <div className="flex items-center gap-1 text-[#2a7a6e] text-xs font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Improving
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#6b7c78]">Current</p>
                      <p className="font-bold text-lg text-[#1a2e2a]">0.42</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7c78]">Target</p>
                      <p className="font-bold text-lg text-[#2a7a6e]">0.35</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-[#6b7c78]">Renewable electricity share</p>
                    <span className="text-xs font-medium text-[#6b7c78] border border-[#d5d0c8] px-2 py-0.5 rounded-full">Stable</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#6b7c78]">Current</p>
                      <p className="font-bold text-lg text-[#1a2e2a]">35%</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7c78]">Target</p>
                      <p className="font-bold text-lg text-[#2a7a6e]">60%</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-[#6b7c78]">Scope 1 & 2 emissions</p>
                    <div className="flex items-center gap-1 text-[#2a7a6e] text-xs font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Improving
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#6b7c78]">Current</p>
                      <p className="font-bold text-lg text-[#1a2e2a]">1,240 tCO2e</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7c78]">Target</p>
                      <p className="font-bold text-lg text-[#2a7a6e]">980 tCO2e</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
