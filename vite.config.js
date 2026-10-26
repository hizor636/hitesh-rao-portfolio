import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'legacy-admin-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/studio-portal') || req.url.startsWith('/admin'))) {
            res.writeHead(302, { Location: '/' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: '127.0.0.1'
  }
});
