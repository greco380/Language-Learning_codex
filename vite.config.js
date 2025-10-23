import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: false
  },
  preview: {
    port: 4173
  },
  esbuild: {
    jsxInject: "import React from 'react';"
  },
  test: {
    globals: true,
    environment: 'node'
  }
});
