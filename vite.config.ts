import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
 // ... (o que tiver para cima)
export default defineConfig(({ mode }) => ({
  base: '/app-Telegram/', // <--- INSIRA ESTA LINHA AQUI (com aspas e vírgula!)
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
