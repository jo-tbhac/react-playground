import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

const ReactCompilerConfig = {
  compilationMode: 'annotation'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]
      }
    }),
    checker({
      typescript: true
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  server: {
    open: true
  }
})
