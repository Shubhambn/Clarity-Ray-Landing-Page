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
  metadataBase: new URL('https://clarityrun.vercel.app'),
  title: 'ClarityRay — Medical AI that runs in your browser',
  description:
    'Browser-native medical screening AI. Pick a model, upload a scan, and run ONNX inference on-device in WebAssembly. No uploads, no servers — your scan never leaves the page. Open source, MIT.',
  applicationName: 'ClarityRay',
  authors: [{ name: 'ClarityRay' }],
  generator: 'Next.js',
  keywords: [
    'medical AI',
    'browser AI',
    'ONNX Runtime Web',
    'WebAssembly inference',
    'chest X-ray screening',
    'on-device AI',
    'privacy-first',
    'open source medical AI',
  ],
  openGraph: {
    type: 'website',
    url: 'https://clarityrun.vercel.app/',
    siteName: 'ClarityRay',
    title: 'ClarityRay — Medical AI that runs in your browser',
    description:
      'Spec-driven, browser-native screening. ONNX inference runs on-device in WebAssembly — no uploads, no servers. Open source, MIT.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClarityRay — Medical AI that runs in your browser',
    description:
      'Browser-native medical screening. On-device ONNX inference, zero uploads. Open source, MIT.',
  },
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
