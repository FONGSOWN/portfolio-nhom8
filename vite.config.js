import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-nhom8/',
  server: {
    port: 3000,
    open: false,
  },
})