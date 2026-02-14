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
import { Logo } from '@/components/logo'

const visionStats = [
  { value: '208B+', label: 'Sustainable finance market in the UK is valued at £65.25 billion in 2024, and is projected to exceed £208.4 billion by 2030', icon: PoundSterling },
  { value: '5.7M', label: 'The UK has an SME market (TAM) of about 5.7 million SMEs', icon: Building2 },
  { value: '<10%', label: 'ESG adoption is currently below 20% in the UK, EU, USA, and other developed economies, and below 10% in emerging markets such as Africa.', icon: TrendingUp },
  { value: '50%', label: 'Of UK emissions from SMEs', icon: Leaf },
]
const features = [
  // COMING SOON - Core MVP Features
  {
    icon: BarChart3,
    title: 'AI-Driven Sustainability Scorecard',
    description: 'Proprietary engine evaluating financial resilience and ESG performance to deliver a trusted Juskel Score.',
    badge: 'Coming Soon',
  },
  {
    icon: PoundSterling,
    title: 'Funding Match Engine',
    description: 'Automatically matches SMEs to green loans, grants, and incentives based on their ESG profile in seconds.',
    badge: 'Coming Soon',
  },
  {
    icon: Zap,
    title: 'Dynamic Finance Terms',
    description: 'Allows programmatic adjustment of interest rates and loan limits as SMEs improve their verified ESG scores.',
    badge: 'Coming Soon',
  },
  {
    icon: BarChart3,
    title: 'Funding Readiness Dashboard',
    description: 'At-a-glance view of your score, funding gaps, and the specific steps required to unlock better capital offers.',
    badge: 'Coming Soon',
  },
  {
    icon: PoundSterling,
    title: 'ESG Improvement Roadmap',
    description: 'AI-generated step-by-step sustainability actions with ROI projections and direct links to matched funding.',
    badge: 'Planned',
  },
  {
    icon: Globe,
    title: 'Green Readiness Benchmarking',
    description: 'A lite benchmarking tool to compare your sustainability performance against sector and regional peers.',
    badge: 'Coming Soon',
  },
  {
    icon: Zap,
    title: 'ESG Rewards Marketplace',
    description: 'An integrated incentives and rewards layer for businesses actively meeting sustainability milestones.',
    badge: 'Planned',
  },
  {
    icon: Globe,
    title: 'Carbon Tracking & Reporting',
    description: 'Real-time Scope 1, 2, and 3 monitoring to satisfy lender and corporate ESG disclosure requirements.',
    badge: 'Planned',
  },

  // PLANNED - Future Roadmap
  {
    icon: Building2,
    title: 'Enterprise ESG Finance Scorecard',
    description: 'Advanced sustainability scoring and risk analytics tailored for mid-market and corporate entities.',
    badge: 'Planned',
  },
  {
    icon: Globe,
    title: 'Supply-Chain ESG Reporting',
    description: 'Basic tools for SMEs to track, manage, and report on the environmental impact of their supply chain.',
    badge: 'Planned',
  },
  {
    icon: Users,
    title: 'Lender Marketplace',
    description: 'A two-sided platform connecting ESG-ready borrowers with a global network of green-focused lenders.',
    badge: 'Planned',
  }
];
const quotes = [
  {
    quote: 'The cost of inaction on climate change is far greater than the cost of action. Green finance isn\'t charity — it\'s smart economics.',
    author: 'Mark Carney',
    role: 'Former Governor, Bank of England & UN Special Envoy for Climate Action',
  },
  {
    quote: 'Sustainable finance is no longer a niche; it is the fundamental shift required to ensure the long-term health of both our planet and our global economy.',
    author: 'Dr. Andrew Steer',
    role: 'President & CEO, Bezos Earth Fund',
  },
]

