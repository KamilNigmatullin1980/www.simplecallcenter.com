import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: false },
  ssr: true, // Disable SSR for static site generation
  css: ["~/assets/app.css"],
  modules: [
    ['nuxt-simple-sitemap', {
      hostname: 'https://www.simplecallcenter.com',
      exclude: ['/admin/**'],
    }], // This module handles loading gtag.js and initialization
    'nuxt-gtag'
  ],
  'gtag': {
    id: 'G-174B2J6P8J',
  },
  site: {
    url: 'https://www.simplecallcenter.com',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        // Preconnect to external domains for faster loading
        {
          rel: 'preconnect',
          href: 'https://unicons.iconscout.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://embed.tawk.to',
          crossorigin: 'anonymous'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://unicons.iconscout.com'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://embed.tawk.to'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://www.googletagmanager.com'
        }
      ]
    }
  },
  nitro: {
    preset: 'static', // Use static preset for DigitalOcean
    compressPublicAssets: true,
    prerender: {
      routes: ['/']
    }
  },
  sourcemap: {
    client: 'hidden'
  }
});
