# 🚀 Deployment Guide: Haithm Malek Portfolio

This modern Vue 3 + Tailwind CSS portfolio is built for ultra-fast load times and static hosting.

The repository is pre-configured with `base: './'` in `vite.config.js`, making it compatible out-of-the-box with **Vercel**, **GitHub Pages**, **Cloudflare Pages**, and **Netlify** for **$0 / free**.

---

## ⚡ Option 1: Deploy to Vercel (1-Click & Recommended)

### Via Vercel CLI (Fastest):
```bash
# 1. Install or run Vercel CLI
npx vercel

# 2. Accept defaults:
# - Set build command: npm run build
# - Output directory: dist
```

### Via GitHub + Vercel Dashboard:
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Haithm Malek portfolio"
   git branch -M main
   git remote add origin https://github.com/haithamahmed2008/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) &rarr; **Add New Project** &rarr; Select your repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**. Your portfolio is live with free SSL!

---

## 🌐 Option 2: Deploy to GitHub Pages for $0

You can automate deployment to GitHub Pages via GitHub Actions:

1. In your repository, create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
2. In your GitHub repository settings &rarr; **Pages** &rarr; Source: Select **GitHub Actions**.
3. Push to `main`, and your site will be live at `https://haithamahmed2008.github.io/portfolio/`.

---

## 💻 Local Development

To run locally in development mode:
```bash
npm run dev
```

To build and preview production build locally:
```bash
npm run build
npm run preview
```
