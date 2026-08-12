export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  key: string;
}

export const BRAND_NAME = "Muhammad Afzal Ishaq";
export const BRAND_TAGLINE = "Full Stack Developer";
export const BRAND_EMAIL = "afzal@muhammadafzalishaq.dev";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Projects", href: "/projects", key: "projects" },
  { label: "Contact", href: "/contact", key: "contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/muhammadafzalishaq",
    key: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/muhammadafzalishaq",
    key: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/afzalishaq_dev",
    key: "twitter",
  },
];