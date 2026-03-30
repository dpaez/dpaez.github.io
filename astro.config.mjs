// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss({source: "local-components/styles/tokens.css"})],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'victor-mono',
        cssVariable: '--font-victor-mono',
        subsets: ['latin'],
        weights: ['200', '400', '600'],
      },
      {
        provider: fontProviders.fontsource(),
        name: 'IBM Plex Mono',
        subsets: ['latin'],
        weights: ['400', '700'],
        cssVariable: '--font-ibm-plex-mono',
      },
    ],
  }
});
