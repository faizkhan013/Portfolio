import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Outfit, Space_Mono, VT323 } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono', display: 'swap' })
const vt323 = VT323({ subsets: ['latin'], weight: '400', variable: '--font-pixel', display: 'swap' })

export const metadata: Metadata = {
  title: 'Mohammad Faiz Khan | Full Stack Developer',
  description: 'Portfolio of Mohammad Faiz Khan — Full Stack Developer specializing in MERN stack, Spring Boot, and modern web development.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'MERN', 'Java', 'Spring Boot', 'Portfolio', 'Bhubaneswar'],
  authors: [{ name: 'Mohammad Faiz Khan' }],
  openGraph: {
    title: 'Mohammad Faiz Khan | Full Stack Developer',
    description: 'Building scalable web apps with MERN stack, Spring Boot & Java.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceMono.variable} ${vt323.variable} font-sans`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
