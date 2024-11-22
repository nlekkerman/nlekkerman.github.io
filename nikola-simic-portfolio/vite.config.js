import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ensure it listens on all network interfaces
    port: 5173,        // Make sure the port is 5173 or whatever port you're using
  },
})
