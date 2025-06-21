'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()
  
  const steps = [
    {
      number: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: "📸",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "02", 
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: "🤖",
      color: "from-pink-500 to-pink-600"
    },
    {
      number: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
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
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
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
              {t('howItWorks.demo.title')}
            </h3>
            
            {/* Demo Flow */}
            <div className="space-y-3">
              
              {/* Upload Example */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto rounded-xl border-2 border-dashed border-blue-300 overflow-hidden shadow-sm">
                  <img 
                    src="/boy.png" 
                    alt={t('howItWorks.demo.boyPhoto')}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1">
                    {t('howItWorks.demo.boyLabel')}
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
                    alt={t('howItWorks.demo.girlPhoto')}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1">
                    {t('howItWorks.demo.girlLabel')}
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