import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',  // Listens on all network interfaces (useful for local testing)
    port: 5173,
    allowedHosts: [
      '5173-nlekkerman-nlekkermangi-jtz3juru3m4.ws-eu118.gitpod.io',  // Add this host
      // Add other hosts if needed
    ],
  },
});
