'use client'

interface DemoNoticeProps {
  message?: string
  onClose?: () => void
}

export default function DemoNotice({ message, onClose }: DemoNoticeProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-lg">🎭</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-blue-800 font-semibold text-sm mb-1">
            演示模式
          </h3>
          <p className="text-blue-700 text-sm leading-relaxed">
            {message || '当前使用演示模式，真实AI服务正在准备中。演示模式会为您匹配精选的另一半照片。'}
          </p>
          <div className="mt-2 text-blue-600 text-xs">
            💡 演示模式特点：
            <ul className="list-disc list-inside mt-1 space-y-0.5">
              <li>智能性别匹配</li>
              <li>基于文件名的简单分析</li>
              <li>精选高质量照片库</li>
              <li>真实的加载体验</li>
            </ul>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
} 