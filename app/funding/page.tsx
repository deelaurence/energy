import { Bell } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MobileHeader } from '@/components/mobile-header'

const fundingItems = [
  {
    title: 'UK Green Manufacturing Grant',
    org: 'Department for Business and Trade',
    type: 'Grant',
    typeColor: 'bg-[#2a7a6e]',
    funding: '£250k–£2m · Decision in 4–6 weeks',
    match: 92,
  },
  {
    title: 'Industrial Energy Efficiency Loan',
    org: 'HSBC UK Green Finance',
    type: 'Loan',
    typeColor: 'bg-[#2a7a6e]',
    funding: '£100k–£5m · Decision in 2–4 weeks',
    match: 94,
  },
  {
    title: 'Heat Pump Installation Scheme',
    org: 'Government – BEIS',
    type: 'Grant',
    typeColor: 'bg-[#2a7a6e]',
    funding: '£30k–£150k · Decision in 6–8 weeks',
    match: 73,
  },
  {
    title: 'Electric Fleet Transition Fund',
    org: 'Department for Transport',
    type: 'Incentive',
    typeColor: 'bg-[#CBA052]',
    funding: '£100k–£5m · Decision in 2–4 weeks',
    match: 94,
  },
]

export default function Funding() {
  return (
    <>
      <MobileHeader title="Funding" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-6 bg-[#F0EDE8]">
        <h1 className="text-2xl font-bold text-[#1a2e2a]">Funding</h1>
        <Button variant="ghost" size="icon" className="hover:bg-white/50">
          <Bell className="w-5 h-5 text-[#1a2e2a]" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="p-4 md:px-8 md:pb-8 space-y-6 bg-[#F0EDE8] min-h-screen">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#1a2e2a]">Funding Matches</h2>
          <p className="text-[#6b7c78] text-sm">
            Tailored green loans, grants and incentives based on your Juskel (ESG) profile.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['All', 'Loan', 'Grant', 'Tax incentive', 'Fast-track financing'].map((filter) => (
            <Button
              key={filter}
              variant={filter === 'All' ? 'default' : 'outline'}
              className={
                filter === 'All'
                  ? 'px-5 whitespace-nowrap rounded-full bg-[#1a2e2a] text-white hover:bg-[#1a2e2a]/90'
                  : 'px-5 whitespace-nowrap rounded-full border-[#d5d0c8] text-[#1a2e2a] hover:bg-white bg-[#e8e5df]'
              }
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Funding Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fundingItems.map((item, index) => (
            <Card key={index} className="p-5 md:p-6 border-0 bg-white rounded-2xl hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-[#1a2e2a]">{item.title}</h3>
                  <Badge className={`${item.typeColor} text-white text-xs rounded-full px-3`}>{item.type}</Badge>
                </div>
                <p className="text-sm text-[#6b7c78]">{item.org}</p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#1a2e2a]">
                    Typical funding: {item.funding}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-[#e0ded8] rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-[#2a7a6e] rounded-full" style={{ width: `${item.match}%` }} />
                    </div>
                    <span className="text-sm text-[#6b7c78] font-medium">{item.match}% match</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 h-10 bg-[#2a7a6e] hover:bg-[#2a7a6e]/90 text-white rounded-full font-semibold text-sm">
                    View details
                  </Button>
                  <Button variant="ghost" className="flex-1 h-10 text-[#2a7a6e] hover:text-[#2a7a6e]/80 font-medium text-sm">
                    Start application
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
