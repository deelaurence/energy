'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Zap,
  BarChart3,
  Globe,
  Building2,
  CheckCircle2,
  ChevronRight,
  Leaf,
  PoundSterling,
  Users,
  Award,
  ArrowUpRight,
  Clock,
  Mail,
  Rocket,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const visionStats = [
  { value: '£150B', label: 'UK green lending market by 2030', icon: PoundSterling },
  { value: '5.5M', label: 'UK SMEs needing green finance', icon: Building2 },
  { value: '<10%', label: 'Currently access green products', icon: TrendingUp },
  { value: '50%', label: 'Of UK emissions from SMEs', icon: Leaf },
]

const features = [
  {
    icon: BarChart3,
    title: 'AI-Powered ESG Scoring',
    description: 'Proprietary scoring engine that evaluates financial resilience alongside ESG performance, delivering a single Juskel Score that lenders trust.',
    badge: 'Coming Soon',
  },
  {
    icon: PoundSterling,
    title: 'Intelligent Funding Matching',
    description: 'Automatically match SMEs to green loans, grants, and incentives based on their ESG profile — reducing search time from weeks to seconds.',
    badge: 'Coming Soon',
  },
  {
    icon: Zap,
    title: 'Actionable ESG Roadmaps',
    description: 'AI-generated step-by-step sustainability actions with ROI projections, cost estimates, and direct links to matched funding.',
    badge: 'Coming Soon',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Compliance',
    description: 'FCA-aligned security, Open Banking integration, and Companies House verification ensure data integrity and regulatory confidence.',
    badge: 'In Development',
  },
  {
    icon: Globe,
    title: 'Carbon Tracking & Reporting',
    description: 'Real-time Scope 1, 2, and 3 emissions monitoring with automated reporting that satisfies lender ESG disclosure requirements.',
    badge: 'Coming Soon',
  },
  {
    icon: Users,
    title: 'Lender Marketplace',
    description: 'Two-sided platform connecting ESG-ready borrowers with sustainability-focused lenders, creating a new asset class of verified green finance.',
    badge: 'Planned',
  },
]

const quotes = [
  {
    quote: 'Sustainability is no longer about doing less harm. It\'s about doing more good.',
    author: 'Jochen Zeitz',
    role: 'CEO, Harley-Davidson & Co-Founder, B Team',
  },
  {
    quote: 'The cost of inaction on climate change is far greater than the cost of action. Green finance isn\'t charity — it\'s smart economics.',
    author: 'Mark Carney',
    role: 'Former Governor, Bank of England & UN Special Envoy for Climate Action',
  },
  {
    quote: 'Small businesses are the backbone of every economy. When we make green finance accessible to SMEs, we unlock the greatest lever for change.',
    author: 'Kristalina Georgieva',
    role: 'Managing Director, International Monetary Fund',
  },
]

