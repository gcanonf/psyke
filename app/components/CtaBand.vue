<script setup lang="ts">
import { contact } from '~/data/site'

withDefaults(
  defineProps<{
    title?: string
    text?: string
  }>(),
  {
    title: 'Tu historia merece un espacio seguro',
    text: 'Da el primer paso hacia tu bienestar. Agenda una cita y comencemos a caminar juntos este proceso.',
  },
)

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola, me gustaría agendar una cita con PSYKE.',
)}`
</script>

<template>
  <section class="cta section">
    <div class="container cta__inner reveal">
      <h2 class="cta__title">{{ title }}</h2>
      <p class="cta__text">{{ text }}</p>
      <div class="cta__actions">
        <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent">Escríbeme por WhatsApp</a>
        <NuxtLink to="/contacto" class="btn btn--ghost cta__ghost">Otras formas de contacto</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta__inner {
  position: relative;
  text-align: center;
  max-width: 50rem;
  margin-inline: auto;
  padding: clamp(2.5rem, 2rem + 4vw, 4.5rem) clamp(1.5rem, 1rem + 3vw, 3rem);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(120% 120% at 50% 0%, var(--color-primary), #4d3f80);
  color: #fff;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.cta__title { color: #fff; font-size: var(--step-3); }
.cta__text { margin-top: 1rem; color: #e8e2f5; max-width: 40ch; margin-inline: auto; }
.cta__actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}
.cta__ghost { background: rgba(255, 255, 255, 0.1); color: #fff; border-color: rgba(255, 255, 255, 0.4); }
.cta__ghost:hover { background: rgba(255, 255, 255, 0.2); border-color: #fff; }
</style>
