/**
 * PORTFOLIO CONTENT — edit this file to update copy, links, and project media.
 * Fields still marked PLACEHOLDER await personal details from Ezekiel.
 */

export const site = {
  name: 'Ezekiel Kigozi',
  shortName: 'Ezekiel',
  role: 'Software Developer',
  email: 'ez.kigozi@gmail.com',
  location: 'Kampala, Uganda',
  social: {
    github: 'https://github.com/zacman-ug',
    linkedin: 'https://linkedin.com/in/', // PLACEHOLDER
    twitter: 'https://x.com/', // PLACEHOLDER
  },
} as const

export const hero = {
  lede:
    'I design and ship digital products — heritage tools, HR platforms, and local business sites.',
  ctaPrimary: { label: 'View work', href: '#work' },
  ctaSecondary: { label: 'Get in touch', href: '#contact' },
  /** PLACEHOLDER hero image — replace with a real portrait or workspace photo */
  image: {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80',
    alt: 'PLACEHOLDER: bright modern workspace with soft daylight',
  },
} as const

export const about = {
  eyebrow: 'About',
  headline: 'Building with Cursor. Shipping real apps.',
  body: [
    'Ezekiel is a software developer building full-stack products — Buganda Heritage, an employee management platform, Chef Godwin’s catering site, and Will-mar’s. He also works on secure systems such as EFRIS integrations.',
    'Based in Kampala. Open to collaborations that need clear product thinking and hands-on implementation.',
  ],
  highlights: [
    { label: 'Focus', value: 'Full-stack · Frontend · APIs' },
    { label: 'Open to', value: 'Select freelance & full-time' }, // PLACEHOLDER intent
    { label: 'Based', value: site.location },
  ],
} as const

export type Project = {
  id: string
  title: string
  year: string
  tags: string[]
  summary: string
  note?: string
  image: { src: string; alt: string }
  href: string
  repoUrl?: string
  liveUrl?: string
  placeholder: boolean
}

export const projects: Project[] = [
  {
    id: 'buganda',
    title: 'Buganda Heritage',
    year: '2026',
    tags: ['Full-stack', 'React', 'PostgreSQL'],
    summary:
      'A lineage and heritage app for Buganda families — 55 clans, totems, generational trees, photo uploads, and heritage visualizations.',
    note: 'Built with Cursor · React, Vite, Express, Prisma, PostgreSQL · Role: builder / full-stack',
    image: {
      src: '/projects/buganda.png',
      alt: 'Abstract cover for Buganda Heritage — clan rings and lineage motif',
    },
    href: 'https://github.com/zacman-ug/BUGANDA',
    repoUrl: 'https://github.com/zacman-ug/BUGANDA',
    placeholder: false,
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    year: '2026',
    tags: ['Full-stack', 'HR', 'PostgreSQL'],
    summary:
      'HR and operations platform organized by department and team — profiles, leave, attendance, Uganda payroll (PAYE/NSSF/LST), task workflows, department chat, and an offline-capable PWA.',
    note: 'Built with Cursor · React, Vite, Tailwind, Dexie · Express, Prisma, Socket.io, PostgreSQL',
    image: {
      src: '/projects/ems.png',
      alt: 'Abstract cover for Employee Management System — slate and sky panels',
    },
    href: 'https://github.com/zacman-ug/Employee-mgt',
    repoUrl: 'https://github.com/zacman-ug/Employee-mgt',
    placeholder: false,
  },
  {
    id: 'chef-godwin',
    title: 'Chef Godwin Foods & Kitchen',
    year: '2026',
    tags: ['Full-stack', 'React', 'Catering'],
    summary:
      'Full-stack site for Chef Godwin Marvin — event catering and cooking school in Kampala, with admin auth and PostgreSQL-backed content.',
    note: 'Built with Cursor · React, Vite, Tailwind · Express, Prisma, PostgreSQL, JWT',
    image: {
      src: '/projects/chef-godwin.png',
      alt: 'Abstract cover for Chef Godwin Foods — warm amber on stone',
    },
    href: 'https://github.com/zacman-ug/catering',
    repoUrl: 'https://github.com/zacman-ug/catering',
    placeholder: false,
  },
  {
    id: 'will-mars',
    title: 'Will-mar’s',
    year: '2026',
    tags: ['React', 'Vite', 'Tailwind'],
    summary:
      'Marketing site for Will-mar’s — menu, gallery, location, and WhatsApp / Glovo actions for a Kampala food and cocktails spot.',
    note: 'React + Vite + Tailwind · Role: frontend · Live Vercel deploy was configured; currently offline',
    image: {
      src: '/projects/will-mars.png',
      alt: 'Abstract cover for Will-mar’s — amber accent on dark zinc',
    },
    href: 'https://github.com/zacman-ug/will-mars-web',
    repoUrl: 'https://github.com/zacman-ug/will-mars-web',
    placeholder: false,
  },
]

export const work = {
  eyebrow: 'Selected work',
  headline: 'Projects from the zacman-ug repos.',
} as const

export const contact = {
  eyebrow: 'Contact',
  headline: 'Let’s make something lasting.',
  body: 'Have a product, brand, or interface that needs a clearer voice? Send a note — I usually reply within a few days.',
  ctaLabel: 'Email Ezekiel',
} as const
