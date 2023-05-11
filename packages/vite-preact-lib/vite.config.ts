/// <reference types="vitest" />
import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';
import preact from "@preact/preset-vite";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/vite-preact-lib',
  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
    preact()
    
  ],
  build: {
    lib: {
      entry: ["src/index.tsx"],
      name: 'vite-preact-lib',
      fileName: 'vite_preact_lib',
    },
    rollupOptions: {
      external: ['preact'],
      output: {
        globals: {
          preact: 'preact',
        },
      },
    },
}
});
