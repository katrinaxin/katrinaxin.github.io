
# Anti Scam & Trafficking Rescue International — 静态网站模板（GitHub Pages）

本仓库是一个无需付托管费的 NGO 官网模板。部署到 GitHub Pages 后即可使用，
每年仅需续费域名（如 `www.astrintl.org`）。

## 快速开始
1. 创建仓库：`yourusername.github.io`（例如 `astrintl.github.io`）
2. 上传本模板全部文件到仓库根目录
3. 在 GitHub 仓库 → **Settings → Pages**：Source 选择 `main` 分支
4. 访问 `https://yourusername.github.io` 查看网站

## 绑定自有域名
1. GitHub Pages 设置中填入自定义域名：`www.astrintl.org`
2. 在你的域名 DNS 添加：
   - CNAME: `www` → `yourusername.github.io`
   - 可选 A 记录（四个 GitHub Pages IP）
3. 等待 DNS 生效（通常 1–24 小时）

## 自定义
- 修改页面文案于各 `*.html` 文件
- `assets/css/style.css` 控制样式
- `assets/js/main.js` 控制基础交互
- `contact.html` 中的 Formspree `action` 替换为你的表单端点
- `donate.html` 中的 PayPal/Stripe 链接替换为你的捐赠链接

## 页面结构
- `index.html` 首页（使命、行动按钮、三大模块）
- `services.html` 服务项目
- `stories.html` 案例与资源
- `about.html` 关于我们
- `donate.html` 捐赠支持
- `contact.html` 联系我们（支持 Formspree 邮件提交）

## 许可证
模板以 MIT 协议开源，您可自由修改与用于公益项目。
