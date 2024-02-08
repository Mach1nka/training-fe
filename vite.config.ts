import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  define: {
    API_URL: JSON.stringify(process.env.API_URL),
    IS_DEV: JSON.stringify(true),
    PROJECT: JSON.stringify('frontend'),
  },
  plugins: [
    svgr({ svgrOptions: { exportType: 'default' }, include: '**/*.svg' }),
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    open: true,
    port: Number(process.env.PORT),
  },
});
