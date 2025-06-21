'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'

function AboutContent() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('about.title')} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('about.companyName')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('about.vision.title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('about.vision.content1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.vision.content2')}
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">💝</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Intelligence</h3>
            <p className="text-gray-600 leading-relaxed">
              Uses the latest deep learning algorithms to accurately analyze facial features, age, temperament and style
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Realistic Style</h3>
            <p className="text-gray-600 leading-relaxed">
              Focuses on generating realistic and natural portrait photos, avoiding cartoonization
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Privacy Protection</h3>
            <p className="text-gray-600 leading-relaxed">
              Strictly protects user privacy, uploaded photos are only used for AI generation
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Technology</h2>
            <p className="text-xl opacity-90">Based on advanced AI technology stack</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🧠 Core Technology</h3>
              <ul className="space-y-2 opacity-90">
                <li>• Stable Diffusion image generation model</li>
                <li>• Deep learning facial feature analysis</li>
                <li>• Computer vision technology</li>
                <li>• Neural network image processing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">⚡ Tech Stack</h3>
              <ul className="space-y-2 opacity-90">
                <li>• Next.js + TypeScript frontend</li>
                <li>• Replicate AI API integration</li>
                <li>• Tailwind CSS modern UI</li>
                <li>• Vercel cloud deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Team Philosophy</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a group of developers who love technology and believe in love. We believe that the power 
            of technology can bring more beautiful experiences to people, allowing everyone to find their 
            own romantic story in the digital world.
            <br /><br />
            AISoulmateVision is not just a technical product, but our vision for a better future life. 
            We hope to create unique, interesting, and imaginative digital experiences for users through AI technology.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function About({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params)
  
  return (
    <LanguageProvider defaultLanguage={resolvedParams.locale as any}>
      <AboutContent />
    </LanguageProvider>
  )
} 