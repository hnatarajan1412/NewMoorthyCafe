import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

// Emulate __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Root directory for your app's index.html
  root: path.resolve(__dirname, 'client'),

  // Directory with static assets to copy to output
  publicDir: path.resolve(__dirname, 'public'),

  // Base public path
  base: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },

  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Add Cartographer plugin only in Replit dev
    ...(process.env.NODE_ENV !== 'production' && process.env.REPL_ID
      ? [(await import('@replit/vite-plugin-cartographer')).cartographer()]
      : []),
  ],

  build: {
    // Emit into dist/public relative to project root
    outDir: path.resolve(__dirname, 'dist', 'public'),
    emptyOutDir: true,
    assetsDir: 'assets',
  },

  server: {
    port: 3000,
    // Allow serving files from outside root if needed
    fs: {
      allow: [path.resolve(__dirname)],
    },
  },
});
