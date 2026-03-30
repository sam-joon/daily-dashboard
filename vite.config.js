import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/daily-dashboard/', // REPLACE with your repository name
  plugins: [react(), tailwindcss()],
})