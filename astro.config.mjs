// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.gingersociety.org", // Replace with your actual site URL
  integrations: [
    sitemap({
      customPages: [
        "https://www.gingersociety.org/products/ginger-book/tech-docs",
        "https://www.gingersociety.org/products/ginger-dj/docs",
        "https://www.gingersociety.org/products/ginger-ui/stories",
      ],
    }),
  ],
});
