import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    environment: 'jsdom',
    css: false,
  },
  plugins: [vue()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/primevue')) return 'primevue'
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router')) return 'vue'
        }
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@images', replacement: fileURLToPath(new URL('./src/static/images', import.meta.url)) },
    ]
  }
})
