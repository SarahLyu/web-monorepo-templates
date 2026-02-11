import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['antd'],
          'utils-vendor': ['axios'],
        },
        assetFileNames: assetInfo => {
          const fileName = assetInfo.names?.pop() || '';
          if (/(png|jpe?g|svg|gif|ico|webp)$/.test(fileName)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/(ttf|woff2?|eot|otf)$/.test(fileName)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
