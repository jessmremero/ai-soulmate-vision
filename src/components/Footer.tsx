'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()
  
  // 根据语言生成正确的路由前缀
  const getLocalizedPath = (path: string) => {
    if (language === 'zh') {
      return path // 中文版本直接使用原路径
    }
    return `/${language}${path}` // 其他语言加上语言前缀
  }

  // 外链数据 - 可以动态添加
  const externalLinks = [
    {
      name: "Good AI Tools",
      url: "https://goodaitools.com",
      description: "AI工具导航",
      badge: "https://goodaitools.com/assets/images/badge.png"
    },
    {
      name: "AI工具导航",
      url: "https://ai-bot.cn",
      description: "AI工具集合导航"
    },
    {
      name: "AI绘画工具",
      url: "https://midjourney.com",
      description: "专业AI绘画平台"
    },
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      description: "OpenAI对话AI"
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "Anthropic智能助手"
    },
    {
      name: "GitHub",
      url: "https://github.com",
      description: "代码托管平台"
    }
    // 可以继续添加更多外链
  ]

  return (
    <footer className="w-full py-8 px-6 border-t border-white/30 bg-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* 紧凑型单行布局 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 左侧：品牌信息 */}
          <div className="flex items-center space-x-3">
            <img 
              src="/favicon-32x32.png" 
              alt="AISoulmateVision Logo" 
              className="w-7 h-7 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-800">AISoulmateVision</h3>
              <p className="text-gray-600 text-xs">{t('footer.description')}</p>
            </div>
          </div>

          {/* 中间：快速链接 */}
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="#faq-section" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                const faqSection = document.getElementById('faq-section')
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {t('footer.faq')}
            </a>
            <a 
              href="mailto:wanghuitian475@gmail.com" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {t('footer.contact')}
            </a>
            <Link 
              href={getLocalizedPath("/about")} 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {t('footer.about')}
            </Link>
            <Link 
              href={getLocalizedPath("/privacy")} 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link 
              href={getLocalizedPath("/terms")} 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>

          {/* 右侧：版权信息 */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>

        {/* 外链区域 */}
        {externalLinks.length > 0 && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm font-medium">{t('footer.partners')}:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
                    title={link.description}
                  >
                    {link.badge ? (
                      <img 
                        src={link.badge} 
                        alt={link.name} 
                        height="54" 
                        className="h-8 w-auto"
                      />
                    ) : (
                      <>
                        <span>{link.name}</span>
                        <svg 
                          className="w-3 h-3" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 底部免责声明 - 紧凑版 */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-center text-gray-500 text-xs leading-relaxed">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  )
} 