# AISoulmateVision 配置说明

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 配置 Replicate API
1. 访问 [Replicate](https://replicate.com/) 注册账号
2. 获取 API Token
3. 创建 `.env.local` 文件：
```env
REPLICATE_API_TOKEN=your_token_here
```

### 3. 启动项目
```bash
npm run dev
```

## 🚀 在线演示

**部署地址**: [https://ai-soulmate-vision.vercel.app](https://ai-soulmate-vision.vercel.app)

当前运行在模拟模式，可以完整体验所有功能！

## 部署到 Vercel
1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署（模拟模式）
4. 可选：添加环境变量 `REPLICATE_API_TOKEN` 启用真实 AI

## API 端点
- `POST /api/generate` - 生成另一半照片
- `GET /api/generate` - 检查 API 状态 