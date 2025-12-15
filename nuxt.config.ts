import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: false },
  ssr: true, // Disable SSR for static site generation
  css: ["~/assets/app.css"],
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-gtag'
  ],
  'gtag': {
    id: 'G-174B2J6P8J',
  },
  site: {
    url: 'https://www.simplecallcenter.com',
  },
  sitemap: {
    exclude: ['/admin/**', '/test/**'],
    sources: [
      '/api/sitemap'
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        // Favicon and Apple Touch Icons
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
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
  compatibilityDate: '2025-12-15',
  nitro: {
    preset: 'static', // Use static preset for DigitalOcean
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  sourcemap: {
    client: 'hidden'
  }
});
