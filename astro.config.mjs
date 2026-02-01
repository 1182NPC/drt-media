import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  
  // 1. Apply to standard .md files (THIS IS WHAT WAS MISSING)
  markdown: {
    remarkPlugins: [remarkGfm],
  },

  integrations: [
    // 2. Apply to .mdx files
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    sitemap(),
    tailwind(),
  ],
});