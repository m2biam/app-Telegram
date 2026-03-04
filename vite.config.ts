import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { dyadComponentTagger } from "dyad";

export default defineConfig(({ mode }) => ({
  base: '/app-Telegram/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && dyadComponentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
