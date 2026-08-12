"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Award, Briefcase, Calendar, CheckCircle, Code, GitBranch, GraduationCap, Star, Trophy, Users, Zap } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/data";

// ─── Inline mock data ────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    id: "exp-1",
    company: "TechNova Solutions",
    role: "Senior Full Stack Developer",
    period: "2022 – Present",
    location: "Remote",
    achievements: [
      "Architected a microservices platform serving 2M+ monthly active users with 99.9% uptime",
      "Led a team of 8 engineers, introducing CI/CD pipelines that cut deployment time by 60%",
      "Rebuilt the core API layer in Node.js + TypeScript, reducing average response time from 420ms to 85ms",
      "Championed adoption of React Query and Zustand, eliminating 40% of redundant network calls",
    ],
  },
  {
    id: "exp-2",
    company: "Axiom Digital Agency",
    role: "Full Stack Developer",
    period: "2020 – 2022",
    location: "Lahore, Pakistan",
    achievements: [
      "Delivered 15+ client projects end-to-end using Next.js, Django REST Framework, and PostgreSQL",
      "Built a real-time analytics dashboard that processed 500K events/day using WebSockets and Redis",
      "Introduced automated testing (Jest + Playwright), raising code coverage from 12% to 78%",
      "Mentored 3 junior developers through structured code reviews and pair-programming sessions",
    ],
  },
  {
    id: "exp-3",
    company: "CloudBridge Inc.",
    role: "Backend Developer",
    period: "2019 – 2020",
    location: "Karachi, Pakistan",
    achievements: [
      "Designed and maintained RESTful APIs consumed by iOS and Android apps with 300K+ downloads",
      "Migrated a monolithic Rails app to a containerised Docker/Kubernetes architecture",
      "Implemented OAuth 2.0 and JWT authentication, securing endpoints for 50K+ registered users",
    ],
  },
  {
    id: "exp-4",
    company: "Freelance",
    role: "Web Developer",
    period: "2017 – 2019",
    location: "Remote",
    achievements: [
      "Completed 40+ projects on Upwork and Fiverr, maintaining a 4.9-star average rating",
      "Built e-commerce stores with Shopify and WooCommerce generating $1M+ in client revenue",
      "Developed custom WordPress plugins and themes for media and publishing clients",
    ],
  },
  {
    id: "exp-5",
    company: "University of Engineering & Technology",
    role: "BSc Computer Science",
    period: "2013 – 2017",
    location: "Lahore, Pakistan",
    achievements: [
      "Graduated with Distinction — CGPA 3.8 / 4.0",
      "Final-year thesis: 'Adaptive Load Balancing in Distributed Systems' — awarded Best Project",
      "President of the Computing Society, organising annual hackathons with 200+ participants",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    id: "ach-1",
    icon: Award,
    title: "AWS Certified Solutions Architect",
    subtitle: "Amazon Web Services · 2023",
    description:
      "Professional-level certification validating expertise in designing distributed systems on AWS.",
    accent: "blue",
  },
  {
    id: "ach-2",
    icon: Trophy,
    title: "1st Place — HackFest 2022",
    subtitle: "National Hackathon · Islamabad",
    description:
      "Won first place among 120 teams by building an AI-powered supply-chain optimisation tool in 36 hours.",
    accent: "amber",
  },
  {
    id: "ach-3",
    icon: GitBranch,
    title: "Open Source Contributor",
    subtitle: "500+ GitHub Stars",
    description:
      "Maintainer of react-query-devtools-extension and contributor to Next.js, Prisma, and tRPC.",
    accent: "green",
  },
  {
    id: "ach-4",
    icon: Star,
    title: "Google Cloud Professional",
    subtitle: "Google Cloud · 2022",
    description:
      "Certified in cloud architecture, data engineering, and machine learning on Google Cloud Platform.",
    accent: "red",
  },
  {
    id: "ach-5",
    icon: Users,
    title: "Tech Speaker",
    subtitle: "JSConf Pakistan · 2023",
    description:
      "Delivered a talk on 'Scaling React Applications' to an audience of 600+ developers.",
    accent: "purple",
  },
  {
    id: "ach-6",
    icon: Zap,
    title: "Top Rated Plus — Upwork",
    subtitle: "Freelance Platform",
    description:
      "Achieved Top Rated Plus status in the top 3% of freelancers with 100% Job Success Score.",
    accent: "orange",
  },
];

const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "Django", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"] },
  { category: "Tools", items: ["Git", "Figma", "Prisma", "GraphQL", "tRPC"] },
];

const ACCENT_CLASSES: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: "bg-blue-500/10",   text: "text-blue-400",   border: "border-blue-500/20" },
  amber:  { bg: "bg-amber-500/10",  text: "text-amber-400",  border: "border-amber-500/20" },
  green:  { bg: "bg-emerald-500/10",text: "text-emerald-400",border: "border-emerald-500/20" },
  red:    { bg: "bg-rose-500/10",   text: "text-rose-400",   border: "border-rose-500/20" },
  purple: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
};

