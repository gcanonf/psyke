<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="err">
    <div class="container err__inner">
      <BrandLogo class="err__logo" />
      <p class="eyebrow">{{ error.statusCode === 404 ? 'Página no encontrada' : 'Algo salió mal' }}</p>
      <h1 class="err__title">
        {{ error.statusCode === 404 ? 'No encontramos esta página' : 'Ha ocurrido un error' }}
      </h1>
      <p class="err__text">
        Pero tu bienestar siempre tiene un lugar aquí. Volvamos al inicio.
      </p>
      <NuxtLink to="/" class="btn btn--primary" @click="clearError({ redirect: '/' })">
        Ir al inicio
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.err { min-height: 80vh; display: grid; place-items: center; padding: 6rem 0;
  background: radial-gradient(70% 60% at 50% 0%, var(--color-primary-tint), var(--color-bg)); }
.err__inner { text-align: center; max-width: 36rem; }
.err__logo { width: 64px; height: 64px; margin: 0 auto 1.5rem; }
.err__title { font-size: var(--step-3); margin-bottom: 1rem; }
.err__text { color: var(--color-ink-soft); margin-bottom: 2rem; }
</style>
