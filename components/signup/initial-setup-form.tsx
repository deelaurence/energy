'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronDown, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getCompanyEmailError } from '@/lib/email-validation'

export function InitialSetupForm() {
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const router = useRouter()
  const emailError = getCompanyEmailError(email)
  const showEmailError = emailTouched && !!emailError

  const handleContinue = () => {
    setEmailTouched(true)
    if (!email.trim() || emailError) {
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-[#0E2F2A] via-[#153D35] to-[#1F6F68]">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-6 pb-4">
          <Link href="/welcome">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-white/90 transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#1a2e2a]" />
            </div>
          </Link>
          <div className="text-center">
            <h1 className="text-white font-bold text-lg">Initial Setup</h1>
            <p className="text-white/60 text-sm">Step 1 of 3</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white" type="button">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white rounded-t-[2rem] px-6 pt-6 pb-12">
          <div className="max-w-md mx-auto space-y-6">
            {/* Progress Bar */}
            <div className="flex gap-2">
              <div className="flex-1 h-1.5 bg-[#2a7a6e] rounded-full" />
              <div className="flex-1 h-1.5 bg-[#d5d0c8] rounded-full" />
              <div className="flex-1 h-1.5 bg-[#d5d0c8] rounded-full" />
            </div>

            {/* Title */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-[#1a2e2a]">Create your account</h2>
              <p className="text-[#6b7c78] text-sm leading-relaxed">
                Connect your data to see your Juskel (ESG) score and matched funding.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Company name</label>
                <input
                  type="text"
                  placeholder="e.g. Greenfield Logistics Ltd"
                  className="w-full h-12 px-4 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                />
              </div>

              {/* Company Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Company email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  aria-invalid={showEmailError ? 'true' : 'false'}
                  aria-describedby="signup-email-help"
                  className="w-full h-12 px-4 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                />
                {showEmailError ? (
                  <p id="signup-email-help" className="text-xs text-red-600">
                    {emailError}
                  </p>
                ) : (
                  <p id="signup-email-help" className="text-xs text-[#6b7c78]">
                    Company emails only.
                  </p>
                )}
              </div>

              {/* Companies House Registration */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Companies House registration number</label>
                <input
                  type="text"
                  placeholder="e.g. 12345678"
                  className="w-full h-12 px-4 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                />
              </div>

              {/* Sector Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Sector</label>
                <div className="relative">
                  <select className="w-full h-12 px-4 pr-10 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#6b7c78] focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm appearance-none">
                    <option>Select your sector</option>
                    <option>Manufacturing</option>
                    <option>Technology</option>
                    <option>Retail</option>
                    <option>Construction</option>
                    <option>Transport &amp; Logistics</option>
                    <option>Professional Services</option>
                    <option>Agriculture</option>
                    <option>Energy</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7c78] pointer-events-none" />
                </div>
              </div>

              {/* Annual Turnover Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Annual turnover</label>
                <div className="relative">
                  <select className="w-full h-12 px-4 pr-10 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#6b7c78] focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm appearance-none">
                    <option>Under &pound;500k</option>
                    <option>&pound;500k &ndash; &pound;1m</option>
                    <option>&pound;1m &ndash; &pound;5m</option>
                    <option>&pound;5m &ndash; &pound;10m</option>
                    <option>&pound;10m &ndash; &pound;50m</option>
                    <option>Over &pound;50m</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7c78] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Data Connection Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-bold text-[#1a2e2a]">Connect your data for instant ESG scoring</h3>

              <Card className="p-4 border border-[#d5d0c8] rounded-xl bg-white hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#e6f2ee] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2a7a6e] font-bold text-sm">XQ</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1a2e2a] text-sm">Xero / QuickBooks</p>
                    <p className="text-xs text-[#6b7c78]">Connect your accounting data</p>
                  </div>
                  <div className="w-5 h-5 border-2 border-[#d5d0c8] rounded" />
                </div>
              </Card>

              <Card className="p-4 border border-[#d5d0c8] rounded-xl bg-white hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#e6f2ee] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2a7a6e] font-bold text-sm">OB</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1a2e2a] text-sm">Open Banking</p>
                    <p className="text-xs text-[#6b7c78]">Connect your bank account</p>
                  </div>
                  <div className="w-5 h-5 border-2 border-[#d5d0c8] rounded" />
                </div>
              </Card>

              <Card className="p-4 border border-[#d5d0c8] rounded-xl bg-white hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#e6f2ee] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2a7a6e] font-bold text-sm">CH</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1a2e2a] text-sm">Companies House</p>
                    <p className="text-xs text-[#6b7c78]">Verify your company details</p>
                  </div>
                  <div className="w-5 h-5 border-2 border-[#d5d0c8] rounded" />
                </div>
              </Card>
            </div>

            {/* Continue Button */}
            <div className="pt-4">
              <Button
                onClick={handleContinue}
                disabled={!email.trim() || !!emailError}
                className="w-full h-14 text-base font-semibold bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