export default function Landing() {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0B0F12] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo href="/" showText={true} variant="dark" hasBg={false} />
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Vision</a>
            <a href="#platform" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Platform</a>
            <a href="#market" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Market</a>
            <a href="#quotes" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Why It Matters</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-medium text-white hover:bg-white/10">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="text-sm font-medium bg-[var(--color-gold-primary)] hover:opacity-90 text-[var(--color-charcoal-teal)] font-semibold">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal-teal)] via-[var(--color-charcoal-teal)] to-[var(--color-teal-dark)]" />
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-[var(--color-gold-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[var(--color-teal-data)]/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-[30%] w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-gold-primary)]/20 backdrop-blur-sm border border-[var(--color-gold-primary)]/30 rounded-full px-5 py-2">
              <Rocket className="w-4 h-4 text-[var(--color-gold-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-gold-primary)]">Coming Soon — Join the Early Access Waitlist</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Bridging finance 
              <br />
              <span className="bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-gold-light)] bg-clip-text text-transparent">
                and sustainability 
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We are building an AI-driven Sustainability Finance Hub, the UK's first platform that combines open banking data, ESG metrics, operational, and supply chain data into a single scorecard for SMEs and Corporates. Our solution is built on three core pillars - SMEs, corporates, and climate fintech, all connected through one integrated sustainability-finance hub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button variant="outline" className="h-14 px-8 text-base font-semibold bg-white text-[var(--color-text-dark)] hover:bg-white/90 rounded-full shadow-lg shadow-black/20 gap-2">
                  Preview Prototype
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/splash">
                <Button variant="outline" className="h-14 px-8 text-base font-semibold border-2 border-white/25 text-white hover:bg-white/10 rounded-full bg-transparent gap-2">
                  Mobile Experience
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Launch timeline */}
            {/* <div className="flex items-center justify-center gap-3 pt-2">
              <Clock className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/50">Expected launch: Q3 2026</span>
            </div> */}
          </div>

          {/* Vision Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {visionStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                  <Icon className="w-6 h-6 text-[var(--color-gold-primary)] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-[var(--color-gold-primary)] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <Rocket className="w-5 h-5 text-white" />
            <p className="text-center text-sm font-bold text-white">
              We&apos;re building the future of sustainability-linked finance. Early access launching soon.
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
                5.7M UK SMEs need green finance.<br />
                <span className="text-[#2a7a6e]">Most can&apos;t access it.</span>
              </h2>





              <p className="text-[#6b7c78] leading-relaxed">
                Across the UK and globally, small and mid-sized businesses are making real progress on sustainability, yet when they apply for finance, that progress often goes unseen. Funding options are fragmented, criteria are unclear, and even when businesses succeed, the cost of capital rarely reflects their sustainability gains.

              </p>
              <p className="text-[#6b7c78] leading-relaxed">
                SMEs are expected to decarbonise, report on sustainability, and grow, but the financial systems they rely on haven’t caught up. Sustainability efforts are hard to prove, lenders still depend on outdated credit models, and real environmental progress is rarely embedded into financing decisions.

              </p>
              <p className="text-[#6b7c78] leading-relaxed">
                We are an AI-driven Sustainability Finance Hub that transforms ESG progress into cheaper, faster, and more accessible finance. By integrating open banking insights, verified sustainability metrics, and supply chain data, we create a live, decision-ready financial sustainability profile for each business.

              </p>
              <div className="inline-flex items-center gap-2 bg-[#e6f2ee] rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-[#2a7a6e]" />
                <span className="text-sm font-medium text-[#2a7a6e]">Platform under development — launching soon</span>
              </div>
            </div>

            {/* Market stats card */}
            <Card className="border-0 bg-gradient-to-br from-[var(--color-charcoal-teal)] to-[var(--color-teal-medium)] rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6 text-white/80">The Opportunity</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">&pound;208B+</div>
                  <p className="text-white/60 text-sm mt-1">Projected green finance market by 2030</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-4xl font-bold">5.7M</div>
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

      {/* Problem Statement */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-[#d94a4a]" />
              <span className="text-sm font-semibold text-[#d94a4a]">Problem Statement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
              The system is broken.
              <span className="text-[var(--color-teal-data)]"> Here&apos;s why.</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-lg leading-relaxed">
              Five fundamental barriers prevent sustainability from translating into better financial outcomes for SMEs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Sustainability not Visible to Finance',
                description: 'SMEs are making real progress, but lenders can\u2019t see or trust it.',
                icon: TrendingUp,
              },
              {
                number: '02',
                title: 'Poorly Allocated Capital',
                description: 'Green capital exists, but it doesn\u2019t reach the right businesses at scale.',
                icon: PoundSterling,
              },
              {
                number: '03',
                title: 'Mispriced Cost of Capital',
                description: 'Better sustainability performance rarely leads to better financing terms.',
                icon: BarChart3,
              },
              {
                number: '04',
                title: 'Fragmented Data',
                description: 'ESG, financial, and supply-chain data live in disconnected systems.',
                icon: Globe,
              },
              {
                number: '05',
                title: 'Green Funding Inaccessibility',
                description: 'Grants, incentives, and green finance are complex and inefficient to unlock.',
                icon: Building2,
              },
            ].map((problem) => {
              const Icon = problem.icon
              return (
                <Card key={problem.number} className="relative border-0 bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden">
                  <div className="absolute top-5 right-5 text-4xl font-bold text-[var(--color-bg-light)] select-none">{problem.number}</div>
                  <div className="w-12 h-12 bg-[#fce4e4] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#d94a4a] transition-colors">
                    <Icon className="w-6 h-6 text-[#d94a4a] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-2">{problem.title}</h3>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{problem.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 md:py-28 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-4 h-4 text-[#2a7a6e]" />
              <span className="text-sm font-semibold text-[#2a7a6e]">Our Vision</span>
            </div>
            
            <p className="text-[#6b7c78] text-lg leading-relaxed">
              A world where sustainability performance directly reduces the cost of capital, improves business outcomes, and becomes the global standard for SME and corporate credit, procurement, and supply chains.
            </p>

            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5  mt-10 mb-6">
              <Leaf className="w-4 h-4 text-[var(--color-teal-data)]" />
              <span className="text-sm font-semibold text-[var(--color-teal-data)]">Our Vision</span>
            </div>
            <p className="text-[var(--color-text-body)] text-lg leading-relaxed">
                To make sustainability measurable, accessible, financeable, and profitable for all SMEs and corporates.
            </p>

            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mt-10 mb-6">
              <Award className="w-4 h-4 text-[var(--color-gold-primary)]" />
              <span className="text-sm font-semibold text-[var(--color-gold-primary)]">Our Values</span>
            </div>
            <p className="text-[var(--color-text-body)] text-lg leading-relaxed font-medium">
              Integrity • Interoperability • Accountability • Transparency • Impact
            </p>

            
          </div>

          {/* Quote highlight */}
          <Card className="border-0 bg-gradient-to-br from-[var(--color-charcoal-teal)] to-[var(--color-teal-medium)] rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-white font-medium leading-relaxed italic">
              &ldquo;The transition to net zero is the greatest commercial opportunity of our time. The businesses that move first will be rewarded with cheaper capital and stronger growth.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-bold text-[var(--color-gold-primary)]">Larry Fink</p>
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
              <Zap className="w-4 h-4 text-[var(--color-gold-primary)]" />
              <span className="text-sm font-semibold text-[#b8860b]">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
              The full stack for sustainable finance
            </h2>
            <p className="text-[var(--color-text-body)] text-lg">
              Everything SMEs and lenders will need to connect ESG performance with better financial outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="relative border-0 bg-[var(--color-bg-light)] rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden">
                  {/* Coming Soon badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      feature.badge === 'Planned'
                        ? 'bg-[var(--color-text-body)]/10 text-[var(--color-text-body)]'
                        : feature.badge === 'In Development'
                        ? 'bg-[var(--color-light-teal)] text-[var(--color-teal-data)]'
                        : 'bg-[#fef9e7] text-[#b8860b]'
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--color-teal-data)] transition-colors">
                    <Icon className="w-6 h-6 text-[var(--color-teal-data)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-4 py-2.5 mb-12">
              <Clock className="w-8 h-8 text-[var(--color-teal-data)]" />
              <span className="text-3xl font-semibold text-[var(--color-teal-data)]">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
              From sustainability data to better finance in minutes
            </h2>
            <p className="text-[var(--color-text-body)] text-lg">
              Designed for lenders, with verified data, transparent scoring, and audit-ready decision trails, so SMEs can access fair, faster, sustainability-linked finance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect Data', desc: 'Securely connect financial, ESG, and operational data with a single click. JusKel verifies and structures your information so it\'s trusted by lenders and funding partners.', icon: Building2 },
              { step: '02', title: 'Get Your Score', desc: 'Our AI generates a lender-ready sustainability and funding score, built from real business data, not self-reported claims or static ESG checklists.', icon: BarChart3 },
              { step: '03', title: 'Match Funding', desc: 'Instantly see green loans, grants, and incentives you genuinely qualify for, ranked by eligibility, impact, and pricing fit.', icon: PoundSterling },
              { step: '04', title: 'Improve & Save', desc: 'Follow a personalised roadmap to strengthen your score, improve sustainability performance, and unlock better financing terms over time.', icon: TrendingUp },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="text-center space-y-4">
                  <div className="relative mx-auto w-16 h-16">
                    <div className="absolute inset-0 bg-[var(--color-teal-data)]/10 rounded-2xl rotate-6" />
                    <div className="relative w-16 h-16 bg-white border-2 border-[var(--color-teal-data)]/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[var(--color-teal-data)]" />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[var(--color-gold-primary)] uppercase tracking-widest">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-[var(--color-text-dark)]">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">
              Why leaders agree sustainable finance matters
            </h2>
            <p className="text-[var(--color-text-body)] text-lg">
              Leaders across finance and policy agree — the future belongs to those who act now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {quotes.map((q) => (
              <Card key={q.author} className="border-0 bg-[var(--color-bg-light)] rounded-2xl p-7">
                <div className="w-8 h-8 bg-[var(--color-teal-data)]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-[var(--color-teal-data)] font-serif leading-none">&ldquo;</span>
                </div>
                <p className="text-[var(--color-text-dark)] leading-relaxed mb-6 italic">&ldquo;{q.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-[var(--color-text-dark)] text-sm">{q.author}</p>
                  <p className="text-xs text-[var(--color-text-body)]">{q.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-text-dark)] text-lg font-medium leading-relaxed">
              JusKel exists to turn this consensus into infrastructure, connecting sustainability data directly to real financing decisions for SMEs and lenders.
            </p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[var(--color-charcoal-teal)] to-[var(--color-teal-medium)] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-[var(--color-gold-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

            <div className="relative space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5">
                <Award className="w-4 h-4 text-[var(--color-gold-primary)]" />
                <span className="text-sm font-semibold text-white/80">Prototype Preview</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Preview the JusKel platform
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Explore our interactive prototype to see how JusKel turns sustainability data into real financing outcomes, from ESG scoring and lender-ready insights to funding matches and actionable improvement roadmaps.
              </p>

              <div className="inline-flex items-center gap-2 bg-[var(--color-gold-primary)]/20 border border-[var(--color-gold-primary)]/30 rounded-full px-4 py-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--color-gold-primary)]" />
                <span className="text-xs font-medium text-[var(--color-gold-primary)]">Prototype preview — not the final product.</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/dashboard">
                  <Button className="h-14 px-8 text-base font-semibold bg-white text-[var(--color-text-dark)] hover:bg-white/90 rounded-full shadow-lg gap-2">
                    Explore Prototype
                    <ArrowUpRight className="w-5 h-5" />
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
          <div className="inline-flex items-center gap-2 bg-[var(--color-gold-primary)]/10 rounded-full px-5 py-2">
            <Rocket className="w-4 h-4 text-[var(--color-gold-primary)]" />
            <span className="text-sm font-bold text-[var(--color-gold-primary)]">Coming Soon</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] leading-tight">
            Be the first to unlock
            <span className="text-[var(--color-teal-data)]"> better finance through sustainability</span>
          </h2>
          <p className="text-[var(--color-text-body)] text-lg max-w-xl mx-auto">
            Join the waitlist to get early access when JusKel launches, helping SMEs turn verified sustainability progress into better funding outcomes.
          </p>
          
          <p className="text-[var(--color-text-dark)] text-base font-medium max-w-2xl mx-auto">
            Built for SMEs. Designed with lenders and real credit workflows in mind.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-teal-data)]" />
              <span className="text-sm text-[var(--color-text-body)]">Free for SMEs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-teal-data)]" />
              <span className="text-sm text-[var(--color-text-body)]">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-teal-data)]" />
              <span className="text-sm text-[var(--color-text-body)]">Early access priority</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-charcoal-teal)] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-4 md:gap-12 items-start mb-10">
            <div className="space-y-4 max-w-sm">
              <Logo href="/" showText={true} variant="dark" />
              <p className="text-sm text-white/50 leading-relaxed">
                Bridging finance and sustainability for SMEs and corporates.
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                Built for SMEs, lenders, and regulated financial institutions.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[var(--color-gold-primary)]/20 rounded-full px-3 py-1">
                <Rocket className="w-3 h-3 text-[var(--color-gold-primary)]" />
                <span className="text-xs font-medium text-[var(--color-gold-primary)]">Coming Soon</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm mb-4 text-white/80">Product</h4>
              <div className="space-y-3">
                <p className="text-sm text-white/50">ESG Scoring <span className="text-[var(--color-gold-primary)] text-[10px]">SOON</span></p>
                <p className="text-sm text-white/50">Funding Matches <span className="text-[var(--color-gold-primary)] text-[10px]">SOON</span></p>
                <p className="text-sm text-white/50">Roadmaps <span className="text-[var(--color-gold-primary)] text-[10px]">SOON</span></p>
                <p className="text-sm text-white/50">Carbon Tracking <span className="text-[var(--color-gold-primary)] text-[10px]">SOON</span></p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm mb-4 text-white/80">Company</h4>
              <div className="space-y-3">
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">About Us</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Careers</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Press</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Contact</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm mb-4 text-white/80">Legal</h4>
              <div className="space-y-3">
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Privacy Policy</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Terms of Service</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Cookie Policy</p>
                <p className="text-sm text-white/50 hover:text-white/70 cursor-pointer transition-colors">Security</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <p className="text-sm text-white/40 text-center md:text-left">&copy; 2026 JusKel Holdings Ltd. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                <Shield className="w-3.5 h-3.5 text-[var(--color-gold-primary)]" />
                <span className="text-xs text-white/60">Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-teal-data)]" />
                <span className="text-xs text-white/60">Designed to align with FCA principles</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
