// 自建多语言翻译数据
// 以中文页面为基准，保持原有样式和布局

export type Language = 'zh' | 'en' | 'ja' | 'ko'

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' }
]

export const translations = {
  zh: {
    hero: {
      title: "30秒生成你的",
      titleHighlight: "AI另一半", 
      subtitle: "上传照片，AI分析你的特征，立即生成匹配的异性版本另一半形象",
      features: {
        free: "完全免费",
        fast: "30秒生成", 
        privacy: "隐私保护",
        noSignup: "无需注册"
      }
    },
    
    header: {
      home: "首页"
    },
    
    upload: {
      title: "上传你的照片",
      subtitle: "AI将分析你的面部特征，生成你的理想另一半",
      dragDrop: "拖拽照片到此处",
      orClick: "或点击选择",
      generating: "AI正在生成你的另一半...",
      download: "下载结果",
      share: "分享",
      tryAnother: "尝试其他照片",
      regenerate: "重新生成",
      originalPhoto: "原始照片",
      generatedSoulmate: "生成的另一半",
      errors: {
        format: "请上传 JPG、PNG 或 WebP 格式的图片",
        size: "文件大小不能超过",
        generateFailed: "生成失败",
        generateRetry: "生成失败，请稍后重试",
        canvasError: "无法创建canvas",
        downloadFailed: "下载失败",
        downloadRetry: "下载失败，请稍后重试"
      },
      actions: {
        yourPhoto: "你的照片",
        aiGenerated: "AI生成的另一半",
        linkCopied: "链接已复制到剪贴板！",
        shareText: "我用AI生成了完美的另一半！快来试试吧 ✨"
      },
      preview: {
        previewImage: "预览图片",
        generatedImage: "AI生成的另一半"
      },
      ui: {
        uploadTitle: "📸 上传你的照片",
        uploadSubtitle: "支持 JPG、PNG、WebP 格式，最大 10MB",
        dragHere: "拖拽照片到这里，或者点击选择",
        suggestion: "建议使用清晰的正面照片，效果更佳",
        changePhoto: "点击重新选择照片",
        dragNew: "或拖拽新照片到这里",
        resultTitle: "✨ AI生成的另一半",
        resultSubtitle: "AI会分析你的特征生成匹配的异性版本",
        waitingUpload: "等待上传照片",
        uploadToGenerate: "上传照片后点击生成按钮",
        generating: "AI正在生成中...",
        generateButton: "🎨 生成我的另一半",
        downloading: "下载中...",
        downloadButton: "📥 下载",
        imageLoading: "图片加载中...",
        targetGender: "生成性别",
        generateFemale: "女生",
        generateMale: "男生",
        styleSelection: "选择风格",
        styles: {
          photorealistic: "写实风格",
          anime: "动漫风格",
          cartoon: "卡通风格",
          oilPainting: "油画风格",
          cyberpunk: "赛博朋克",
          retro: "复古风格"
        }
      }
    },

    questionnaire: {
      title: "生成你的灵魂伴侣档案",
      subtitle: "回答6个问题，AI将为你描绘TA的独特形象",
      step: "第 {step} 步，共 {total} 步",
      questions: {
        q1: {
          question: "你理想伴侣的生活态度是什么？",
          options: [
            "冒险型，喜欢尝试新事物",
            "平静型，享受安稳平静的生活",
            "野心型，总是追求目标",
            "关爱型，重视关系和家庭"
          ]
        },
        q2: {
          question: "在伴侣身上，你最看重的核心价值观是什么？",
          options: [
            "诚实和透明",
            "善良和同理心",
            "独立和自主",
            "幽默和积极"
          ]
        },
        q3: {
          question: "你理想伴侣的休闲方式是什么？",
          options: [
            "户外探索或旅行",
            "阅读、学习或创意爱好",
            "与朋友和家人社交",
            "志愿服务或帮助他人"
          ]
        },
        q4: {
          question: "你理想伴侣的沟通风格是什么？",
          options: [
            "开放直接",
            "深思熟虑",
            "轻松愉快",
            "支持鼓励"
          ]
        },
        q5: {
          question: "以下哪种最能描述你理想伴侣的人生观？",
          options: [
            "乐观积极，总是看到光明面",
            "现实务实",
            "热情驱动",
            "随和轻松"
          ]
        },
        q6: {
          question: "用几个词描述，你如何定义伴侣的'灵魂感'？",
          example: "例如：深度连接、神奇火花、诚实、激励人心"
        }
      },
      buttons: {
        back: "返回",
        next: "下一步",
        generate: "生成",
        generating: "生成中..."
      },
      validation: {
        required: "此题为必填项"
      }
    },
    
    howItWorks: {
      title: "工作原理",
      subtitle: "只需三个简单步骤，就能与您的AI另一半相遇",
      step1: {
        title: "上传照片",
        description: "上传一张清晰的个人照片"
      },
      step2: {
        title: "AI分析", 
        description: "AI分析你的面部特征"
      },
      step3: {
        title: "生成匹配",
        description: "30秒内获得完美另一半"
      },
      demo: {
        title: "✨ 效果预览",
        boyPhoto: "男生照片示例",
        boyLabel: "男生照片",
        girlPhoto: "女生照片示例",
        girlLabel: "匹配的女生"
      }
    },
    
    faq: {
      title: "常见问题",
      contact: "还有其他问题？请通过",
      contactUs: "联系我们",
      q1: {
        question: "服务真的免费吗？",
        answer: "是的，完全免费！无隐藏费用，无需注册。"
      },
      q2: {
        question: "生成需要多长时间？", 
        answer: "通常20-30秒，具体取决于服务器负载。"
      },
      q3: {
        question: "我的照片数据安全吗？",
        answer: "我们不存储任何照片。所有处理都是实时进行的，数据会立即删除。"
      },
      q4: {
        question: "什么样的照片效果最好？",
        answer: "清晰的正面照片，光线良好。避免戴墨镜或口罩。"
      }
    },
    
    socialProof: {
      title: "已为",
      users: "用户生成理想另一半",
      subtitle: "平均30秒生成，98%满意度",
      stats: {
        users: "用户数量",
        photos: "生成照片", 
        satisfaction: "满意度",
        avgTime: "平均时长"
      },
      rating: "平均用户评分"
    },
    
    footer: {
      description: "完全免费，隐私保护，30秒生成",
      about: "关于我们",
      privacy: "隐私政策", 
      terms: "服务条款",
      faq: "常见问题",
      contact: "联系我们",
      copyright: "© 2024 AI另一半视觉. 保留所有权利。",
      disclaimer: "仅供娱乐使用，请勿上传他人照片 • 我们重视您的隐私，照片将在24小时后自动删除 • 生成图像仅供个人娱乐，请勿商业使用"
    },
    
    privacy: {
      title: "隐私政策",
      dataCollection: {
        title: "数据收集",
        content: "我们仅收集您上传的用于AI生成的照片。我们不存储个人信息或要求账户注册。"
      },
      dataUsage: {
        title: "数据使用",
        content: "上传的照片仅用于AI处理以生成您的理想伴侣图片。我们不将您的照片用于任何其他目的。"
      },
      dataStorage: {
        title: "数据存储",
        content: "照片会在24小时后自动删除。我们不会永久存储任何个人照片或生成的图片。"
      },
      contact: {
        title: "联系我们",
        content: "如果您对我们的隐私政策有任何疑问，请通过 wanghuitian475@gmail.com 联系我们"
      }
    },
    
    terms: {
      title: "服务条款",
      serviceUsage: {
        title: "服务使用",
        content: "AISoulmateVision仅用于娱乐目的。用户必须年满18岁才能使用此服务。"
      },
      contentGuidelines: {
        title: "内容指南",
        content: "用户只能上传自己的照片。未经同意上传他人照片是被禁止的。"
      },
      prohibitedContent: {
        title: "禁止内容",
        content: "严格禁止包含裸体、暴力、非法内容或受版权保护材料的照片。"
      },
      limitationOfLiability: {
        title: "责任限制",
        content: "AISoulmateVision按\"现状\"提供，不提供任何担保。我们对使用此服务造成的任何损害不承担责任。"
      },
      contact: {
        title: "联系我们",
        content: "如有关于这些条款的问题，请通过 wanghuitian475@gmail.com 联系我们"
      }
    },
    
    common: {
      loading: "加载中...",
      error: "发生错误",
      retry: "重试", 
      close: "关闭",
      yes: "是",
      no: "否",
      language: "语言"
    },
    
    about: {
      title: "关于",
      companyName: "AISoulmateVision",
      subtitle: "使用AI技术，帮助你遇见你的另一半，探索爱情的无限可能",
      vision: {
        title: "我们的愿景",
        content1: "AISoulmateVision致力于运用最先进的人工智能技术，为每一个人创造独特的浪漫体验。我们相信，科技不仅可以改变世界，更能点亮每个人对爱情的美好憧憬。",
        content2: "通过深度学习和计算机视觉技术，我们能够分析你的面部特征、气质和风格，为你生成完美匹配的异性另一半形象。"
      }
    }
  },
  
  en: {
    hero: {
      title: "Generate Your",
      titleHighlight: "AI Soulmate",
      subtitle: "Upload a photo, AI analyzes your features, and instantly generates your perfect opposite-gender match",
      features: {
        free: "Completely Free",
        fast: "30 Second Generation",
        privacy: "Privacy Protected", 
        noSignup: "No Registration"
      }
    },
    
    header: {
      home: "Home"
    },
    
    upload: {
      title: "Upload Your Photo",
      subtitle: "AI will analyze your facial features and generate your ideal soulmate",
      dragDrop: "Drag and drop your photo here",
      orClick: "or click to select",
      generating: "AI is generating your soulmate...",
      download: "Download Result",
      share: "Share", 
      tryAnother: "Try Another Photo",
      regenerate: "Regenerate",
      originalPhoto: "Original Photo",
      generatedSoulmate: "Generated Soulmate",
      errors: {
        format: "Please upload JPG, PNG or WebP format images",
        size: "File size cannot exceed",
        generateFailed: "Generation failed",
        generateRetry: "Generation failed, please try again later",
        canvasError: "Unable to create canvas",
        downloadFailed: "Download failed",
        downloadRetry: "Download failed, please try again later"
      },
      actions: {
        yourPhoto: "Your Photo",
        aiGenerated: "AI Generated Soulmate",
        linkCopied: "Link copied to clipboard!",
        shareText: "I generated my perfect AI soulmate! Come and try it ✨"
      },
      preview: {
        previewImage: "Preview Image",
        generatedImage: "AI Generated Soulmate"
      },
      ui: {
        uploadTitle: "📸 Upload Your Photo",
        uploadSubtitle: "Supports JPG, PNG, WebP formats, max 10MB",
        dragHere: "Drag and drop photo here, or click to select",
        suggestion: "Use clear front-facing photos for best results",
        changePhoto: "Click to change photo",
        dragNew: "Or drag new photo here",
        resultTitle: "✨ AI Generated Soulmate",
        resultSubtitle: "AI will analyze your features to generate matching opposite-gender version",
        waitingUpload: "Waiting for photo upload",
        uploadToGenerate: "Upload photo then click generate button",
        generating: "AI is generating...",
        generateButton: "🎨 Generate My Soulmate",
        downloading: "Downloading...",
        downloadButton: "📥 Download",
        imageLoading: "Loading image...",
        targetGender: "Target Gender",
        generateFemale: "Female",
        generateMale: "Male",
        styleSelection: "Select Style",
        styles: {
          photorealistic: "Photorealistic",
          anime: "Anime Style",
          cartoon: "Cartoon Style",
          oilPainting: "Oil Painting",
          cyberpunk: "Cyberpunk",
          retro: "Retro Style"
        }
      }
    },

    questionnaire: {
      title: "Generate Your Soulmate Profile",
      subtitle: "Answer 6 questions and let AI paint a unique portrait of your ideal match",
      step: "Step {step} of {total}",
      questions: {
        q1: {
          question: "What is your ideal partner's approach to life?",
          options: [
            "Adventurous and loves trying new things",
            "Calm and enjoys a peaceful, steady life",
            "Ambitious and always striving for goals",
            "Caring and prioritizes relationships and family"
          ]
        },
        q2: {
          question: "Which core value is most important to you in a partner?",
          options: [
            "Honesty and transparency",
            "Kindness and empathy",
            "Independence and self-reliance",
            "Humor and positivity"
          ]
        },
        q3: {
          question: "How does your ideal partner spend their free time?",
          options: [
            "Exploring the outdoors or traveling",
            "Reading, learning, or creative hobbies",
            "Socializing with friends and family",
            "Volunteering or helping others"
          ]
        },
        q4: {
          question: "What is your ideal partner's communication style?",
          options: [
            "Open and direct",
            "Thoughtful and reflective",
            "Playful and light-hearted",
            "Supportive and encouraging"
          ]
        },
        q5: {
          question: "Which of these best describes your ideal partner's outlook on life?",
          options: [
            "Optimistic and always sees the bright side",
            "Realistic and practical",
            "Passionate and driven",
            "Laid-back and easygoing"
          ]
        },
        q6: {
          question: "Using a few words, how would you define 'soulfulness' in a partner?",
          example: "e.g. Deep connection, magical spark, honest, inspiring"
        }
      },
      buttons: {
        back: "Back",
        next: "Next",
        generate: "Generate",
        generating: "Generating..."
      },
      validation: {
        required: "This question is required"
      }
    },
    
    howItWorks: {
      title: "How It Works",
      subtitle: "Just three simple steps to meet your AI soulmate",
      step1: {
        title: "Upload Photo",
        description: "Upload a clear photo of yourself"
      },
      step2: {
        title: "AI Analysis",
        description: "AI analyzes your facial features"
      },
      step3: {
        title: "Generate Match", 
        description: "Get your perfect soulmate in 30 seconds"
      },
      demo: {
        title: "✨ Preview Demo",
        boyPhoto: "Boy photo example",
        boyLabel: "Boy Photo",
        girlPhoto: "Girl photo example",
        girlLabel: "Matched Girl"
      }
    },
    
    faq: {
      title: "FAQ",
      contact: "Have other questions? Contact us at",
      contactUs: "Contact Us",
      q1: {
        question: "Is this service really free?",
        answer: "Yes, completely free! No hidden charges or registration required."
      },
      q2: {
        question: "How long does generation take?",
        answer: "Usually 20-30 seconds, depending on server load."
      },
      q3: {
        question: "Is my photo data safe?",
        answer: "We don't store any photos. All processing is done in real-time and data is immediately deleted."
      },
      q4: {
        question: "What photo quality works best?",
        answer: "Clear, front-facing photos with good lighting work best. Avoid sunglasses or masks."
      }
    },
    
    socialProof: {
      title: "Generated ideal matches for",
      users: "users", 
      subtitle: "Average 30 seconds generation, 98% satisfaction",
      stats: {
        users: "Users",
        photos: "Generated Photos",
        satisfaction: "Satisfaction",
        avgTime: "Average Time"
      },
      rating: "Average user rating"
    },
    
    footer: {
      description: "Completely free, privacy protected, 30-second generation",
      about: "About",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      faq: "FAQ",
      contact: "Contact", 
      copyright: "© 2024 AI Soulmate Vision. All rights reserved.",
      disclaimer: "For entertainment only, do not upload others' photos • We respect your privacy, photos will be automatically deleted after 24 hours • Generated images are for personal entertainment only, not for commercial use"
    },
    
    privacy: {
      title: "Privacy Policy",
      dataCollection: {
        title: "Data Collection",
        content: "We only collect the photos you upload for AI generation purposes. We do not store personal information or require account registration."
      },
      dataUsage: {
        title: "Data Usage",
        content: "Uploaded photos are used solely for AI processing to generate your soulmate image. We do not use your photos for any other purposes."
      },
      dataStorage: {
        title: "Data Storage",
        content: "Photos are automatically deleted after 24 hours. We do not permanently store any personal photos or generated images."
      },
      contact: {
        title: "Contact",
        content: "If you have any questions about our privacy policy, please contact us at wanghuitian475@gmail.com"
      }
    },
    
    terms: {
      title: "Terms of Service",
      serviceUsage: {
        title: "Service Usage",
        content: "AISoulmateVision is provided for entertainment purposes only. Users must be 18 years or older to use this service."
      },
      contentGuidelines: {
        title: "Content Guidelines",
        content: "Users must only upload photos of themselves. Uploading photos of other people without consent is prohibited."
      },
      prohibitedContent: {
        title: "Prohibited Content",
        content: "Photos containing nudity, violence, illegal content, or copyrighted material are strictly prohibited."
      },
      limitationOfLiability: {
        title: "Limitation of Liability",
        content: "AISoulmateVision is provided \"as is\" without warranties. We are not liable for any damages arising from the use of this service."
      },
      contact: {
        title: "Contact",
        content: "For questions about these terms, contact us at wanghuitian475@gmail.com"
      }
    },
    
    common: {
      loading: "Loading...",
      error: "An error occurred",
      retry: "Retry",
      close: "Close", 
      yes: "Yes",
      no: "No",
      language: "Language"
    },
    
    about: {
      title: "About",
      companyName: "AISoulmateVision",
      subtitle: "Using AI technology to help you meet your soulmate and explore infinite possibilities of love",
      vision: {
        title: "Our Vision",
        content1: "AISoulmateVision is committed to using the most advanced artificial intelligence technology to create unique romantic experiences for everyone. We believe that technology can not only change the world, but also light up everyone's beautiful vision of love.",
        content2: "Through deep learning and computer vision technology, we can analyze your facial features, temperament and style to generate a perfectly matched opposite-gender soulmate image for you."
      }
    }
  },
  
  // 日语翻译 - 基于中文布局适配
  ja: {
    hero: {
      title: "あなたの",
      titleHighlight: "AI運命の人", 
      subtitle: "写真をアップロードし、AIがあなたの特徴を分析して、理想的な異性のパートナーを生成します",
      features: {
        free: "完全無料",
        fast: "30秒生成",
        privacy: "プライバシー保護",
        noSignup: "登録不要"
      }
    },
    
    header: {
      home: "ホーム"
    },
    
    upload: {
      title: "写真をアップロード",
      subtitle: "AIがあなたの顔の特徴を分析し、理想的な運命の人を生成します",
      dragDrop: "ここに写真をドラッグ＆ドロップ",
      orClick: "またはクリックして選択",
      generating: "AIがあなたの運命の人を生成中...",
      download: "結果をダウンロード",
      share: "シェア",
      tryAnother: "他の写真を試す",
      regenerate: "再生成",
      originalPhoto: "元の写真",
      generatedSoulmate: "生成された運命の人",
      errors: {
        format: "JPG、PNG、WebP形式の画像をアップロードしてください",
        size: "ファイルサイズは",
        generateFailed: "生成に失敗しました",
        generateRetry: "生成に失敗しました。後でもう一度お試しください",
        canvasError: "キャンバスを作成できません",
        downloadFailed: "ダウンロードに失敗しました",
        downloadRetry: "ダウンロードに失敗しました。後でもう一度お試しください"
      },
      actions: {
        yourPhoto: "あなたの写真",
        aiGenerated: "AI生成の運命の人",
        linkCopied: "リンクがクリップボードにコピーされました！",
        shareText: "AI運命の人を生成しました！試してみてください ✨"
      },
      preview: {
        previewImage: "プレビュー画像",
        generatedImage: "AI生成の運命の人"
      },
      ui: {
        uploadTitle: "📸 写真をアップロード",
        uploadSubtitle: "JPG、PNG、WebP形式をサポート、最大10MB",
        dragHere: "写真をここにドラッグ＆ドロップ、またはクリックして選択",
        suggestion: "最良の結果のため、鮮明な正面写真をご使用ください",
        changePhoto: "クリックして写真を変更",
        dragNew: "または新しい写真をここにドラッグ",
        resultTitle: "✨ AI生成の運命の人",
        resultSubtitle: "AIがあなたの特徴を分析し、マッチする異性版を生成します",
        waitingUpload: "写真のアップロードを待っています",
        uploadToGenerate: "写真をアップロードしてから生成ボタンをクリック",
        generating: "AI生成中...",
        generateButton: "🎨 私の運命の人を生成",
        downloading: "ダウンロード中...",
        downloadButton: "📥 ダウンロード",
        imageLoading: "画像読み込み中...",
        targetGender: "生成する性別",
        generateFemale: "女性",
        generateMale: "男性",
        styleSelection: "スタイルを選択",
        styles: {
          photorealistic: "フォトリアル",
          anime: "アニメスタイル",
          cartoon: "カートゥーンスタイル",
          oilPainting: "油絵",
          cyberpunk: "サイバーパンク",
          retro: "レトロスタイル"
        }
      }
    },

    questionnaire: {
      title: "あなたの運命の人のプロフィールを生成",
      subtitle: "6つの質問に答えて、AIがあなたの理想的なマッチのユニークな肖像を描きます",
      step: "ステップ {step} / {total}",
      questions: {
        q1: {
          question: "あなたの理想的なパートナーの人生へのアプローチは何ですか？",
          options: [
            "冒険的で新しいことを試すのが好き",
            "穏やかで平和で安定した生活を楽しむ",
            "野心的で常に目標を追求する",
            "思いやりがあり、関係と家族を優先する"
          ]
        },
        q2: {
          question: "パートナーにおいて、あなたが最も重視する核心的価値は何ですか？",
          options: [
            "誠実さと透明性",
            "優しさと共感",
            "独立と自立",
            "ユーモアとポジティブさ"
          ]
        },
        q3: {
          question: "あなたの理想的なパートナーは自由時間をどのように過ごしますか？",
          options: [
            "アウトドア探索や旅行",
            "読書、学習、または創造的な趣味",
            "友人や家族との社交",
            "ボランティアや他人を助けること"
          ]
        },
        q4: {
          question: "あなたの理想的なパートナーのコミュニケーションスタイルは何ですか？",
          options: [
            "オープンで直接的",
            "思慮深く反省的",
            "遊び心があり軽快",
            "支持的で励まし"
          ]
        },
        q5: {
          question: "以下の中で、あなたの理想的なパートナーの人生観を最もよく表すものは何ですか？",
          options: [
            "楽観的で常に明るい面を見る",
            "現実的で実用的",
            "情熱的で駆動的",
            "リラックスして気楽"
          ]
        },
        q6: {
          question: "いくつかの言葉で、パートナーの「魂の深さ」をどのように定義しますか？",
          example: "例：深い絆、魔法のような火花、誠実、インスピレーション"
        }
      },
      buttons: {
        back: "戻る",
        next: "次へ",
        generate: "生成",
        generating: "生成中..."
      },
      validation: {
        required: "この質問は必須です"
      }
    },
    
    howItWorks: {
      title: "仕組み",
      subtitle: "たった3つの簡単なステップで、あなたのAI運命の人に出会えます",
      step1: {
        title: "写真アップロード",
        description: "鮮明な自分の写真をアップロード"
      },
      step2: {
        title: "AI分析",
        description: "AIがあなたの顔の特徴を分析"
      },
      step3: {
        title: "マッチ生成", 
        description: "30秒で完璧な運命の人を取得"
      },
      demo: {
        title: "✨ 効果プレビュー",
        boyPhoto: "男性写真例",
        boyLabel: "男性写真",
        girlPhoto: "女性写真例",
        girlLabel: "マッチした女性"
      }
    },
    
    faq: {
      title: "よくある質問",
      q1: {
        question: "本当に無料のサービスですか？",
        answer: "はい、完全に無料です！隠れた料金や登録は不要です。"
      },
      q2: {
        question: "生成にはどのくらい時間がかかりますか？",
        answer: "通常20-30秒、サーバーの負荷によります。"
      },
      q3: {
        question: "私の写真データは安全ですか？",
        answer: "写真は保存しません。すべての処理はリアルタイムで行われ、データは即座に削除されます。"
      },
      q4: {
        question: "どんな写真品質が最適ですか？",
        answer: "鮮明な正面写真で、良い照明のものが最適です。サングラスやマスクは避けてください。"
      }
    },
    
    socialProof: {
      title: "理想のマッチを生成",
      users: "ユーザー",
      subtitle: "平均30秒生成、98%満足度",
      stats: {
        users: "ユーザー数",
        photos: "生成写真",
        satisfaction: "満足度", 
        avgTime: "平均時間"
      },
      rating: "平均ユーザー評価"
    },
    
    footer: {
      description: "完全無料、プライバシー保護、30秒生成",
      about: "私たちについて",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      faq: "よくある質問",
      contact: "お問い合わせ",
      copyright: "© 2024 AI運命の人ビジョン. すべての権利予約。",
      disclaimer: "エンターテイメント目的のみ、他人の写真をアップロードしないでください • プライバシーを尊重し、写真は24時間後に自動削除されます • 生成画像は個人的なエンターテイメント目的のみで、商業利用は禁止"
    },
    
    privacy: {
      title: "プライバシーポリシー",
      dataCollection: {
        title: "データ収集",
        content: "AI生成目的でアップロードされた写真のみを収集します。個人情報の保存やアカウント登録は要求しません。"
      },
      dataUsage: {
        title: "データ使用",
        content: "アップロードされた写真はAI処理により運命の人の画像を生成するためにのみ使用されます。他の目的で写真を使用することはありません。"
      },
      dataStorage: {
        title: "データ保存",
        content: "写真は24時間後に自動的に削除されます。個人的な写真や生成された画像を永続的に保存することはありません。"
      },
      contact: {
        title: "お問い合わせ",
        content: "プライバシーポリシーについてご質問がある場合は、wanghuitian475@gmail.com までお気軽にお問い合わせください"
      }
    },
    
    terms: {
      title: "利用規約",
      serviceUsage: {
        title: "サービスの使用",
        content: "AISoulmateVisionはエンターテイメント目的のみで提供されています。このサービスを使用するには18歳以上である必要があります。"
      },
      contentGuidelines: {
        title: "コンテンツガイドライン",
        content: "ユーザーは自分の写真のみをアップロードする必要があります。同意なく他人の写真をアップロードすることは禁止されています。"
      },
      prohibitedContent: {
        title: "禁止コンテンツ",
        content: "ヌード、暴力、違法コンテンツ、または著作権で保護された素材を含む写真は厳しく禁止されています。"
      },
      limitationOfLiability: {
        title: "責任の制限",
        content: "AISoulmateVisionは「現状のまま」保証なしで提供されます。このサービスの使用から生じるいかなる損害についても責任を負いません。"
      },
      contact: {
        title: "お問い合わせ",
        content: "これらの利用規約について質問がある場合は、wanghuitian475@gmail.com までお問い合わせください"
      }
    },
    
    about: {
      title: "私たちについて",
      companyName: "AISoulmateVision",
      subtitle: "AI技術を使用してあなたの運命の人に出会い、愛の無限の可能性を探求します",
      vision: {
        title: "私たちのビジョン",
        content1: "AISoulmateVisionは、最先端の人工知能技術を使用して、すべての人にユニークなロマンチックな体験を創造することにコミットしています。技術は世界を変えるだけでなく、愛に対するすべての人の美しいビジョンを照らすことができると信じています。",
        content2: "深層学習とコンピュータビジョン技術を通じて、私たちはあなたの顔の特徴、気質、スタイルを分析し、完璧にマッチした異性の運命の人の画像を生成することができます。"
      }
    },
    
    common: {
      loading: "読み込み中...",
      error: "エラーが発生しました",
      retry: "再試行",
      close: "閉じる",
      yes: "はい", 
      no: "いいえ",
      language: "言語"
    }
  },
  
  // 韩语翻译 - 基于中文布局适配  
  ko: {
    hero: {
      title: "당신의",
      titleHighlight: "AI 운명의 상대",
      subtitle: "사진을 업로드하면 AI가 당신의 특징을 분석하여 완벽한 이성 파트너를 생성합니다",
      features: {
        free: "완전 무료",
        fast: "30초 생성",
        privacy: "개인정보 보호",
        noSignup: "가입 불필요"
      }
    },
    
    header: {
      home: "홈"
    },
    
    upload: {
      title: "사진 업로드",
      subtitle: "AI가 당신의 얼굴 특징을 분석하여 이상적인 운명의 상대를 생성합니다", 
      dragDrop: "여기에 사진을 드래그하세요",
      orClick: "또는 클릭하여 선택",
      generating: "AI가 당신의 운명의 상대를 생성 중...",
      download: "결과 다운로드",
      share: "공유",
      tryAnother: "다른 사진 시도",
      regenerate: "재생성",
      originalPhoto: "원본 사진",
      generatedSoulmate: "생성된 운명의 상대",
      errors: {
        format: "JPG, PNG 또는 WebP 형식의 이미지를 업로드해주세요",
        size: "파일 크기는",
        generateFailed: "생성에 실패했습니다",
        generateRetry: "생성에 실패했습니다. 나중에 다시 시도해주세요",
        canvasError: "캔버스를 생성할 수 없습니다",
        downloadFailed: "다운로드에 실패했습니다",
        downloadRetry: "다운로드에 실패했습니다. 나중에 다시 시도해주세요"
      },
      actions: {
        yourPhoto: "당신의 사진",
        aiGenerated: "AI 생성 운명의 상대",
        linkCopied: "링크가 클립보드에 복사되었습니다!",
        shareText: "완벽한 AI 운명의 상대를 생성했습니다! 시도해보세요 ✨"
      },
      preview: {
        previewImage: "미리보기 이미지",
        generatedImage: "AI 생성 운명의 상대"
      },
      ui: {
        uploadTitle: "📸 사진 업로드",
        uploadSubtitle: "JPG, PNG, WebP 형식 지원, 최대 10MB",
        dragHere: "여기에 사진을 드래그하거나 클릭하여 선택",
        suggestion: "최상의 결과를 위해 선명한 정면 사진을 사용하세요",
        changePhoto: "클릭하여 사진 변경",
        dragNew: "또는 새로운 사진을 여기에 드래그",
        resultTitle: "✨ AI 생성 운명의 상대",
        resultSubtitle: "AI가 당신의 특징을 분석하여 매칭되는 이성 버전을 생성합니다",
        waitingUpload: "사진 업로드 대기 중",
        uploadToGenerate: "사진을 업로드한 후 생성 버튼을 클릭하세요",
        generating: "AI 생성 중...",
        generateButton: "🎨 내 운명의 상대 생성",
        downloading: "다운로드 중...",
        downloadButton: "📥 다운로드",
        imageLoading: "이미지 로딩 중...",
        targetGender: "생성할 성별",
        generateFemale: "여성",
        generateMale: "남성",
        styleSelection: "스타일 선택",
        styles: {
          photorealistic: "포토리얼리스틱",
          anime: "애니메 스타일",
          cartoon: "카툰 스타일",
          oilPainting: "유화",
          cyberpunk: "사이버펑크",
          retro: "레트로 스타일"
        }
      }
    },

    questionnaire: {
      title: "당신의 운명의 상대 프로필 생성",
      subtitle: "6개의 질문에 답하고 AI가 당신의 이상적인 매치의 독특한 초상을 그립니다",
      step: "단계 {step} / {total}",
      questions: {
        q1: {
          question: "당신의 이상적인 파트너의 삶에 대한 접근 방식은 무엇인가요?",
          options: [
            "모험적이고 새로운 것을 시도하는 것을 좋아함",
            "평온하고 안정적인 삶을 즐김",
            "야심적이고 항상 목표를 추구함",
            "배려심이 많고 관계와 가족을 우선시함"
          ]
        },
        q2: {
          question: "파트너에게서 당신이 가장 중요하게 생각하는 핵심 가치는 무엇인가요?",
          options: [
            "정직함과 투명성",
            "친절함과 공감능력",
            "독립성과 자립성",
            "유머감각과 긍정성"
          ]
        },
        q3: {
          question: "당신의 이상적인 파트너는 여가 시간을 어떻게 보내나요?",
          options: [
            "야외 탐험이나 여행",
            "독서, 학습, 또는 창의적인 취미",
            "친구와 가족과의 사교",
            "자원봉사나 다른 사람 돕기"
          ]
        },
        q4: {
          question: "당신의 이상적인 파트너의 의사소통 스타일은 무엇인가요?",
          options: [
            "개방적이고 직접적",
            "사려깊고 성찰적",
            "장난스럽고 가벼운",
            "지지적이고 격려적"
          ]
        },
        q5: {
          question: "다음 중 당신의 이상적인 파트너의 인생관을 가장 잘 설명하는 것은 무엇인가요?",
          options: [
            "낙관적이고 항상 밝은 면을 봄",
            "현실적이고 실용적",
            "열정적이고 추진력 있음",
            "느긋하고 편안함"
          ]
        },
        q6: {
          question: "몇 마디로 파트너의 '영혼의 깊이'를 어떻게 정의하시나요?",
          example: "예: 깊은 연결, 마법 같은 스파크, 정직함, 영감"
        }
      },
      buttons: {
        back: "뒤로",
        next: "다음",
        generate: "생성",
        generating: "생성 중..."
      },
      validation: {
        required: "이 질문은 필수입니다"
      }
    },
    
    howItWorks: {
      title: "작동 원리",
      subtitle: "단 3가지 간단한 단계로 당신의 AI 운명의 상대를 만나보세요",
      step1: {
        title: "사진 업로드",
        description: "선명한 본인 사진을 업로드"
      },
      step2: {
        title: "AI 분석",
        description: "AI가 당신의 얼굴 특징을 분석"
      },
      step3: {
        title: "매치 생성",
        description: "30초 안에 완벽한 운명의 상대 획득"
      },
      demo: {
        title: "✨ 효과 미리보기",
        boyPhoto: "남성 사진 예시",
        boyLabel: "남성 사진",
        girlPhoto: "여성 사진 예시",
        girlLabel: "매칭된 여성"
      }
    },
    
    faq: {
      title: "자주 묻는 질문",
      q1: {
        question: "정말 무료 서비스인가요?",
        answer: "네, 완전히 무료입니다! 숨겨진 요금이나 가입이 필요하지 않습니다."
      },
      q2: {
        question: "생성에 얼마나 시간이 걸리나요?",
        answer: "보통 20-30초, 서버 부하에 따라 다릅니다."
      },
      q3: {
        question: "내 사진 데이터가 안전한가요?",
        answer: "사진을 저장하지 않습니다. 모든 처리는 실시간으로 이루어지며 데이터는 즉시 삭제됩니다."
      },
      q4: {
        question: "어떤 사진 품질이 가장 좋나요?",
        answer: "선명한 정면 사진으로 조명이 좋은 것이 최적입니다. 선글라스나 마스크는 피하세요."
      }
    },
    
    socialProof: {
      title: "이상적인 매치 생성",
      users: "사용자",
      subtitle: "평균 30초 생성, 98% 만족도",
      stats: {
        users: "사용자 수",
        photos: "생성된 사진",
        satisfaction: "만족도",
        avgTime: "평균 시간"
      },
      rating: "평균 사용자 평가"
    },
    
    footer: {
      description: "완전 무료, 개인정보 보호, 30초 생성",
      about: "회사 소개",
      privacy: "개인정보 처리방침",
      terms: "서비스 약관",
      faq: "자주 묻는 질문", 
      contact: "문의하기",
      copyright: "© 2024 AI 운명의 상대 비전. 모든 권리 보유.",
      disclaimer: "오락 목적으로만 사용하며, 타인의 사진을 업로드하지 마세요 • 개인정보를 존중하며, 사진은 24시간 후 자동 삭제됩니다 • 생성된 이미지는 개인 오락용으로만 사용하며 상업적 이용은 금지"
    },
    
    privacy: {
      title: "개인정보 처리방침",
      dataCollection: {
        title: "데이터 수집",
        content: "AI 생성 목적으로 업로드된 사진만 수집합니다. 개인정보를 저장하거나 계정 등록을 요구하지 않습니다."
      },
      dataUsage: {
        title: "데이터 사용",
        content: "업로드된 사진은 운명의 상대 이미지를 생성하기 위한 AI 처리 목적으로만 사용됩니다. 다른 목적으로 사진을 사용하지 않습니다."
      },
      dataStorage: {
        title: "데이터 저장",
        content: "사진은 24시간 후 자동으로 삭제됩니다. 개인 사진이나 생성된 이미지를 영구적으로 저장하지 않습니다."
      },
      contact: {
        title: "문의",
        content: "개인정보 처리방침에 대한 질문이 있으시면 wanghuitian475@gmail.com으로 연락해 주세요"
      }
    },
    
    terms: {
      title: "서비스 약관",
      serviceUsage: {
        title: "서비스 사용",
        content: "AISoulmateVision은 오락 목적으로만 제공됩니다. 이 서비스를 사용하려면 18세 이상이어야 합니다."
      },
      contentGuidelines: {
        title: "콘텐츠 가이드라인",
        content: "사용자는 본인의 사진만 업로드해야 합니다. 동의 없이 타인의 사진을 업로드하는 것은 금지되어 있습니다."
      },
      prohibitedContent: {
        title: "금지 콘텐츠",
        content: "누드, 폭력, 불법 콘텐츠 또는 저작권으로 보호되는 자료가 포함된 사진은 엄격히 금지됩니다."
      },
      limitationOfLiability: {
        title: "책임의 제한",
        content: "AISoulmateVision은 보증 없이 \"있는 그대로\" 제공됩니다. 이 서비스 사용으로 인한 어떠한 손해에 대해서도 책임지지 않습니다."
      },
      contact: {
        title: "문의",
        content: "이 약관에 대한 질문이 있으시면 wanghuitian475@gmail.com으로 연락해 주세요"
      }
    },
    
    about: {
      title: "회사 소개",
      companyName: "AISoulmateVision",
      subtitle: "AI 기술을 사용하여 운명의 상대를 만나고 사랑의 무한한 가능성을 탐구하세요",
      vision: {
        title: "우리의 비전",
        content1: "AISoulmateVision은 최첨단 인공지능 기술을 사용하여 모든 사람에게 독특한 로맨틱 경험을 창조하는 것에 전념하고 있습니다. 우리는 기술이 세상을 바꿀 뿐만 아니라 모든 사람의 사랑에 대한 아름다운 비전을 밝힐 수 있다고 믿습니다.",
        content2: "딥러닝과 컴퓨터 비전 기술을 통해 당신의 얼굴 특징, 기질, 스타일을 분석하여 완벽하게 매칭되는 이성 운명의 상대 이미지를 생성할 수 있습니다."
      }
    },
    
    common: {
      loading: "로딩 중...",
      error: "오류가 발생했습니다",
      retry: "다시 시도",
      close: "닫기",
      yes: "네",
      no: "아니오",
      language: "언어"
    }
  }
} as const

// 类型定义
export type TranslationKey = keyof typeof translations.zh
export type DeepTranslationKey<T> = T extends object 
  ? { [K in keyof T]: `${string & K}${T[K] extends object ? `.${DeepTranslationKey<T[K]>}` : ''}` }[keyof T]
  : never

export type AllTranslationKeys = DeepTranslationKey<typeof translations.zh> 