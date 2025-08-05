import Replicate from 'replicate'

// 风格类型定义
export type StyleType = 'photorealistic' | 'anime' | 'cartoon' | 'oilPainting' | 'cyberpunk' | 'retro'

// 初始化 Replicate 客户端
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// AI 模型配置
export const AI_MODELS = {
  // 使用专门的人脸生成模型，专注于单人肖像（写实风格）
  FACE_GENERATION: 'tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4',
  // 艺术风格生成模型（动漫、卡通、油画等）- 使用更快的模型
  ART_STYLE_GENERATION: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
  // 文本生成模型 - 用于生成理想伴侣描述
  TEXT_GENERATION: 'meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3'
}

// 生成另一半照片的主函数
export async function generateSoulmate(
  imageFile: File,
  targetGender: 'male' | 'female' | null,
  style: StyleType = 'photorealistic'
): Promise<string> {
  // 首先检查是否有有效的 API Token
  const hasValidToken = process.env.REPLICATE_API_TOKEN && 
                       process.env.REPLICATE_API_TOKEN.trim() !== '' &&
                       process.env.REPLICATE_API_TOKEN !== 'your-replicate-token-here'

  // 为 targetGender 提供一个明确的默认值，以防万一
  const finalGender = targetGender || 'female';

  // 如果没有有效的API Token，直接使用模拟模式
  if (!hasValidToken) {
    console.log('🎭 未检测到有效的 Replicate API Token，使用演示模式')
    return generateMockSoulmate(imageFile, finalGender, style)
  }

  try {
    console.log('🚀 开始真实 AI 生成...')
    
    // 验证 API Token（双重检查）
    if (!process.env.REPLICATE_API_TOKEN || process.env.REPLICATE_API_TOKEN.trim() === '') {
      throw new Error('REPLICATE_API_TOKEN 未设置或为空')
    }
    
    console.log('🔑 API Token 验证通过')
    
    // 将文件转换为 base64
    const imageBase64 = await fileToBase64(imageFile)
    console.log('📸 图片转换完成，大小:', Math.round(imageBase64.length / 1024), 'KB')
    
    // 基于用户选择构建 Prompt
    console.log('🎯 目标生成性别:', finalGender)
    
    // 根据风格选择模型
    const isPhotorealistic = style === 'photorealistic'
    const selectedModel = isPhotorealistic ? AI_MODELS.FACE_GENERATION : AI_MODELS.ART_STYLE_GENERATION
    
    // 构建 prompt - 根据性别和风格生成相应的提示词
    const prompt = buildPrompt(finalGender, style)
    console.log('📝 Prompt:', prompt)
    
    // 构建负面提示词 - 根据风格调整负面提示词
    const negativePrompt = buildNegativePrompt(finalGender, style)
    console.log('🚫 Negative Prompt:', negativePrompt)
    
         // 准备 API 参数 - 根据模型类型调整参数
     const apiInput = isPhotorealistic ? {
       // PhotoMaker模型参数
       prompt: prompt,
       negative_prompt: negativePrompt,  
       input_image: imageBase64,  // PhotoMaker需要input_image
       num_outputs: 1,
       num_inference_steps: 20,
       guidance_scale: 7.5,
       seed: Math.floor(Math.random() * 1000000)
     } : {
               // SDXL模型参数 - 优化速度和质量
        prompt: prompt,
        negative_prompt: negativePrompt,
        image: imageBase64,  // SDXL使用image
        num_outputs: 1,
        num_inference_steps: 20,  // SDXL默认步数
        guidance_scale: 9.0,      // 增加引导强度，强制性别转换
        seed: Math.floor(Math.random() * 1000000)
     }
    
    console.log('🤖 调用 AI 模型:', selectedModel)
    console.log('🎨 风格类型:', isPhotorealistic ? '写实风格 (PhotoMaker)' : '艺术风格 (Stable Diffusion)')
    console.log('⚙️ API 参数:', { ...apiInput, [isPhotorealistic ? 'input_image' : 'image']: '[BASE64_DATA]' })
    
         // 调用 Replicate API 带超时
     const output = await Promise.race([
       replicate.run(selectedModel as any, {
         input: apiInput
       }),
       // 90秒超时，平衡速度和质量
       new Promise((_, reject) => 
         setTimeout(() => reject(new Error('AI 生成超时，请稍后重试')), 90000)
       )
     ])
    
    console.log('✅ AI 生成完成:', output)
    
    // 返回生成的图片URL
    return Array.isArray(output) ? output[0] as string : String(output)
    
  } catch (error) {
    console.error('❌ Replicate API Error:', error)
    
    // 检查是否为可恢复的错误，如果是则自动切换到模拟模式
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase()
      
      // 付费相关错误 - 明确提示
      if (errorMessage.includes('402') || 
          errorMessage.includes('payment required') || 
          errorMessage.includes('billing required') ||
          errorMessage.includes('quota') || 
          errorMessage.includes('limit') ||
          errorMessage.includes('credit')) {
        console.log('💳 检测到付费/配额相关问题')
        throw new Error('账户余额不足或超出使用限制，请检查Replicate账户')
      }
      
      // 认证相关错误 - 明确提示
      if (errorMessage.includes('authentication') || 
          errorMessage.includes('unauthorized') ||
          errorMessage.includes('invalid token') ||
          errorMessage.includes('api key')) {
        console.log('🔑 检测到认证问题')
        throw new Error('API认证失败，请检查API Token配置')
      }
      
      // 网络/服务器相关错误 - 可以进入演示模式
      if (errorMessage.includes('network') ||
          errorMessage.includes('connection') ||
          errorMessage.includes('server error') ||
          errorMessage.includes('service unavailable') ||
          errorMessage.includes('503') ||
          errorMessage.includes('502') ||
          errorMessage.includes('500')) {
        console.log('🌐 检测到网络/服务器问题，切换到演示模式')
        return generateMockSoulmate(imageFile, finalGender)
      }
      
             // 超时错误 - 直接抛出，让用户知道可以重试
       if (errorMessage.includes('timeout') || errorMessage.includes('超时')) {
         throw new Error('AI 生成超时，请稍后重试')
       }
       
       // NSFW 内容检测错误 - 自动切换到演示模式
       if (errorMessage.includes('nsfw') || errorMessage.includes('content detected')) {
         console.log('🚫 检测到 NSFW 内容过滤，切换到演示模式')
         return generateMockSoulmate(imageFile, finalGender, style)
       }
     }
     
     // 对于其他未知错误，抛出错误而不是自动进入演示模式
     console.log('⚠️ 遇到未知错误:', error)
     throw new Error('AI服务暂时不可用，请稍后重试')
  }
}

