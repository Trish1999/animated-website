import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    optimizeDeps: {
    exclude: ['../assets/heroBg.json','../assets/robo.json']
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
