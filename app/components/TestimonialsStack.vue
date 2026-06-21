<script setup lang="ts">
import { testimonials } from '~/data/site'

/**
 * Compact stacked testimonial deck (Vue port of the "animated cards stack"
 * idea, adapted). Cards are stacked; the front card cycles to the back on a
 * timer or when clicked — fixed compact height, no scroll-pinning.
 * Honors prefers-reduced-motion (auto-advance disabled).
 */
function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const n = testimonials.length
const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function next() {
  active.value = (active.value + 1) % n
}

function start() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(next, 5000)
}
function stop() {
  if (timer) clearInterval(timer)
}

onMounted(start)
onBeforeUnmount(stop)

// position of card i relative to the active one (0 = front, 1 = behind, ...)
function depth(i: number) {
  return (i - active.value + n) % n
}
function cardStyle(i: number) {
  const d = depth(i)
  if (d > 2) {
    // hidden behind the visible three
    return { opacity: '0', transform: 'translateY(40px) scale(0.9)', zIndex: '0', pointerEvents: 'none' }
  }
  return {
    transform: `translateY(${d * 14}px) scale(${1 - d * 0.05})`,
    opacity: String(1 - d * 0.25),
    zIndex: String(n - d),
  }
}
</script>

<template>
  <section id="testimonios" class="ts section" aria-labelledby="ts-h">
    <div class="container">
      <header class="ts__head reveal">
        <p class="eyebrow">Testimonios</p>
        <h2 id="ts-h" class="ts__title">Historias de quienes han caminado este proceso</h2>
        <p class="ts__desc">
          Cada testimonio es el reflejo de un camino recorrido con valentía.
        </p>
      </header>

      <div
        class="ts__deck reveal"
        data-reveal-delay="80"
        @mouseenter="stop"
        @mouseleave="start"
      >
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name + i"
          class="ts__card card"
          :style="cardStyle(i)"
          :aria-hidden="depth(i) !== 0"
        >
          <svg class="ts__mark" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <path d="M12 8c-3.3 0-6 2.7-6 6v10h9V14H9c0-1.7 1.3-3 3-3V8Zm14 0c-3.3 0-6 2.7-6 6v10h9V14h-6c0-1.7 1.3-3 3-3V8Z" fill="var(--color-primary-tint)" />
          </svg>
          <blockquote class="ts__quote">{{ t.quote }}</blockquote>
          <figcaption class="ts__author">
            <span class="ts__avatar">{{ initials(t.name) }}</span>
            <span class="ts__meta">
              <cite class="ts__name">{{ t.name }}</cite>
              <span class="ts__role">{{ t.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <!-- dots -->
      <div class="ts__dots" role="tablist" aria-label="Testimonios">
        <button
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="ts__dot"
          :class="{ 'ts__dot--on': active === i }"
          :aria-label="`Ver testimonio de ${t.name}`"
          :aria-selected="active === i"
          @click="active = i"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ts { background: var(--color-surface-alt); }
.ts__head { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.ts__title { font-size: var(--step-3); }
.ts__desc { margin-top: 0.9rem; color: var(--color-ink-soft); }

/* Compact stacked deck — fixed height, no scroll pinning */
.ts__deck {
  position: relative;
  width: min(92vw, 40rem);
  height: 19rem;
  margin: 0 auto;
}
.ts__card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.75rem, 1.4rem + 2vw, 2.75rem);
  background: var(--color-surface);
  box-shadow: var(--shadow-lg);
  transform-origin: center bottom;
  transition: transform 600ms var(--ease-out), opacity 600ms var(--ease-out);
  will-change: transform, opacity;
}
.ts__mark { position: absolute; top: 1.25rem; right: 1.5rem; }
.ts__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-1);
  line-height: 1.5;
  color: var(--color-ink);
}
.ts__author { display: flex; align-items: center; gap: 0.75rem; margin-top: 1.5rem; }
.ts__avatar {
  width: 46px; height: 46px; flex: 0 0 auto;
  display: grid; place-items: center; border-radius: 50%;
  background: var(--color-primary); color: var(--color-on-primary);
  font-family: var(--font-body); font-weight: 700; font-size: 0.95rem;
}
.ts__meta { display: flex; flex-direction: column; }
.ts__name { font-style: normal; font-weight: 600; color: var(--color-primary); }
.ts__role { font-size: 0.85rem; color: var(--color-muted); }

.ts__dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: 2.5rem; }
.ts__dot {
  width: 10px; height: 10px; border-radius: 50%; border: 0;
  background: var(--color-border);
  cursor: pointer; padding: 0;
  transition: background var(--dur), transform var(--dur);
}
.ts__dot--on { background: var(--color-primary); transform: scale(1.3); }

@media (prefers-reduced-motion: reduce) {
  .ts__card { transition: none; }
}
</style>
