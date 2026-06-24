<script setup lang="ts">
import { brand, contact, site } from '~/data/site'

const sameAs = [contact.social.instagram, contact.social.facebook, contact.social.linkedin]

// ── Organization / Psychologist (local business) schema ──────────────
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Psychologist'],
  '@id': `${site.url}/#psyke`,
  name: brand.name,
  legalName: brand.legal,
  url: site.url,
  description:
    'PSYKE — Psicoterapia, EMDR y programas de cuidado emocional con la psicóloga Eva Margarita Cañón Falla. Atención clínica online y presencial desde Bogotá, Colombia.',
  slogan: brand.motto,
  image: `${site.url}/og-image.jpg`,
  logo: `${site.url}/logo.svg`,
  email: contact.email,
  priceRange: '$$',
  inLanguage: 'es-CO',
  knowsLanguage: ['es', 'en'],
  currenciesAccepted: 'COP',
  founder: {
    '@type': 'Person',
    name: brand.professional,
    jobTitle: 'Psicóloga',
    knowsAbout: ['Psicoterapia', 'EMDR', 'Educación socioemocional', 'Salud mental'],
    sameAs: [contact.social.linkedin],
  },
  areaServed: { '@type': 'Country', name: 'Colombia' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.geo.city,
    addressRegion: 'Bogotá D.C.',
    addressCountry: site.geo.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Psicoterapia individual' },
    { '@type': 'MedicalTherapy', name: 'EMDR · Terapia del trauma' },
    { '@type': 'MedicalTherapy', name: 'Psicoterapia grupal' },
    { '@type': 'MedicalTherapy', name: 'Terapia infantil y adolescente' },
    { '@type': 'Service', name: 'Talleres y conferencias de psicoeducación' },
  ],
  sameAs,
  knowsAbout: [
    'Psicoterapia',
    'EMDR',
    'Salud mental',
    'Bienestar emocional',
    'Terapia cognitivo-conductual',
    'Intervención en crisis',
  ],
}

// ── FAQPage schema — helps Google rich results AND AI answer engines ──
const faqs = [
  {
    q: '¿Qué es la terapia EMDR y para qué sirve?',
    a: 'EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares) es un enfoque psicoterapéutico validado científicamente que ayuda al cerebro a reprocesar recuerdos dolorosos. Es eficaz para trauma, ansiedad, fobias y bloqueos emocionales. En PSYKE la realiza Eva Margarita Cañón Falla, con especialización en EMDR.',
  },
  {
    q: '¿Ofrecen terapia psicológica online en Colombia?',
    a: 'Sí. PSYKE ofrece psicoterapia online y presencial desde Bogotá, con atención en toda Colombia. Solo necesitas un espacio tranquilo, conexión a internet y un dispositivo. Los horarios son flexibles.',
  },
  {
    q: '¿Quién es la psicóloga de PSYKE?',
    a: 'Eva Margarita Cañón Falla, psicóloga con dos maestrías (Problemáticas Sociales Infanto-Juveniles y Psicología Cognitiva y Aprendizaje) y más de 15 años de experiencia en salud mental, educación socioemocional y protección de la niñez.',
  },
  {
    q: '¿Qué tipos de terapia ofrece PSYKE?',
    a: 'Psicoterapia para adultos, adolescentes e infantil, psicoterapia grupal, EMDR para el trauma y atención online. También ofrece talleres y conferencias de psicoeducación y cultura del cuidado para equipos y comunidades.',
  },
  {
    q: '¿Cómo agendar una cita con PSYKE?',
    a: `Puedes agendar tu cita en línea desde la página de PSYKE o escribir al correo ${contact.email}. Tras la preinscripción, PSYKE te contacta para confirmar. La atención es online y presencial desde Bogotá, Colombia.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

useHead({
  link: [{ rel: 'canonical', href: site.url }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(businessSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) },
  ],
})
</script>

<template>
  <div class="app">
    <a href="#main" class="skip-link">Saltar al contenido</a>
    <SiteHeader />
    <main id="main">
      <NuxtPage />
    </main>
    <CinematicFooter />
    <WhatsAppFab />
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -3rem;
  z-index: 200;
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  transition: top var(--dur) var(--ease-out);
}
.skip-link:focus { top: 1rem; }
</style>
