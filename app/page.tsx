"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Database, Globe, Layers, Star, Terminal, Zap, Code2 as Github, Briefcase as Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";
import { useTranslations } from "next-intl";

// ─── Inline data ────────────────────────────────────────────────────────────

const SKILLS = [
  { label: "React & Next.js", icon: Globe, level: 95 },
  { label: "Node.js & Express", icon: Terminal, level: 90 },
  { label: "TypeScript", icon: Code, level: 92 },
  { label: "PostgreSQL & MongoDB", icon: Database, level: 85 },
  { label: "System Architecture", icon: Layers, level: 80 },
  { label: "API Design & REST", icon: Zap, level: 88 },
];

const FEATURED_PROJECTS = [
  {
    id: "1",
    title: "CloudDesk CRM",
    description:
      "A full-featured customer relationship management platform built for SMBs. Real-time dashboards, pipeline tracking, and automated follow-up workflows.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/85ee0470c3e04f08b619bf58ea800f17.jpg",
    href: "/projects",
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    id: "2",
    title: "DevFlow CI",
    description:
      "A lightweight CI/CD orchestration tool that integrates with GitHub Actions and deploys to any cloud provider with zero-config YAML pipelines.",
    tags: ["Node.js", "Docker", "Redis", "TypeScript"],
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/f99a79aad41642189fcf3c2bbdff3b57.jpg",
    href: "/projects",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "3",
    title: "Lexify AI",
    description:
      "An AI-powered document analysis tool that extracts key clauses, flags risks, and summarizes legal contracts in seconds.",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lexify%20AI",
    href: "/projects",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO, Launchpad Studio",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah%20Chen",
    quote:
      "Afzal delivered a production-ready platform in six weeks. His architecture decisions saved us months of technical debt down the road.",
    stars: 5,
  },
  {
    id: "2",
    name: "James Okafor",
    role: "Founder, Traxify",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James%20Okafor",
    quote:
      "Working with Afzal felt like having a senior engineer on the team from day one. Clean code, clear communication, and zero surprises.",
    stars: 5,
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "Product Lead, Finova",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya%20Nair",
    quote:
      "He rebuilt our legacy backend in TypeScript and cut our API response times by 60%. Genuinely impressive work.",
    stars: 5,
  },
];

const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "15+", label: "Happy clients" },
  { value: "60%", label: "Avg. perf. gain" },
];

// ─── Hero variants ───────────────────────────────────────────────────────────

