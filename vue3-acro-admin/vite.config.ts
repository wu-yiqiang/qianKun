import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
 
// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue',
  plugins: [vue(), qiankun('micro-app-baseVue', { useDevMode: true })],
  server: {
    host: '0.0.0.0',
    port: 3002, // 2000端口
    open: false,
    cors: true,
    origin: 'http://localhost:8001'
  }
});