<div align="center">
  <img src="public/images/logo.png" alt="GaonKa Logo" width="200"/>
  <h1>🌾 GaonKa – Gaon Se Ghar Tak</h1>
  <p><strong>100% Organic, Pure & Farm-Fresh Food Direct from Indian Villages</strong></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js&style=for-the-badge)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
  [![Security Standards](https://img.shields.io/badge/OWASP-Secured-red?style=for-the-badge)](https://owasp.org/)
  [![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-green?style=for-the-badge)](#-seo--performance)
</div>

<br />

GaonKa is a high-performance, ultra-secure e-commerce platform built on **Next.js 16 (App Router)**. It connects urban consumers in major cities with authentic, preservative-free, and organic agricultural products directly from Indian villages. 

This repository boasts enterprise-grade SEO optimizations, robust security headers, and an aesthetically superior, framer-motion-powered user interface.

---

## ✨ Features

- ⚡️ **Blazing Fast Performance:** Next.js Server Components, forced Brotli/Gzip compression, and highly optimized image loading.
- 🛡️ **Military-Grade Security:** Strict Content Security Policies (CSP), `X-Frame-Options` (Clickjacking defense), and tech-stack obfuscation.
- 🎯 **Hyper-Optimized SEO:** Dynamic metadata base routing, custom `sitemap.ts`, strict `robots.ts` indexing, and full JSON-LD Schema integration targeting "Organic Groceries".
- 🔐 **Stealth Admin Panel:** Hidden internal dashboard protected by secure middleware and cookie-based JWT sessions.
- 🎨 **Premium UI/UX:** Built with Tailwind CSS v4 and Framer Motion for smooth scroll animations and modern, responsive design.

---

## 🚀 Quick Start

Follow these steps to run the project locally.

### 1. Prerequisites
- Node.js `^20.0.0`
- npm or yarn

### 2. Clone and Install
```bash
git clone https://github.com/your-username/gaonka.git
cd gaonka
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory. You **must** populate this for the admin panel to function correctly.

```env
# .env.local
ADMIN_USERNAME=NextRealmAI
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=gaonka_super_secret_key_2026
SESSION_NAME=gaonka_admin_session
ADMIN_ROUTE=/admin-gaonka-9fX72K
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🛡️ Security Architecture

We take security seriously. The application incorporates multiple layers of automatic defense via `middleware.ts`:

- **Admin Redirection/Stealth:** Attempting to access the admin base route without a valid session cookie silently redirects the user to the homepage, hiding its existence.
- **CSP (Content Security Policy):** Locks down external script execution. Only allows our internal scripts and specifically whitelisted integrations (like Formspree).
- **No-Sniff & No-Frame:** `X-Content-Type-Options: nosniff` and `X-Frame-Options: DENY` protect against malicious content manipulation and UI redress attacks.
- **Header Obfuscation:** `poweredByHeader: false` is set in `next.config.ts` to prevent automated bots from scanning our framework vulnerabilities.

---

## 📈 SEO & Performance

The platform is explicitly designed to rank #1 for organic food delivery in major Indian cities.

- **`app/layout.tsx`:** Contains comprehensive OpenGraph, Twitter Cards, and canonical URL definitions targeting keywords like `"organic food india"`, `"farm to home organic"`, and `"cold pressed oil pure"`.
- **JSON-LD Schema:** Embedded Organization and WebSite schemas for rich search results.
- **`app/sitemap.ts`:** Automatically generates daily-refreshing sitemaps prioritizing the `/products` pages.
- **`app/robots.ts`:** Tells Googlebot exactly what to index, while strictly keeping bots out of `/admin` and `/api` routes to save crawl budget and protect data.

---

## 📂 Project Structure

```bash
gaonka/
├── app/
│   ├── admin-gaonka-9fX72K/  # Secure internal admin panel
│   ├── products/             # Dynamic catalog & shopping routes
│   ├── press/                # Media & PR page
│   ├── layout.tsx            # Root HTML framework & Global SEO metadata
│   ├── page.tsx              # Main Landing Page
│   ├── robots.ts             # Dynamic Robots.txt generator
│   └── sitemap.ts            # XML Sitemap generator
├── components/               # Reusable UI (Navbar, Footer, Hero, Products)
├── lib/                      # Authentication (JWT) & Utility functions
├── data/                     # Static product & content registries
├── public/                   # Static assets (images, fonts, icons)
├── middleware.ts             # Edge Security & Route Protection
└── next.config.ts            # Next.js build & compression settings
```

---

## 🛠️ Tech Stack Overview

| Category | Technology |
|----------|------------|
| **Core Framework** | Next.js 16 (App Router), React 19 |
| **Styling** | Tailwind CSS v4 |
| **Typography** | Bodoni Moda, Jost (via `next/font`) |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |

---

## 📝 License & Copyright

All rights reserved by **GaonKa Farm & Village Team**. Unauthorized copying, modification, or distribution of this proprietary application is strictly prohibited.
