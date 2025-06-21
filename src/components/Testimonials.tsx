export default function Testimonials() {
  const testimonials = [
    {
      name: "李雅琴",
      username: "@yaqinli",
      avatar: "👩‍💼",
      content: "用这个AI生成的另一半照片太真实了！朋友们都以为我找到了新男友，效果超出期待。",
      rating: 5,
      location: "北京"
    },
    {
      name: "张明轩",
      username: "@mingxuanzhang",
      avatar: "👨‍💻",
      content: "一开始还有点怀疑，但生成的结果让我惊喜。AI技术真的很厉害，生成的另一半很有吸引力。",
      rating: 5,
      location: "上海"
    },
    {
      name: "王诗雨",
      username: "@shiyuwang",
      avatar: "👩‍🎨",
      content: "作为设计师，我对图片质量要求很高。这个AI生成的照片细节丰富，光影自然，非常专业。",
      rating: 5,
      location: "广州"
    },
    {
      name: "陈浩天",
      username: "@haotianchen",
      avatar: "👨‍🎓",
      content: "处理速度很快，而且隐私保护做得很好。生成的另一半形象很符合我的审美，很满意！",
      rating: 5,
      location: "深圳"
    },
    {
      name: "刘思涵",
      username: "@sihanlu",
      avatar: "👩‍🔬",
      content: "AI能够分析我的特征然后生成匹配的异性版本，这个想法很有创意。结果比我想象的要好。",
      rating: 5,
      location: "杭州"
    },
    {
      name: "赵俊杰",
      username: "@junjiehao",
      avatar: "👨‍🏫",
      content: "和朋友一起试用，大家都觉得很有趣。生成速度快，质量也不错，值得推荐给其他人。",
      rating: 5,
      location: "成都"
    }
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            用户好评如潮 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ⭐⭐⭐⭐⭐
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            已有数千名用户体验了AISoulmateVision，看看他们怎么说
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-white/30">
              {/* User Info */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{testimonial.username}</span>
                    <span>•</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">平均评分</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">推荐率</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2,800+</div>
              <div className="text-sm text-gray-600">好评数量</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-sm text-gray-600">隐私投诉</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            加入满意用户的行列
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            立即体验AI生成，发现您的专属另一半
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            免费开始体验 🚀
          </button>
        </div>
      </div>
    </section>
  )
} 