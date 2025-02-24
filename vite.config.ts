import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

console.log("base url VITE_BASE => ", process.env.VITE_BASE);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.VITE_BASE || '/',
})
