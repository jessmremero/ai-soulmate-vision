'use client'

interface ResultDisplayProps {
  originalImage: string
  generatedImage: string
  onReset: () => void
  onRegenerate: () => void
  isRegenerating?: boolean
}

export default function ResultDisplay({
  originalImage,
  generatedImage,
  onReset,
  onRegenerate,
  isRegenerating = false
}: ResultDisplayProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          ✨ 你的 AI 另一半
        </h2>
        <p className="text-gray-600">
          基于你的照片，AI 为你生成了完美的另一半
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        {/* 原始照片 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">你的照片</h3>
          <div className="relative">
            <img
              src={originalImage}
              alt="原始照片"
              className="w-full max-w-sm mx-auto rounded-lg shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              原图
            </div>
          </div>
        </div>

        {/* 生成的照片 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">AI 生成的另一半</h3>
          <div className="relative">
            <img
              src={generatedImage}
              alt="生成的另一半"
              className="w-full max-w-sm mx-auto rounded-lg shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs">
              AI 生成
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRegenerate}
          disabled={isRegenerating}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isRegenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>重新生成中...</span>
            </>
          ) : (
            <>
              <span>🔄</span>
              <span>重新生成</span>
            </>
          )}
        </button>

        <button
          onClick={onReset}
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>📷</span>
          <span>上传新照片</span>
        </button>
      </div>

      {/* 模拟模式说明 */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
        <p className="text-sm text-yellow-800 mb-2">
          🎭 <strong>模拟模式</strong> - 当前使用示例图片进行演示
        </p>
        <p className="text-xs text-yellow-600">
          配置真实 AI 模型后，将根据您的照片特征生成更匹配的另一半
        </p>
      </div>

      {/* 分享提示 */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-600">
          💡 喜欢这个结果吗？右键保存图片或截图分享给朋友！
        </p>
      </div>
    </div>
  )
} 