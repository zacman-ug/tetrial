/**
 * PORTFOLIO CONTENT — edit this file to swap placeholders for real copy.
 * Anything marked PLACEHOLDER is temporary and meant to be replaced.
 */

export const site = {
  name: 'Ezekiel Kigozi',
  shortName: 'Ezekiel',
  /** PLACEHOLDER role — replace with real title */
  role: 'Product Designer & Builder',
  email: 'hello@ezekielkigozi.com', // PLACEHOLDER email
  location: 'Kampala · Remote', // PLACEHOLDER location
  social: {
    github: 'https://github.com/', // PLACEHOLDER
    linkedin: 'https://linkedin.com/in/', // PLACEHOLDER
    twitter: 'https://x.com/', // PLACEHOLDER
  },
} as const

export const hero = {
  /** One short supporting sentence under the name */
  lede:
    'I design and ship calm, precise digital products — from first sketch to production.', // PLACEHOLDER
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
  headline: 'Craft over clutter. Clarity over noise.',
  body: [
    // PLACEHOLDER bio paragraphs
    'Ezekiel is a product designer and builder focused on interfaces that feel inevitable — quiet systems, sharp typography, and experiences that respect people’s time.',
    'Currently exploring tools for creative teams and civic-minded products. Previously collaborated with startups and studios across East Africa and remote-first teams worldwide.',
  ],
  highlights: [
    { label: 'Focus', value: 'Product design · Frontend' }, // PLACEHOLDER
    { label: 'Open to', value: 'Select freelance & full-time' }, // PLACEHOLDER
    { label: 'Based', value: site.location },
  ],
} as const

export type Project = {
  id: string
  title: string
  year: string
  tags: string[]
  summary: string
  /** PLACEHOLDER image URLs until real project shots are ready */
  image: { src: string; alt: string }
  href?: string
  placeholder: true
}

export const projects: Project[] = [
  {
    id: 'atlas',
    title: 'Atlas Ledger',
    year: '2025',
    tags: ['Fintech', 'Design system'],
    summary:
      'A calm accounting dashboard for small businesses — clearer cash flow, fewer tabs.',
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      alt: 'PLACEHOLDER: analytics dashboard on a desk',
    },
    href: '#contact',
    placeholder: true,
  },
  {
    id: 'harbor',
    title: 'Harbor Notes',
    year: '2024',
    tags: ['Productivity', 'Mobile'],
    summary:
      'A note app that stays out of the way — structured capture with a paper-like reading mode.',
    image: {
      src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1600&q=80',
      alt: 'PLACEHOLDER: notebook and pen on a wooden table',
    },
    href: '#contact',
    placeholder: true,
  },
  {
    id: 'kiln',
    title: 'Kiln Studio',
    year: '2024',
    tags: ['Brand', 'Web'],
    summary:
      'Identity and site for a ceramics studio — earthy materials, generous whitespace, shop-ready.',
    image: {
      src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80',
      alt: 'PLACEHOLDER: handmade ceramic vessels',
    },
    href: '#contact',
    placeholder: true,
  },
]

export const work = {
  eyebrow: 'Selected work',
  headline: 'Recent projects worth a closer look.',
} as const

export const contact = {
  eyebrow: 'Contact',
  headline: 'Let’s make something lasting.',
  body: 'Have a product, brand, or interface that needs a clearer voice? Send a note — I usually reply within a few days.', // PLACEHOLDER
  ctaLabel: 'Email Ezekiel',
} as const
