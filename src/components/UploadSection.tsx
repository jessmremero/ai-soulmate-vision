'use client'

import { useState, useEffect } from 'react'
import ResultDisplay from './ResultDisplay'

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

  // 配置常量
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

  // 文件验证函数
  const validateFile = (file: File): UploadError | null => {
    // 检查文件类型
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        type: 'format',
        message: '请上传 JPG、PNG 或 WebP 格式的图片'
      }
    }

    // 检查文件大小
    if (file.size > MAX_FILE_SIZE) {
      return {
        type: 'size',
        message: `文件大小不能超过 ${MAX_FILE_SIZE / 1024 / 1024}MB`
      }
    }

    return null
  }

  // 处理文件选择
  const handleFileSelection = (file: File) => {
    const error = validateFile(file)
    
    if (error) {
      setUploadError(error)
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    // 清除之前的错误
    setUploadError(null)
    setSelectedFile(file)
    
    // 创建预览URL
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  // 清理预览URL
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
    // 清空input值，允许重复选择同一文件
    e.target.value = ''
  }

  const handleGenerate = async () => {
    if (!selectedFile) return
    
    setIsGenerating(true)
    setUploadError(null)
    
    try {
      // 创建 FormData
      const formData = new FormData()
      formData.append('image', selectedFile)
      
      // 调用 API
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || '生成失败')
      }
      
      if (data.success && data.imageUrl) {
        // 生成成功，显示结果
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

  // 组件卸载时清理预览URL
  useEffect(() => {
    return () => {
      cleanupPreview()
    }
  }, [])

  return (
    <section className="w-full py-16 px-6">
      {/* 如果有生成结果，显示结果页面 */}
      {generatedImageUrl && previewUrl ? (
        <ResultDisplay
          originalImage={previewUrl}
          generatedImage={generatedImageUrl}
          onReset={handleReset}
          onRegenerate={handleRegenerate}
          isRegenerating={isGenerating}
        />
      ) : (
        <div className="max-w-2xl mx-auto">
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
            isDragOver
              ? 'border-purple-400 bg-purple-50'
              : 'border-gray-300 bg-white'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {selectedFile && previewUrl ? (
            <div className="space-y-4">
              <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                <img
                  src={previewUrl}
                  alt="预览"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-medium">{selectedFile.name}</p>
                <p className="text-gray-500 text-sm">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>AI 生成中...</span>
                  </>
                ) : (
                  <span>🎨 生成我的另一半</span>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  拖拽照片到这里，或点击上传
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  支持 JPG、PNG、WebP 格式，最大 10MB<br/>
                  建议上传清晰的正面照片，效果更佳
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                >
                  选择照片
                </label>
              </div>
            </div>
          )}
        </div>
        
        {/* 错误提示 */}
        {uploadError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700 text-sm">{uploadError.message}</p>
            </div>
          </div>
        )}
        
        {/* 重置按钮 */}
        {(selectedFile || uploadError) && (
          <div className="mt-4 text-center">
            <button
              onClick={handleReset}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
            >
              🔄 重新选择照片
            </button>
          </div>
        )}
        </div>
      )}
    </section>
  )
} 