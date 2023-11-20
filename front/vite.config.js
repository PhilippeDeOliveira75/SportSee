import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    Pages({
      dirs: 'src/pages'
    })
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@main',
        replacement: path.resolve(__dirname, 'src/main')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/_services')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@data',
        replacement: path.resolve(__dirname, 'src/data')
      }
    ]
  },
})