// 生成理想伴侣文字描述
export async function generateSoulmateDescription(
  questionnaireAnswers: (string | null)[],
  userLanguage: string = 'zh'
): Promise<string> {
  const hasValidToken = process.env.REPLICATE_API_TOKEN && 
                       process.env.REPLICATE_API_TOKEN.trim() !== '' &&
                       process.env.REPLICATE_API_TOKEN !== 'your-replicate-token-here'

  if (!hasValidToken) {
    console.log('🎭 未检测到有效的 Replicate API Token，使用演示模式')
    return generateMockDescription(questionnaireAnswers, userLanguage)
  }

  try {
    console.log('🚀 开始生成理想伴侣描述...')
    
    // 构建多语言提示词
    const prompt = buildDescriptionPrompt(questionnaireAnswers, userLanguage)
    console.log('📝 描述生成提示词:', prompt)
    
    // 调用 Llama-2 模型
    const output = await Promise.race([
      replicate.run(AI_MODELS.TEXT_GENERATION as any, {
        input: {
          prompt: prompt,
          max_new_tokens: 300,
          temperature: 0.7,
          top_p: 0.9,
          repetition_penalty: 1.1
        }
      }),
      // 30秒超时
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('文字生成超时')), 30000)
      )
    ])
    
    console.log('✅ 文字描述生成完成:', output)
    
    // 返回生成的文字
    const result = Array.isArray(output) ? output.join('') : String(output)
    return result.trim()
    
  } catch (error) {
    console.error('❌ 文字生成错误:', error)
    return generateMockDescription(questionnaireAnswers, userLanguage)
  }
}

