import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            关于 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AISoulmateVision
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            用AI技术帮您遇见生命中的另一半，探索爱情的无限可能
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">我们的愿景</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AISoulmateVision 致力于运用最先进的人工智能技术，为每个人创造独特的浪漫体验。
                我们相信，科技不仅能改变世界，更能点亮每个人心中对爱情的美好憧憬。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过深度学习和计算机视觉技术，我们能够分析您的面部特征、气质和风格，
                为您生成一个完美匹配的异性版本另一半形象。
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">💝</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI 智能分析</h3>
            <p className="text-gray-600 leading-relaxed">
              采用最新的深度学习算法，精准分析面部特征、年龄、气质和风格特点
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">真实风格</h3>
            <p className="text-gray-600 leading-relaxed">
              专注于生成真实自然的人像照片，避免卡通化，呈现最接近现实的效果
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">隐私保护</h3>
            <p className="text-gray-600 leading-relaxed">
              严格保护用户隐私，上传照片仅用于AI生成，不永久存储个人信息
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">技术实现</h2>
            <p className="text-xl opacity-90">基于先进的AI技术栈</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🧠 核心技术</h3>
              <ul className="space-y-2 opacity-90">
                <li>• Stable Diffusion 图像生成模型</li>
                <li>• 深度学习面部特征分析</li>
                <li>• 计算机视觉技术</li>
                <li>• 神经网络图像处理</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">⚡ 技术栈</h3>
              <ul className="space-y-2 opacity-90">
                <li>• Next.js + TypeScript 前端框架</li>
                <li>• Replicate AI API 集成</li>
                <li>• Tailwind CSS 现代化UI</li>
                <li>• Vercel 云端部署</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">团队理念</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            我们是一群热爱技术、相信爱情的开发者。我们相信科技的力量能够为人们带来更多美好的体验，
            让每个人都能在数字世界中找到属于自己的浪漫故事。
            <br /><br />
            AISoulmateVision 不仅仅是一个技术产品，更是我们对未来美好生活的憧憬。
            我们希望通过AI技术，为用户创造独特、有趣、充满想象力的数字体验。
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
} 