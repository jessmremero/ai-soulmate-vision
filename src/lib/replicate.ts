import Replicate from 'replicate'

// 初始化 Replicate 客户端
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// AI 模型配置
export const AI_MODELS = {
  // 使用专门的人脸生成模型，专注于单人肖像
  FACE_GENERATION: 'tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4',
  // 备用模型（如果主模型有问题）
  FACE_GENERATION_BACKUP: 'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478'
}

// 生成另一半照片的主函数
export async function generateSoulmate(
  imageFile: File,
  targetGender: 'male' | 'female' | null
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
    return generateMockSoulmate(imageFile, finalGender)
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
    
    // 构建 prompt - 根据性别检测自动生成相应的提示词
    const prompt = buildPrompt(finalGender)
    console.log('📝 Prompt:', prompt)
    
    // 构建负面提示词 - 强烈排除情侣照和卡通风格，并确保性别正确性
    const negativePrompt = buildNegativePrompt(finalGender)
    console.log('🚫 Negative Prompt:', negativePrompt)
    
    // 准备 API 参数 - PhotoMaker模型专用参数
    const apiInput = {
      prompt: prompt,
      negative_prompt: negativePrompt,  
      input_image: imageBase64,  // PhotoMaker需要input_image而不是image
      num_outputs: 1,
      num_inference_steps: 20,
      guidance_scale: 7.5,
      seed: Math.floor(Math.random() * 1000000)
    }
    
    console.log('🤖 调用 AI 模型:', AI_MODELS.FACE_GENERATION)
    console.log('⚙️ API 参数:', { ...apiInput, input_image: '[BASE64_DATA]' })
    
    // 调用 Replicate API 带超时
    const output = await Promise.race([
      replicate.run(AI_MODELS.FACE_GENERATION as any, {
        input: apiInput
      }),
      // 2分钟超时，快速生成真实照片
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('AI 生成超时，请稍后重试')), 120000)
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
    }
    
    // 对于其他未知错误，抛出错误而不是自动进入演示模式
    console.log('⚠️ 遇到未知错误:', error)
    throw new Error('AI服务暂时不可用，请稍后重试')
  }
}

// 增强版模拟 AI 生成功能
async function generateMockSoulmate(
  imageFile: File,
  targetGender: 'male' | 'female'
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

// 提示词构建函数 - 现在基于明确的性别参数
function buildPrompt(targetGender: 'male' | 'female'): string {
  const basePrompt = "A photorealistic portrait of a good-looking person, perfect face, 25 years old, casual wear, high quality, high resolution, 8k, RAW photo, best quality, masterpiece, ultra-high resolution"
  
  const genderSpecifics = targetGender === 'male' 
    ? "a handsome man, beautiful boy, masculine features" 
    : "a beautiful woman, pretty girl, feminine features, soft skin"
  
  // img_uc a an is a trigger word for PhotoMaker
  return `img_uc a ${genderSpecifics}, ${basePrompt}`
}

// 负面提示词构建函数 - 现在也基于性别参数
function buildNegativePrompt(targetGender: 'male' | 'female'): string {
  const baseNegative = "nsfw, nude, naked, ugly, deformed, noisy, blurry, distorted, grain, low resolution, pixelated, doll, cartoon, anime, 3d, painting, drawing, sketch, couple, two people, group"
  
  // 避免生成错误性别的加强提示
  const genderExclusion = targetGender === 'male' ? "woman, girl, female" : "man, boy, male"
  
  return `${baseNegative}, ${genderExclusion}`
}

// 检查 Replicate API 配置
export function checkReplicateConfig(): { configured: boolean; mode: 'real' | 'mock' } {
  const hasToken = process.env.REPLICATE_API_TOKEN && 
                   process.env.REPLICATE_API_TOKEN.trim() !== '' &&
                   process.env.REPLICATE_API_TOKEN !== 'your-replicate-token-here'
                   
  return {
    configured: hasToken,
    mode: hasToken ? 'real' : 'mock'
  }
} 