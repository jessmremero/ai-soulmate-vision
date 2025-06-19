# 🚀 本地开发指南

## 环境准备

### 1. Node.js 版本要求
- **必需版本**: Node.js >= 18.18.0 或 >= 20.0.0
- **当前问题**: 你的版本是 18.16.0，需要升级

### 2. 升级 Node.js
```bash
# 如果有 nvm
nvm install 20.11.0
nvm use 20.11.0

# 或者直接从官网下载安装 Node.js 20.x
# https://nodejs.org/
```

### 3. 配置环境变量

已创建 `.env.local` 文件，请编辑该文件：

```bash
# Replicate API Token
REPLICATE_API_TOKEN=你的真实token
```

**重要**: 将 `your_actual_token_here` 替换为你在 Vercel 中设置的真实 Token

## 本地开发流程

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 访问应用
打开浏览器访问: http://localhost:3000

### 4. 测试 AI 功能
1. 上传一张照片
2. 点击"生成我的另一半"
3. 查看控制台日志了解处理过程
4. 检查是否成功生成

## 调试技巧

### 查看 API 状态
访问: http://localhost:3000/api/generate

应该返回类似：
```json
{
  "status": "ok",
  "configured": true,
  "mode": "real",
  "message": "API 已配置"
}
```

### 查看控制台日志
在浏览器开发者工具和终端中查看详细的调试信息：
- 🚀 开始真实 AI 生成...
- 🔑 API Token 验证通过
- 📸 图片转换完成
- 🤖 调用 AI 模型
- ✅ AI 生成完成

### 常见问题解决

1. **Node.js 版本过低**
   - 升级到 20.x 版本

2. **API Token 未设置**
   - 检查 `.env.local` 文件
   - 确保 Token 正确

3. **AI 生成失败**
   - 检查网络连接
   - 查看控制台错误信息
   - 确认 Replicate 账户余额

## 本地调试通过后部署

确保本地完全正常后，提交代码：

```bash
git add .
git commit -m "fix: resolve API issues"
git push origin main
```

Vercel 会自动重新部署最新代码。 