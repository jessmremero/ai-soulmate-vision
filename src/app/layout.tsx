import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Soulmate Vision - Generate Your Perfect Match',
  description: 'Upload a photo and let AI generate your ideal soulmate in 30 seconds. Free, fast, and privacy-protected.',
  keywords: ['AI', 'soulmate', 'photo generation', 'artificial intelligence'],
  authors: [{ name: 'AISoulmateVision Team' }],
  creator: 'AISoulmateVision',
  publisher: 'AISoulmateVision',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'AI Soulmate Vision - Generate Your Perfect Match',
    description: 'Upload a photo and let AI generate your ideal soulmate in 30 seconds. Free, fast, and privacy-protected.',
    url: 'https://aisoulmatevision.com',
    siteName: 'AI Soulmate Vision',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Soulmate Vision'
      }
    ],
    locale: 'zh_CN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Soulmate Vision - Generate Your Perfect Match',
    description: 'Upload a photo and let AI generate your ideal soulmate in 30 seconds. Free, fast, and privacy-protected.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://aisoulmatevision.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <LanguageProvider defaultLanguage="zh">
          {children}
        </LanguageProvider>
      </body>
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-STFYX5TV0Z" 
        strategy="afterInteractive" 
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-STFYX5TV0Z');
        `}
      </Script>
    </html>
  )
} 