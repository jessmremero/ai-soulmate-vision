import { useLanguage } from '@/contexts/LanguageContext'

// 兼容原有next-intl的useTranslations API
export function useTranslation() {
  const { t: translate, language, setLanguage } = useLanguage()
  
  // 创建兼容next-intl的t函数，支持namespace
  const t = (key: string) => {
    return translate(key)
  }
  
  return {
    t,
    language,
    setLanguage,
    // 兼容原有API
    locale: language
  }
}

// 为了更好的兼容性，也导出useTranslations别名
export const useTranslations = (namespace?: string) => {
  const { t: translate } = useLanguage()
  
  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key
    return translate(fullKey)
  }
} 