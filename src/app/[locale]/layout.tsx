import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ja' },
    { locale: 'ko' }
  ]
}

export const metadata: Metadata = {
  title: 'AI Soulmate Vision - Generate Your Perfect Match',
  description: 'Upload a photo and let AI generate your ideal soulmate in 30 seconds. Free, fast, and privacy-protected.',
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  // 确保传入的 locale 是有效的
  const { locale } = await params
  const validLocales: Language[] = ['en', 'zh', 'ja', 'ko']
  if (!validLocales.includes(locale as Language)) {
    notFound()
  }

  return (
    <LanguageProvider defaultLanguage={locale as Language}>
      {children}
    </LanguageProvider>
  )
} 