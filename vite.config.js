import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'studio-portal-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/studio-portal') {
            res.writeHead(301, { Location: '/studio-portal/' });
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
