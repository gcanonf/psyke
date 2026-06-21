<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  lede?: string
  image?: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p v-if="lede" class="lede page-hero__lede">{{ lede }}</p>
      <slot />
    </div>
    <div class="page-hero__glow" aria-hidden="true" />
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  padding-top: clamp(8rem, 6rem + 8vw, 11rem);
  padding-bottom: clamp(2.5rem, 2rem + 3vw, 4rem);
  overflow: hidden;
  background:
    radial-gradient(120% 80% at 80% -10%, var(--color-primary-tint), transparent 60%),
    radial-gradient(90% 70% at 0% 0%, var(--color-accent-tint), transparent 55%),
    var(--color-bg);
}
.page-hero__inner { max-width: 56rem; }
.page-hero__title { font-size: var(--step-4); }
.page-hero__lede { margin-top: 1.25rem; max-width: 46ch; }
.page-hero__glow {
  position: absolute;
  right: -10%;
  top: -20%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle, var(--color-primary-soft), transparent 65%);
  opacity: 0.18;
  filter: blur(30px);
  pointer-events: none;
}
</style>
