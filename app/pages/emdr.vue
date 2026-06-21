<script setup lang="ts">
import { emdrFor } from '~/data/site'
useReveal()
useSeoMeta({
  title: 'EMDR · Terapia para procesar el trauma · PSYKE',
  description:
    'EMDR: enfoque psicoterapéutico validado científicamente para procesar recuerdos dolorosos que siguen generando malestar. Trauma, ansiedad y bloqueos emocionales.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="EMDR"
      title="¿Qué es EMDR?"
      lede="EMDR es un enfoque psicoterapéutico validado científicamente para ayudar a procesar recuerdos dolorosos que siguen generando malestar: trauma, ansiedad, bloqueos emocionales y experiencias difíciles."
    />

    <section class="section forwho" aria-labelledby="forwho-h">
      <div class="container">
        <header class="head reveal">
          <p class="eyebrow">¿Para quién está dirigido?</p>
          <h2 id="forwho-h" class="h2">Cuando el peso emocional no se ha resuelto</h2>
          <p class="lede">
            Para quienes cargan experiencias difíciles que no se han elaborado, ya
            sea de forma consciente o expresadas a través de síntomas físicos,
            sueño alterado o hipervigilancia constante.
          </p>
        </header>
        <ul class="forwho__grid">
          <li
            v-for="(item, i) in emdrFor"
            :key="item"
            class="forwho__item card reveal"
            :data-reveal-delay="i * 60"
          >
            <CheckMark /> <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section evidence">
      <div class="container evidence__inner reveal">
        <div class="evidence__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
            <path d="M9 3h6M12 3v5m-5 5a5 5 0 1 0 10 0c0-2-1-3-2-5H9c-1 2-2 3-2 5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h2 class="h2">Evidencia científica sobre la terapia EMDR</h2>
        <p class="prose-p">
          Distintos investigadores han realizado estudios rigurosos —incluyendo
          investigaciones controladas, meta-análisis y revisiones sistemáticas—
          que han contribuido a respaldar la evidencia científica de este enfoque.
        </p>
      </div>
    </section>

    <section class="section quote-sec">
      <div class="container">
        <blockquote class="bigquote reveal">
          «Las heridas no sanan solas. Tu historia merece un espacio seguro donde
          pueda ser escuchada… con cuidado, con respeto y empatía.»
        </blockquote>
      </div>
    </section>

    <CtaBand
      title="Tu historia merece ser escuchada"
      text="Si sientes que algo del pasado sigue pesando, EMDR puede ayudarte a reprocesarlo. Conversemos."
    />
  </div>
</template>

<style scoped>
.h2 { font-size: var(--step-3); margin-bottom: 0.9rem; }
.head { max-width: 48rem; margin-bottom: clamp(2rem, 1.5rem + 2vw, 3rem); }
.forwho__grid { display: grid; gap: 1rem; grid-template-columns: 1fr; }
.forwho__item { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1.2rem 1.4rem; font-weight: 500; line-height: 1.45; }

.evidence { background: var(--color-surface-alt); }
.evidence__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.evidence__icon {
  width: 72px; height: 72px;
  display: grid; place-items: center;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  background: var(--color-primary-tint);
  color: var(--color-primary);
}
.prose-p { color: var(--color-ink-soft); margin-top: 0.5rem; }

.quote-sec { padding-block: clamp(3rem, 2rem + 4vw, 5rem); }
.bigquote {
  max-width: 44rem;
  margin-inline: auto;
  text-align: center;
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-2);
  line-height: 1.4;
  color: var(--color-primary);
}

@media (min-width: 760px) {
  .forwho__grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
