'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getCompanyEmailError } from '@/lib/email-validation'
import { Logo } from '@/components/logo'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const router = useRouter()
  const emailError = getCompanyEmailError(email)
  const showEmailError = emailTouched && !!emailError

  const handleLogin = () => {
    setEmailTouched(true)
    if (!email.trim() || emailError) {
      return
    }
    router.push('/dashboard')
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-[var(--color-charcoal-teal)] via-[#153D35] to-[var(--color-teal-medium)]">
      <div className="min-h-screen flex flex-col">
        {/* Logo Header */}
        <div className="flex flex-col items-center pt-12 pb-8 px-6">
          <Link href="/" className="flex flex-col items-center">
            <Logo variant="light" hasBg={false} showText={true} />
          </Link>
        </div>

        {/* Login Card */}
        <div className="flex-1 bg-white rounded-t-[2rem] px-6 pt-8 pb-12">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-[var(--color-text-dark)]">Log In</h1>
              <p className="text-[var(--color-text-body)] text-sm">Create an account or log in to enter</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/dashboard" className="text-[var(--color-teal-data)] hover:text-[var(--color-teal-medium)]">
                Companies House
              </Link>
              <span className="text-[var(--color-border)]">•</span>
              <Link href="/dashboard" className="text-[var(--color-teal-data)] hover:text-[var(--color-teal-medium)]">
                Xero/QuickBooks
              </Link>
              <span className="text-[var(--color-border)]">•</span>
              <Link href="#login-email" className="text-[var(--color-teal-data)] hover:text-[var(--color-teal-medium)]">
                Email login
              </Link>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3" id="login-social">
              <Button
                id="login-companies-house"
                variant="outline"
                onClick={handleLogin}
                className="w-full h-13 text-base font-medium rounded-xl border-[var(--color-border)] text-[var(--color-text-dark)] bg-white hover:bg-[var(--color-bg-light)]"
              >
                Login with Companies House
              </Button>
              <Button
                id="login-xero"
                variant="outline"
                onClick={handleLogin}
                className="w-full h-13 text-base font-medium rounded-xl border-[var(--color-border)] text-[var(--color-text-dark)] bg-white hover:bg-[var(--color-bg-light)]"
              >
                Log in with Xero/QuickBooks
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[var(--color-border)]" />
              <span className="text-sm text-[var(--color-text-body)]">or</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>

            {/* Email/Password Form */}
            <div className="space-y-4" id="login-email">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--color-text-dark)]">Email address</label>
                <input
                  type="email"
                  placeholder="username@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  aria-invalid={showEmailError ? 'true' : 'false'}
                  aria-describedby="login-email-help"
                  className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)]/50 text-[var(--color-text-dark)] placeholder:text-[var(--color-text-body)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-data)] focus:border-transparent text-sm"
                />
                {showEmailError ? (
                  <p id="login-email-help" className="text-xs text-red-600">
                    {emailError}
                  </p>
                ) : (
                  <p id="login-email-help" className="text-xs text-[var(--color-text-body)]">
                    Company emails only.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--color-text-dark)]">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full h-12 px-4 pr-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)]/50 text-[var(--color-text-dark)] placeholder:text-[var(--color-text-body)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-data)] focus:border-transparent text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-body)] hover:text-[var(--color-text-dark)]"
                  >
                    {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-teal-data)] focus:ring-[var(--color-teal-data)]" />
                  <span className="text-sm text-[var(--color-text-dark)]">Remember me</span>
                </label>
                <Link href="#" className="text-sm font-medium text-[var(--color-teal-data)] hover:text-[var(--color-teal-medium)]">
                  Forgot password?
                </Link>
              </div>

              {/* Continue Button */}
              <Button
                onClick={handleLogin}
                className="w-full h-13 text-base font-semibold bg-[var(--color-text-dark)] hover:bg-[var(--color-text-dark)]/90 text-white rounded-full"
              >
                Continue
              </Button>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-[var(--color-text-body)]">
              Bank-level encryption &middot; FCA-aligned security
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
