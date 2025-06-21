'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'

function PrivacyContent() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t('privacy.title')}</h1>
        
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.dataCollection.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('privacy.dataCollection.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.dataUsage.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('privacy.dataUsage.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.dataStorage.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('privacy.dataStorage.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.contact.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('privacy.contact.content')}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params)
  
  return (
    <LanguageProvider defaultLanguage={resolvedParams.locale as any}>
      <PrivacyContent />
    </LanguageProvider>
  )
} 