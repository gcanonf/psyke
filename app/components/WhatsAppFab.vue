<script setup lang="ts">
// Floating "Agendar cita" button → Google booking page (preinscripción).
// (Filename kept for backwards-compat; it's the booking FAB now.)
import { contact } from '~/data/site'

const href = contact.booking
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="fab"
    aria-label="Agendar una cita con PSYKE"
  >
    <svg class="fab__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.8" />
      <path d="M3 9h18" stroke="currentColor" stroke-width="1.8" />
      <path d="M8 2.5v4M16 2.5v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      <path d="M8 13.5l2.5 2.5L16 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span class="fab__label">Agendar cita</span>
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
  background: var(--color-accent);
  color: #fff;
  box-shadow: 0 12px 30px -8px rgba(79, 138, 109, 0.6);
  overflow: hidden;
  transition: transform var(--dur) var(--ease-out), width var(--dur) var(--ease-out), padding var(--dur) var(--ease-out);
}
.fab__icon { flex: 0 0 auto; }
.fab:hover {
  transform: translateY(-3px);
  /* expand to a pill on hover to reveal the label */
  width: 12rem;
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
