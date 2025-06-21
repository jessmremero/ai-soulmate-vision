import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            隐私政策 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们承诺保护您的隐私，透明地说明数据使用方式
          </p>
          <p className="text-sm text-gray-500 mt-4">
            最后更新日期：2025年1月
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
          
          {/* 1. 信息收集 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 信息收集</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">1.1 您提供的信息</h3>
              <p>
                当您使用AISoulmateVision服务时，您可能向我们提供以下信息：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>上传的照片文件（仅用于AI生成处理）</li>
                <li>设备信息和浏览器类型（用于优化服务体验）</li>
                <li>使用统计数据（匿名化处理）</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-700 mt-6">1.2 自动收集的信息</h3>
              <p>
                我们可能自动收集以下技术信息以改善服务质量：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP地址和地理位置信息（仅用于服务优化）</li>
                <li>访问时间、页面浏览记录</li>
                <li>技术错误日志和性能数据</li>
              </ul>
            </div>
          </section>

          {/* 2. 信息使用 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 信息使用</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>我们收集的信息仅用于以下目的：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI生成服务</strong>：分析上传照片以生成另一半形象</li>
                <li><strong>服务优化</strong>：改善算法性能和用户体验</li>
                <li><strong>技术支持</strong>：诊断和解决技术问题</li>
                <li><strong>安全防护</strong>：防止滥用和恶意行为</li>
                <li><strong>法律合规</strong>：满足适用的法律法规要求</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-blue-800">
                  <strong>重要承诺</strong>：我们绝不会将您的个人照片用于商业推广、出售给第三方或用于任何未经授权的目的。
                </p>
              </div>
            </div>
          </section>

          {/* 3. 数据存储和安全 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 数据存储和安全</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">3.1 存储期限</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>上传照片</strong>：仅在AI处理期间临时存储，处理完成后立即删除</li>
                <li><strong>生成结果</strong>：在您的浏览器会话中保持可用，24小时后自动删除</li>
                <li><strong>技术日志</strong>：匿名化后保存30天，仅用于技术优化</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-700 mt-6">3.2 安全措施</h3>
              <p>我们采用行业标准的安全措施保护您的数据：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HTTPS加密传输，确保数据传输安全</li>
                <li>服务器端数据加密存储</li>
                <li>严格的访问控制和权限管理</li>
                <li>定期的安全审计和漏洞检测</li>
                <li>备份数据的加密保护</li>
              </ul>
            </div>
          </section>

          {/* 4. 第三方服务 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 第三方服务</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>我们使用以下可信的第三方服务来提供AI功能：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Replicate AI</strong>：提供AI图像生成服务，遵循其隐私政策</li>
                <li><strong>Vercel</strong>：网站托管和CDN服务，确保快速访问</li>
                <li><strong>分析工具</strong>：匿名化的使用统计，不包含个人身份信息</li>
              </ul>
              <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <strong>注意</strong>：这些第三方服务都有自己的隐私政策，我们建议您也了解这些政策。
              </p>
            </div>
          </section>

          {/* 5. 用户权利 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 您的权利</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>作为用户，您拥有以下权利：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>访问权</strong>：了解我们处理的关于您的数据</li>
                <li><strong>删除权</strong>：要求删除您的个人数据</li>
                <li><strong>拒绝权</strong>：拒绝某些数据处理活动</li>
                <li><strong>携带权</strong>：要求以常见格式获取您的数据</li>
                <li><strong>更正权</strong>：要求更正不准确的个人数据</li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-green-800">
                  <strong>联系我们</strong>：如需行使这些权利，请通过我们的联系方式与我们取得联系。
                </p>
              </div>
            </div>
          </section>

          {/* 6. Cookie使用 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookie和跟踪技术</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>我们使用有限的Cookie来改善用户体验：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>必要Cookie</strong>：确保网站基本功能正常运行</li>
                <li><strong>性能Cookie</strong>：匿名收集网站使用统计数据</li>
                <li><strong>偏好Cookie</strong>：记住您的设置和偏好</li>
              </ul>
              <p>您可以通过浏览器设置管理Cookie偏好，但这可能影响某些功能的使用。</p>
            </div>
          </section>

          {/* 7. 政策更新 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 政策更新</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                我们可能会定期更新本隐私政策以反映法律变化、技术发展或业务需求。
                重要更新将通过以下方式通知您：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>在网站上发布醒目通知</li>
                <li>更新"最后修改日期"</li>
                <li>通过其他合适的通信渠道</li>
              </ul>
              <p>
                建议您定期查看本政策，继续使用服务即表示您接受更新后的政策。
              </p>
            </div>
          </section>

          {/* 8. 联系信息 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 联系我们</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                如果您对本隐私政策有任何疑问、意见或要求，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p><strong>项目名称</strong>：AISoulmateVision</p>
                <p><strong>电子邮件</strong>：wanghuitian475@gmail.com</p>
                <p><strong>响应时间</strong>：我们将在7个工作日内回复您的询问</p>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <p className="text-lg font-medium">
              🔒 您的隐私对我们至关重要
            </p>
            <p className="opacity-90 mt-2">
              我们承诺以透明、负责任的方式处理您的数据，并持续改进我们的隐私保护措施。
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 