// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@vite-pwa/nuxt',
  ],

  image: {
    quality: 80,
    ipx: {
      maxAge: 60 * 60 * 24 * 30,
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module',
    },
    manifest: {
      name: 'WoWLips — Soin des lèvres, révélé',
      short_name: 'WoWLips',
      description: 'WoWLips — Cosmétiques pour les lèvres. Formules soignées, gestes simples, résultats visibles.',
      lang: 'fr',
      start_url: '/',
      display: 'standalone',
      background_color: '#f2ead9',
      theme_color: '#15130f',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html}'],
      navigateFallbackDenylist: [/^\/api\//],
      runtimeCaching: [
        {
          urlPattern: /\/_ipx\//,
          handler: 'CacheFirst',
          options: {
            cacheName: 'wowlips-images',
            expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 },
          },
        },
        {
          urlPattern: /\/api\/products/,
          handler: 'StaleWhileRevalidate',
          options: { cacheName: 'wowlips-products-api' },
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'WoWLips — Soin des lèvres, révélé',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'WoWLips — Cosmétiques pour les lèvres. Formules soignées, gestes simples, résultats visibles.',
        },
        { name: 'theme-color', content: '#15130f' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      // Placeholders for future wiring — see README.
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
    },
  },

  typescript: {
    strict: true,
  },
})