// ─── Hero variants ────────────────────────────────────────────────────────────

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroWord: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[520px] w-[520px] rounded-full bg-[var(--brand-primary)]/8 blur-[120px]" />
        </div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-primary)]"
        >
          <Code className="h-3.5 w-3.5" aria-hidden="true" />
          {t("about.eyebrow")}
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="mb-6 max-w-3xl text-5xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl"
        >
          {t("about.heroHeadline")
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                variants={heroWord}
                className="mr-[0.25em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
        </motion.h1>

        {/* Role subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
          className="max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]"
        >
          {t("about.heroSubtitle")}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border-2 border-[var(--muted-foreground)]/40 flex items-start justify-center pt-1.5"
          >
            <div className="h-1.5 w-1 rounded-full bg-[var(--muted-foreground)]/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Bio ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Portrait */}
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mx-auto max-w-sm lg:mx-0"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)]/30 to-transparent blur-sm" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]">
                <img
                  src="https://www.yumpu.com/en/image/facebook/34822525.jpg"
                  alt="Muhammad Afzal Ishaq — Full Stack Developer"
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
                  <p className="text-sm font-semibold text-white">{BRAND_NAME}</p>
                  <p className="text-xs text-white/60">{BRAND_TAGLINE}</p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Narrative */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                {t("about.bioHeading")}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="leading-relaxed text-[var(--muted-foreground)]">
                {t("about.bioParagraph1")}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="leading-relaxed text-[var(--muted-foreground)]">
                {t("about.bioParagraph2")}
              </p>
            </Reveal>

            {/* Highlight rows */}
            <div className="space-y-4">
              {[
                { icon: Code,          label: t("about.highlight1") },
                { icon: Users,         label: t("about.highlight2") },
                { icon: GraduationCap, label: t("about.highlight3") },
                { icon: Briefcase,     label: t("about.highlight4") },
              ].map(({ icon: Icon, label }, i) => (
                <Reveal key={i} delay={0.1 + i * 0.07}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-primary)]/15 text-[var(--brand-primary)]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-[var(--foreground)] md:text-3xl">
              {t("about.skillsHeading")}
            </h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SKILLS.map((group) => (
              <motion.div
                key={group.category}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.2)]"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)]">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[var(--brand-primary)]/70" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Experience Timeline ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-28">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)]">
              {t("about.timelineEyebrow")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
              {t("about.timelineHeading")}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[var(--brand-primary)]/40 via-[var(--brand-primary)]/20 to-transparent md:left-8"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12"
          >
            {EXPERIENCE.map((entry, idx) => (
              <motion.li
                key={entry.id}
                variants={slideInLeft}
                className="relative pl-14 md:pl-20"
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--brand-primary)] bg-[var(--background)] md:left-6"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
                </span>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--foreground)]">
                        {entry.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[var(--brand-primary)]">
                        {entry.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted-foreground)]">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {entry.period}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)]/60">
                        {entry.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {entry.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        <CheckCircle
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-primary)]/60"
                          aria-hidden="true"
                        />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Achievements Grid ─────────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-white/[0.015] py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)]">
                {t("about.achievementsEyebrow")}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                {t("about.achievementsHeading")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)]">
                {t("about.achievementsSubtitle")}
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ACHIEVEMENTS.map((ach) => {
              const accent = ACCENT_CLASSES[ach.accent] ?? ACCENT_CLASSES.blue;
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_32px_-8px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-[0_4px_40px_-8px_rgba(0,0,0,0.35)]"
                >
                  {/* Accent glow */}
                  <div
                    aria-hidden="true"
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${accent.bg} blur-2xl transition-opacity duration-300 group-hover:opacity-150`}
                  />

                  {/* Icon */}
                  <span
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accent.border} ${accent.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${accent.text}`} aria-hidden="true" />
                  </span>

                  {/* Content */}
                  <h3 className="mb-1 text-base font-semibold text-[var(--foreground)]">
                    {ach.title}
                  </h3>
                  <p className={`mb-3 text-xs font-medium ${accent.text}`}>{ach.subtitle}</p>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {ach.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--brand-primary)]/20 bg-gradient-to-br from-[var(--brand-primary)]/10 via-transparent to-transparent p-12 text-center shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <div className="h-64 w-64 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
            </div>

            <h2 className="relative mb-4 text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
              {t("about.ctaHeading")}
            </h2>
            <p className="relative mx-auto mb-8 max-w-md text-[var(--muted-foreground)]">
              {t("about.ctaSubtitle")}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-8 py-3.5 text-sm font-semibold text-[var(--brand-primary-foreground)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
            >
              {t("about.ctaButton")}
            </motion.a>
          </div>
        </section>
      </Reveal>

    </main>
  );
}