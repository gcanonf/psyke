<script setup lang="ts">
defineProps<{ name: 'start' | 'target' | 'evidence' | 'evaluate' }>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <!-- Inicio del proceso: a sprouting seed / new beginning -->
    <template v-if="name === 'start'">
      <path d="M12 21v-7" />
      <path d="M12 14c0-3 2-5 5-5-.5 3-2.5 5-5 5Z" />
      <path d="M12 14c0-2.5-1.8-4.5-4.5-4.5C8 12 9.7 14 12 14Z" />
      <path d="M7 21h10" />
    </template>

    <!-- Identificar objetivos: target -->
    <template v-else-if="name === 'target'">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </template>

    <!-- Intervención basada en evidencia: brain + rising bars -->
    <template v-else-if="name === 'evidence'">
      <path d="M9 6a3 3 0 0 0-3 3c-1.2.4-2 1.5-2 2.8 0 1 .5 1.9 1.3 2.4-.2.4-.3.8-.3 1.3a2.5 2.5 0 0 0 4 2" />
      <path d="M9 6V18" />
      <path d="M9 6a2.5 2.5 0 0 1 4-.5" />
      <rect x="14" y="14" width="2" height="5" rx="0.4" />
      <rect x="17.5" y="11" width="2" height="8" rx="0.4" />
    </template>

    <!-- Evaluación de resultados: clipboard with check + analysis -->
    <template v-else>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </template>
  </svg>
</template>
