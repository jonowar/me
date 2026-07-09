// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update this to your final domain once deployed (used for canonical URLs & sitemap).
  site: 'https://jonowarren.com',
  output: 'static',
  build: {
    // Emit `about/index.html` style paths for clean URLs.
    format: 'directory',
  },
});
