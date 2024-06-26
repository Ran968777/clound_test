import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // "@": path.resolve(__dirname, "src"),
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, '/index.html'),
        fx: path.resolve(__dirname, '/fx.html'),
        demo1: path.resolve(__dirname, '/demo1.html')
      }
    }
  }
})
