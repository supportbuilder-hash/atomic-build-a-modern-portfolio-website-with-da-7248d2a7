"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { BRAND_EMAIL } from "@/lib/data";
type BRAND_GITHUB = any;
const BRAND_GITHUB: any = [];
type BRAND_LINKEDIN = any;
const BRAND_LINKEDIN: any = [];
type BRAND_TWITTER = any;
const BRAND_TWITTER: any = [];
import { useTranslations } from "next-intl";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ToastState {
  type: "success" | "error" | null;
  message: string;
}

// ─── useContactForm hook ──────────────────────────────────────────────────────

function useContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ type: null, message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: null, message: "" }), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // Simulate EmailJS submission (replace with real EmailJS call)
      await new Promise((resolve) => setTimeout(resolve, 1800));
      showToast("success", "Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      showToast("error", "Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, toast, errors, handleChange, handleSubmit };
}

// ─── Contact links data ───────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    key: "github",
    label: "GitHub",
    handle: "@muhammadafzalishaq",
    href: BRAND_GITHUB,
    icon: Github,
    description: "Browse my open-source work and contributions",
    color: "var(--accent)",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "Muhammad Afzal Ishaq",
    href: BRAND_LINKEDIN,
    icon: Linkedin,
    description: "Connect professionally and see my career journey",
    color: "var(--accent)",
  },
  {
    key: "twitter",
    label: "Twitter / X",
    handle: "@afzalishaq_dev",
    href: BRAND_TWITTER,
    icon: Twitter,
    description: "Follow for dev insights and project updates",
    color: "var(--accent)",
  },
  {
    key: "email",
    label: "Email",
    handle: BRAND_EMAIL,
    href: `mailto:${BRAND_EMAIL}`,
    icon: Mail,
    description: "Preferred for project inquiries and collaborations",
    color: "var(--accent)",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({
  label,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-white/70 tracking-wide"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === "email" ? "email" : "off"}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]/60 ${
          error
            ? "border-red-500/60 focus:ring-red-500/30"
            : "border-white/10 hover:border-white/20"
        }`}
      />
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function FormTextarea({
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-white/70 tracking-wide"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]/60 resize-none ${
          error
            ? "border-red-500/60 focus:ring-red-500/30"
            : "border-white/10 hover:border-white/20"
        }`}
      />
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ toast }: { toast: ToastState }) {
  return (
    <AnimatePresence>
      {toast.type && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl max-w-sm ${
            toast.type === "success"
              ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-200"
              : "bg-red-950/80 border-red-500/30 text-red-200"
          }`}
          role="alert"
          aria-live="polite"
        >
          {toast.type === "success" ? (
            <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0" aria-hidden="true" />
          )}
          <p className="text-sm leading-snug">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const t = useTranslations();
  const { form, loading, toast, errors, handleChange, handleSubmit } =
    useContactForm();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Toast */}
      <Toast toast={toast} />

      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="relative overflow-hidden pt-32 pb-20 px-6">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="h-[500px] w-[700px] rounded-full bg-[var(--accent)]/8 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                {t("contact.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white text-balance leading-[1.05]"
            >
              {t("contact.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed text-pretty"
            >
              {t("contact.hero.subtitle")}
            </motion.p>
          </div>
        </section>
      </Reveal>

      {/* ── Two-column layout ─────────────────────────────────────────────── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">

          {/* Left column */}
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight text-balance">
                {t("contact.left.heading")}
              </h2>
              <p className="mt-5 text-base text-white/55 leading-relaxed">
                {t("contact.left.body")}
              </p>

              {/* Availability badge */}
              <div className="mt-8 inline-flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/30 px-4 py-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-emerald-300">
                  {t("contact.availability")}
                </span>
              </div>

              {/* Contact links */}
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="mt-10 flex flex-col gap-3"
                aria-label="Contact channels"
              >
                {CONTACT_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.li key={link.key} variants={fadeInUp}>
                      <motion.a
                        href={link.href}
                        target={link.key !== "email" ? "_blank" : undefined}
                        rel={link.key !== "email" ? "noopener noreferrer" : undefined}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/4 p-4 hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/6 transition-all duration-300"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/12 transition-all duration-300">
                          <Icon
                            className="h-5 w-5 text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
                            {link.label}
                          </p>
                          <p className="text-xs text-white/40 truncate mt-0.5">
                            {link.handle}
                          </p>
                          <p className="text-xs text-white/35 mt-0.5 hidden sm:block">
                            {link.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          className="h-4 w-4 text-white/20 group-hover:text-[var(--accent)]/70 transition-all duration-300 shrink-0"
                          aria-hidden="true"
                        />
                      </motion.a>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </Reveal>

          {/* Right column — glass form */}
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-8 md:p-10 shadow-[0_2px_4px_rgba(0,0,0,0.08),0_24px_64px_-16px_rgba(0,0,0,0.4)]">
              {/* Subtle inner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
              />

              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {t("contact.form.heading")}
              </h3>
              <p className="text-sm text-white/45 mb-8">
                {t("contact.form.subheading")}
              </p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput
                    label={t("contact.form.nameLabel")}
                    name="name"
                    value={form.name}
                    placeholder={t("contact.form.namePlaceholder")}
                    error={errors.name}
                    onChange={handleChange}
                  />
                  <FormInput
                    label={t("contact.form.emailLabel")}
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder={t("contact.form.emailPlaceholder")}
                    error={errors.email}
                    onChange={handleChange}
                  />
                </div>

                <FormInput
                  label={t("contact.form.subjectLabel")}
                  name="subject"
                  value={form.subject}
                  placeholder={t("contact.form.subjectPlaceholder")}
                  error={errors.subject}
                  onChange={handleChange}
                />

                <FormTextarea
                  label={t("contact.form.messageLabel")}
                  name="message"
                  value={form.message}
                  placeholder={t("contact.form.messagePlaceholder")}
                  error={errors.message}
                  onChange={handleChange}
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? {} : { scale: 1.02 }}
                  whileTap={loading ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-foreground)] shadow-[0_4px_24px_-4px_var(--accent)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  aria-label={loading ? t("contact.form.sending") : t("contact.form.submit")}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {t("contact.form.submit")}
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-white/30">
                  {t("contact.form.privacy")}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Response time strip ───────────────────────────────────────────── */}
      <Reveal>
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-white/8 bg-white/3 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/20">
                  <Mail className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t("contact.strip.title")}
                  </p>
                  <p className="text-xs text-white/45 mt-0.5">
                    {t("contact.strip.subtitle")}
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${BRAND_EMAIL}`}
                className="shrink-0 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-5 py-2.5 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {t("contact.strip.cta")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}