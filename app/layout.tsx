import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { MobileNav } from '@/components/mobile-nav'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JusKel - Sustainability Finance Hub',
  description: 'AI-driven platform connecting ESG progress to cheaper, faster, and more accessible finance for UK SMEs',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto md:pb-0 pb-20">
            {children}
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  )
}
