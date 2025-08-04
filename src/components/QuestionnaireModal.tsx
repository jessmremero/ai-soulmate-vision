'use client'

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface QuestionnaireModalProps {
  onSubmit?: (answers: (string | null)[]) => void;
  onDescriptionGenerated?: (description: string) => void;
}

// 获取问卷问题的函数
const getQuestions = (language: string) => {
  const t = translations[language as keyof typeof translations] || translations.zh;
  const q = t.questionnaire.questions;
  
  return [
    {
      type: 'single' as const,
      question: q.q1.question,
      options: q.q1.options,
      required: true,
    },
    {
      type: 'single' as const,
      question: q.q2.question,
      options: q.q2.options,
      required: true,
    },
    {
      type: 'single' as const,
      question: q.q3.question,
      options: q.q3.options,
      required: true,
    },
    {
      type: 'single' as const,
      question: q.q4.question,
      options: q.q4.options,
      required: true,
    },
    {
      type: 'single' as const,
      question: q.q5.question,
      options: q.q5.options,
      required: true,
    },
    {
      type: 'open' as const,
      question: q.q6.question,
      example: q.q6.example,
      required: false,
    },
  ];
};

const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({ onSubmit, onDescriptionGenerated }) => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [touched, setTouched] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingDots, setLoadingDots] = useState(1);
  const { language } = useLanguage ? useLanguage() : { language: 'zh' };

  // 获取当前语言的翻译
  const t = translations[language as keyof typeof translations] || translations.zh;
  const questions = getQuestions(language);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  useEffect(() => {
    // 自动弹出逻辑可根据需要调整
    setOpen(true);
  }, []);

  // 加载动画效果
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isGenerating) {
      interval = setInterval(() => {
        setLoadingDots(prev => prev === 3 ? 1 : prev + 1);
      }, 500);
    } else {
      setLoadingDots(1);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGenerating]);

  const current = questions[step];
  const isLast = step === questions.length - 1;
  const isAnswered = current.required ? (answers[step] && answers[step]?.toString().trim() !== '') : true;

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);
    setTouched(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newAnswers = [...answers];
    newAnswers[step] = e.target.value;
    setAnswers(newAnswers);
    setTouched(true);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setTouched(false);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
      setTouched(false);
    }
  };

  const handleSubmit = async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    
    try {
      // 调用文字描述生成API
      const response = await fetch('/api/generate-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: answers,
          language: language
        }),
      });

      if (!response.ok) {
        throw new Error('生成失败');
      }

      const data = await response.json();
      
      if (data.success && data.description) {
        // 调用回调函数传递生成的描述
        if (onDescriptionGenerated) {
          onDescriptionGenerated(data.description);
        }
      } else {
        throw new Error(data.error || '生成失败');
      }
    } catch (error) {
      console.error('生成描述失败:', error);
      // 如果API调用失败，仍然调用onSubmit
      if (onSubmit) onSubmit(answers);
    } finally {
      setIsGenerating(false);
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-xl mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-6 md:p-10 animate-fadeIn">
        {/* 问卷标题和描述 */}
        <div className="mb-2 text-center">
          <div className="text-base text-gray-700 font-semibold">
            {t.questionnaire.title}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {t.questionnaire.subtitle}
          </div>
        </div>
        {/* 进度条 */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-purple-700 font-semibold">
            {t.questionnaire.step.replace('{step}', String(step + 1)).replace('{total}', String(questions.length))}
          </span>
          <div className="flex-1 ml-4 h-2 bg-purple-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        {/* 题目卡片 */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-block text-3xl mr-2">💫</span>
            <div className="text-lg font-bold text-purple-900">
              {current.question}
              {current.required && <span className="ml-2 text-xs text-pink-500">*</span>}
            </div>
          </div>
          {current.type === 'single' && (
            <div className="space-y-3">
              {current.options!.map((opt: string, idx: number) => (
                <button
                  key={opt}
                  className={`w-full py-3 rounded-xl border transition-all text-base font-medium shadow-sm
                    ${answers[step] === opt
                      ? 'bg-gradient-to-r from-purple-300 to-pink-200 border-purple-400 text-purple-900 scale-105'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-purple-50'}
                  `}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
          {current.type === 'open' && (
            <div>
              <textarea
                className="w-full min-h-[60px] rounded-xl border border-gray-200 p-3 text-base focus:ring-2 focus:ring-purple-300 focus:outline-none bg-white"
                placeholder="Type a few words..."
                value={answers[step] || ''}
                onChange={handleInput}
                maxLength={100}
              />
              <div className="mt-2 text-xs text-gray-500 bg-purple-50 rounded px-2 py-1">
                {current.example}
              </div>
            </div>
          )}
          {/* 必填校验提示 */}
          {current.required && !isAnswered && touched && (
            <div className="mt-2 text-xs text-pink-500">{t.questionnaire.validation.required}</div>
          )}
        </div>
        {/* 操作按钮 */}
        <div className="flex items-center gap-3">
          <button
            className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-500 font-semibold disabled:opacity-50"
            onClick={handlePrev}
            disabled={step === 0}
          >
            {t.questionnaire.buttons.back}
          </button>
          {!isLast ? (
            <button
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg disabled:opacity-50"
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {t.questionnaire.buttons.next}
            </button>
          ) : (
            <button
              className={`flex-1 py-3 rounded-xl text-white font-bold shadow-lg transition-all ${
                isGenerating 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }`}
              onClick={handleSubmit}
              disabled={isGenerating}
            >
              <div className="flex items-center justify-center">
                {isGenerating && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                <span>
                  {isGenerating 
                    ? `${t.questionnaire.buttons.generating}${'.'.repeat(loadingDots)}`
                    : t.questionnaire.buttons.generate
                  }
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireModal; 