export default function SocialProof() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* 简化版标题 */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            已为 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              5000+
            </span> 用户生成理想另一半
          </h3>
          <p className="text-gray-600 text-lg">
            平均30秒生成，98%满意度
          </p>
        </div>
        
        {/* 精简统计数据 - 只保留最重要的 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">5,000+</div>
            <div className="text-sm text-gray-500">用户数量</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-1">8,500+</div>
            <div className="text-sm text-gray-500">生成照片</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
            <div className="text-sm text-gray-500">满意度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">30s</div>
            <div className="text-sm text-gray-500">平均时长</div>
          </div>
        </div>

        {/* 简化的用户头像和评分 */}
        <div className="flex justify-center items-center space-x-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-3 border-white shadow-md"></div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-3 border-white shadow-md"></div>
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-3 border-white shadow-md"></div>
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full border-3 border-white shadow-md"></div>
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full border-3 border-white shadow-md"></div>
          </div>
          <div className="text-left">
            <div className="flex items-center space-x-1">
              <span className="text-lg font-semibold text-gray-800">4.9</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">平均用户评分</div>
          </div>
        </div>
      </div>
    </section>
  )
} 