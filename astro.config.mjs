// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://gingersociety.org", // Replace with your actual site URL
  integrations: [
    sitemap({
      customPages: [
        "https://gingersociety.org/products/ginger-book/tech-docs",
        "https://gingersociety.org/products/ginger-dj/docs",
        "https://gingersociety.org/products/ginger-ui/stories",
      ],
    }),
  ],
});
