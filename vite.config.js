import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react(),],
  base: "/CIJS102-Final/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Đặt alias cho thư mục src
    },
  },
});