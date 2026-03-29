import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // base: '/Vue-curso-1/', // 👈 IMPORTANTE
  plugins: [vue()],
  build: {
    outDir: 'dist'
  }
})