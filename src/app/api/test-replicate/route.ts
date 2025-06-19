import { NextRequest, NextResponse } from 'next/server'
import Replicate from 'replicate'

export async function GET() {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    checks: {} as any
  }

  try {
    // 1. 检查API Token
    const hasToken = !!process.env.REPLICATE_API_TOKEN
    const tokenLength = process.env.REPLICATE_API_TOKEN?.length || 0
    const isValidToken = hasToken && 
                        process.env.REPLICATE_API_TOKEN!.trim() !== '' &&
                        process.env.REPLICATE_API_TOKEN !== 'your-replicate-token-here'

    diagnostics.checks.token = {
      exists: hasToken,
      length: tokenLength,
      isValid: isValidToken,
      prefix: hasToken ? process.env.REPLICATE_API_TOKEN!.substring(0, 8) + '...' : 'none'
    }

    // 2. 测试API连接
    if (isValidToken) {
      try {
        const replicate = new Replicate({
          auth: process.env.REPLICATE_API_TOKEN,
        })

        // 测试一个简单的API调用
        const models = await replicate.models.list()
        diagnostics.checks.apiConnection = {
          success: true,
          modelCount: models.results.length
        }

        // 3. 检查特定模型是否可用
        try {
          const model = await replicate.models.get('tencentarc', 'photomaker')
          diagnostics.checks.targetModel = {
            available: true,
            name: model.name,
            description: model.description,
            owner: model.owner
          }
        } catch (modelError) {
          diagnostics.checks.targetModel = {
            available: false,
            error: modelError instanceof Error ? modelError.message : 'Unknown error'
          }
        }

      } catch (apiError) {
        diagnostics.checks.apiConnection = {
          success: false,
          error: apiError instanceof Error ? apiError.message : 'Unknown error'
        }
      }
    } else {
      diagnostics.checks.apiConnection = {
        success: false,
        error: 'Invalid or missing API token'
      }
    }

    // 4. 检查账户余额（如果可能）
    if (isValidToken) {
      try {
        const replicate = new Replicate({
          auth: process.env.REPLICATE_API_TOKEN,
        })
        
        // Replicate API 没有直接的余额查询，但我们可以检查账户信息
        const account = await replicate.accounts.current()
        diagnostics.checks.account = {
          success: true,
          username: account.username,
          type: account.type
        }
      } catch (accountError) {
        diagnostics.checks.account = {
          success: false,
          error: accountError instanceof Error ? accountError.message : 'Unknown error'
        }
      }
    }

  } catch (error) {
    diagnostics.checks.globalError = {
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }

  return NextResponse.json(diagnostics, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  })
} 