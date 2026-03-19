import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path — change to '/hinese/' if deploying to a GitHub Pages sub-path
  base: '/',
})
