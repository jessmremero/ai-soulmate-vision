'use client'

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SoulmateProfileModalProps {
  open: boolean;
  onClose: () => void;
  profileText: string;
}

const SoulmateProfileModal: React.FC<SoulmateProfileModalProps> = ({ open, onClose, profileText }) => {
  const { language } = useLanguage ? useLanguage() : { language: 'zh' };

  if (!open) return null;

  // 按钮文案多语言
  const buttonText = language === 'zh' ? '看看他长什么样' : 'See what they look like';

  // 聚焦上传区
  const handleButtonClick = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById('upload-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-pink-300');
        setTimeout(() => el.classList.remove('ring-4', 'ring-pink-300'), 1200);
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-8 animate-fadeIn">
        <div className="mb-4 text-center">
          <div className="text-xl font-bold text-purple-900 mb-2">
            {language === 'zh' ? '灵魂伴侣个人档案' : 'Soulmate Profile'}
          </div>
          <div className="text-base text-gray-700 whitespace-pre-line min-h-[80px]">
            {profileText}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg text-lg hover:scale-105 transition-all"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoulmateProfileModal; 