'use client'

import { useState } from 'react'

export default function TestDescriptionPage() {
  const [answers, setAnswers] = useState<string[]>(['Adventurous and loves trying new things', 'Honesty and transparency', 'Exploring the outdoors or traveling', 'Open and direct', 'Optimistic and always sees the bright side', 'Deep connection'])
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const testGenerateDescription = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/generate-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: answers,
          language: 'zh'
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        setDescription(data.description)
      } else {
        setError(data.error || '生成失败')
      }
    } catch (err) {
      setError('请求失败: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">文字描述生成测试</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">问卷答案</h2>
          <div className="space-y-2">
            {answers.map((answer, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm text-gray-500 w-20">问题{index + 1}:</span>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => {
                    const newAnswers = [...answers]
                    newAnswers[index] = e.target.value
                    setAnswers(newAnswers)
                  }}
                  className="flex-1 p-2 border rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <button
            onClick={testGenerateDescription}
            disabled={loading}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? '生成中...' : '生成描述'}
          </button>
          
          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {description && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">生成的描述</h2>
            <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-line">
              {description}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 