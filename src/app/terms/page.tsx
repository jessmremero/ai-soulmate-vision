import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            服务条款 <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            使用AISoulmateVision服务的规则和指导原则
          </p>
          <p className="text-sm text-gray-500 mt-4">
            最后更新日期：2025年1月
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
          
          {/* 1. 接受条款 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 接受条款</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                欢迎使用AISoulmateVision！通过访问和使用我们的服务，您表示同意遵守本服务条款。
                如果您不同意这些条款，请勿使用我们的服务。
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>重要提示</strong>：本服务条款构成您与AISoulmateVision之间具有法律约束力的协议。
                </p>
              </div>
            </div>
          </section>

          {/* 2. 服务描述 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 服务描述</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>AISoulmateVision 提供基于人工智能的娱乐服务，包括但不限于：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>基于上传照片的AI另一半形象生成</li>
                <li>图像处理和优化服务</li>
                <li>相关的技术支持和客户服务</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-800">
                  <strong>服务性质</strong>：本服务纯属娱乐性质，生成的内容不代表真实存在的人物，仅供娱乐和创意用途。
                </p>
              </div>
            </div>
          </section>

          {/* 3. 用户责任 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 用户责任和行为准则</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">3.1 准许的使用</h3>
              <p>您可以：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>上传您本人的照片进行AI生成</li>
                <li>下载和保存生成的结果供个人使用</li>
                <li>在社交媒体上分享结果（需遵循平台规则）</li>
                <li>为娱乐目的使用生成的内容</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">3.2 禁止的行为</h3>
              <p>您不得：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>上传他人照片</strong>：未经许可上传非本人的照片</li>
                <li><strong>恶意内容</strong>：上传包含暴力、色情、仇恨或非法内容的图像</li>
                <li><strong>商业滥用</strong>：将生成内容用于商业推广或盈利目的</li>
                <li><strong>冒充他人</strong>：使用生成内容冒充真实存在的人物</li>
                <li><strong>技术攻击</strong>：尝试破解、逆向工程或攻击我们的系统</li>
                <li><strong>大规模使用</strong>：通过自动化工具进行大量请求</li>
              </ul>
            </div>
          </section>

          {/* 4. 知识产权 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 知识产权</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">4.1 我们的权利</h3>
              <p>
                AISoulmateVision拥有服务中所有技术、软件、算法、设计和商标的知识产权。
                未经明确授权，您不得复制、修改或分发这些内容。
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">4.2 您的权利</h3>
              <p>
                您上传的原始照片仍归您所有。对于AI生成的内容，您获得个人使用的许可，
                但我们保留技术处理过程中产生的算法和技术成果的权利。
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">4.3 生成内容使用</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>您可以自由使用生成的内容进行个人分享和娱乐</li>
                <li>商业使用需要额外授权</li>
                <li>我们可能匿名使用技术数据来改进服务质量</li>
              </ul>
            </div>
          </section>

          {/* 5. 免责声明 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 免责声明</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800">
                  <strong>重要声明</strong>：AISoulmateVision是娱乐性AI服务，生成内容不代表真实人物。
                </p>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-700">5.1 服务现状</h3>
              <p>我们按"现状"提供服务，不对以下方面做出保证：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>生成结果的准确性或满意度</li>
                <li>服务的不间断性或无错误性</li>
                <li>技术缺陷的及时修复</li>
                <li>第三方服务的可用性</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">5.2 责任限制</h3>
              <p>在法律允许的最大范围内，我们不承担以下责任：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>因服务使用产生的任何直接或间接损失</li>
                <li>数据丢失或隐私泄露（非我方过失）</li>
                <li>第三方服务中断造成的影响</li>
                <li>用户违规使用造成的后果</li>
              </ul>
            </div>
          </section>

          {/* 6. 隐私和数据 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 隐私和数据处理</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                我们严格按照《隐私政策》处理您的个人数据。主要原则包括：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>上传照片仅用于AI处理，处理完成后立即删除</li>
                <li>生成结果24小时后自动清理</li>
                <li>不与第三方分享您的个人照片</li>
                <li>使用行业标准的安全措施保护数据</li>
              </ul>
              <p>
                更多详细信息请参阅我们的《隐私政策》。
              </p>
            </div>
          </section>

          {/* 7. 服务变更和终止 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 服务变更和终止</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">7.1 服务修改</h3>
              <p>我们保留随时修改、暂停或终止服务的权利，包括但不限于：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>功能更新和改进</li>
                <li>技术维护和升级</li>
                <li>商业模式调整</li>
                <li>法律法规要求</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">7.2 账户终止</h3>
              <p>在以下情况下，我们可能终止您的服务使用权：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>违反本服务条款</li>
                <li>从事非法或不当行为</li>
                <li>滥用服务资源</li>
                <li>长期不活跃（适用于注册用户）</li>
              </ul>
            </div>
          </section>

          {/* 8. 法律适用 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 法律适用和争议解决</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">8.1 适用法律</h3>
              <p>
                本服务条款受中华人民共和国法律管辖，不考虑法律冲突原则。
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">8.2 争议解决</h3>
              <p>如发生争议，我们建议通过以下方式解决：</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>首先通过友好协商解决</li>
                <li>如协商不成，可通过仲裁解决</li>
                <li>仲裁地点为服务提供方所在地</li>
              </ol>
            </div>
          </section>

          {/* 9. 其他条款 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 其他条款</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <h3 className="text-lg font-semibold text-gray-700">9.1 条款更新</h3>
              <p>
                我们可能定期更新这些条款。重大变更将提前通知用户，
                继续使用服务即表示接受新条款。
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">9.2 可分割性</h3>
              <p>
                如果本条款的任何部分被认定为无效或不可执行，
                其余部分仍然有效。
              </p>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">9.3 联系方式</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p><strong>项目名称</strong>：AISoulmateVision</p>
                <p><strong>法务联系</strong>：legal@aisoulmatevision.com</p>
                <p><strong>客服支持</strong>：wanghuitian475@gmail.com</p>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <p className="text-lg font-medium">
              📋 感谢您信任AISoulmateVision
            </p>
            <p className="opacity-90 mt-2">
              我们致力于为您提供安全、有趣、负责任的AI体验。
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 