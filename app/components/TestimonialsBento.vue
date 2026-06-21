<script setup lang="ts">
import { testimonials } from '~/data/site'

/**
 * Mosaic / masonry testimonials.
 * CSS multi-column layout packs cards by their natural height, so quotes of
 * different lengths flow organically (not a rigid grid).
 * Privacy-first: anonymous clients shown with elegant initials avatars.
 */
function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

// A couple of accent cards break up the rhythm of the mosaic
const accent = new Set([0, 5, 8])
</script>

<template>
  <section id="testimonios" class="tb section" aria-labelledby="tb-h">
    <div class="container">
      <header class="tb__head reveal">
        <p class="eyebrow">Testimonios</p>
        <h2 id="tb-h" class="tb__title">Historias de quienes han caminado este proceso</h2>
        <p class="tb__desc">
          Cada testimonio es el reflejo de un camino recorrido con valentía.
        </p>
      </header>

      <div class="tb__mosaic reveal" data-reveal-delay="80">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name + i"
          class="tb__card card"
          :class="{ 'tb__card--accent': accent.has(i) }"
        >
          <svg class="tb__mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
            <path d="M12 8c-3.3 0-6 2.7-6 6v10h9V14H9c0-1.7 1.3-3 3-3V8Zm14 0c-3.3 0-6 2.7-6 6v10h9V14h-6c0-1.7 1.3-3 3-3V8Z" fill="currentColor" />
          </svg>

          <blockquote class="tb__quote">{{ t.quote }}</blockquote>

          <figcaption class="tb__author">
            <span class="tb__avatar" aria-hidden="true">{{ initials(t.name) }}</span>
            <span class="tb__meta">
              <cite class="tb__name">{{ t.name }}</cite>
              <span class="tb__role">{{ t.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tb { background: var(--color-surface-alt); }
.tb__head { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.tb__title { font-size: var(--step-3); }
.tb__desc { margin-top: 0.9rem; color: var(--color-ink-soft); }

/* Masonry mosaic via CSS columns — cards pack by their natural height */
.tb__mosaic {
  column-count: 1;
  column-gap: 1.25rem;
}
.tb__card {
  /* prevent a card from splitting across columns */
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  display: inline-block; /* needed for clean column packing */
  width: 100%;
  margin-bottom: 1.25rem;
  padding: clamp(1.4rem, 1.1rem + 1.4vw, 2rem);
  color: var(--color-primary-tint); /* drives the quote mark color */
}
.tb__card--accent {
  background: var(--color-primary);
  border-color: transparent;
  color: rgba(255, 255, 255, 0.22);
}
.tb__mark { display: block; margin-bottom: 0.5rem; }

.tb__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--color-ink);
}
.tb__card--accent .tb__quote { color: #fff; }

.tb__author { display: flex; align-items: center; gap: 0.7rem; margin-top: 1.25rem; }
.tb__avatar {
  width: 44px; height: 44px; flex: 0 0 auto;
  display: grid; place-items: center;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-family: var(--font-body); font-weight: 700; font-size: 0.92rem;
}
.tb__card--accent .tb__avatar { background: rgba(255, 255, 255, 0.18); color: #fff; }
.tb__meta { display: flex; flex-direction: column; }
.tb__name { font-style: normal; font-weight: 600; color: var(--color-primary); }
.tb__card--accent .tb__name { color: #fff; }
.tb__role { font-size: 0.82rem; color: var(--color-muted); }
.tb__card--accent .tb__role { color: rgba(255, 255, 255, 0.7); }

@media (min-width: 640px) { .tb__mosaic { column-count: 2; } }
@media (min-width: 1024px) { .tb__mosaic { column-count: 3; } }
</style>
