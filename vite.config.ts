import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    cors: true
  },
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  base: '/'
})
