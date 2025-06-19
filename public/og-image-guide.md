# 社交分享图片设计指导

## 📐 图片规格要求

### 基本规格
- **尺寸**: 1200 x 630 像素
- **格式**: JPG 或 PNG
- **文件名**: `og-image.jpg`
- **位置**: `/public/og-image.jpg`

### 设计建议

#### 🎨 视觉元素
1. **背景**: 使用网站的渐变背景 (from-pink-50 via-rose-50 to-purple-50)
2. **主标题**: "AISoulmateVision"
3. **副标题**: "AI生成你的另一半"
4. **关键信息**: "完全免费 • 30秒生成 • 隐私保护"
5. **Logo**: 左上角放置 AI 图标

#### 📝 文字内容
```
AISoulmateVision
AI生成你的另一半

✨ 完全免费  🚀 30秒生成  🔒 隐私保护

上传照片，AI为你生成匹配的异性版本
```

#### 🎯 设计重点
- **清晰易读**: 确保在小尺寸下文字依然清晰
- **品牌一致**: 使用网站相同的颜色方案和字体风格
- **吸引眼球**: 突出"免费"和"AI"等关键词
- **专业感**: 避免过于花哨，保持专业AI工具的形象

## 🛠️ 制作方式

### 方式一: 在线设计工具
- **Canva**: 搜索 "Open Graph" 模板
- **Figma**: 创建 1200x630 画布
- **Adobe Express**: 社交媒体模板

### 方式二: 代码生成
可以使用 HTML/CSS 生成，然后截图：

```html
<div style="
  width: 1200px; 
  height: 630px; 
  background: linear-gradient(135deg, #fdf2f8, #fdf2f8, #f3e8ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  position: relative;
">
  <!-- Logo -->
  <div style="position: absolute; top: 40px; left: 40px;">
    <div style="
      width: 60px; height: 60px; 
      background: linear-gradient(135deg, #a855f7, #ec4899);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 24px;
    ">AI</div>
  </div>
  
  <!-- 主内容 -->
  <div style="text-align: center;">
    <h1 style="
      font-size: 72px;
      font-weight: bold;
      color: #1f2937;
      margin: 0 0 20px 0;
    ">AISoulmateVision</h1>
    
    <h2 style="
      font-size: 48px;
      color: #6b7280;
      margin: 0 0 40px 0;
    ">AI生成你的另一半</h2>
    
    <div style="
      font-size: 32px;
      color: #059669;
      margin: 0 0 30px 0;
    ">✨ 完全免费 • 🚀 30秒生成 • 🔒 隐私保护</div>
    
    <p style="
      font-size: 28px;
      color: #4b5563;
      margin: 0;
    ">上传照片，AI为你生成匹配的异性版本</p>
  </div>
</div>
```

## 📋 检查清单

- [ ] 图片尺寸正确 (1200x630)
- [ ] 文件保存为 `/public/og-image.jpg`
- [ ] 文字在小尺寸下清晰可读
- [ ] 颜色与网站风格一致
- [ ] 包含关键信息和卖点
- [ ] 文件大小合理 (建议 < 300KB)

## 🔄 测试方法

创建图片后，可以通过以下方式测试：

1. **Facebook 调试工具**: https://developers.facebook.com/tools/debug/
2. **Twitter Card 验证器**: https://cards-dev.twitter.com/validator
3. **LinkedIn 检查器**: https://www.linkedin.com/post-inspector/

输入网站URL，查看社交分享预览效果。

---

*完成后请将图片文件放置在 `/public/og-image.jpg`* 