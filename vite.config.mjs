import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import htmlInject from "vite-plugin-html-inject";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'



export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    htmlInject(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    Components({
      dts: 'src/components.d.ts',
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
