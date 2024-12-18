import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nlekkerman.github.io',
  server: {
    host: '0.0.0.0',  // Listens on all network interfaces (useful for local testing)
    port: 5173,        // Make sure the port is correct
  },
});
