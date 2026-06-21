<script setup lang="ts">
import { careWorkshops } from '~/data/site'
useReveal()
useSeoMeta({
  title: 'Cultura del Cuidado · Talleres para equipos y comunidades · PSYKE',
  description:
    'Espacios formativos que equilibran el desarrollo profesional con el bienestar emocional. Talleres de autoliderazgo, comunicación, resiliencia, gestión del tiempo y más.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Cultura del Cuidado"
      title="Crecer, descubrir y compartir"
      lede="«Asistir no es solo aprender algo nuevo; es regalarse un espacio para crecer, descubrir y compartir.» Espacios que equilibran el desarrollo profesional con el bienestar emocional, para construir entornos más sanos y productivos."
    />

    <section class="section">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Talleres</p>
          <h2 class="h2">Seis áreas de cuidado integral</h2>
          <p class="lede">
            Talleres prácticos y aplicables a la vida diaria. Los temas se ajustan
            a las necesidades de cada audiencia.
          </p>
        </header>
        <div class="ws__grid">
          <article
            v-for="(w, i) in careWorkshops"
            :key="w.title"
            class="card ws__card reveal"
            :data-reveal-delay="i * 70"
          >
            <span class="ws__num">0{{ i + 1 }}</span>
            <h3>{{ w.title }}</h3>
            <p>{{ w.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section feature">
      <div class="container feature__inner reveal">
        <h2 class="h2">Diseñado a la medida de tu equipo</h2>
        <p class="prose-p">
          Todas las sesiones combinan competencias profesionales con el bienestar
          emocional de las personas, con herramientas prácticas que se llevan a la
          vida cotidiana. Ideal para organizaciones, instituciones y comunidades
          que quieren cuidar a quienes las integran.
        </p>
      </div>
    </section>

    <CtaBand
      title="Lleva la Cultura del Cuidado a tu organización"
      text="Diseñamos un programa de talleres a la medida de tu equipo o comunidad. Cuéntanos qué necesitan."
    />
  </div>
</template>

<style scoped>
.h2 { font-size: var(--step-3); margin-bottom: 0.9rem; }
.head--center { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.ws__grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
.ws__card { padding: 1.75rem; }
.ws__num { font-family: var(--font-display); font-weight: 700; color: var(--color-accent); font-size: 1.1rem; }
.ws__card h3 { color: var(--color-primary); font-size: var(--step-1); margin: 0.4rem 0 0.5rem; }
.ws__card p { color: var(--color-ink-soft); }
.feature { background: var(--color-surface-alt); }
.feature__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.prose-p { color: var(--color-ink-soft); }

@media (min-width: 720px) { .ws__grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ws__grid { grid-template-columns: repeat(3, 1fr); } }
</style>
