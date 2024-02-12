import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'event2string',
      formats: ['cjs', 'es', 'iife', 'umd'],
      fileName: format => `key-event-to-string.${format}.js`,
    },
  },
  plugins: [
    dts({
      outputDir: 'lib',
    }),
  ],
})
