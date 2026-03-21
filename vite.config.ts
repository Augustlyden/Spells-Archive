import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Spells-Archive/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        spell: resolve(__dirname, 'spell.html'),
        },
    },
  },
})