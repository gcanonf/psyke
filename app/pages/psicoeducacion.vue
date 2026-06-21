<script setup lang="ts">
import { contact } from '~/data/site'
useReveal()
useSeo({
  title: 'Psicoeducación · Talleres y conferencias de salud mental | PSYKE',
  description:
    'Talleres y conferencias de psicoeducación en Colombia que integran psicología, educación y trabajo comunitario para fortalecer la salud mental sin estigmas, en instituciones, empresas y comunidades.',
})

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola, me gustaría conocer las charlas y talleres de Psicoeducación de PSYKE.',
)}`

const parallaxEl = ref<HTMLElement | null>(null)
useParallax(parallaxEl, 0.2)

const formats = [
  { title: 'Talleres', text: 'Espacios participativos con herramientas prácticas para la vida diaria.' },
  { title: 'Conferencias', text: 'Encuentros que conectan la investigación y la teoría con lo cotidiano.' },
]
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
      <img src="/logo-mark.svg" alt="" class="shader-hero__watermark" aria-hidden="true" />
      <div class="shader-hero__veil" aria-hidden="true" />
      <div class="container shader-hero__inner">
        <p class="shader-hero__eyebrow reveal">Psicoeducación para la Vida</p>
        <h1 class="shader-hero__title reveal" data-reveal-delay="80">
          Faros de conocimiento y cuidado
        </h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          Integro psicología, educación y trabajo comunitario para acompañar a
          personas y grupos en el descubrimiento de herramientas prácticas.
        </p>
        <div class="shader-hero__actions reveal" data-reveal-delay="240">
          <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent">
            Solicita una charla
          </a>
        </div>
      </div>
      <a href="#contenido" class="shader-hero__scroll" aria-label="Desplázate para conocer más">
        <span>Conoce más</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </section>

    <span id="contenido" />

    <!-- Featured quote -->
    <section class="section quote-feature">
      <div class="container quote-feature__inner reveal">
        <svg class="quote-feature__mark" viewBox="0 0 32 32" width="56" height="56" aria-hidden="true">
          <path d="M12 8c-3.3 0-6 2.7-6 6v10h9V14H9c0-1.7 1.3-3 3-3V8Zm14 0c-3.3 0-6 2.7-6 6v10h9V14h-6c0-1.7 1.3-3 3-3V8Z" fill="var(--color-primary-tint)" />
        </svg>
        <blockquote class="quote-feature__text">
          El conocimiento que se comparte se convierte en
          <em>cuidado, y el cuidado, en comunidad.</em>
        </blockquote>
      </div>
    </section>

    <!-- Content + formats -->
    <section class="section formats-sec">
      <div class="container two-col">
        <div class="prose reveal">
          <h2 class="h2">Salud mental sin estigmas</h2>
          <p>
            Abordamos la salud mental sin estigmas y con una visión más humana,
            conectando la investigación y la teoría con su aplicación en la vida
            cotidiana.
          </p>
          <p>
            A través de programas personalizados y metodologías participativas,
            ayudo a las personas y a los grupos a fortalecer su salud mental,
            cultivar el cuidado emocional y construir relaciones más sanas.
          </p>
        </div>
        <div class="formats reveal" data-reveal-delay="120">
          <article v-for="f in formats" :key="f.title" class="card format__card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Parallax conference band -->
    <section ref="parallaxEl" class="parallax" aria-label="Conferencia de psicoeducación">
      <div class="parallax__bg" aria-hidden="true" />
      <div class="parallax__veil" aria-hidden="true" />
      <div class="container parallax__inner reveal">
        <blockquote class="parallax__quote">
          Acompañar a las personas y a los grupos en un camino donde descubran
          herramientas prácticas.
        </blockquote>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Full-screen shader hero (same as EMDR / Cultura) ---- */
.shader-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-bg);
  color: var(--color-ink);
}
.shader-hero__bg { position: absolute; inset: 0; z-index: 0; }
.shader-hero__watermark {
  position: absolute;
  z-index: 0;
  top: 50%; right: -6%;
  transform: translateY(-50%);
  height: 130%; width: auto;
  opacity: 0.06; pointer-events: none; user-select: none;
  filter: saturate(0.6);
}
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

/* ---- Featured quote ---- */
.quote-feature { padding-block: clamp(3rem, 2rem + 4vw, 5.5rem); }
.quote-feature__inner { max-width: 48rem; margin-inline: auto; text-align: center; }
.quote-feature__mark { display: block; margin: 0 auto 1rem; }
.quote-feature__text {
  font-family: var(--font-display);
  font-size: var(--step-2); line-height: 1.4; color: var(--color-ink);
}
.quote-feature__text em { font-style: italic; color: var(--color-primary); }

/* ---- Content + formats ---- */
.formats-sec { background: var(--color-surface-alt); }
.two-col { display: grid; gap: 2rem; align-items: start; }
.h2 { font-size: var(--step-3); margin-bottom: 1rem; }
.formats { display: flex; flex-direction: column; gap: 1.25rem; }
.format__card { padding: 1.75rem; }
.format__card h3 { color: var(--color-primary); font-size: var(--step-1); margin-bottom: 0.4rem; }
.format__card p { color: var(--color-ink-soft); }

/* ---- Parallax band ---- */
.parallax {
  position: relative;
  min-height: clamp(22rem, 50vh, 32rem);
  display: flex;
  align-items: center;
  overflow: hidden;
}
.parallax__bg {
  position: absolute;
  inset: -12% 0; /* extra height so the parallax shift never reveals an edge */
  background: url('/images/psicoeducacion/conferencia.jpg') center / cover no-repeat;
  transform: translateY(var(--parallax, 0));
  will-change: transform;
}
.parallax__veil {
  position: absolute; inset: 0;
  background: linear-gradient(120deg, rgba(20, 15, 36, 0.82) 0%, rgba(20, 15, 36, 0.55) 60%, rgba(20, 15, 36, 0.4) 100%);
}
.parallax__inner { position: relative; z-index: 1; }
.parallax__quote {
  max-width: 40rem;
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-2);
  line-height: 1.4;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

@media (min-width: 760px) {
  .two-col { grid-template-columns: 1.2fr 0.8fr; }
}
@media (prefers-reduced-motion: reduce) {
  .shader-hero__scroll svg { animation: none; }
  .parallax__bg { transform: none; }
}
</style>
