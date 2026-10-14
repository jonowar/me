/**
 * Site content & configuration.
 * Everything the page renders is defined here — edit this, not the components.
 */

export const SITE = {
  /** Your name — used in the footer and meta tags. */
  name: 'Jono Warren',
  /** The big low-res title shown at the top of the page. */
  title: 'Jono.Solutions',
  email: 'jono.warren@gmail.com',
  /** Used for the meta description / SEO. */
  description: 'Jono.Solutions — projects by Jono Warren.',
};

/** Bio shown under the title — one fact per line, rendered as written. */
export const BIO = [
  'Jono is a software engineer',
  'living in San Francisco',
  'who likes other things too.',
];

/** Links shown in the footer. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/jonowar' },
  { label: 'Email', href: `mailto:${SITE.email}` },
];

export type Project = {
  name: string;
  /** Optional short blurb — beside the name on wide screens, underneath on mobile. */
  description?: string;
  /** Optional link — the name becomes clickable if set. */
  href?: string;
  /** Optional short stack line, e.g. 'expo · fastapi'. */
  tech?: string;
  /** Optional extra links shown after the description (e.g. source, download). */
  links?: { label: string; href: string }[];
};

/** Heading shown above the project list. */
export const PROJECTS_LABEL = 'projects';

/** Projects shown as bullet points, linked to their subdomains. */
export const PROJECTS: Project[] = [
  {
    name: 'fapiao',
    description: 'scan and sort invoices',
    tech: 'expo · fastapi · postgres',
    href: 'https://fapiao.jono.solutions',
  },
  {
    name: 'shushu',
    description: 'count things together, live',
    tech: 'expo · fastapi · redis',
    href: 'https://shushu.jono.solutions',
  },
  {
    name: 'deleet',
    description: 'guess the question from the code',
    tech: 'vanilla js',
    href: 'https://deleet.jono.solutions',
  },
  {
    name: 'instrument',
    description: 'turn a prompt into sound',
    tech: 'electron · supercollider',
    href: 'https://github.com/jonowar/instrument/releases/latest/download/AnInstrument-arm64.dmg',
    links: [
      { label: 'github', href: 'https://github.com/jonowar/instrument' },
      {
        label: '.dmg',
        href: 'https://github.com/jonowar/instrument/releases/latest/download/AnInstrument-arm64.dmg',
      },
    ],
  },
];
