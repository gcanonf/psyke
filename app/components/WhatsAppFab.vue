<script setup lang="ts">
import { contact } from '~/data/site'

const href = computed(
  () =>
    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      'Hola, me gustaría agendar una cita con PSYKE.',
    )}`,
)
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="fab"
    aria-label="Escribir por WhatsApp a PSYKE"
  >
    <SocialIcon name="whatsapp" />
    <span class="fab__label">WhatsApp</span>
  </a>
</template>

<style scoped>
.fab {
  position: fixed;
  right: clamp(1rem, 3vw, 1.75rem);
  bottom: clamp(1rem, 3vw, 1.75rem);
  z-index: 90;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem;
  border-radius: var(--radius-pill);
  background: #25d366;
  color: #fff;
  box-shadow: 0 12px 30px -8px rgba(37, 211, 102, 0.6);
  transition: transform var(--dur) var(--ease-out), padding var(--dur) var(--ease-out);
}
.fab:hover { transform: translateY(-3px); padding-inline: 1.1rem; }
.fab__label {
  font-weight: 600;
  font-size: 0.95rem;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width var(--dur) var(--ease-out);
}
.fab:hover .fab__label { max-width: 110px; }

@media (max-width: 540px) {
  .fab__label { display: none; }
}
</style>
