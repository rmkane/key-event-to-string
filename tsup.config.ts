import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'KeyEventToString',
  minify: true,
  sourcemap: false, // Set this to true for development
  dts: true,
})
