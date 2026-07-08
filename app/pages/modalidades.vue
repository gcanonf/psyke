<script setup lang="ts">
import { therapies } from '~/data/site'
useReveal()

// These modalities render as full-bleed parallax bands with centered text.
const parallaxIds = ['adolescentes', 'grupal']
// Standard sections in this list are mirrored (image on the right).
const mirrorIds = ['infantil']
useSeo({
  title: 'Modalidades de terapia · Adultos, adolescentes, infantil y grupal | PSYKE',
  description:
    'Conoce las modalidades de psicoterapia de PSYKE: terapia para adultos, adolescentes, infantil y psicoterapia grupal. Acompañamiento cálido, online y presencial en Bogotá, Colombia.',
})
</script>

<template>
  <div>
    <!-- Hero: dimmed world map with connections radiating from Colombia -->
    <section class="hero">
      <WorldConnections />
      <div class="hero__veil" aria-hidden="true" />
      <div class="container hero__inner">
        <div class="hero__copy reveal">
          <p class="eyebrow">Psicoterapia</p>
          <h1 class="hero__title">Modalidades de terapia</h1>
          <p class="hero__sub">
            Hay momentos en que la vida pesa más de lo que podemos sostener por
            nuestra cuenta. Acompaño a adultos y adolescentes que atraviesan esos
            momentos, y a familias que quieren estar más presentes para sus hijos
            e hijas.
          </p>
          <p class="hero__sub">
            <strong>En tu idioma. Desde donde estés.</strong> Porque el cambio es
            posible, y nadie debería recorrer ese camino en soledad.
          </p>
          <a :href="`#${therapies[0].id}`" class="hero__scroll">
            Conoce cada modalidad
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>

    <!-- One section per modality, each an anchor target -->
    <template v-for="t in therapies" :key="t.id">
      <!-- Full-bleed parallax band, centered text over the image -->
      <section
        v-if="parallaxIds.includes(t.id)"
        :id="t.id"
        class="parallax"
        :style="{ backgroundImage: `url(${t.image})` }"
      >
        <div class="parallax__veil" aria-hidden="true" />
        <div class="container parallax__inner reveal">
          <p class="parallax__phrase">«{{ t.phrase }}»</p>
          <h2 class="parallax__title">{{ t.title }}</h2>
          <p class="parallax__text">{{ t.full }}</p>
        </div>
      </section>

      <!-- Standard side-by-side band -->
      <section
        v-else
        :id="t.id"
        class="mode"
        :class="{ 'mode--alt': mirrorIds.includes(t.id) }"
      >
        <div class="container mode__inner">
          <div class="mode__media reveal">
            <NuxtImg
              :src="t.image"
              :alt="t.title"
              width="720"
              height="720"
              sizes="(max-width: 768px) 90vw, 480px"
              class="mode__img"
              placeholder
            />
          </div>
          <div class="mode__body reveal" data-reveal-delay="80">
            <p class="mode__phrase">«{{ t.phrase }}»</p>
            <h2 class="mode__title">{{ t.title }}</h2>
            <p class="mode__text">{{ t.full }}</p>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
/* ── World-map hero ────────────────────────────────────────── */
.hero {
  position: relative;
  overflow: hidden;
  /* clears the fixed header */
  padding: calc(72px + clamp(2.5rem, 8vw, 6rem)) 0 clamp(2.5rem, 8vw, 5rem);
}
/* fade the map at the edges + lift legibility of the copy */
.hero__veil {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(120% 90% at 30% 40%, color-mix(in srgb, var(--color-bg) 70%, transparent), transparent 70%),
    linear-gradient(to bottom, transparent 60%, var(--color-bg));
}
.hero__inner {
  position: relative;
  z-index: 2;
}
.hero__copy { max-width: 36rem; text-align: left; }
.hero__title {
  font-size: var(--step-4);
  line-height: 1.1;
  color: var(--color-primary);
  margin-top: 0.4rem;
}
.hero__sub {
  margin-top: 1rem;
  font-size: var(--step-0);
  line-height: 1.6;
  color: var(--color-ink-soft);
}
.hero__sub strong { color: var(--color-accent); font-weight: 600; }
.hero__scroll {
  margin-top: 1.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  transition: gap var(--dur), color var(--dur);
}
.hero__scroll span { transition: transform var(--dur); }
.hero__scroll:hover { color: var(--color-accent); }
.hero__scroll:hover span { transform: translateY(3px); }

/* Sticky-header-safe anchor offset */
.mode { scroll-margin-top: 6rem; padding: clamp(3rem, 8vw, 6rem) 0; }
.mode--alt { background: var(--color-surface, #f4f0ea); }

.mode__inner {
  display: grid;
  gap: clamp(1.5rem, 5vw, 3.5rem);
  align-items: center;
}
.mode__media { border-radius: var(--radius-lg, 1.25rem); overflow: hidden; box-shadow: var(--shadow-soft, 0 20px 50px rgba(44, 38, 56, 0.12)); }
.mode__img,
.mode__img :deep(img) { display: block; width: 100%; height: 100%; object-fit: cover; aspect-ratio: 1 / 1; }

.mode__phrase { font-family: var(--font-display); font-style: italic; color: var(--color-accent); margin-bottom: 0.4rem; }
.mode__title { font-size: var(--step-2); color: var(--color-primary); margin-bottom: 0.9rem; }
.mode__text { color: var(--color-ink-soft); line-height: 1.7; margin-bottom: 1.6rem; white-space: pre-line; }

@media (min-width: 860px) {
  .mode__inner { grid-template-columns: 1fr 1fr; }
  .mode--alt .mode__media { order: 2; }
}

/* ── Full-bleed parallax band ──────────────────────────────── */
.parallax {
  position: relative;
  scroll-margin-top: 6rem;
  display: grid;
  place-items: center;
  min-height: clamp(24rem, 60vh, 34rem);
  padding: clamp(4rem, 10vw, 7rem) 0;
  background-size: cover;
  background-position: center;
  /* the parallax effect — image stays put as the page scrolls */
  background-attachment: fixed;
}
.parallax__veil {
  position: absolute;
  inset: 0;
  /* darken for legible centered text on top of the photo */
  background:
    linear-gradient(to bottom, rgba(44, 38, 56, 0.55), rgba(44, 38, 56, 0.45)),
    radial-gradient(120% 100% at 50% 50%, transparent, rgba(44, 38, 56, 0.35));
}
.parallax__inner {
  position: relative;
  z-index: 1;
  max-width: 46rem;
  text-align: center;
  color: #fff;
}
.parallax__phrase {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-1);
  color: var(--color-accent-soft, #cfe5d8);
  margin-bottom: 0.6rem;
}
.parallax__title {
  font-size: var(--step-3);
  color: #fff;
  margin-bottom: 1rem;
}
.parallax__text {
  font-size: var(--step-0);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.92);
  margin-inline: auto;
  white-space: pre-line;
}

/* background-attachment:fixed is janky/unsupported on most mobile browsers;
   fall back to a normal scrolling cover image there. */
@media (max-width: 768px), (prefers-reduced-motion: reduce) {
  .parallax { background-attachment: scroll; }
}
</style>
