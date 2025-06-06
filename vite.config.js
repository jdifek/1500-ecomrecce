import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public', // Явно указываем папку public
  build: {
    outDir: 'dist',
  }
})