const heroHeading: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const heroBadge: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="relative overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center pt-24 pb-20 px-6"
      >
        {/* Background mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[var(--brand-primary)]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-violet-500/6 blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={heroBadge}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={heroHeading}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05] text-balance"
            >
              {t("hero.greeting")}{" "}
              <span className="text-[var(--brand-primary)]">
                {t("hero.name")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-lg text-pretty"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-primary)] text-[var(--brand-primary-foreground)] font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-[0_4px_24px_-4px_var(--brand-primary)] hover:shadow-[0_8px_32px_-4px_var(--brand-primary)] hover:-translate-y-0.5"
              >
                {t("hero.cta_primary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--brand-primary)]/50 hover:bg-[var(--brand-primary)]/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t("hero.cta_secondary")}
                <Mail className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Social row */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href="https://github.com/muhammadafzalishaq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/muhammadafzalishaq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="w-px h-5 bg-[var(--border)]" />
              <span className="text-sm text-[var(--muted-foreground)]">
                {t("hero.social_label")}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: avatar + floating stat cards */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--brand-primary)]/30 to-violet-500/20 blur-2xl scale-110" />
              <img
                src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/49e9fbf32f5b456c8af5bee811fa6ba8.png"
                alt="Muhammad Afzal Ishaq"
                className="relative w-full h-full object-cover rounded-full border-2 border-[var(--brand-primary)]/30 shadow-[0_0_60px_-10px_var(--brand-primary)]"
              />

              {/* Floating card: experience */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="absolute -left-10 top-8 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] flex items-center gap-3"
              >
                <span className="text-2xl font-bold text-[var(--brand-primary)]">5+</span>
                <span className="text-xs text-[var(--muted-foreground)] leading-tight">
                  Years<br />Experience
                </span>
              </motion.div>

              {/* Floating card: projects */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
                className="absolute -right-8 bottom-10 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] flex items-center gap-3"
              >
                <span className="text-2xl font-bold text-[var(--brand-primary)]">40+</span>
                <span className="text-xs text-[var(--muted-foreground)] leading-tight">
                  Projects<br />Shipped
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="border-y border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-1"
              >
                <span className="text-4xl font-bold text-[var(--brand-primary)] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Skills / What I bring ─────────────────────────────────────────── */}
      <Reveal>
        <section id="skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: heading */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-5"
              >
                <span className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest">
                  {t("skills.eyebrow")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-tight">
                  {t("skills.heading")}
                </h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-pretty">
                  {t("skills.description")}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium text-sm hover:gap-3 transition-all duration-200 w-fit"
                >
                  {t("skills.link")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Right: skill bars */}
              <div className="flex flex-col gap-5">
                {SKILLS.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.label}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[var(--brand-primary)]" aria-hidden="true" />
                          <span className="text-sm font-medium text-[var(--foreground)]">
                            {skill.label}
                          </span>
                        </div>
                        <span className="text-xs text-[var(--muted-foreground)] font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-[var(--border)]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-violet-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.07 + 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="projects"
          className="py-24 px-6 bg-[var(--card)]/30 border-y border-[var(--border)]"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest">
                  {t("projects.eyebrow")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-tight">
                  {t("projects.heading")}
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium text-sm hover:gap-3 transition-all duration-200 shrink-0"
              >
                {t("projects.view_all")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {FEATURED_PROJECTS.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)] hover:border-[var(--brand-primary)]/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <h3 className="font-bold text-lg text-[var(--foreground)] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] hover:gap-2.5 transition-all duration-200 mt-1 w-fit"
                    >
                      {t("projects.case_study")}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <Reveal>
        <section id="testimonials" className="py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
              <span className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest">
                {t("testimonials.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-tight">
                {t("testimonials.heading")}
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-pretty">
                {t("testimonials.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t_item, i) => (
                <motion.div
                  key={t_item.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.15)] hover:border-[var(--brand-primary)]/20 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1" aria-label={`${t_item.stars} out of 5 stars`}>
                    {Array.from({ length: t_item.stars }).map((_, si) => (
                      <Star
                        key={si}
                        className="h-4 w-4 fill-[var(--brand-primary)] text-[var(--brand-primary)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="text-[var(--foreground)] text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t_item.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
                    <img
                      src={t_item.avatar}
                      alt={t_item.name}
                      className="w-10 h-10 rounded-full object-cover border border-[var(--border)]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {t_item.name}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {t_item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-[var(--brand-primary)]/20 bg-gradient-to-br from-[var(--card)] via-[var(--card)] to-[var(--brand-primary)]/5 p-10 md:p-16 overflow-hidden text-center flex flex-col items-center gap-6 shadow-[0_8px_48px_-12px_rgba(0,0,0,0.4)]">
              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[var(--brand-primary)]/10 blur-[80px]" />
              </div>

              <span className="text-[var(--brand-primary)] text-sm font-semibold uppercase tracking-widest">
                {t("cta.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-tight max-w-2xl">
                {t("cta.heading")}
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-pretty max-w-xl">
                {t("cta.description")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--brand-primary)] text-[var(--brand-primary-foreground)] font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-[0_4px_24px_-4px_var(--brand-primary)] hover:shadow-[0_8px_32px_-4px_var(--brand-primary)] hover:-translate-y-0.5"
                >
                  {t("cta.button_primary")}
                  <Mail className="h-4 w-4" />
                </Link>
                <a
                  href="https://github.com/muhammadafzalishaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--brand-primary)]/50 hover:bg-[var(--brand-primary)]/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {t("cta.button_secondary")}
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}