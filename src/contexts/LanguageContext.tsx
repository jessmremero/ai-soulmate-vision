'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: Language
}

// 智能语言检测函数
function detectUserLanguage(): Language {
  // 1. 优先检查 localStorage 中保存的用户偏好
  const savedLanguage = localStorage.getItem('preferred-language') as Language
  if (savedLanguage && translations[savedLanguage]) {
    console.log('🔄 使用已保存的语言偏好:', savedLanguage)
    return savedLanguage
  }

  // 2. 检查浏览器语言偏好
  const browserLanguages = navigator.languages || [navigator.language]
  for (const browserLang of browserLanguages) {
    const langCode = browserLang.split('-')[0].toLowerCase() as Language
    if (translations[langCode]) {
      console.log('🌐 根据浏览器语言检测到:', langCode, '(原始:', browserLang, ')')
      return langCode
    }
  }

  // 3. 根据时区推测地理位置（简单实现）
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const geoLanguage = getLanguageByTimezone(timezone)
  if (geoLanguage) {
    console.log('🌍 根据时区推测语言:', geoLanguage, '(时区:', timezone, ')')
    return geoLanguage
  }

  // 4. 默认返回英文（对国际用户更友好）
  console.log('🔤 使用默认语言: en')
  return 'en'
}

// 根据时区推测用户可能的语言偏好
function getLanguageByTimezone(timezone: string): Language | null {
  const timezoneLanguageMap: Record<string, Language> = {
    // 中国时区
    'Asia/Shanghai': 'zh',
    'Asia/Beijing': 'zh',
    'Asia/Chongqing': 'zh',
    'Asia/Harbin': 'zh',
    'Asia/Hong_Kong': 'zh',
    'Asia/Macau': 'zh',
    'Asia/Taipei': 'zh',
    
    // 日本时区
    'Asia/Tokyo': 'ja',
    
    // 韩国时区
    'Asia/Seoul': 'ko',
    
    // 英语国家时区
    'America/New_York': 'en',
    'America/Los_Angeles': 'en',
    'America/Chicago': 'en',
    'America/Denver': 'en',
    'Europe/London': 'en',
    'Australia/Sydney': 'en',
    'Australia/Melbourne': 'en',
  }

  return timezoneLanguageMap[timezone] || null
}

export function LanguageProvider({ children, defaultLanguage = 'zh' }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [isInitialized, setIsInitialized] = useState(false)

  // 智能语言检测和初始化
  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      const detectedLanguage = detectUserLanguage()
      setLanguageState(detectedLanguage)
      setIsInitialized(true)
      
      // 如果检测到的语言与默认语言不同，可以考虑重定向
      if (detectedLanguage !== defaultLanguage) {
        console.log('💡 建议重定向到:', `/${detectedLanguage}`)
      }
    }
  }, [defaultLanguage, isInitialized])

  // 设置语言并保存到localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('preferred-language', lang)
    console.log('💾 保存语言偏好:', lang)
  }

  // 翻译函数 - 支持嵌套键如 "hero.title"
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // 如果找不到翻译，返回键名作为fallback
        console.warn(`Translation missing for key: ${key} in language: ${language}`)
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

// 自定义Hook
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 