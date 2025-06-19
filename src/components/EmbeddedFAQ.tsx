'use client'

import { useState } from 'react'
import Link from 'next/link'

const topFAQs = [
  {
    question: "什么是AISoulmateVision以及它是如何工作的？",
    answer: "AISoulmateVision是一个基于AI技术的娱乐应用，能够分析您上传的照片，并生成一个对应的异性版本的另一半形象。我们使用先进的深度学习算法来理解面部特征、年龄、气质等。"
  },
  {
    question: "AISoulmateVision真的可以免费使用吗？",
    answer: "是的，AISoulmateVision是完全免费使用的！我们致力于成为世界上最大、最强大的免费AI图像生成器，没有隐藏费用，无需信用卡，也没有使用限制。"
  },
  {
    question: "是什么让AISoulmateVision与其他AI图像生成器不同？",
    answer: "AISoulmateVision是唯一提供对海量的FLUX.1-Dev模型进行无限免费访问的平台。我们提供卓越的图像质量、快速的生成速度和完整的隐私保护，所有这些都无需任何成本或注册要求。"
  },
  {
    question: "我需要创建一个账户才能使用AISoulmateVision吗？",
    answer: "不，你不需要创建账户或注册，只需访问raphael.app并立即开始生成图像。我们相信让每个人都能无障碍使用AI。"
  },
  {
    question: "上传的照片会被保存吗？",
    answer: "我们非常重视您的隐私。上传的照片仅用于AI生成处理，不会永久存储在我们的服务器上。生成结果也会在24小时后自动删除。"
  },
  {
    question: "生成需要多长时间？",
    answer: "通常AI生成过程需要30秒到2分钟。处理时间取决于服务器负载和图片复杂度。我们提供实时进度指示。"
  },
  {
    question: "什么类型的照片效果最好？",
    answer: "为了获得最佳效果，建议使用清晰的正面照片，光线充足，面部特征清晰可见。避免使用模糊、侧面或光线不足的照片。"
  },
  {
    question: "生成的照片可以用于商业用途吗？",
    answer: "生成的照片仅供个人娱乐使用，不建议用于商业用途。请尊重AI生成内容的使用规范和相关法律法规。"
  }
]

export default function EmbeddedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            常见问题
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            还有其他问题？请通过 <a href="mailto:support@aisoulmatevision.com" className="text-purple-600 underline hover:text-purple-700">support@aisoulmatevision.com</a> 联系我们
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