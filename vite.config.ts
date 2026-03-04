import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dyad from 'dyad'

export default defineConfig({
  plugins: [
    react(),
    dyad.dyadComponentTagger()
  ],
  base: './',
})