// 增强版模拟 AI 生成功能
async function generateMockSoulmate(
  imageFile: File,
  targetGender: 'male' | 'female',
  style: StyleType = 'photorealistic'
): Promise<string> {
  console.log('🎭 使用演示模式生成另一半照片...')
  
  // 模拟真实的AI处理步骤
  console.log('🔍 分析上传的照片...')
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log('🧠 AI 正在理解面部特征...')
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('💫 生成匹配的另一半...')
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000))
  
  // 更多样化的高质量示例图片
  const maleImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=512&h=512&fit=crop&crop=face&auto=format&q=80'
  ]
  
  const femaleImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=512&h=512&fit=crop&crop=face&auto=format&q=80',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=512&h=512&fit=crop&crop=face&auto=format&q=80'
  ]
  
  const shouldGenerateFemale = targetGender === 'female';
  
  const selectedImages = shouldGenerateFemale ? femaleImages : maleImages
  const genderLabel = shouldGenerateFemale ? '女性' : '男性'
  
  // 基于时间戳的确定性随机选择，确保相同文件得到相同结果
  const seed = imageFile.size + imageFile.lastModified
  const randomIndex = Math.abs(seed) % selectedImages.length
  const selectedImage = selectedImages[randomIndex]
  
  console.log(`✨ 演示生成完成！为您匹配了一位${genderLabel}另一半`)
  console.log(`🎨 这是演示模式，真实AI将根据您的面部特征生成更加个性化的结果`)
  
  return selectedImage
}

// 模拟文字描述生成
function generateMockDescription(answers: (string | null)[], language: string): string {
  const mockDescriptions = {
    zh: `基于您的问卷答案，我为您描绘的理想伴侣是这样的：

她/他拥有温暖而坚定的内心，在生活中既保持着对美好事物的敏感，又具备面对挑战的勇气。在价值观上，她/他重视真诚与理解，能够在你需要时给予支持，在快乐时分享喜悦。

她/他喜欢在闲暇时光探索生活的美好，无论是阅读一本好书，还是与朋友分享温馨时光，都能让生活充满色彩。在沟通中，她/他善于倾听，能够理解你的想法，同时也会坦诚地表达自己的观点。

她/他看待生活时既保持乐观，又脚踏实地，能够在梦想与现实之间找到平衡。最重要的是，她/他拥有那种让你感到心灵相通的"灵魂感"——那种无需言语就能理解彼此的默契，那种在一起时能让时光变得美好的魔力。

这样的她/他，正是你内心深处一直在寻找的那个人。`,

    en: `Based on your questionnaire answers, here's the ideal partner I envision for you:

She/he possesses a warm yet determined heart, maintaining sensitivity to beautiful things in life while having the courage to face challenges. In terms of values, she/he values sincerity and understanding, able to provide support when you need it and share joy in happy moments.

She/he enjoys exploring life's beauty in leisure time, whether reading a good book or sharing warm moments with friends, making life colorful. In communication, she/he is a good listener who can understand your thoughts while honestly expressing her/his own views.

She/he maintains optimism while staying grounded when viewing life, able to find balance between dreams and reality. Most importantly, she/he possesses that "soulfulness" that makes you feel spiritually connected—that默契 that doesn't need words to understand each other, that magic that makes time beautiful when together.

Such a person is exactly who you've been searching for deep in your heart.`,

    ja: `あなたのアンケート回答に基づいて、理想のパートナーをこのように描きます：

彼/彼女は温かくも確かな心を持ち、人生の美しいものへの感受性を保ちながら、挑戦に立ち向かう勇気も備えています。価値観において、彼/彼女は誠実さと理解を重視し、あなたが必要とする時にサポートを提供し、幸せな時に喜びを分かち合うことができます。

彼/彼女は余暇の時間に人生の美しさを探求することを楽しみ、良い本を読むことでも、友達と温かい時間を共有することでも、人生をカラフルにすることができます。コミュニケーションにおいて、彼/彼女は良い聞き手で、あなたの考えを理解しながら、自分の意見を正直に表現することができます。

彼/彼女は人生を見る時に楽観的でありながらも現実的で、夢と現実の間のバランスを見つけることができます。最も重要なのは、彼/彼女はあなたに精神的につながっていると感じさせる「魂の深さ」を持っていることです—言葉を必要としない相互理解、一緒にいる時に時間を美しくする魔法。

そんな彼/彼女こそ、あなたが心の奥底で探し求めていた人なのです。`,

    ko: `귀하의 설문조사 답변을 바탕으로, 귀하를 위한 이상적인 파트너를 이렇게 그려봅니다:

그/그녀는 따뜻하면서도 확고한 마음을 가지고 있으며, 삶의 아름다운 것들에 대한 감수성을 유지하면서도 도전에 맞설 용기를 갖추고 있습니다. 가치관 면에서, 그/그녀는 진실성과 이해를 중시하며, 귀하가 필요로 할 때 지원을 제공하고, 행복한 순간에 기쁨을 나눌 수 있습니다.

그/그녀는 여가 시간에 삶의 아름다움을 탐구하는 것을 즐기며, 좋은 책을 읽거나 친구들과 따뜻한 시간을 공유하는 것 모두 삶을 다채롭게 만들 수 있습니다. 소통에서, 그/그녀는 좋은 청취자로서 귀하의 생각을 이해하면서도 자신의 견해를 솔직하게 표현할 수 있습니다.

그/그녀는 삶을 바라볼 때 낙관적이면서도 현실적이어서, 꿈과 현실 사이의 균형을 찾을 수 있습니다. 가장 중요한 것은, 그/그녀는 귀하에게 영적으로 연결되어 있다고 느끼게 하는 "영혼의 깊이"를 가지고 있다는 것입니다—말이 필요 없는 상호 이해, 함께 있을 때 시간을 아름답게 만드는 마법.

그런 그/그녀야말로, 귀하가 마음 깊은 곳에서 찾아왔던 사람입니다.`
  }
  
  return mockDescriptions[language as keyof typeof mockDescriptions] || mockDescriptions.zh
}

