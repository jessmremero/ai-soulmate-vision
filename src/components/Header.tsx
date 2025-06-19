'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img 
            src="/favicon-32x32.png" 
            alt="AISoulmateVision Logo" 
            className="w-8 h-8 rounded-lg"
          />
          <h1 className="text-xl font-bold text-gray-800">AISoulmateVision</h1>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
          >
            首页
          </Link>
          <a 
            href="#faq-section" 
            className="text-gray-600 hover:text-purple-600 transition-colors font-medium cursor-pointer"
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
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 hover:text-purple-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
} 