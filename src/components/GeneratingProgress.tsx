'use client'

import { useState, useEffect } from 'react'

interface GeneratingProgressProps {
  isVisible: boolean
}

const steps = [
  { id: 1, text: '🔍 分析上传的照片...', duration: 1000 },
  { id: 2, text: '🧠 AI 正在理解面部特征...', duration: 1500 },
  { id: 3, text: '💫 生成匹配的另一半...', duration: 2500 },
  { id: 4, text: '✨ 最后的优化处理...', duration: 1000 }
]

export default function GeneratingProgress({ isVisible }: GeneratingProgressProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0)
      setProgress(0)
      return
    }

    let stepIndex = 0
    let totalProgress = 0
    
    const executeStep = () => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex + 1)
        
        // 模拟步骤进度
        const stepDuration = steps[stepIndex].duration
        const progressInterval = setInterval(() => {
          totalProgress += 100 / steps.length / (stepDuration / 50)
          setProgress(Math.min(totalProgress, (stepIndex + 1) * (100 / steps.length)))
        }, 50)

        setTimeout(() => {
          clearInterval(progressInterval)
          stepIndex++
          executeStep()
        }, stepDuration)
      }
    }

    executeStep()
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            AI 正在生成您的另一半
          </h3>
          <p className="text-gray-600 text-sm">
            请稍候，这可能需要几秒钟...
          </p>
        </div>

        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>进度</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* 步骤列表 */}
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`flex items-center space-x-3 transition-all duration-300 ${
                index < currentStep 
                  ? 'text-green-600' 
                  : index === currentStep - 1 
                    ? 'text-purple-600' 
                    : 'text-gray-400'
              }`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                index < currentStep 
                  ? 'bg-green-100 text-green-600' 
                  : index === currentStep - 1 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'bg-gray-100 text-gray-400'
              }`}>
                {index < currentStep ? '✓' : step.id}
              </div>
              <span className="text-sm">{step.text}</span>
              {index === currentStep - 1 && (
                <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            💡 演示模式：正在使用精选图片库进行匹配
          </p>
        </div>
      </div>
    </div>
  )
} 