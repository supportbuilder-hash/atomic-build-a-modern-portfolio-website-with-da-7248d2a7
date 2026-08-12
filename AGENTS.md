# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
Build a modern portfolio website with dark mode

Additional details provided by the user:
- What is your full name or personal brand?: Muhammad Afzal Ishaq
- What is your role or title?: Full Stack Developer
- What is your primary field?: Software Engineering

## Goal
Build a modern dark-mode portfolio website for Muhammad Afzal Ishaq, a Full Stack Developer, with animated homepage, about, projects, and contact pages using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Project type
portfolio

## Design system — match this exactly
- Color tokens: `--background: #0A0A0F`, `--foreground: #E2E8F0`, `--card: #13131F`, `--border: #2D2D4E`, `--muted-foreground: #94A3B8`, `--primary: #7C3AED`, `--accent: #A78BFA`, `--brand-primary: #18181B`, `--brand-on-primary: #FFFFFF`, `--brand-secondary: #3F3F46`, `--brand-accent: #7C3AED`, `--brand-background: #0A0A0F`

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`about`, `contact`, `cta`, `hero`, `nav`, `projects`, `skills`, `testimonials`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
