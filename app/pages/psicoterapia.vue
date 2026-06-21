<script setup lang="ts">
import { whyTherapy, therapyTypes, contact } from '~/data/site'
useReveal()
useSeoMeta({
  title: 'Psicoterapia online y presencial · PSYKE',
  description:
    'Consulta clínica cálida y humanizada con enfoque cognitivo-conductual. Psicoterapia para adultos, adolescentes, crisis y trauma. Online y presencial, sin límites geográficos.',
})

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola, me gustaría agendar una cita de psicoterapia con PSYKE.',
)}`
</script>

<template>
  <div>
    <!-- Full-screen shader hero -->
    <section class="shader-hero">
      <div class="shader-hero__bg" aria-hidden="true">
        <ShaderBackground
          :colors="['#faf7f2', '#cdbfe8', '#efeafa', '#a9c7b5', '#8b7fc0']"
          :speed="0.3"
        />
      </div>
      <div class="shader-hero__veil" aria-hidden="true" />
      <div class="container shader-hero__inner">
        <p class="shader-hero__eyebrow reveal">Psicoterapia</p>
        <h1 class="shader-hero__title reveal" data-reveal-delay="80">
          Consulta clínica online y presencial
        </h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          Una atención cálida y humanizada, con tratamientos respaldados
          científicamente desde un enfoque cognitivo-conductual. Sin límites
          geográficos y con horarios flexibles.
        </p>
        <div class="shader-hero__actions reveal" data-reveal-delay="240">
          <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent">
            Agendar cita
          </a>
        </div>
      </div>
      <a href="#contenido" class="shader-hero__scroll" aria-label="Desplázate para conocer más">
        <span>Conoce el proceso</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </section>

    <span id="contenido" />

    <section class="section">
      <div class="container two-col">
        <div class="prose reveal">
          <h2 class="h2">Terapia sin límites geográficos</h2>
          <p>
            La consulta clínica online te permite iniciar tu proceso desde donde
            estés, con horarios flexibles que se ajustan a tu vida. Solo
            necesitas un espacio tranquilo, conexión a internet y un dispositivo:
            celular, tableta o computador.
          </p>
        </div>
        <ul class="needs card reveal" data-reveal-delay="120">
          <li><CheckMark /> Un espacio tranquilo y privado</li>
          <li><CheckMark /> Conexión a internet estable</li>
          <li><CheckMark /> Celular, tableta o computador</li>
        </ul>
      </div>
    </section>

    <section class="section why" aria-labelledby="why-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">¿Por qué ir a terapia?</p>
          <h2 id="why-h" class="h2">La terapia te ayuda a…</h2>
        </header>
        <ul class="why__grid">
          <li
            v-for="(w, i) in whyTherapy"
            :key="w"
            class="why__item card reveal"
            :data-reveal-delay="i * 60"
          >
            <CheckMark /> <span>{{ w }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section types" aria-labelledby="types-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Modalidades</p>
          <h2 id="types-h" class="h2">Acompañamiento para cada momento</h2>
        </header>
        <div class="types__grid">
          <article
            v-for="(t, i) in therapyTypes"
            :key="t.title"
            class="card types__card reveal"
            :data-reveal-delay="i * 80"
          >
            <h3>{{ t.title }}</h3>
            <p>{{ t.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaBand
      title="Da el primer paso hacia tu bienestar"
      text="Agenda tu primera sesión y construyamos juntos un espacio seguro para tu proceso."
    />
  </div>
</template>

<style scoped>
/* ---- Full-screen shader hero ---- */
.shader-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-bg); /* cream fallback before WebGL paints */
  color: var(--color-ink);
}
.shader-hero__bg { position: absolute; inset: 0; z-index: 0; }
/* soft light veil so the title stays legible over the mesh gradient */
.shader-hero__veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(to right, rgba(250, 247, 242, 0.82) 0%, rgba(250, 247, 242, 0.45) 45%, transparent 80%),
    linear-gradient(to top, rgba(250, 247, 242, 0.55) 0%, transparent 45%);
}
.shader-hero__inner { position: relative; z-index: 2; max-width: 44rem; padding-block: 8rem; }
.shader-hero__eyebrow {
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--color-accent); margin-bottom: 1rem;
}
.shader-hero__title {
  font-family: var(--font-display);
  font-size: var(--step-4); line-height: 1.05; color: var(--color-ink);
}
.shader-hero__lede {
  margin-top: 1.4rem; max-width: 40ch;
  color: var(--color-ink-soft); font-size: var(--step-1); line-height: 1.5;
}
.shader-hero__actions { margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 0.8rem; }
.shader-hero__scroll {
  position: absolute; z-index: 2; left: 50%; bottom: 1.75rem;
  transform: translateX(-50%);
  display: inline-flex; flex-direction: column; align-items: center; gap: 0.4rem;
  color: var(--color-ink-soft);
  font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600;
}
.shader-hero__scroll:hover { color: var(--color-primary); }
.shader-hero__scroll svg { animation: hero-bounce 2s ease-in-out infinite; }
@keyframes hero-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
@media (prefers-reduced-motion: reduce) {
  .shader-hero__scroll svg { animation: none; }
}

.two-col { display: grid; gap: 2rem; align-items: start; }
.h2 { font-size: var(--step-3); margin-bottom: 1rem; }
.needs { padding: 1.75rem; display: flex; flex-direction: column; gap: 0.9rem; }
.needs li { display: flex; gap: 0.6rem; align-items: center; font-weight: 500; }
.head--center { text-align: center; max-width: 40rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.why { background: var(--color-surface-alt); }
.why__grid { display: grid; gap: 1rem; grid-template-columns: 1fr; }
.why__item { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1.1rem 1.25rem; font-weight: 500; }
.types__grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
.types__card { padding: 1.75rem; }
.types__card h3 { color: var(--color-primary); font-size: var(--step-1); margin-bottom: 0.5rem; }
.types__card p { color: var(--color-ink-soft); }

@media (min-width: 760px) {
  .two-col { grid-template-columns: 1.4fr 0.9fr; }
  .why__grid { grid-template-columns: repeat(2, 1fr); }
  .types__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .types__grid { grid-template-columns: repeat(4, 1fr); }
}
</style>
