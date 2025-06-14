import Replicate from 'replicate'

// 初始化 Replicate 客户端
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
})

// AI 模型配置
export const AI_MODELS = {
  // 人脸生成模型
  FACE_GENERATION: 'stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4',
}

// 生成另一半照片的主函数
export async function generateSoulmate(imageFile: File): Promise<string> {
  // 检查是否为模拟模式
  if (process.env.NODE_ENV === 'development' && !process.env.REPLICATE_API_TOKEN) {
    return generateMockSoulmate(imageFile)
  }

  try {
    // 将文件转换为 base64
    const imageBase64 = await fileToBase64(imageFile)
    
    // 构建 prompt
    const prompt = buildPrompt()
    
    // 调用 Replicate API
    const output = await replicate.run(AI_MODELS.FACE_GENERATION as any, {
      input: {
        image: imageBase64,
        prompt: prompt,
        num_outputs: 1,
        guidance_scale: 7.5,
        num_inference_steps: 50,
        width: 512,
        height: 512,
      }
    })
    
    // 返回生成的图片URL
    return Array.isArray(output) ? output[0] as string : String(output)
    
  } catch (error) {
    console.error('Replicate API Error:', error)
    throw new Error('AI 生成失败，请稍后重试')
  }
}

// 模拟 AI 生成功能
async function generateMockSoulmate(imageFile: File): Promise<string> {
  console.log('🎭 使用模拟模式生成另一半照片...')
  
  // 模拟 AI 处理时间
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000))
  
  // 分别准备男性和女性的示例图片
  const maleImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=512&h=512&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=512&h=512&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=512&h=512&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=512&h=512&fit=crop&crop=face'
  ]
  
  const femaleImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=512&h=512&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=512&h=512&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=512&h=512&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=512&h=512&fit=crop&crop=face'
  ]
  
  // 简单的随机性别选择（模拟真实AI的性别匹配）
  // 在真实场景中，这里会分析上传的照片来确定性别
  const shouldGenerateFemale = Math.random() > 0.5
  const selectedImages = shouldGenerateFemale ? femaleImages : maleImages
  const genderLabel = shouldGenerateFemale ? '女性' : '男性'
  
  const randomIndex = Math.floor(Math.random() * selectedImages.length)
  const selectedImage = selectedImages[randomIndex]
  
  console.log(`✨ 模拟生成完成！生成了${genderLabel}另一半:`, selectedImage)
  
  return selectedImage
}

// 文件转 base64
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

// 构建 AI 提示词
function buildPrompt(): string {
  return `
    Generate a realistic portrait of a person who would be a perfect romantic match.
    Create an attractive, photorealistic face with natural features.
    High quality, professional portrait style with warm, friendly expression.
  `.trim()
}

// 检查 API 配置
export function checkReplicateConfig(): { configured: boolean; mode: 'real' | 'mock' } {
  const hasToken = !!process.env.REPLICATE_API_TOKEN
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  if (hasToken) {
    return { configured: true, mode: 'real' }
  } else if (isDevelopment) {
    return { configured: true, mode: 'mock' }
  } else {
    return { configured: false, mode: 'real' }
  }
} 