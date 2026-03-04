import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dyadPkg from 'dyad'

// Esta linha abaixo é a correção mágica para o erro que deu no print!
const { dyadComponentTagger } = dyadPkg

export default defineConfig({
  plugins: [
    react(),
    dyadComponentTagger()
  ],
  base: './',
})
