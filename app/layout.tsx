import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Mono, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'ClarityRay - Medical AI that runs on your machine',
  description: 'Upload a scan, run AI locally, and get structured results. No cloud. No data sharing. Open source medical AI runtime.',
  generator: 'v0.app',
  keywords: ['medical AI', 'local AI', 'chest X-ray', 'diagnostic AI', 'open source', 'privacy-first'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${dmMono.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
