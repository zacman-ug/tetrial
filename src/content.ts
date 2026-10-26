/**
 * PORTFOLIO CONTENT — edit this file to update copy, links, and project media.
 * Fields still marked PLACEHOLDER await personal details from Ezekiel.
 */

export const site = {
  name: 'Ezekiel Kigozi',
  shortName: 'Ezekiel',
  /** Prefer resume contact when syncing; portfolio email still TBD for public site */
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
    'I design and ship digital products — heritage tools, local business sites, and secure full-stack systems.',
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
    'Ezekiel is a software developer building full-stack and frontend products — including Buganda Heritage (shipped with Cursor) and Will-mar’s. He also works on secure, database-backed systems such as EFRIS integrations.',
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
  /** Role / tech note shown under the summary */
  note?: string
  image: { src: string; alt: string }
  /** Primary link (prefer live demo, else repo) */
  href: string
  repoUrl?: string
  liveUrl?: string
  /** True only when media is still stock / not a real product shot */
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
