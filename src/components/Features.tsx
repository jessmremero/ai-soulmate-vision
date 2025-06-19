export default function Features() {
  const features = [
    {
      title: "隐私第一",
      description: "您的隐私是我们的首要考虑。上传和生成的图片在处理完成后立即删除，绝不保存个人数据。",
      icon: "🔒",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "即时生成",
      description: "采用最先进的AI算法，大多数照片在30秒内完成生成，无需等待，即刻体验AI魔法。",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500", 
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      title: "最新AI模型",
      description: "使用经过数百万张图像训练的最新AI算法，创建个性化的高质量真实人像照片。",
      icon: "🧠",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      title: "完全拥有",
      description: "生成的图片完全属于您，可以自由下载、保存和分享，随时随地展示您的AI另一半。",
      icon: "🏆",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    }
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            为什么选择 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AISoulmateVision
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们致力于为您提供最安全、最快速、最高质量的AI另一半生成体验
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 text-center hover:scale-105 transition-transform`}>
              {/* Feature Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl text-white">{feature.icon}</span>
              </div>
              
              {/* Feature Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features List */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">更多特色功能</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-green-500 mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">智能性别识别</h4>
                <p className="text-gray-600 text-sm">AI自动分析照片性别，生成对应的异性版本</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-green-500 mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">真实照片风格</h4>
                <p className="text-gray-600 text-sm">专注生成真实自然的人像，避免卡通化效果</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-green-500 mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">多格式支持</h4>
                <p className="text-gray-600 text-sm">支持JPG、PNG、WebP等主流图片格式</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 text-green-500 mt-1">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">无限重新生成</h4>
                <p className="text-gray-600 text-sm">不满意结果？可以无限次重新生成不同效果</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 