# 🚀 Mohammad Faiz Khan — Developer Portfolio

A fully responsive, multi-theme developer portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and live **GitHub API** integration.

---

## ✨ Features

- 🌌 **Dark Futuristic** — glassmorphism + animated particle canvas + neon gradients
- 🧱 **Minecraft Theme** — pixel-style VT323 font, blocky UI, pixelated grid background
- 💼 **Minimal Professional** — clean, understated, recruiter-ready
- 🔄 **Theme switcher** persists to localStorage
- 🤖 **Live GitHub API** — auto-fetches all your repos, highlights featured ones
- ✍️ **Typewriter animation** across multiple phrases
- 📱 **Fully mobile responsive** with hamburger nav

---

## 🗂 Project Structure

```
faiz-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + metadata + fonts
│   │   ├── page.tsx          # Main page (all sections assembled)
│   │   └── globals.css       # Theme CSS variables + base styles
│   ├── components/
│   │   ├── ui/
│   │   │   └── ThemeProvider.tsx   # Theme context + persistence
│   │   └── sections/
│   │       ├── Navbar.tsx          # Responsive nav + theme switcher
│   │       ├── Hero.tsx            # Hero + particle canvas + typewriter
│   │       └── Projects.tsx        # Projects + GitHub API fetch
│   ├── hooks/
│   │   └── useGitHubRepos.ts       # GitHub API custom hook
│   └── lib/                        # (add utilities here)
├── public/                          # Static assets (add favicon, OG image)
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🛠 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Clone this repo (or copy the folder)
cd faiz-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## 🔧 Customization

### Add your own image / avatar
Drop `public/avatar.png` and import it in `Hero.tsx`:
```tsx
import Image from 'next/image'
<Image src="/avatar.png" alt="Faiz" width={200} height={200} />
```

### Update GitHub username
In `src/app/page.tsx` and `src/components/sections/Projects.tsx`:
```ts
useGitHubRepos('faizkhan013')  // ← change to your username
```

### Add more featured projects
In `src/components/sections/Projects.tsx`, edit the `FEATURED_PROJECTS` array.

### GitHub API rate limit
The public GitHub API allows 60 requests/hour unauthenticated. To increase:
1. Create a GitHub Personal Access Token (no scopes needed for public repos)
2. Add to `.env.local`:
```
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
```
3. Update the fetch in `useGitHubRepos.ts`:
```ts
headers: { Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` }
```

---

## 🚀 Deploy to Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B — GitHub Integration
1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** ✅

Your portfolio will be live at `https://your-project.vercel.app`

---

## 🌐 Deploy to Netlify

```bash
# Build first
npm run build

# Then drag the `out/` folder to netlify.com/drop
# OR use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

> Note: For Netlify with Next.js App Router, install `@netlify/plugin-nextjs`:
> ```bash
> npm install @netlify/plugin-nextjs
> ```
> And create `netlify.toml`:
> ```toml
> [[plugins]]
> package = "@netlify/plugin-nextjs"
> ```

---

## 📦 Build for Production

```bash
npm run build   # Creates optimized production build
npm start       # Serve the production build locally
```

---

## 🎨 Theme Reference

| Theme | Font | Accent | Background |
|-------|------|--------|------------|
| Dark Futuristic | Outfit | Purple + Cyan | #0a0a12 |
| Minecraft | VT323 (pixel) | Green + Amber | #1a1a1a |
| Minimal Pro | Outfit | Near-black | #fafaf9 |

---

## 📧 Contact Form

The contact form uses `mailto:` to open the user's email client. For a full backend form, integrate:
- **Formspree** — free, no backend needed
- **Resend** — free tier for sending emails via API
- **EmailJS** — client-side email sending

---

Made with ❤️ by Mohammad Faiz Khan | faiz.khan6718@gmail.com
