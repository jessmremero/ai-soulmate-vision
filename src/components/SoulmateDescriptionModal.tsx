'use client'

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SoulmateDescriptionModalProps {
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onContinue?: () => void;
}

const SoulmateDescriptionModal: React.FC<SoulmateDescriptionModalProps> = ({
  description,
  isOpen,
  onClose,
  onContinue
}) => {
  const { language } = useLanguage ? useLanguage() : { language: 'zh' };
  const [loadingDots, setLoadingDots] = useState(1);

  // 加载动画效果
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && description) {
      interval = setInterval(() => {
        setLoadingDots((prev: number) => prev === 3 ? 1 : prev + 1);
      }, 500);
    } else {
      setLoadingDots(1);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, description]);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
    onClose();
  };

  const handleShare = () => {
    const shareText = language === 'zh' 
      ? `我的理想伴侣：${description}`
      : `My ideal partner: ${description}`;
    
    if (navigator.share) {
      navigator.share({
        title: language === 'zh' ? '我的理想伴侣' : 'My Ideal Partner',
        text: shareText,
      });
    } else {
      // 复制到剪贴板
      navigator.clipboard.writeText(shareText).then(() => {
        alert(language === 'zh' ? '已复制到剪贴板' : 'Copied to clipboard');
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="relative w-full max-w-3xl mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4 md:p-8 animate-fadeIn max-h-[90vh] overflow-hidden flex flex-col">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 标题 */}
        <div className="text-center mb-4">
          <div className="text-3xl mb-2 animate-bounce">💫</div>
          <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-2">
            {language === 'zh' ? '你的理想伴侣' : 'Your Ideal Partner'}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {language === 'zh' 
              ? '基于你的问卷答案，AI为你描绘的完美另一半'
              : 'AI has painted a portrait of your perfect match based on your answers'
            }
          </p>
        </div>

        {/* 描述内容 */}
        <div className="flex-1 bg-white rounded-xl p-4 md:p-6 mb-4 shadow-lg overflow-y-auto min-h-0">
          <div className="prose prose-purple max-w-none">
            <div className="text-gray-800 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {description}
            </div>
          </div>
          {/* 滚动指示器 */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center text-xs text-gray-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              {language === 'zh' ? '滚动查看更多内容' : 'Scroll for more content'}
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button
            onClick={handleShare}
            className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            {language === 'zh' ? '分享' : 'Share'}
          </button>
          
          {onContinue && (
            <button
              onClick={handleContinue}
              className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              {language === 'zh' ? '继续生成照片' : 'Generate Photo'}
            </button>
          )}
          
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
          >
            {language === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>

        {/* 底部提示 */}
        <div className="mt-3 text-center text-xs text-gray-500 bg-purple-50 rounded-lg p-2">
          <div className="inline-flex items-center">
            <span className="mr-1">💡</span>
            {language === 'zh' 
              ? '这个描述是基于你的问卷答案生成的，每个人的理想伴侣都是独特的'
              : 'This description is generated based on your questionnaire answers. Everyone\'s ideal partner is unique'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulmateDescriptionModal; 