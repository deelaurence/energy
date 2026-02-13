'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSignUp = () => {
    router.push('/dashboard')
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-[#0E2F2A] via-[#153D35] to-[#1F6F68]">
      <div className="min-h-screen flex flex-col">
        {/* Logo Header */}
        <div className="flex flex-col items-center pt-12 pb-8 px-6">
          <Link href="/" className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-[#0E2F2A] text-xl">J</span>
                <span className="font-bold text-[#CBA052] text-lg">K</span>
              </div>
              <span className="text-2xl font-bold text-white">JusKel</span>
            </div>
            <p className="text-white/70 text-sm">Sustainability Finance Hub</p>
          </Link>
        </div>

        {/* Sign Up Card */}
        <div className="flex-1 bg-white rounded-t-[2rem] px-6 pt-8 pb-12">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-[#1a2e2a]">Sign Up</h1>
              <p className="text-[#6b7c78] text-sm">Create an account to get started</p>
            </div>

            {/* Social Sign Up Buttons */}
            <div className="space-y-3">
              <Button
                variant="outline"
                onClick={handleSignUp}
                className="w-full h-13 text-base font-medium rounded-xl border-[#d5d0c8] text-[#1a2e2a] bg-white hover:bg-[#F0EDE8]"
              >
                Sign up with Companies House
              </Button>
              <Button
                variant="outline"
                onClick={handleSignUp}
                className="w-full h-13 text-base font-medium rounded-xl border-[#d5d0c8] text-[#1a2e2a] bg-white hover:bg-[#F0EDE8]"
              >
                Sign up with Xero/QuickBooks
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#d5d0c8]" />
              <span className="text-sm text-[#6b7c78]">or</span>
              <div className="flex-1 h-px bg-[#d5d0c8]" />
            </div>

            {/* Email/Password Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Email address</label>
                <input
                  type="email"
                  placeholder="username@email.com"
                  className="w-full h-12 px-4 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a2e2a]">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full h-12 px-4 pr-12 rounded-xl border border-[#d5d0c8] bg-[#F0EDE8]/50 text-[#1a2e2a] placeholder:text-[#6b7c78]/60 focus:outline-none focus:ring-2 focus:ring-[#2a7a6e] focus:border-transparent text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7c78] hover:text-[#1a2e2a]"
                  >
                    {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2">
                <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-[#d5d0c8] text-[#2a7a6e] focus:ring-[#2a7a6e]" />
                <label className="text-sm text-[#1a2e2a]">
                  I agree to the{' '}
                  <Link href="#" className="font-medium text-[#2a7a6e] hover:text-[#1F6F68]">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="font-medium text-[#2a7a6e] hover:text-[#1F6F68]">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Continue Button */}
              <Button
                onClick={handleSignUp}
                className="w-full h-13 text-base font-semibold bg-[#1a2e2a] hover:bg-[#1a2e2a]/90 text-white rounded-full"
              >
                Create Account
              </Button>
            </div>

            {/* Footer */}
            <div className="space-y-2">
              <p className="text-center text-xs text-[#6b7c78]">
                Bank-level encryption &middot; FCA-aligned security
              </p>
              <p className="text-center text-sm text-[#6b7c78]">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-[#2a7a6e] hover:text-[#1F6F68]">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
