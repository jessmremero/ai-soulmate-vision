// API 响应类型
export interface GenerateResponse {
  success: boolean
  imageUrl?: string
  message?: string
  error?: string
}

// API 状态响应类型
export interface ApiStatusResponse {
  status: string
  configured: boolean
  mode?: 'real' | 'mock'
  message: string
}

// 生成请求的状态
export interface GenerationState {
  isGenerating: boolean
  progress?: number
  error?: string
  result?: string
} 