'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'

function TermsContent() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t('terms.title')}</h1>
        
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('terms.serviceUsage.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('terms.serviceUsage.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('terms.contentGuidelines.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('terms.contentGuidelines.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('terms.prohibitedContent.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('terms.prohibitedContent.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('terms.limitationOfLiability.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('terms.limitationOfLiability.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('terms.contact.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('terms.contact.content')}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params)
  
  return (
    <LanguageProvider defaultLanguage={resolvedParams.locale as any}>
      <TermsContent />
    </LanguageProvider>
  )
} 