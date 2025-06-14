import { NextRequest, NextResponse } from 'next/server'
import { generateSoulmate, checkReplicateConfig } from '@/lib/replicate'

export async function POST(request: NextRequest) {
  try {
    // 检查 API 配置
    const config = checkReplicateConfig()
    if (!config.configured) {
      return NextResponse.json(
        { error: 'Replicate API 未配置' },
        { status: 500 }
      )
    }

    // 获取上传的文件
    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json(
        { error: '请上传图片文件' },
        { status: 400 }
      )
    }

    // 验证文件类型
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: '不支持的文件格式' },
        { status: 400 }
      )
    }

    // 验证文件大小 (10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: '文件大小超过限制' },
        { status: 400 }
      )
    }

    // 调用 AI 生成
    const generatedImageUrl = await generateSoulmate(file)

    return NextResponse.json({
      success: true,
      imageUrl: generatedImageUrl,
      message: '生成成功！'
    })

  } catch (error) {
    console.error('API Error:', error)
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : '生成失败，请稍后重试',
        success: false 
      },
      { status: 500 }
    )
  }
}

// 处理 GET 请求 - 返回 API 状态
export async function GET() {
  const config = checkReplicateConfig()
  
  let message = 'API 未配置'
  if (config.configured) {
    message = config.mode === 'mock' ? 'API 模拟模式 (演示版本)' : 'API 已配置'
  }
  
  return NextResponse.json({
    status: 'ok',
    configured: config.configured,
    mode: config.mode,
    message: message
  })
} 