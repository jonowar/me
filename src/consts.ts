/**
 * Site content & configuration.
 *
 * This is the one file you'll edit most. Everything the page renders —
 * your name, bio, links, and project list — is defined here so you never
 * have to touch the components to update content.
 */

export const SITE = {
  /** Your name — shown in the header, hero, and browser tab. */
  name: 'Jono Warren',
  /** Short role/title under your name. */
  role: 'Software Engineer',
  /** One-line hook shown large in the hero. Keep it punchy. */
  tagline: 'I design and build things for the web.',
  /** Where you are (optional — leave '' to hide). */
  location: 'Remote',
  /** Used for meta tags / SEO description. */
  description:
    'Personal page and portfolio of Jono Warren — software engineer and builder.',
  email: 'jono.warren@gmail.com',
};

/**
 * Links shown in the header, hero, and footer.
 * Delete any you don't want; add your own by copying the shape.
 */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/jonowar' },
  { label: 'Email', href: `mailto:${SITE.email}` },
  // { label: 'X', href: 'https://x.com/yourhandle' },
  // { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
];

/**
 * A few short paragraphs about you. Each string is its own paragraph.
 */
export const ABOUT: string[] = [
  "I'm a software engineer who likes turning fuzzy ideas into things people can actually use. I care about clean interfaces, fast pages, and code that's easy to come back to six months later.",
  'Outside of building, you can usually find me tinkering with side projects, reading, or chasing down whatever rabbit hole caught my attention this week.',
];

/**
 * Skills / tools you want to highlight. Purely cosmetic tags.
 */
export const SKILLS: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Astro',
  'PostgreSQL',
  'Railway',
];

export type Project = {
  name: string;
  /** One or two sentences on what it is and why it's interesting. */
  description: string;
  /** Tech tags shown as small pills. */
  tags: string[];
  /** Main link (live site, repo, etc.). Optional. */
  href?: string;
  /** Secondary link, e.g. source code. Optional. */
  repo?: string;
  /** Optional year or status label shown in the corner. */
  meta?: string;
};

/**
 * Your work. Replace these placeholders with real projects.
 * Order matters — the first one is visually the most prominent.
 */
export const PROJECTS: Project[] = [
  {
    name: 'Project One',
    description:
      'A short, punchy description of your flagship project — what it does, who it’s for, and what makes it worth a click.',
    tags: ['TypeScript', 'React', 'Railway'],
    href: 'https://example.com',
    repo: 'https://github.com/jonowar',
    meta: '2025',
  },
  {
    name: 'Project Two',
    description:
      'Another thing you built. Focus on the outcome or the interesting technical bit rather than a feature list.',
    tags: ['Node.js', 'PostgreSQL'],
    href: 'https://example.com',
    meta: '2024',
  },
  {
    name: 'Project Three',
    description:
      'A smaller experiment or tool. Even weekend hacks belong here if you’re proud of them.',
    tags: ['Astro', 'CSS'],
    repo: 'https://github.com/jonowar',
    meta: 'Experiment',
  },
];
