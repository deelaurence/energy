import { CheckCircle2, Circle, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MobileHeader } from '@/components/mobile-header'

const roadmapItems = [
  {
    title: 'Upgrade warehouse lighting to LEDs',
    status: 'in_progress',
    tags: ['High ESG impact', 'Medium cost', 'In progress'],
    tagColors: ['bg-[#fce4e4] text-[#d94a4a]', 'bg-[#e8e5df] text-[#4a5854]', 'bg-[#e6f2ee] text-[#2a7a6e]'],
  },
  {
    title: 'Switch to 100% renewable electricity',
    status: 'pending',
    tags: ['High ESG impact', 'Low cost'],
    tagColors: ['bg-[#fce4e4] text-[#d94a4a]', 'bg-[#e8e5df] text-[#4a5854]'],
  },
  {
    title: 'Install EV charging infrastructure',
    status: 'pending',
    tags: ['Medium ESG impact', 'Medium cost'],
    tagColors: ['bg-[#fef9e7] text-[#b8860b]', 'bg-[#e8e5df] text-[#4a5854]'],
  },
]

export default function Roadmap() {
  return (
    <>
      <MobileHeader title="Roadmap" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-6 bg-[#F0EDE8]">
        <h1 className="text-2xl font-bold text-[#1a2e2a]">ESG Roadmap</h1>
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <Bell className="w-5 h-5 text-[#1a2e2a]" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="p-4 md:px-8 md:pb-8 bg-[#F0EDE8] min-h-screen space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#1a2e2a]">ESG Roadmap</h2>
          <p className="text-[#6b7c78] text-sm">
            Step-by-step actions that improve impact and unlock better finance terms.
          </p>
        </div>

        {/* Timeline Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          {['0–3 months', '3–12 months', '12–36 months'].map((filter, i) => (
            <Button
              key={filter}
              variant={i === 0 ? 'default' : 'outline'}
              className={
                i === 0
                  ? 'px-6 rounded-full bg-[#1a2e2a] text-white hover:bg-[#1a2e2a]/90'
                  : 'px-6 rounded-full border-[#d5d0c8] text-[#1a2e2a] hover:bg-white bg-[#e8e5df]'
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Roadmap Action Items */}
        <div className="space-y-4">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="p-5 border-0 bg-white rounded-2xl shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  {item.status === 'in_progress' ? (
                    <CheckCircle2 className="w-6 h-6 text-[#2a7a6e] flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <h3 className="font-bold text-[#1a2e2a] text-base">{item.title}</h3>
                </div>

                <div className="flex gap-2 items-center flex-wrap pl-9">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.tagColors[tagIndex]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.status === 'in_progress' && (
                  <div className="flex gap-3 pl-9">
                    <Button className="h-10 px-6 bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full font-semibold text-sm">
                      View details
                    </Button>
                    <Button variant="outline" className="h-10 px-6 border-[#2a7a6e] text-[#2a7a6e] hover:bg-[#2a7a6e]/5 rounded-full font-semibold text-sm">
                      Update
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Action Details (Desktop) */}
        <div className="hidden md:block">
          <h3 className="text-lg font-bold text-[#1a2e2a] mb-4">Action details</h3>
          <Card className="border-0 bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-bold text-[#1a2e2a] mb-2">Upgrade warehouse lighting to LEDs</h4>
            <p className="text-[#6b7c78] text-sm mb-6">
              Lower energy use per pound of revenue improves your ESG score and demonstrates operational efficiency to lenders.
            </p>

            <h5 className="font-bold text-[#1a2e2a] mb-3">Required Documentation</h5>
            <ul className="list-disc list-inside text-sm text-[#6b7c78] space-y-1.5 mb-6">
              <li>Invoice</li>
              <li>Supplier quote</li>
              <li>Proof of implementation</li>
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Estimated cost</p>
                <p className="font-bold text-[#1a2e2a]">£20k–£60k</p>
              </div>
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Simple payback</p>
                <p className="font-bold text-[#1a2e2a]">2.5 years</p>
              </div>
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Estimated CO₂ Reduction</p>
                <p className="font-bold text-[#1a2e2a]">4.2 tCO₂e annually</p>
              </div>
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Finance Impact</p>
                <p className="font-bold text-[#1a2e2a]">APR benefit: 0.20%</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <h5 className="font-bold text-[#1a2e2a] mb-3">Matched funding</h5>
              <p className="text-sm font-medium text-[#2a7a6e]">Industrial Energy Efficiency Loan</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
