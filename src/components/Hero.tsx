'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-8 md:py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          {t('hero.title')}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block md:inline">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">{t('hero.features.free')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">{t('hero.features.fast')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">{t('hero.features.privacy')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">{t('hero.features.noSignup')}</span>
          </div>
        </div>

      </div>
    </section>
  )
} 