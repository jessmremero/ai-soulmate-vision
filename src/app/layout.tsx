import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AISoulmateVision - AI生成你的另一半 | 免费AI图像生成器',
    template: '%s | AISoulmateVision'
  },
  description: '使用AI技术生成你的另一半形象，完全免费，30秒生成，隐私保护。支持JPG、PNG、WebP格式，基于先进的FLUX.1-Dev模型，无需注册，立即体验。',
  keywords: 'AI生成图像,AI另一半,人工智能,图像生成,免费AI工具,FLUX模型,AI换脸,虚拟另一半,AI头像生成',
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
    type: 'website',
    locale: 'zh_CN',
    url: 'https://aisoulmatevision.com',
    siteName: 'AISoulmateVision',
    title: 'AISoulmateVision - AI生成你的另一半',
    description: '使用AI技术生成你的另一半形象，完全免费，30秒生成，隐私保护。立即体验最先进的AI图像生成技术。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AISoulmateVision - AI生成你的另一半',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AISoulmateVision - AI生成你的另一半',
    description: '使用AI技术生成你的另一半形象，完全免费，30秒生成，隐私保护。',
    images: ['/og-image.png'],
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
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 