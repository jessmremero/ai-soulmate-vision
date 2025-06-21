'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function EmbeddedFAQ() {
  const { t, language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // 获取FAQ数据 - 基于当前语言动态生成
  const getFAQs = () => {
    return [
      {
        question: t('faq.q1.question'),
        answer: t('faq.q1.answer')
      },
      {
        question: t('faq.q2.question'),
        answer: t('faq.q2.answer')
      },
      {
        question: t('faq.q3.question'),
        answer: t('faq.q3.answer')
      },
      {
        question: t('faq.q4.question'),
        answer: t('faq.q4.answer')
      }
    ]
  }

  const topFAQs = getFAQs()

  // 生成FAQ结构化数据
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": topFAQs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* FAQ结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <section id="faq-section" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            {t('faq.contact')} <a href="mailto:wanghuitian475@gmail.com" className="text-purple-600 underline hover:text-purple-700">wanghuitian475@gmail.com</a> {t('faq.contactUs')}
          </p>
        </div>

        {/* FAQ Grid - Left Right Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {topFAQs.map((faq, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-white/30">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-4 text-left flex items-start justify-between hover:bg-white/10 transition-colors"
              >
                <h3 className="text-base font-semibold text-gray-800 pr-4 leading-snug">
                  {index + 1}. {faq.question}
                </h3>
                <div className={`transform transition-transform mt-1 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
                  </div>
        </div>
      </section>
    </>
  )
} 