'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UploadSection from '@/components/UploadSection'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import EmbeddedFAQ from '@/components/EmbeddedFAQ'
import QuestionnaireModal from '@/components/QuestionnaireModal'
import SoulmateDescriptionModal from '@/components/SoulmateDescriptionModal'
import { useState } from 'react';

export default function Home() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  // 问卷提交后回调
  const handleQuestionnaireSubmit = (answers: any) => {
    setShowQuestionnaire(false);
  };

  // 文字描述生成后回调
  const handleDescriptionGenerated = (generatedDescription: string) => {
    setDescription(generatedDescription);
    setShowDescription(true);
  };

  // 描述弹窗关闭
  const handleDescriptionClose = () => {
    setShowDescription(false);
  };

  // 继续生成照片
  const handleContinueToPhoto = () => {
    setShowDescription(false);
    // 这里可以跳转到照片生成区域或显示照片生成界面
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {showQuestionnaire && (
        <QuestionnaireModal 
          onSubmit={handleQuestionnaireSubmit} 
          onDescriptionGenerated={handleDescriptionGenerated}
        />
      )}
      <SoulmateDescriptionModal 
        description={description}
        isOpen={showDescription}
        onClose={handleDescriptionClose}
        onContinue={handleContinueToPhoto}
      />
      <Header />
      {/* 1. Hero + 立即体验 - 核心价值主张 + 直接行动 */}
      <Hero />
      {/* 2. 核心功能区 - 让用户立即试用 */}
      <div id="upload-section">
        <UploadSection />
      </div>
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