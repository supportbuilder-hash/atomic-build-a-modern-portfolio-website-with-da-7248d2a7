"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, ArrowUp, Mail } from 'lucide-react';
import { navLinks, BRAND_NAME, BRAND_TAGLINE } from "@/lib/data";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" aria-hidden="true" />,
  linkedin: <Linkedin className="h-5 w-5" aria-hidden="true" />,
  twitter: <Twitter className="h-5 w-5" aria-hidden="true" />,
  email: <Mail className="h-5 w-5" aria-hidden="true" />,
};

const socialData = [
  { key: "github", url: "https://github.com/muhammadafzalishaq", label: "GitHub" },
  { key: "linkedin", url: "https://linkedin.com/in/muhammadafzalishaq", label: "LinkedIn" },
  { key: "twitter", url: "https://twitter.com/afzalishaq_dev", label: "Twitter / X" },
  { key: "email", url: "mailto:afzal@muhammadafzalishaq.dev", label: "Email" },
];

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();
  const navT = (Array.isArray(t.raw("nav")) ? {} : t.raw("nav")) as Record<string, string>;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--card)]/50"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-md w-fit"
            >
              <span className="font-bold text-lg text-[var(--foreground)]">
                {BRAND_NAME.split(" ")[0]}{" "}
                <span className="text-gradient">
                  {BRAND_NAME.split(" ").slice(1).join(" ")}
                </span>
              </span>
              <span className="text-xs text-[var(--muted-foreground)] font-code">
                {BRAND_TAGLINE}
              </span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Building digital experiences that actually work. Available for
              freelance and full-time roles.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialData.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target={s.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--accent)] hover:bg-[var(--primary)]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                >
                  {socialIcons[s.key]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4 tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded"
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4 tracking-wide uppercase">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:afzal@muhammadafzalishaq.dev"
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded"
              >
                afzal@muhammadafzalishaq.dev
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--accent)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] w-fit"
              >
                Start a conversation
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            © 2024 {BRAND_NAME}. Crafted with Next.js, TypeScript, and Tailwind
            CSS.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded group"
          >
            Back to top
            <span className="p-1.5 rounded-lg border border-[var(--border)] group-hover:border-[var(--primary)]/40 group-hover:bg-[var(--primary)]/10 transition-all duration-200">
              <ArrowUp className="h-3 w-3" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}