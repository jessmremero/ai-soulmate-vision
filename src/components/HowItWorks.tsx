export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "上传您的照片",
      description: "上传一张清晰的正面照片，支持JPG、PNG格式，确保面部特征清晰可见",
      icon: "📸",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "02", 
      title: "AI智能分析",
      description: "我们的AI会分析您的面部特征、年龄、气质和风格，理解您的独特魅力",
      icon: "🤖",
      color: "from-pink-500 to-pink-600"
    },
    {
      number: "03",
      title: "生成另一半",
      description: "在30秒内获得高质量的异性版本另一半形象，真实自然的照片效果",
      icon: "💝",
      color: "from-blue-500 to-blue-600"
    }
  ]

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            如何使用 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AISoulmateVision
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            只需三个简单步骤，就能与您的AI另一半相遇
          </p>
        </div>

        {/* Left-Right Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-2 shadow-lg`}>
                    {step.number}
                  </div>
                  <div className="text-center text-2xl">{step.icon}</div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-20 w-0.5 h-12 bg-gradient-to-b from-purple-200 to-pink-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Example Demo */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 shadow-lg border border-white/30">
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
              ✨ 效果预览
            </h3>
            
            {/* Demo Flow */}
            <div className="space-y-3">
              
              {/* Upload Example */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto rounded-xl border-2 border-dashed border-blue-300 overflow-hidden shadow-sm">
                  <img 
                    src="/boy.png" 
                    alt="男生照片示例"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1">
                    男生照片
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-1 text-purple-600">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                  <div className="text-lg">↓</div>
                </div>
              </div>

              {/* Result Example */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto rounded-xl border-2 border-solid border-pink-300 overflow-hidden shadow-md">
                  <img 
                    src="/girl.png" 
                    alt="女生照片示例"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1">
                    匹配的女生
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>


      </div>
    </section>
  )
} 