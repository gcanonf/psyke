// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  // Public runtime config. GA4 id is baked in here; NUXT_PUBLIC_GA_ID can
  // override it at build time (e.g. in Coolify). Empty → analytics skipped.
  // GA only loads after the visitor accepts analytics cookies (consent-gated).
  runtimeConfig: {
    public: {
      gaId: 'G-VJQJE35SPC',
    },
  },

  // Static site generation — deploy anywhere (Netlify/Vercel/GitHub Pages)
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },

  fonts: {
    families: [
      { name: 'Lora', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Raleway', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Caveat', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  image: {
    quality: 72,
    format: ['avif', 'webp'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'PSYKE · Psicología y bienestar emocional · Eva Margarita Cañón Falla',
      meta: [
        {
          name: 'description',
          content:
            'PSYKE — Psicoterapia, EMDR y programas de cuidado emocional con Eva Margarita Cañón Falla. Atención clínica online y presencial desde Bogotá, Colombia. Cuidar de tu salud mental es cuidar de tu vida.',
        },
        { name: 'theme-color', content: '#6D5BA6' },
        { name: 'author', content: 'PSYKE SAS · Eva Margarita Cañón Falla' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        // Colombia / Bogotá local-SEO geo signals
        { name: 'geo.region', content: 'CO-DC' },
        { name: 'geo.placename', content: 'Bogotá, Colombia' },
        { name: 'geo.position', content: '4.711;-74.0721' },
        { name: 'ICBM', content: '4.711, -74.0721' },
        {
          name: 'keywords',
          content:
            'psicóloga Bogotá, terapia psicológica Colombia, EMDR Bogotá, psicoterapia online Colombia, salud mental, bienestar emocional, terapia de pareja, terapia familiar, terapia infantil, Eva Margarita Cañón Falla, PSYKE',
        },
        // Open Graph defaults (per-page title/description/url set via useSeo)
        { property: 'og:site_name', content: 'PSYKE' },
        { property: 'og:locale', content: 'es_CO' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    },
  },
})
