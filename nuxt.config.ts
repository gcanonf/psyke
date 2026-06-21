// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  // Static site generation — deploy anywhere (Netlify/Vercel/GitHub Pages)
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  fonts: {
    families: [
      { name: 'Lora', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Raleway', provider: 'google', weights: [300, 400, 500, 600, 700] },
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
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'PSYKE' },
        { property: 'og:locale', content: 'es_CO' },
        {
          property: 'og:title',
          content: 'PSYKE · Psicología y bienestar emocional',
        },
        {
          property: 'og:description',
          content:
            'Psicoterapia, EMDR y programas de cuidado emocional. Atención online y presencial desde Bogotá.',
        },
        { property: 'og:image', content: '/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'PSYKE · Psicología y bienestar emocional',
        },
        {
          name: 'twitter:description',
          content:
            'Psicoterapia, EMDR y programas de cuidado emocional. Atención online y presencial desde Bogotá.',
        },
        { name: 'twitter:image', content: '/og-image.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
