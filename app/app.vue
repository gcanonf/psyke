<script setup lang="ts">
import { brand, contact } from '~/data/site'

// JSON-LD LocalBusiness / ProfessionalService schema for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'PSYKE',
        legalName: brand.legal,
        description:
          'Psicoterapia, EMDR y programas de cuidado emocional con Eva Margarita Cañón Falla. Atención online y presencial desde Bogotá, Colombia.',
        founder: { '@type': 'Person', name: brand.professional, jobTitle: 'Psicóloga' },
        email: contact.email,
        telephone: `+${contact.whatsapp}`,
        areaServed: 'Colombia',
        address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' },
        sameAs: [contact.social.instagram, contact.social.facebook, contact.social.linkedin],
        knowsAbout: ['Psicoterapia', 'EMDR', 'Salud mental', 'Bienestar emocional'],
      }),
    },
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
