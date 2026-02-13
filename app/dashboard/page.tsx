import Link from 'next/link'
import { Bell, ArrowUpRight, TrendingDown, TrendingUp, Lightbulb, Plug, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MobileHeader } from '@/components/mobile-header'

export default function Dashboard() {
  const carbonData = [
    { month: 'Jan', value: 60, color: '#1a2e2a' },
    { month: 'Feb', value: 52, color: '#1a2e2a' },
    { month: 'Mar', value: 65, color: '#1a2e2a' },
    { month: 'Apr', value: 78, color: '#1a2e2a' },
    { month: 'May', value: 72, color: '#1a2e2a' },
    { month: 'Jun', value: 92, color: '#1a2e2a' },
    { month: 'Jul', value: 88, color: '#1a2e2a' },
    { month: 'Aug', value: 85, color: '#1a2e2a' },
    { month: 'Sep', value: 70, color: '#1a2e2a' },
    { month: 'Oct', value: 58, color: '#1a2e2a' },
    { month: 'Nov', value: 42, color: '#1a2e2a' },
    { month: 'Dec', value: 30, color: '#1a2e2a' },
  ]

  return (
    <>
      <MobileHeader title="Home" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-6 bg-[#F0EDE8]">
        <h1 className="text-2xl font-bold text-[#1a2e2a]">Home</h1>
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <Bell className="w-5 h-5 text-[#1a2e2a]" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="bg-[#F0EDE8] min-h-screen">
        <div className="p-4 md:px-8 md:pb-8">

          {/* Top Section: Greeting + Score Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Left Column - Greeting & Buttons */}
            <div className="md:col-span-2 space-y-5">
              <div className="space-y-2">
                <p className="text-sm text-[#6b7c78] font-medium">Good Morning,</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e2a]">Greenfield Manufacturing Ltd</h2>
                  <span className="text-3xl">👋</span>
                </div>
                <p className="text-[#6b7c78] text-sm leading-relaxed">
                  Here&apos;s how your sustainability progress is improving your access to finance.
                </p>
              </div>

              {/* Stacked full-width buttons */}
              <div className="space-y-3">
                <Link href="/funding">
                  <Button className="w-full h-14 text-base font-semibold bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full">
                    Apply for funding
                  </Button>
                </Link>
                <Link href="/scorecard">
                  <Button
                    variant="outline"
                    className="w-full h-14 text-base font-semibold border-2 border-[#d5d0c8] text-[#1a2e2a] rounded-full bg-[#e8e5df] hover:bg-[#ddd9d2]"
                  >
                    Complete assessment
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - WHITE Score Card */}
            <div className="md:col-span-1">
              <Link href="/scorecard">
                <Card className="relative bg-white border-0 rounded-2xl p-6 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  {/* Decorative circles */}
                  <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-[#eae7e2] opacity-50"></div>
                  <div className="absolute bottom-[-20px] right-[40px] w-[80px] h-[80px] rounded-full bg-[#eae7e2] opacity-30"></div>

                  {/* External link icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 z-10">
                    <ArrowUpRight className="w-5 h-5 text-[#1a2e2a]" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <p className="text-sm font-semibold text-[#1a2e2a]">Current Juskel Score</p>

                    <div className="inline-flex items-center gap-1.5 bg-[#1a3a2a] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +8 in last 90 days
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-[#1a2e2a]">72</span>
                      <span className="text-lg text-[#6b7c78]">/ 100</span>
                    </div>

                    {/* Progress Bar with Silver badge */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2.5 bg-[#e0ded8] rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-[#2a7a6e] rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-[#6b7c78] border border-[#d5d0c8] px-2.5 py-1 rounded">Silver</span>
                    </div>

                    <p className="text-sm text-[#6b7c78]">
                      Low Risk – financing likely
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>

          {/* Three Metric Cards in ONE Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* APR Benefit Card - Dark teal gradient */}
            <Link href="/scorecard">
              <Card className="bg-gradient-to-br from-[#0e3d36] to-[#1a5c4e] border-0 rounded-2xl p-7 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="flex items-start gap-2 mb-8">
                  <span className="text-xl">✨</span>
                  <h3 className="text-base font-semibold">Estimated APR benefit</h3>
                </div>
                <div className="text-4xl font-bold mb-2">Up to -0.65%</div>
                <p className="text-sm opacity-80">Based on your current Juskel score and sector</p>
              </Card>
            </Link>

            {/* Funding Eligibility Card */}
            <Link href="/funding">
              <Card className="bg-white border-0 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                <h3 className="text-base font-semibold text-[#1a2e2a] mb-5">Funding eligibility</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2a7a6e]"></div>
                      <span className="text-sm font-medium text-[#1a2e2a]">Green loans</span>
                    </div>
                    <span className="text-sm text-[#1a2e2a] font-bold">5 options</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2a7a6e]"></div>
                      <span className="text-sm font-medium text-[#1a2e2a]">Grants</span>
                    </div>
                    <span className="text-sm text-[#1a2e2a] font-bold">3 options</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#4a8fd9]"></div>
                      <span className="text-sm font-medium text-[#1a2e2a]">Asset finance</span>
                    </div>
                    <span className="text-sm text-[#1a2e2a] font-bold">2 options</span>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Carbon Emissions Card with Bar Chart */}
            <Link href="/scorecard">
              <Card className="bg-white border-0 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-semibold text-[#1a2e2a]">Carbon emissions</h3>
                  <div className="flex items-center gap-1.5 bg-[#fce4e4] px-3 py-1 rounded-full">
                    <TrendingDown className="w-3.5 h-3.5 text-[#d94a4a]" />
                    <span className="text-xs font-bold text-[#d94a4a]">-31% this year</span>
                  </div>
                </div>
                <p className="text-sm text-[#6b7c78] mb-4">Current month: <span className="font-bold text-[#1a2e2a]">28 tCO₂e</span></p>

                {/* Bar Chart */}
                <div className="flex items-end gap-1.5 h-24">
                  {carbonData.map((item) => (
                    <div
                      key={item.month}
                      className="flex-1 rounded-sm min-h-[4px]"
                      style={{ height: `${item.value}%`, backgroundColor: item.color }}
                    />
                  ))}
                </div>
                <div className="flex gap-1.5 mt-1.5">
                  {carbonData.map((item) => (
                    <div key={item.month} className="flex-1 text-center">
                      <span className="text-[9px] text-[#6b7c78]">{item.month}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Link>
          </div>

          {/* Priority Actions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#1a2e2a]">Priority actions</h3>
              <Link href="/roadmap">
                <Button variant="ghost" className="text-[#6b7c78] hover:text-[#1a2e2a] gap-2 px-0">
                  See all
                  <div className="w-7 h-7 rounded-full border border-[#d5d0c8] flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Action 1 */}
              <Card className="border-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#2a7a6e]/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#2a7a6e]" />
                  </div>
                  <h4 className="font-bold text-[#1a2e2a] text-base leading-tight">Upgrade warehouse lighting to LEDs</h4>
                  <p className="text-sm text-[#6b7c78]">Potential APR benefit: up to 0.15%</p>
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f2ee] text-xs font-medium text-[#2a7a6e]">Energy</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8e5df] text-xs font-medium text-[#4a5854]">0–3 months</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fce4e4] text-xs font-medium text-[#d94a4a]">High impact</span>
                  </div>
                  <Link href="/roadmap/1">
                    <Button className="w-full h-11 bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full font-semibold text-sm">
                      View action
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Action 2 */}
              <Card className="border-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#2a7a6e]/10 rounded-full flex items-center justify-center">
                    <Plug className="w-6 h-6 text-[#2a7a6e]" />
                  </div>
                  <h4 className="font-bold text-[#1a2e2a] text-base leading-tight">Install EV charging infrastructure</h4>
                  <p className="text-sm text-[#6b7c78]">Potential APR benefit: up to 0.12%</p>
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8e5df] text-xs font-medium text-[#4a5854]">3–12 months</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fef9e7] text-xs font-medium text-[#b8860b]">Medium impact</span>
                  </div>
                  <Link href="/roadmap/3">
                    <Button className="w-full h-11 bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full font-semibold text-sm">
                      View action
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Action 3 */}
              <Card className="border-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#2a7a6e]/10 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#2a7a6e]" />
                  </div>
                  <h4 className="font-bold text-[#1a2e2a] text-base leading-tight">Switch to 100% renewable electricity</h4>
                  <p className="text-sm text-[#6b7c78]">Potential APR benefit: up to 0.22%</p>
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8e5df] text-xs font-medium text-[#4a5854]">3–12 months</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fef9e7] text-xs font-medium text-[#b8860b]">Medium impact</span>
                  </div>
                  <Link href="/roadmap/2">
                    <Button className="w-full h-11 bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full font-semibold text-sm">
                      View action
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