// 文件转 base64 (服务器端版本)
async function fileToBase64(file: File): Promise<string> {
  try {
    // 将 File 对象转换为 ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()
    
    // 转换为 Buffer
    const buffer = Buffer.from(arrayBuffer)
    
    // 转换为 base64 并添加 data URL 前缀
    const base64 = buffer.toString('base64')
    const mimeType = file.type || 'image/jpeg'
    
    return `data:${mimeType};base64,${base64}`
  } catch (error) {
    console.error('文件转换失败:', error)
    throw new Error('文件转换失败')
  }
}

// 提示词构建函数 - 基于性别和风格参数
function buildPrompt(targetGender: 'male' | 'female', style: StyleType = 'photorealistic'): string {
  // 明确的性别描述，确保生成正确性别
  const genderSpecifics = targetGender === 'male' 
    ? "anime boy, male anime character, handsome anime male" 
    : "female anime girl, cute anime girl, kawaii girl, beautiful anime female, gentle anime girl, girl character, female character, woman anime, lady anime"
  
  // 根据风格构建不同的基础提示词，强调单人肖像
  const stylePrompts = {
    photorealistic: "A photorealistic portrait of a single person, solo portrait, perfect face, 25 years old, casual wear, high quality, high resolution, 8k, RAW photo, best quality, masterpiece, ultra-high resolution, one person only",
    anime: "kawaii, japanese anime, manga style, large round eyes, soft features, gentle expression, cute anime girl, traditional anime, school uniform, soft colors, innocent look, high quality, masterpiece, best quality, safe content",
    cartoon: "cartoon style portrait, single character, solo cartoon character, bold lines, vibrant colors, cute cartoon character, high quality cartoon art, clean illustration, family friendly, one person only",
    oilPainting: "oil painting style portrait, single subject, solo portrait, brush strokes, canvas texture, artistic painting, classical art style, masterpiece, high quality, elegant, one person only",
    cyberpunk: "cyberpunk style portrait, single character, solo cyberpunk character, neon lights, futuristic, sci-fi aesthetic, glowing elements, high tech, dystopian beauty, high quality, safe, one person only",
    retro: "retro style portrait, single character, solo retro character, vintage aesthetic, 80s style, nostalgic colors, classic beauty, old school charm, high quality, wholesome, one person only"
  }
  
  const basePrompt = stylePrompts[style] || stylePrompts.photorealistic
  
  // 只有写实风格使用PhotoMaker的img_uc触发词
  if (style === 'photorealistic') {
    return `img_uc a ${genderSpecifics}, ${basePrompt}`
  }
  
  // 艺术风格使用Stable Diffusion格式
  return `${genderSpecifics}, ${basePrompt}`
}

