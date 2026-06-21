<script setup lang="ts">
import { brand, differentiators } from '~/data/site'
useReveal()
useSeoMeta({
  title: 'Acerca de · Eva Margarita Cañón Falla · PSYKE',
  description:
    'Conoce a Eva Margarita Cañón Falla, psicóloga fundadora de PSYKE: más de 20 años de experiencia en salud mental, educación y acompañamiento comunitario.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Acerca de PSYKE"
      :title="brand.professional"
      lede="Psicóloga y fundadora de PSYKE. Acompaño a personas, comunidades y organizaciones sociales en su camino de crecer y sanar."
    />

    <section class="section">
      <div class="container about-grid">
        <div class="about-media reveal">
          <NuxtImg
            src="/images/eva.jpg"
            :alt="`Retrato de ${brand.professional}`"
            width="560"
            height="841"
            sizes="(max-width: 800px) 90vw, 440px"
            placeholder
          />
        </div>
        <div class="prose reveal" data-reveal-delay="120">
          <p>
            Con más de 20 años de experiencia en programas educativos y de salud
            mental, mi trabajo abarca la educación, la salud mental, los temas de
            género, la resolución de conflictos y la intervención en crisis.
          </p>
          <p>
            Mi metodología combina procesos psicológicos —atención, emociones y
            metacognición— con herramientas prácticas para el crecimiento
            personal. Integro el conocimiento del desarrollo humano, los derechos
            y la política pública para ofrecer un acompañamiento integral y
            humanista.
          </p>
          <blockquote class="quote">
            «En PSYKE, creo que cada persona y comunidad tiene el potencial de
            crecer y sanar.»
          </blockquote>
        </div>
      </div>
    </section>

    <section class="section diff" aria-labelledby="diff-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Lo que nos diferencia</p>
          <h2 id="diff-h" class="diff__title">El sello de PSYKE</h2>
        </header>
        <ul class="diff__grid">
          <li
            v-for="(d, i) in differentiators"
            :key="d"
            class="diff__item card reveal"
            :data-reveal-delay="i * 70"
          >
            <span class="diff__num">0{{ i + 1 }}</span>
            <span>{{ d }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section creds">
      <div class="container creds__inner reveal">
        <h2 class="creds__title">Formación y enfoque</h2>
        <div class="creds__grid">
          <article class="card creds__card">
            <h3>Maestrías</h3>
            <p>Psicología Cognitiva y Aprendizaje · Problemáticas Sociales Infanto-Juveniles.</p>
          </article>
          <article class="card creds__card">
            <h3>EMDR</h3>
            <p>Especialización en intervención del trauma con un enfoque validado internacionalmente.</p>
          </article>
          <article class="card creds__card">
            <h3>Experiencia</h3>
            <p>+20 años en programas de educación, salud mental, género y manejo de crisis.</p>
          </article>
        </div>
      </div>
    </section>

    <CtaBand
      title="Caminemos juntos tu proceso"
      text="Cada persona y comunidad tiene el potencial de crecer y sanar. Agenda una conversación inicial."
    />
  </div>
</template>

<style scoped>
.about-grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: start; }
.about-media { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); aspect-ratio: 9 / 11; }
.about-media :deep(img) { width: 100%; height: 100%; object-fit: cover; }
.quote {
  margin-top: 1.75rem;
  padding-left: 1.1rem;
  border-left: 3px solid var(--color-accent);
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-1);
  color: var(--color-ink);
}
.head--center { text-align: center; max-width: 38rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.diff { background: var(--color-surface-alt); }
.diff__title, .creds__title { font-size: var(--step-3); }
.diff__grid { display: grid; gap: 1rem; grid-template-columns: 1fr; }
.diff__item { display: flex; gap: 0.9rem; align-items: center; padding: 1.25rem 1.5rem; font-weight: 500; }
.diff__num { font-family: var(--font-display); font-weight: 700; color: var(--color-accent); font-size: 1.3rem; }
.creds__title { text-align: center; margin-bottom: 2rem; }
.creds__grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
.creds__card { padding: 1.75rem; }
.creds__card h3 { color: var(--color-primary); margin-bottom: 0.5rem; }
.creds__card p { color: var(--color-ink-soft); }

@media (min-width: 760px) {
  .about-grid { grid-template-columns: 0.85fr 1.15fr; }
  .diff__grid { grid-template-columns: repeat(2, 1fr); }
  .creds__grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
