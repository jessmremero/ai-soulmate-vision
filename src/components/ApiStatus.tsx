'use client'

import { useState, useEffect } from 'react'
import type { ApiStatusResponse } from '@/types/api'

export default function ApiStatus() {
  const [status, setStatus] = useState<ApiStatusResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkApiStatus()
  }, [])

  const checkApiStatus = async () => {
    try {
      const response = await fetch('/api/generate')
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error('Failed to check API status:', error)
      setStatus({
        status: 'error',
        configured: false,
        message: '无法连接到 API'
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <span>检查 API 状态...</span>
      </div>
    )
  }

  if (!status) return null

  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className={`w-2 h-2 rounded-full ${
        status.configured 
          ? status.mode === 'mock' ? 'bg-yellow-500' : 'bg-green-500'
          : 'bg-red-500'
      }`}></div>
      <span className={
        status.configured 
          ? status.mode === 'mock' ? 'text-yellow-600' : 'text-green-600'
          : 'text-red-600'
      }>
        {status.message}
      </span>
      {status.mode === 'mock' && (
        <span className="text-gray-500">
          🎭 使用示例图片
        </span>
      )}
      {!status.configured && (
        <span className="text-gray-500">
          (需要配置 REPLICATE_API_TOKEN)
        </span>
      )}
    </div>
  )
} 