# Tola Feyisa — Cybersecurity Portfolio

Professional cybersecurity portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS 3** (styling)
- **Framer Motion 11** (animations)
- **Lucide React** (icons)

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher

### Install dependencies

```bash
cd tola-portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for production

```bash
npm run build
```

Output goes to `dist/`

### Preview production build

```bash
npm run preview
```

---

## Deployment

### Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Vite. Click **Deploy**.
4. Your portfolio is live.

Or deploy from CLI:

```bash
npm install -g vercel
vercel --prod
```

### Netlify

1. Push to GitHub.
2. Connect repo at [netlify.com](https://netlify.com).
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## Contact Form

The contact form uses [FormSubmit](https://formsubmit.co) — no backend or API key required.

On first submission, FormSubmit will send a confirmation email to `tolaf3364@gmail.com`. 
Click the link in that email to activate the form. All subsequent submissions will arrive directly.

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Education, Skills, Projects, ...
│   └── ui/           # Reusable UI primitives
├── data/             # Content: projects, skills, certs, experience
├── hooks/            # Custom React hooks
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

- Update personal information in `src/data/` files
- Add new projects in `src/data/projects.ts`
- Add certifications in `src/data/certifications.ts`
- Adjust colors in `tailwind.config.js`
