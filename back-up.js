import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "/",
  publicDir: "public",
  server: {
    host: true
  },
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  plugins: []
});