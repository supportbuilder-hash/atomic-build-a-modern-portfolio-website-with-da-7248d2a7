"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 as Github, ExternalLink, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: "1",
    title: "CloudCommerce Platform",
    description:
      "A high-performance e-commerce platform built with Next.js and Node.js. Features real-time inventory, Stripe payments, and a custom CMS for product management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    category: "Full Stack",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/bb33dce1ee5c47948cdc0d46f592e8f6.png",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "2",
    title: "DevOps Pipeline Orchestrator",
    description:
      "Automated CI/CD pipeline management tool with Docker container orchestration, Kubernetes deployments, and real-time build monitoring dashboards.",
    tech: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Go"],
    category: "DevOps",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/f99a79aad41642189fcf3c2bbdff3b57.jpg",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "3",
    title: "TaskFlow API",
    description:
      "RESTful API backend for a project management suite. Includes JWT auth, role-based access control, WebSocket notifications, and comprehensive Swagger docs.",
    tech: ["Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
    category: "Backend",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/70164376d64f4181a9f64f83e0d6dc40.png",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "4",
    title: "DesignSystem UI Kit",
    description:
      "A comprehensive React component library with 60+ accessible components, dark mode support, Storybook documentation, and full TypeScript coverage.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Radix UI"],
    category: "Frontend",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/014f9223e7bd45a1b9c4f9dd1172d45f.png",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "5",
    title: "InfraWatch Monitoring",
    description:
      "Cloud infrastructure monitoring solution with Prometheus metrics, Grafana dashboards, automated alerting, and multi-cloud support for AWS, GCP, and Azure.",
    tech: ["Prometheus", "Grafana", "AWS", "Python", "Terraform"],
    category: "DevOps",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8cbef9efa9a64fe39522e4f9519620d4.png",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "6",
    title: "AnalyticsDash",
    description:
      "Interactive analytics dashboard with real-time data visualization, custom chart builder, CSV export, and multi-tenant support for SaaS businesses.",
    tech: ["React", "D3.js", "TypeScript", "Recharts", "Tailwind CSS"],
    category: "Frontend",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8cbef9efa9a64fe39522e4f9519620d4.png",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "7",
    title: "AuthVault Service",
    description:
      "Microservice authentication platform supporting OAuth2, SAML, and TOTP. Handles millions of auth requests daily with sub-10ms response times.",
    tech: ["Go", "PostgreSQL", "Redis", "OAuth2", "Docker"],
    category: "Backend",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/2a3b2524abb048cc9fac25dbacd85c0f.png",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "8",
    title: "HealthTrack App",
    description:
      "Full-stack wellness application with personalized workout plans, nutrition tracking, progress analytics, and social features for community challenges.",
    tech: ["React Native", "GraphQL", "Node.js", "PostgreSQL", "AWS"],
    category: "Full Stack",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/0bc3484b82884976bc76cd907aa6c668.webp",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
  {
    id: "9",
    title: "ContentCraft CMS",
    description:
      "Headless CMS with a visual page builder, multi-language support, media asset management, and GraphQL API for seamless frontend integration.",
    tech: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "AWS S3"],
    category: "Full Stack",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/0bc3484b82884976bc76cd907aa6c668.webp",
    githubLink: "https://github.com/muhammadafzalishaq",
    liveLink: "https://muhammadafzalishaq.dev",
  },
];

const CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
] as const;

type Category = (typeof CATEGORIES)[number];

const CATEGORY_COLORS: Record<string, string> = {
  "Full Stack": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  Frontend: "bg-sky-500/15 text-sky-300 border-sky-500/20",
  Backend: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  DevOps: "bg-orange-500/15 text-orange-300 border-orange-500/20",
};

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/60">
      {label}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colorClass =
    CATEGORY_COLORS[category] ??
    "bg-white/10 text-white/60 border-white/10";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        colorClass,
      )}
    >
      {category}
    </span>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/4 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_4px_32px_-8px_rgba(99,102,241,0.25)]"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3">
          <CategoryBadge category={project.category} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug text-white">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 border-t border-white/8 pt-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-200 hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            Source
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-200 hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="min-h-screen">
      {/* ── Page Hero ── */}
      <Reveal>
        <section className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-36">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/8 blur-[120px]"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]"
            >
              Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t("projects.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
              className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/55 md:text-lg"
            >
              {t("projects.hero.subtitle")}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-8"
            >
              {[
                { value: "9+", label: t("projects.stats.projects") },
                { value: "5", label: t("projects.stats.categories") },
                { value: "20+", label: t("projects.stats.technologies") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Filter Tab Bar ── */}
      <Reveal delay={0.05}>
        <section className="sticky top-16 z-20 border-b border-white/8 bg-black/60 px-6 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex-shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                  activeCategory === cat
                    ? "border-[var(--accent)] bg-[var(--accent)] text-black shadow-[0_0_16px_rgba(99,102,241,0.35)]"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/8 hover:text-white",
                )}
              >
                {cat}
              </button>
            ))}

            <span className="ml-auto flex-shrink-0 text-xs text-white/35">
              {filtered.length} {t("projects.filter.count")}
            </span>
          </div>
        </section>
      </Reveal>

      {/* ── Projects Grid ── */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center text-white/40"
            >
              {t("projects.filter.empty")}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <Reveal>
        <section className="relative overflow-hidden border-t border-white/8 px-6 py-20 md:py-28">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[100px]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t("projects.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/55">
              {t("projects.cta.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(99,102,241,0.6)] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                {t("projects.cta.primary")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>

              <a
                href="https://github.com/muhammadafzalishaq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t("projects.cta.github")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}