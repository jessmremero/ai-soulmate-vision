import { NextRequest, NextResponse } from 'next/server'
import { generateSoulmateDescription } from '@/lib/replicate'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { answers, language = 'zh' } = body

    // 验证输入
    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: '问卷答案格式错误' },
        { status: 400 }
      )
    }

    // 检查是否有有效答案
    const validAnswers = answers.filter(answer => answer && answer.trim() !== '')
    if (validAnswers.length === 0) {
      return NextResponse.json(
        { error: '请至少填写一个问卷问题' },
        { status: 400 }
      )
    }

    console.log('📝 开始生成理想伴侣描述...')
    console.log('🌍 用户语言:', language)
    console.log('📋 问卷答案:', validAnswers)

    // 生成文字描述
    const description = await generateSoulmateDescription(answers, language)

    console.log('✅ 描述生成完成，长度:', description.length)

    return NextResponse.json({
      success: true,
      description: description,
      language: language,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ 生成描述时出错:', error)
    
    return NextResponse.json(
      { 
        error: '生成描述失败，请稍后重试',
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}

// 支持 GET 请求用于测试
export async function GET() {
  return NextResponse.json({
    message: '理想伴侣描述生成API',
    usage: 'POST /api/generate-description',
    body: {
      answers: ['答案1', '答案2', '答案3', '答案4', '答案5', '答案6'],
      language: 'zh|en|ja|ko'
    }
  })
} 