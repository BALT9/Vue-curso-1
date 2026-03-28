import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/Vue-curso-1',
  build: {
    outDir: 'dist'
  },
  plugins: [vue()],
  outputDir: 'Vue-curso-1'
})
