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

/** Links shown in the footer. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/jonowar' },
  { label: 'Email', href: `mailto:${SITE.email}` },
];

export type Project = {
  name: string;
  /** Optional one-liner shown after the name. */
  description?: string;
  /** Optional link — the name becomes clickable if set. */
  href?: string;
};

/** The two projects shown as bullet points, linked to their subdomains. */
export const PROJECTS: Project[] = [
  { name: 'fapiao', href: 'https://fapiao.jono.solutions' },
  { name: 'shushu', href: 'https://shushu.jono.solutions' },
];
