import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'sass';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
});