export default function Landing() {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#0E2F2A] rounded-xl flex items-center justify-center">
              <span className="font-bold text-white text-base">J</span>
              <span className="font-bold text-[#CBA052] text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-[#1a2e2a]">JusKel</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium text-[#6b7c78] hover:text-[#1a2e2a] transition-colors">Vision</a>
            <a href="#platform" className="text-sm font-medium text-[#6b7c78] hover:text-[#1a2e2a] transition-colors">Platform</a>
            <a href="#market" className="text-sm font-medium text-[#6b7c78] hover:text-[#1a2e2a] transition-colors">Market</a>
            <a href="#quotes" className="text-sm font-medium text-[#6b7c78] hover:text-[#1a2e2a] transition-colors">Why It Matters</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-medium text-[#1a2e2a] hover:bg-[#F0EDE8]">
                Log in
              </Button>
            </Link>
            <a href="#waitlist">
              <Button className="text-sm font-semibold bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full px-6">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E2F2A] via-[#153D35] to-[#1F6F68]" />
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-[#CBA052]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#2a7a6e]/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-[30%] w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-[#CBA052]/20 backdrop-blur-sm border border-[#CBA052]/30 rounded-full px-5 py-2">
              <Rocket className="w-4 h-4 text-[#CBA052]" />
              <span className="text-sm font-semibold text-[#CBA052]">Coming Soon — Join the Early Access Waitlist</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Turning ESG Progress
              <br />
              <span className="bg-gradient-to-r from-[#CBA052] to-[#e8c876] bg-clip-text text-transparent">
                Into Cheaper Finance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              JusKel is building the AI-driven platform that will connect SME sustainability performance to better lending terms. We&apos;re creating the infrastructure for the &pound;150B UK green finance market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#waitlist">
                <Button className="h-14 px-8 text-base font-semibold bg-white text-[#1a2e2a] hover:bg-white/90 rounded-full shadow-lg shadow-black/20 gap-2">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/dashboard">
                <Button variant="outline" className="h-14 px-8 text-base font-semibold border-2 border-white/25 text-white hover:bg-white/10 rounded-full bg-transparent gap-2">
                  Preview Prototype
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Launch timeline */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <Clock className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/50">Expected launch: Q3 2026</span>
            </div>
          </div>

          {/* Vision Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {visionStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                  <Icon className="w-6 h-6 text-[#CBA052] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-[#CBA052] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <Rocket className="w-5 h-5 text-white" />
            <p className="text-center text-sm font-bold text-white">
              We&apos;re building something transformative. Be the first to know when we launch.
            </p>
            <Rocket className="w-5 h-5 text-white" />
          </div>
        </div>
      </section>

      {/* The Problem / Opportunity */}
      <section id="market" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#fef9e7] rounded-full px-4 py-1.5">
                <Globe className="w-4 h-4 text-[#CBA052]" />
                <span className="text-sm font-semibold text-[#b8860b]">The Problem We&apos;re Solving</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e2a] leading-tight">
                5.5M UK SMEs need green finance.<br />
                <span className="text-[#2a7a6e]">Most can&apos;t access it.</span>
              </h2>
              <p className="text-[#6b7c78] leading-relaxed">
                UK SMEs account for 50% of business emissions but receive less than 10% of green finance. The gap? Lenders can&apos;t verify ESG claims, and SMEs can&apos;t navigate the fragmented funding landscape.
              </p>
              <p className="text-[#6b7c78] leading-relaxed">
                JusKel will bridge this gap with verified ESG scoring that lenders trust and AI-powered funding matching that SMEs need.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#e6f2ee] rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-[#2a7a6e]" />
                <span className="text-sm font-medium text-[#2a7a6e]">Platform under development — launching soon</span>
              </div>
            </div>

            {/* Market stats card */}
            <Card className="border-0 bg-gradient-to-br from-[#0E2F2A] to-[#1F6F68] rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6 text-white/80">The Opportunity</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">&pound;150B</div>
                  <p className="text-white/60 text-sm mt-1">UK green lending market by 2030</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-4xl font-bold">5.5M</div>
                  <p className="text-white/60 text-sm mt-1">UK SMEs requiring ESG compliance</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-4xl font-bold">&lt;10%</div>
                  <p className="text-white/60 text-sm mt-1">Currently access green finance products</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 md:py-28 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-4 h-4 text-[#2a7a6e]" />
              <span className="text-sm font-semibold text-[#2a7a6e]">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e2a] mb-4">
              A world where doing good for the planet
              <span className="text-[#2a7a6e]"> means better business</span>
            </h2>
            <p className="text-[#6b7c78] text-lg leading-relaxed">
              We believe every SME should benefit financially from their sustainability efforts. JusKel is being built to make that a reality — connecting ESG progress directly to cheaper, faster finance.
            </p>
          </div>

          {/* Quote highlight */}
          <Card className="border-0 bg-gradient-to-br from-[#0E2F2A] to-[#1F6F68] rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
              &ldquo;The transition to net zero is the greatest commercial opportunity of our time. The businesses that move first will be rewarded with cheaper capital and stronger growth.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-bold text-[#CBA052]">Larry Fink</p>
              <p className="text-sm text-white/50">CEO, BlackRock</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Platform Features — Coming Soon */}
      <section id="platform" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#fef9e7] rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4 text-[#CBA052]" />
              <span className="text-sm font-semibold text-[#b8860b]">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e2a] mb-4">
              The full stack for sustainable finance
            </h2>
            <p className="text-[#6b7c78] text-lg">
              Everything SMEs and lenders will need to connect ESG performance with better financial outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="relative border-0 bg-[#F0EDE8] rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden">
                  {/* Coming Soon badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      feature.badge === 'Planned'
                        ? 'bg-[#6b7c78]/10 text-[#6b7c78]'
                        : feature.badge === 'In Development'
                        ? 'bg-[#e6f2ee] text-[#2a7a6e]'
                        : 'bg-[#fef9e7] text-[#b8860b]'
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2a7a6e] transition-colors">
                    <Icon className="w-6 h-6 text-[#2a7a6e] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2e2a] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#6b7c78] leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-20 md:py-28 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6">
              <Clock className="w-4 h-4 text-[#2a7a6e]" />
              <span className="text-sm font-semibold text-[#2a7a6e]">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e2a] mb-4">
              From signup to savings in minutes
            </h2>
            <p className="text-[#6b7c78] text-lg">
              Our streamlined process will get SMEs scored, matched, and funded faster than any alternative.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect Data', desc: 'Link Xero, QuickBooks, or Open Banking in one click. Companies House auto-verifies your business.', icon: Building2 },
              { step: '02', title: 'Get Your Score', desc: 'Our AI will analyse 80+ data points to generate your Juskel ESG Score — trusted by lenders.', icon: BarChart3 },
              { step: '03', title: 'Match Funding', desc: 'Instantly see green loans, grants, and incentives you qualify for, ranked by match strength.', icon: PoundSterling },
              { step: '04', title: 'Improve & Save', desc: 'Follow your AI roadmap to boost your score and unlock even better rates over time.', icon: TrendingUp },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="text-center space-y-4">
                  <div className="relative mx-auto w-16 h-16">
                    <div className="absolute inset-0 bg-[#2a7a6e]/10 rounded-2xl rotate-6" />
                    <div className="relative w-16 h-16 bg-white border-2 border-[#2a7a6e]/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#2a7a6e]" />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#CBA052] uppercase tracking-widest">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-[#1a2e2a]">{item.title}</h3>
                  <p className="text-sm text-[#6b7c78] leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e2a] mb-4">
              Why sustainable finance matters
            </h2>
            <p className="text-[#6b7c78] text-lg">
              Leaders across finance and policy agree — the future belongs to those who act now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((q) => (
              <Card key={q.author} className="border-0 bg-[#F0EDE8] rounded-2xl p-7">
                <div className="w-8 h-8 bg-[#2a7a6e]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-[#2a7a6e] font-serif leading-none">&ldquo;</span>
                </div>
                <p className="text-[#1a2e2a] leading-relaxed mb-6 italic">&ldquo;{q.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-[#1a2e2a] text-sm">{q.author}</p>
                  <p className="text-xs text-[#6b7c78]">{q.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 md:py-28 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0E2F2A] to-[#1F6F68] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-[#CBA052]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

            <div className="relative space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5">
                <Award className="w-4 h-4 text-[#CBA052]" />
                <span className="text-sm font-semibold text-white/80">Prototype Preview</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Sneak peek at the platform
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Explore our interactive prototype — see how JusKel will work when it launches, from ESG scoring to funding matches to sustainability roadmaps.
              </p>

              <div className="inline-flex items-center gap-2 bg-[#CBA052]/20 border border-[#CBA052]/30 rounded-full px-4 py-1.5">
                <Clock className="w-3.5 h-3.5 text-[#CBA052]" />
                <span className="text-xs font-medium text-[#CBA052]">Prototype only — not the final product</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/dashboard">
                  <Button className="h-14 px-8 text-base font-semibold bg-white text-[#1a2e2a] hover:bg-white/90 rounded-full shadow-lg gap-2">
                    Explore Prototype
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/splash">
                  <Button variant="outline" className="h-14 px-8 text-base font-semibold border-2 border-white/25 text-white hover:bg-white/10 rounded-full bg-transparent gap-2">
                    Mobile Experience
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / Final CTA */}
      <section id="waitlist" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#CBA052]/10 rounded-full px-5 py-2">
            <Rocket className="w-4 h-4 text-[#CBA052]" />
            <span className="text-sm font-bold text-[#CBA052]">Coming Soon</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e2a] leading-tight">
            Be the first to access
            <span className="text-[#2a7a6e]"> the future of green finance</span>
          </h2>
          <p className="text-[#6b7c78] text-lg max-w-xl mx-auto">
            Join our waitlist to get early access when JusKel launches. Be among the first SMEs to unlock better rates through sustainability.
          </p>

          {/* Email signup */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7c78]" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                />
              </div>
              <Button className="h-14 px-6 text-sm font-semibold bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full whitespace-nowrap">
                Join Waitlist
              </Button>
            </div>
            <p className="text-xs text-[#6b7c78] mt-3">
              No spam, ever. We&apos;ll only email you about the launch.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2a7a6e]" />
              <span className="text-sm text-[#6b7c78]">Free for SMEs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2a7a6e]" />
              <span className="text-sm text-[#6b7c78]">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2a7a6e]" />
              <span className="text-sm text-[#6b7c78]">Early access priority</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E2F2A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                  <span className="font-bold text-[#0E2F2A] text-sm">J</span>
                  <span className="font-bold text-[#CBA052] text-xs">K</span>
                </div>
                <span className="text-lg font-bold">JusKel</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Bridging finance and sustainability for SMEs and corporates.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[#CBA052]/20 rounded-full px-3 py-1">
                <Rocket className="w-3 h-3 text-[#CBA052]" />
                <span className="text-xs font-medium text-[#CBA052]">Coming Soon</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/80">Product</h4>
              <div className="space-y-2.5">
                <p className="text-sm text-white/50">ESG Scoring <span className="text-[#CBA052] text-[10px]">SOON</span></p>
                <p className="text-sm text-white/50">Funding Matches <span className="text-[#CBA052] text-[10px]">SOON</span></p>
                <p className="text-sm text-white/50">Roadmaps <span className="text-[#CBA052] text-[10px]">SOON</span></p>
                <p className="text-sm text-white/50">Carbon Tracking <span className="text-[#CBA052] text-[10px]">SOON</span></p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/80">Company</h4>
              <div className="space-y-2.5">
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">About Us</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Careers</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Press</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Contact</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white/80">Legal</h4>
              <div className="space-y-2.5">
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Privacy Policy</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Terms of Service</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Cookie Policy</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Security</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">&copy; 2026 JusKel Ltd. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                <Shield className="w-3.5 h-3.5 text-[#CBA052]" />
                <span className="text-xs text-white/60">Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2a7a6e]" />
                <span className="text-xs text-white/60">FCA aligned</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
