import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure assets are hashed for cache busting on Vercel CDN
    assetsInlineLimit: 0,
  },
})
