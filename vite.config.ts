import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import vitePluginSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    vitePluginSitemap({
      hostname: 'https://ezra.is-a.dev', // your custom domain
      dynamicRoutes: [
        // '/projects',
        // '/about',
        // '/contact',
      ],
    }),
  ],
  base: '/', // root because ezra.is-a.dev is a root domain
});
