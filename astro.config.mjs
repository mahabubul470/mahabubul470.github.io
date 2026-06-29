// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Deployed to GitHub Pages at https://mahabubul470.github.io (user site → base "/").
export default defineConfig({
  site: "https://mahabubul470.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
