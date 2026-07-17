import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: The 'base' value must match your GitHub repository name exactly.
// If you rename the repository, update this value before deploying, e.g.
// if your repo is https://github.com/YOUR-USERNAME/rbct-website
// then base should stay '/rbct-website/'.
export default defineConfig({
  plugins: [react()],
  base: '/rbct-website/',
})
