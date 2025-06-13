import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [react(),tailwindcss()],
})
