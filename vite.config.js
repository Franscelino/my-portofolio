// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <--- PASTIKAN INI ADA

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- PASTIKAN INI JUGA ADA
  ],
});