import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteMetadata } from '@/lib/seo'

export const metadata: Metadata = siteMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="font-sansCN antialiased">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
