# Nexfolio
Production-style developer portfolio dashboard built with Next.js, TypeScript, and Tailwind CSS featuring analytics widgets, GitHub API integration, responsive SaaS UI, authentication flows, and modern dashboard architecture.

An enterprise-grade Portfolio Dashboard Web App built with Next.js (App Router), TypeScript, and Tailwind CSS. It features a modern SaaS-like design (glassmorphism, gradients, animations) to manage projects, track analytics, and showcase your developer journey.

## Features

- **Modern UI**: Built with Tailwind CSS, shadcn/ui, and Framer Motion.
- **Next.js App Router**: Optimized routing and Server/Client Component separation.
- **Analytics Dashboard**: Simulated GitHub stats, commit charts (Recharts), and recent activity.
- **Portfolio Management**: Projects table with tech stack tags and statuses.
- **Authentication Pages**: Clean, responsive Login and Signup screens.
- **Theme Support**: Built-in Dark/Light mode toggle support (via `next-themes`).

## Getting Started

First, install Node.js and npm if you haven't already.

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

- `src/app`: Next.js App Router pages and layouts.
  - `(auth)`: Login and Signup pages.
  - `(dashboard)`: Dashboard and Projects pages.
  - `api`: Mock REST API routes.
- `src/components`:
  - `ui`: Reusable primitive components (Button, Card, Input, Table, etc.).
  - `layout`: Sidebar, TopNav.
  - `features`: Complex components like `ActivityChart`.
- `src/lib/utils.ts`: Utility functions like `cn` for Tailwind class merging.

## Deployment

Deploy this project easily on Vercel:

```bash
npm i -g vercel
vercel
```
