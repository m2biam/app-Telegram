import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dyad from 'dyad' // <-- AQUI: Sem as chaves { }

export default defineConfig({
  plugins: [
    react(),
    dyad.dyadComponentTagger() // <-- AQUI: Tem o "dyad." na frente
  ],
  base: './',
})
