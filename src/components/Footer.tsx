'use client'

import Link from 'next/link'

export default function Footer() {
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
              <p className="text-gray-600 text-xs">完全免费，隐私保护，30秒生成</p>
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
              常见问题
            </a>
            <a 
              href="mailto:support@aisoulmatevision.com" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              联系我们
            </a>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              关于我们
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              隐私政策
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              服务条款
            </Link>
          </div>

          {/* 右侧：版权信息 */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm">© 2025 AISoulmateVision</p>
          </div>
        </div>

        {/* 底部免责声明 - 紧凑版 */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-center text-gray-500 text-xs leading-relaxed">
            仅供娱乐使用，请勿上传他人照片 • 我们重视您的隐私，照片将在24小时后自动删除 • 生成图像仅供个人娱乐，请勿商业使用
          </p>
        </div>
      </div>
    </footer>
  )
} 