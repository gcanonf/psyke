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
  justify-content: center;
  /* perfect circle by default — icon centred */
  width: 56px;
  height: 56px;
  padding: 0;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  box-shadow: 0 12px 30px -8px rgba(37, 211, 102, 0.6);
  overflow: hidden;
  transition: transform var(--dur) var(--ease-out), width var(--dur) var(--ease-out), padding var(--dur) var(--ease-out);
}
.fab :deep(svg) { flex: 0 0 auto; }
.fab:hover {
  transform: translateY(-3px);
  /* expand to a pill on hover to reveal the label */
  width: 11.5rem;
  padding-inline: 1.1rem;
  justify-content: flex-start;
  gap: 0.55rem;
}
.fab__label {
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  opacity: 0;
  max-width: 0;
  transition: opacity var(--dur) var(--ease-out), max-width var(--dur) var(--ease-out);
}
.fab:hover .fab__label { opacity: 1; max-width: 8rem; }

@media (max-width: 540px) {
  .fab__label { display: none; }
}
</style>
