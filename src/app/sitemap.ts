import { MetadataRoute } from 'next'

const baseUrl = 'https://aisoulmatevision.online'
const languages = ['zh', 'en', 'ja', 'ko']
const pages = ['', 'about', 'privacy', 'terms']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const items: MetadataRoute.Sitemap = []

  for (const lang of languages) {
    for (const page of pages) {
      // 中文主页是 /，其他语言主页是 /en、/ja、/ko
      const url =
        lang === 'zh'
          ? `${baseUrl}/${page}`.replace(/\/$/, '')
          : `${baseUrl}/${lang}${page ? '/' + page : ''}`

      items.push({
        url,
        lastModified: now,
        changeFrequency: page === '' ? 'daily' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      })
    }
  }

  return items
} 