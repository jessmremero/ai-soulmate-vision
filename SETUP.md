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

## 部署到 Vercel
1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 添加环境变量 `REPLICATE_API_TOKEN`

## API 端点
- `POST /api/generate` - 生成另一半照片
- `GET /api/generate` - 检查 API 状态 