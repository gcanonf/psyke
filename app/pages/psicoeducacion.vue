<script setup lang="ts">
import { contact } from '~/data/site'
useReveal()
useSeo({
  title:
    'Psicoeducación online en español | Salud mental accesible para hispanohablantes',
  description:
    'Espacios de psicoeducación online en español sobre salud mental, inteligencia emocional, trauma y bienestar. Para personas y familias hispanohablantes en cualquier país.',
})

const mailLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Información sobre Psicoeducación para la Vida',
)}`

const parallaxEl = ref<HTMLElement | null>(null)
useParallax(parallaxEl, 0.2)

const topics = [
  'Salud mental sin estigmas',
  'Inteligencia emocional',
  'Crianza con vínculo',
  'Duelo y pérdida',
  'Estrés y ansiedad',
  'Habilidades socioemocionales',
  'El autocuidado que nadie te enseñó',
  'Trauma y resiliencia',
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
          Salud mental accesible para hispanohablantes
        </h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          ¿Por qué reaccionamos como reaccionamos? ¿Por qué hay heridas que no
          sanan solas? ¿Por qué cuesta tanto pedir ayuda? Hay preguntas que
          merecen respuesta. La psicoeducación está aquí para eso.
        </p>
        <div class="shader-hero__actions reveal" data-reveal-delay="240">
          <a :href="mailLink" class="btn btn--accent">
            Solicitar información
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

    <!-- Qué es / Para quién -->
    <section class="section intro">
      <div class="container intro__grid">
        <div class="intro__block reveal">
          <h2 class="h2">Qué es</h2>
          <p class="prose-p">
            Espacios de aprendizaje donde el conocimiento psicológico se convierte
            en herramientas reales para la vida cotidiana. No es terapia. Es
            entenderte mejor. Me gusta pensar en estos espacios como faros:
            lugares donde aprendemos juntos a mirarnos con más claridad, más
            compasión y menos estigma.
          </p>
        </div>
        <div class="intro__block reveal" data-reveal-delay="120">
          <h2 class="h2">Para quién</h2>
          <p class="prose-p">
            Para personas, familias, docentes, cuidadores y grupos comunitarios
            que quieren comprender sus emociones y construir una vida con más
            bienestar. Online en español para colombianos e hispanohablantes en
            cualquier parte del mundo.
          </p>
        </div>
      </div>
    </section>

    <!-- Temas -->
    <section class="section topics-sec">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Temas</p>
          <h2 class="h2">Lo que exploramos juntos</h2>
          <p class="lede">
            Los espacios se diseñan a la medida de cada grupo. Si hablas español,
            sin importar dónde estés, podemos trabajar juntos.
          </p>
        </header>
        <ul class="topics__grid">
          <li
            v-for="(t, i) in topics"
            :key="t"
            class="card topic__card reveal"
            :data-reveal-delay="(i % 4) * 70"
          >
            {{ t }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Featured quote -->
    <section class="section quote-feature">
      <div class="container quote-feature__inner reveal">
        <svg class="quote-feature__mark" viewBox="0 0 32 32" width="56" height="56" aria-hidden="true">
          <path d="M12 8c-3.3 0-6 2.7-6 6v10h9V14H9c0-1.7 1.3-3 3-3V8Zm14 0c-3.3 0-6 2.7-6 6v10h9V14h-6c0-1.7 1.3-3 3-3V8Z" fill="var(--color-primary-tint)" />
        </svg>
        <blockquote class="quote-feature__text">
          Hay un momento en que dejas de preguntarte qué te pasa y empiezas a
          <em>entenderlo.</em> Ese momento lo cambia todo. Este espacio existe
          para ayudarte a encontrarlo.
        </blockquote>
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

    <!-- CTA + differentiator link -->
    <section class="section feature">
      <div class="container feature__inner reveal">
        <h2 class="h2">¿Quieres saber más?</h2>
        <p class="prose-p">
          Cuéntame qué te interesa y diseñamos juntos el espacio que mejor
          responde a tu momento o al de tu grupo.
        </p>
        <div class="feature__cta">
          <a :href="mailLink" class="btn btn--accent">Solicitar información</a>
        </div>
        <p class="feature__link">
          ¿Buscas un programa para tu organización o equipo?
          <NuxtLink to="/cultura-del-cuidado">Visita Cultura del Cuidado.</NuxtLink>
        </p>
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

/* ---- Qué es / Para quién ---- */
.h2 { font-size: var(--step-3); margin-bottom: 1rem; }
.prose-p { color: var(--color-ink-soft); }
.head--center { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.intro__grid { display: grid; gap: 2rem; align-items: start; }
.intro__block .h2 { font-size: var(--step-2); }
@media (min-width: 720px) { .intro__grid { grid-template-columns: 1fr 1fr; gap: 3rem; } }

/* ---- Temas grid ---- */
.topics-sec { background: var(--color-surface-alt); }
.topics__grid { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; grid-template-columns: 1fr; }
.topic__card {
  padding: 1.25rem 1.4rem;
  font-weight: 600;
  color: var(--color-primary);
  line-height: 1.4;
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.topic__card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
@media (min-width: 640px) { .topics__grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 980px) { .topics__grid { grid-template-columns: repeat(4, 1fr); } }

/* ---- CTA + differentiator link ---- */
.feature { background: var(--color-surface-alt); }
.feature__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.feature__cta { margin-top: 1.75rem; }
.feature__link { margin-top: 1.75rem; color: var(--color-ink-soft); }
.feature__link a { color: var(--color-primary); font-weight: 600; }
.feature__link a:hover { color: var(--color-accent); }

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
