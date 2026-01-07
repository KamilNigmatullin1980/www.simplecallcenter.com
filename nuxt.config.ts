import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }
  },
  devtools: { enabled: false },
  ssr: true, // Disable SSR for static site generation
  css: ["~/assets/app.css"],
  hooks: {
    'render:html': (html, { event }) => {
      // Optimize CSS loading by making stylesheets non-render-blocking
      const noscriptTags: string[] = []
      
      html.head = html.head.map((tag: string) => {
        if (tag.includes('rel="stylesheet"') && !tag.includes('data-optimized') && !tag.includes('noscript')) {
          // Extract the href for noscript fallback
          const hrefMatch = tag.match(/href="([^"]+)"/)
          if (hrefMatch) {
            noscriptTags.push(`<noscript><link rel="stylesheet" href="${hrefMatch[1]}"></noscript>`)
          }
          
          // Add media="print" to make CSS load asynchronously, then switch to 'all' when loaded
          return tag.replace(
            /rel="stylesheet"/,
            'rel="stylesheet" media="print" onload="this.media=\'all\'"'
          )
        }
        return tag
      })
      
      // Add noscript fallbacks at the end
      if (noscriptTags.length > 0) {
        html.head.push(...noscriptTags)
      }
    }
  },
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-gtag',
    '@sentry/nuxt'
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
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    xsl: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        // Critical: Preconnect to high-priority external domains FIRST (before other resources)
        {
          rel: 'preconnect',
          href: 'https://unicons.iconscout.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preconnect',
          href: 'https://o4509069293518848.ingest.us.sentry.io',
          crossorigin: 'anonymous'
        },
        // DNS prefetch for other domains
        {
          rel: 'dns-prefetch',
          href: 'https://embed.tawk.to'
        },
        {
          rel: 'dns-prefetch',
          href: 'https://www.googletagmanager.com'
        },
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
        }
      ],
      script: [
        // Google tag (gtag.js) for Google Ads conversion tracking
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-650588227',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-650588227');
          `
        }
      ]
    }
  },
  compatibilityDate: '2025-12-15',
  nitro: {
    preset: 'static', // Use static preset for DigitalOcean
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/features', '/pricing', '/faq', '/how-it-works'], // add your key routes
      ignore: ['/404'],
      failOnError: false
    }
  },
  sourcemap: {
    client: 'hidden'
  },
  // Sentry configuration is in sentry.client.config.ts and sentry.server.config.ts
});
