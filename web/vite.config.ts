// This is a Vite configuration file for a Vue.js project
import { fileURLToPath, URL } from "url";

// Importing defineConfig from vite for configuration
import { defineConfig } from "vite";

// Importing tailwindcss for styling
import tailwindcss from "@tailwindcss/vite";

// Importing vue for building Vue.js applications
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
  base: "./",
});