// 负面提示词构建函数 - 基于性别和风格参数
function buildNegativePrompt(targetGender: 'male' | 'female', style: StyleType = 'photorealistic'): string {
  // 基础负面提示词 - 增强安全内容过滤和多人场景排除
  const baseNegative = "nsfw, nude, naked, ugly, deformed, noisy, blurry, distorted, grain, low resolution, pixelated, doll, couple, two people, group, multiple people, crowd, inappropriate, adult content, sexual content, multiple faces, multiple characters"
  
  // 根据风格调整负面提示词
  const styleNegatives = {
    photorealistic: "cartoon, anime, 3d, painting, drawing, sketch",
    anime: "photorealistic, realistic, human anatomy, realistic skin, western cartoon, disney, 3d, painting, drawing, sketch, robot, mechanical, cyberpunk, futuristic, glitch, digital art, abstract, distorted, neon, glowing, tech, sci-fi, artificial, synthetic, hard lines, sharp edges, geometric, angular",
    cartoon: "photorealistic, anime, 3d, painting, drawing, sketch, realistic",
    oilPainting: "photorealistic, cartoon, anime, 3d, drawing, sketch, realistic",
    cyberpunk: "photorealistic, cartoon, anime, 3d, painting, drawing, sketch, realistic, vintage",
    retro: "photorealistic, cartoon, anime, 3d, painting, drawing, sketch, realistic, futuristic, cyberpunk"
  }
  
  const styleNegative = styleNegatives[style] || styleNegatives.photorealistic
  
  // 强烈排除错误性别，确保生成正确性别
  const genderExclusion = targetGender === 'male' 
    ? "woman, girl, female, feminine, female face, female portrait, female character, woman face, woman portrait, woman character, anime girl, female anime, beautiful girl, cute girl" 
    : "man, boy, male, masculine, male face, male portrait, male character, man face, man portrait, man character, anime boy, male anime, handsome boy, cute boy"
  
  return `${baseNegative}, ${styleNegative}, ${genderExclusion}`
}

// 构建描述生成提示词
function buildDescriptionPrompt(answers: (string | null)[], language: string): string {
  const questions = [
    "理想伴侣的生活态度",
    "最重要的核心价值观", 
    "理想伴侣的休闲方式",
    "理想伴侣的沟通风格",
    "理想伴侣的人生观",
    "对'灵魂感'的定义"
  ]
  
  const validAnswers = answers.filter(answer => answer && answer.trim() !== '')
  const answerText = validAnswers.map((answer, index) => 
    `${questions[index]}: ${answer}`
  ).join('\n')
  
  const languagePrompts = {
    zh: `基于以下问卷答案，生成一段200-300字的理想伴侣描述，要求：
1. 语言优美，富有诗意
2. 体现用户的真实偏好
3. 描述具体而生动
4. 带有浪漫和期待感
5. 使用中文写作

问卷答案：
${answerText}

请生成理想伴侣描述：`,
    
    en: `Based on the following questionnaire answers, generate a 200-300 word description of an ideal partner. Requirements:
1. Beautiful and poetic language
2. Reflect the user's real preferences  
3. Specific and vivid description
4. Romantic and hopeful tone
5. Write in English

Questionnaire answers:
${answerText}

Please generate the ideal partner description:`,
    
    ja: `以下のアンケート回答に基づいて、理想のパートナーの200-300文字の説明を生成してください。要件：
1. 美しく詩的な言語
2. ユーザーの実際の好みを反映
3. 具体的で生き生きとした説明
4. ロマンチックで希望に満ちたトーン
5. 日本語で書く

アンケート回答：
${answerText}

理想のパートナーの説明を生成してください：`,
    
    ko: `다음 설문조사 답변을 바탕으로 이상적인 파트너에 대한 200-300자 설명을 생성하세요. 요구사항:
1. 아름답고 시적인 언어
2. 사용자의 실제 선호도 반영
3. 구체적이고 생생한 설명
4. 로맨틱하고 희망찬 톤
5. 한국어로 작성

설문조사 답변:
${answerText}

이상적인 파트너 설명을 생성해주세요:`
  }
  
  return languagePrompts[language as keyof typeof languagePrompts] || languagePrompts.zh
}

// 检查 Replicate API 配置
export function checkReplicateConfig(): { configured: boolean; mode: 'real' | 'mock' } {
  const hasToken = !!(process.env.REPLICATE_API_TOKEN && 
                   process.env.REPLICATE_API_TOKEN.trim() !== '' &&
                   process.env.REPLICATE_API_TOKEN !== 'your-replicate-token-here')
                   
  return {
    configured: hasToken,
    mode: hasToken ? 'real' : 'mock'
  }
} 