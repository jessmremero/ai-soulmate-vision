import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UploadSection from '@/components/UploadSection'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import EmbeddedFAQ from '@/components/EmbeddedFAQ'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <Header />
      
      {/* 1. Hero + 立即体验 - 核心价值主张 + 直接行动 */}
      <Hero />
      
      {/* 2. 核心功能区 - 让用户立即试用 */}
      <UploadSection />
      
      {/* 3. 简单说明 - 3步工作流程 */}
      <HowItWorks />
      
      {/* 4. 社会证明 - 建立信任 */}
      <SocialProof />
      
      {/* 5. 快速FAQ - 解决关键疑虑 */}
      <EmbeddedFAQ />
      
      <Footer />
    </main>
  )
} 