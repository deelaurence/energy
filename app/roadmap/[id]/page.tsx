'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Card } from '@/components/ui/card'

const roadmapDetails: Record<string, {
  title: string
  description: string
  docs: string[]
  cost: string
  payback: string
  co2: string
  finance: string
  matchedFunding: string
}> = {
  '1': {
    title: 'Upgrade warehouse lighting to LEDs',
    description: 'Lower energy use per pound of revenue improves your ESG score and demonstrates operational efficiency to lenders.',
    docs: ['Invoice', 'Supplier quote', 'Proof of implementation'],
    cost: '\u00a320k\u2013\u00a360k',
    payback: '2.5 years',
    co2: '4.2 tCO\u2082e annually',
    finance: 'APR benefit: 0.20%',
    matchedFunding: 'Industrial Energy Efficiency Loan',
  },
  '2': {
    title: 'Switch to 100% renewable electricity',
    description: 'Transitioning to renewable energy sources significantly reduces Scope 2 emissions and strengthens your environmental credentials.',
    docs: ['Energy supplier contract', 'REGO certificates', 'Utility bills'],
    cost: '\u00a35k\u2013\u00a315k',
    payback: '1 year',
    co2: '8.1 tCO\u2082e annually',
    finance: 'APR benefit: 0.25%',
    matchedFunding: 'UK Green Manufacturing Grant',
  },
  '3': {
    title: 'Install EV charging infrastructure',
    description: 'Supporting electric vehicle adoption reduces fleet emissions and positions your business for the transition to zero-emission transport.',
    docs: ['Installation quote', 'Planning permission', 'Grid connection approval'],
    cost: '\u00a340k\u2013\u00a3100k',
    payback: '3.5 years',
    co2: '2.8 tCO\u2082e annually',
    finance: 'APR benefit: 0.15%',
    matchedFunding: 'Electric Fleet Transition Fund',
  },
}

export default function RoadmapDetail({ params }: { params: { id: string } }) {
  const item = roadmapDetails[params.id] || roadmapDetails['1']

  return (
    <>
      {/* Mobile: Full-screen detail view */}
      <div className="md:hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gradient-to-br from-[#0E2F2A] via-[#153D35] to-[#1F6F68] text-white px-4 py-5">
          <div className="flex items-center gap-4">
            <Link href="/roadmap">
              <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" />
              </div>
            </Link>
            <h1 className="text-lg font-bold">ESG Roadmap</h1>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 bg-[#F0EDE8] min-h-screen space-y-4">
          <Card className="p-6 border-0 bg-white rounded-2xl shadow-sm">
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-[#1a2e2a]">{item.title}</h2>
              <p className="text-[#6b7c78] text-sm leading-relaxed">{item.description}</p>

              <div>
                <h3 className="font-bold text-[#1a2e2a] mb-3">Required Documentation</h3>
                <ul className="list-disc list-inside text-sm text-[#6b7c78] space-y-1.5">
                  {item.docs.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#fef9e7] rounded-xl p-4">
                  <p className="text-xs text-[#6b7c78] mb-1">Estimated cost</p>
                  <p className="font-bold text-[#1a2e2a]">{item.cost}</p>
                </div>
                <div className="bg-[#fef9e7] rounded-xl p-4">
                  <p className="text-xs text-[#6b7c78] mb-1">Simple payback</p>
                  <p className="font-bold text-[#1a2e2a]">{item.payback}</p>
                </div>
                <div className="bg-[#fef9e7] rounded-xl p-4">
                  <p className="text-xs text-[#6b7c78] mb-1">Estimated CO&#8322; Reduction</p>
                  <p className="font-bold text-[#1a2e2a]">{item.co2}</p>
                </div>
                <div className="bg-[#fef9e7] rounded-xl p-4">
                  <p className="text-xs text-[#6b7c78] mb-1">Finance Impact</p>
                  <p className="font-bold text-[#1a2e2a]">{item.finance}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Matched Funding */}
          <Card className="p-6 border-0 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-[#1a2e2a] mb-3">Matched funding</h3>
            <div className="flex items-center gap-3 p-3 bg-[#e6f2ee] rounded-xl">
              <div className="w-10 h-10 bg-[#2a7a6e] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <p className="text-sm font-medium text-[#2a7a6e]">{item.matchedFunding}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Desktop: Redirect back to roadmap (details shown inline on desktop) */}
      <div className="hidden md:block p-8 bg-[#F0EDE8] min-h-screen">
        <div className="mb-6">
          <Link href="/roadmap" className="inline-flex items-center gap-2 text-[#2a7a6e] hover:text-[#1F6F68] font-medium text-sm">
            <ChevronLeft className="w-4 h-4" />
            Back to Roadmap
          </Link>
        </div>

        <div className="max-w-3xl">
          <Card className="border-0 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a2e2a] mb-3">{item.title}</h2>
            <p className="text-[#6b7c78] text-sm mb-8 leading-relaxed">{item.description}</p>

            <h3 className="font-bold text-[#1a2e2a] mb-3">Required Documentation</h3>
            <ul className="list-disc list-inside text-sm text-[#6b7c78] space-y-1.5 mb-8">
              {item.docs.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Estimated cost</p>
                <p className="font-bold text-[#1a2e2a]">{item.cost}</p>
              </div>
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Simple payback</p>
                <p className="font-bold text-[#1a2e2a]">{item.payback}</p>
              </div>
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Estimated CO&#8322; Reduction</p>
                <p className="font-bold text-[#1a2e2a]">{item.co2}</p>
              </div>
              <div className="bg-[#fef9e7] rounded-xl p-4">
                <p className="text-xs text-[#6b7c78] mb-1">Finance Impact</p>
                <p className="font-bold text-[#1a2e2a]">{item.finance}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-bold text-[#1a2e2a] mb-3">Matched funding</h3>
              <p className="text-sm font-medium text-[#2a7a6e]">{item.matchedFunding}</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
