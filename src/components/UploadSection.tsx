'use client'

import { useState, useEffect } from 'react'

interface UploadError {
  type: 'size' | 'format' | 'general'
  message: string
}

export default function UploadSection() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [uploadError, setUploadError] = useState<UploadError | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)

  // 配置常量
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

  // 文件验证函数
  const validateFile = (file: File): UploadError | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        type: 'format',
        message: '请上传 JPG、PNG 或 WebP 格式的图片'
      }
    }

    if (file.size > MAX_FILE_SIZE) {
      return {
        type: 'size',
        message: `文件大小不能超过 ${MAX_FILE_SIZE / 1024 / 1024}MB`
      }
    }

    return null
  }

  const handleFileSelection = (file: File) => {
    const error = validateFile(file)
    
    if (error) {
      setUploadError(error)
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    setUploadError(null)
    setSelectedFile(file)
    
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const cleanupPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelection(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelection(files[0])
    }
    e.target.value = ''
  }

  const handleGenerate = async () => {
    if (!selectedFile) return
    
    setIsGenerating(true)
    setUploadError(null)
    
    try {
      const formData = new FormData()
      formData.append('image', selectedFile)
      
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || '生成失败')
      }
      
      if (data.success && data.imageUrl) {
        setGeneratedImageUrl(data.imageUrl)
      } else {
        throw new Error(data.error || '生成失败')
      }
      
    } catch (error) {
      console.error('Generation error:', error)
      setUploadError({
        type: 'general',
        message: error instanceof Error ? error.message : '生成失败，请稍后重试'
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleReset = () => {
    cleanupPreview()
    setSelectedFile(null)
    setUploadError(null)
    setIsGenerating(false)
    setGeneratedImageUrl(null)
  }

  const handleRegenerate = () => {
    setGeneratedImageUrl(null)
    handleGenerate()
  }

  const downloadImage = async () => {
    if (!previewUrl || !generatedImageUrl) return
    
    try {
      setIsDownloading(true)
      
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      if (!ctx) {
        throw new Error('无法创建canvas')
      }

      const originalImg = new Image()
      const generatedImg = new Image()
      
      originalImg.crossOrigin = 'anonymous'
      generatedImg.crossOrigin = 'anonymous'
      
      await Promise.all([
        new Promise((resolve, reject) => {
          originalImg.onload = resolve
          originalImg.onerror = reject
          originalImg.src = previewUrl
        }),
        new Promise((resolve, reject) => {
          generatedImg.onload = resolve
          generatedImg.onerror = reject
          generatedImg.src = generatedImageUrl
        })
      ])

      const imgWidth = 400
      const imgHeight = 400
      const padding = 20
      const titleHeight = 60
      
      canvas.width = imgWidth * 2 + padding * 3
      canvas.height = imgHeight + padding * 2 + titleHeight

      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#1f2937'
      ctx.font = 'bold 24px Arial, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('AI生成的另一半', canvas.width / 2, 40)

      ctx.drawImage(originalImg, padding, titleHeight, imgWidth, imgHeight)
      ctx.drawImage(generatedImg, imgWidth + padding * 2, titleHeight, imgWidth, imgHeight)

      ctx.font = '16px Arial, sans-serif'
      ctx.fillStyle = '#6b7280'
      ctx.textAlign = 'center'
      
      ctx.fillText('你的照片', padding + imgWidth / 2, canvas.height - 10)
      ctx.fillText('AI生成的另一半', imgWidth + padding * 2 + imgWidth / 2, canvas.height - 10)

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `ai-soulmate-${Date.now()}.png`
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          URL.revokeObjectURL(url)
        }
      }, 'image/png')
      
    } catch (error) {
      console.error('下载失败:', error)
      alert('下载失败，请稍后重试')
    } finally {
      setIsDownloading(false)
    }
  }

  const shareToSocialMedia = (platform: string) => {
    const shareText = '我用AI生成了完美的另一半！快来试试吧 ✨'
    const shareUrl = window.location.origin
    
    let url = ''
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'reddit':
        url = `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`
        break
      case 'telegram':
        url = `https://telegram.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
        break
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
        break
      case 'copy':
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
        alert('链接已复制到剪贴板！')
        break
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400')
    }
    
    setIsShareMenuOpen(false)
  }

  useEffect(() => {
    return () => {
      cleanupPreview()
    }
  }, [])

  return (
    <section id="upload-section" className="w-full py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <div className="flex flex-col h-full">
            <div className="text-center mb-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">📸 上传你的照片</h3>
              <p className="text-gray-600 text-sm">支持 JPG、PNG、WebP 格式，最大 10MB</p>
            </div>
            
            <div className="flex-1 flex flex-col">
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              {!previewUrl ? (
                <div
                  className={`border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer h-80 bg-white shadow-md ${
                    isDragOver
                      ? 'border-purple-400 bg-purple-50 scale-105'
                      : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        拖拽照片到这里，或者点击选择
                      </p>
                      <p className="text-sm text-gray-500">
                        建议使用清晰的正面照片，效果更佳
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className="h-80 rounded-xl shadow-lg bg-white border border-gray-200 p-6 cursor-pointer hover:border-purple-400 hover:shadow-xl transition-all group relative"
                  onClick={() => document.getElementById('file-input')?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="max-w-full max-h-full aspect-square flex items-center justify-center relative">
                      <img
                        src={previewUrl}
                        alt="预览图片"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-sm pointer-events-none"
                      />
                      
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-lg px-4 py-2 text-center">
                          <p className="text-sm font-medium text-gray-800">点击重新选择照片</p>
                          <p className="text-xs text-gray-600">或拖拽新照片到这里</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {uploadError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-700 font-medium">{uploadError.message}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="text-center mb-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ AI生成的另一半</h3>
              <p className="text-gray-600 text-sm">AI会分析你的特征生成匹配的异性版本</p>
            </div>

            <div className="flex-1 flex flex-col">
              {!generatedImageUrl && !isGenerating ? (
                <div className="border-2 border-dashed border-gray-300 rounded-xl h-80 flex flex-col items-center justify-center text-gray-400 bg-white shadow-md">
                  <div className="w-14 h-14 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium mb-2">等待上传照片</p>
                  <p className="text-sm">上传照片后点击生成按钮</p>
                </div>
              ) : isGenerating ? (
                <div className="border border-purple-300 rounded-xl h-80 flex flex-col items-center justify-center bg-white shadow-md">
                  <div className="w-14 h-14 mb-6 relative">
                    <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <p className="text-lg font-medium text-purple-800 mb-4">AI正在生成中...</p>
                </div>
              ) : (
                <div className="relative h-80 rounded-xl shadow-lg bg-white border border-gray-200 p-6">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="max-w-full max-h-full aspect-square flex items-center justify-center relative">
                      <img
                        src={generatedImageUrl!}
                        alt="AI生成的另一半"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {selectedFile && !isGenerating && (
          <div className="mt-8 flex justify-center">
            {!generatedImageUrl ? (
              <button
                onClick={handleGenerate}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              >
                🎨 生成我的另一半
              </button>
            ) : (
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={downloadImage}
                  disabled={isDownloading}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg"
                >
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>下载中...</span>
                    </>
                  ) : (
                    <>
                      <span>📥</span>
                      <span>下载图片</span>
                    </>
                  )}
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                  >
                    <span>📤</span>
                    <span>分享</span>
                  </button>

                  {isShareMenuOpen && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-48">
                      <div className="grid grid-cols-3 gap-3 p-4">
                        <button
                          onClick={() => shareToSocialMedia('facebook')}
                          className="group flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-all relative"
                          title="Facebook"
                        >
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                            f
                          </div>
                          <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Facebook
                          </span>
                        </button>
                        
                        <button
                          onClick={() => shareToSocialMedia('twitter')}
                          className="group flex flex-col items-center p-3 hover:bg-sky-50 rounded-lg transition-all relative"
                          title="Twitter"
                        >
                          <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                            𝕏
                          </div>
                          <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Twitter
                          </span>
                        </button>
                        
                        <button
                          onClick={() => shareToSocialMedia('linkedin')}
                          className="group flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-all relative"
                          title="LinkedIn"
                        >
                          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            in
                          </div>
                          <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            LinkedIn
                          </span>
                        </button>
                        
                        <button
                          onClick={() => shareToSocialMedia('reddit')}
                          className="group flex flex-col items-center p-3 hover:bg-orange-50 rounded-lg transition-all relative"
                          title="Reddit"
                        >
                          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                            R
                          </div>
                          <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Reddit
                          </span>
                        </button>
                        
                        <button
                          onClick={() => shareToSocialMedia('telegram')}
                          className="group flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-all relative"
                          title="Telegram"
                        >
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.107c-.128.128-.236.236-.48.236l.168-2.388L16.8 9.732c.18-.156-.036-.24-.288-.084l-4.944 3.108-2.136-.672c-.456-.144-.468-.456.096-.672l8.352-3.216c.372-.144.696.084.576.588z"/>
                            </svg>
                          </div>
                          <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Telegram
                          </span>
                        </button>
                        
                        <button
                          onClick={() => shareToSocialMedia('whatsapp')}
                          className="group flex flex-col items-center p-3 hover:bg-green-50 rounded-lg transition-all relative"
                          title="WhatsApp"
                        >
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                            </svg>
                          </div>
                          <span className="absolute -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            WhatsApp
                          </span>
                        </button>
                      </div>
                      
                      <div className="border-t border-gray-100 p-3">
                        <button
                          onClick={() => shareToSocialMedia('copy')}
                          className="w-full flex items-center justify-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                          </svg>
                          <span className="text-sm">复制链接</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* <button
                  onClick={handleRegenerate}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <span>🔄</span>
                  <span>重新生成</span>
                </button>

                <button
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>📷</span>
                  <span>上传新照片</span>
                </button> */}
              </div>
            )}
          </div>
        )}
      </div>
      
      {isShareMenuOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsShareMenuOpen(false)}
        />
      )}
    </section>
  )
} 