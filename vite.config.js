import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
// Support root domain (Vercel, custom domain, local) and GitHub Pages subpath
const base = process.env.GITHUB_ACTIONS && !process.env.VERCEL ? '/hitesh-rao-portfolio/' : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  }
});
