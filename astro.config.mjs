// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

import react from "@astrojs/react";

import cloudflare from '@astrojs/cloudflare';

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
  output: "static",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Hauora Sans',
      cssVariable: '--font-jura',
      styles: ['normal'],
      subsets: ['latin', 'greek'],
      weights: ['200','300', '500', '800'],
      variationSettings: "'xhgt' 0.7",
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Lilex',
      cssVariable: '--font-lilex',
      subsets: ['latin'],
      weights: ['200', '400', '700'],
    },
  ],
  

  adapter: cloudflare({
    sessionKVBindingName: "DK_SPOT_SESSIONS",
    imageService: { build: 'compile', runtime: 'cloudflare-binding' }
  })
});