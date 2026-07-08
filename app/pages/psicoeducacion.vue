<script setup lang="ts">
import { contact } from '~/data/site'
useReveal()
useSeo({
  title:
    'Psicoeducación online en español | Salud mental accesible para hispanohablantes',
  description:
    'Espacios de psicoeducación online en español sobre salud mental, inteligencia emocional, trauma y bienestar. Para personas y familias hispanohablantes en cualquier país.',
  keywords:
    'psicoeducación online en español, salud mental accesible hispanohablantes, talleres salud mental online español',
})

const mailLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Información sobre Psicoeducación para la Vida',
)}`

const parallaxEl = ref<HTMLElement | null>(null)
useParallax(parallaxEl, 0.2)

// Each topic gets a simple line-icon (paths drawn inline in the template)
const topics = [
  { label: 'Salud mental sin estigmas', icon: 'brain' },
  { label: 'Inteligencia emocional', icon: 'heart' },
  { label: 'Crianza con vínculo', icon: 'family' },
  { label: 'Duelo y pérdida', icon: 'leaf' },
  { label: 'Estrés y ansiedad', icon: 'wave' },
  { label: 'Habilidades socioemocionales', icon: 'spark' },
  { label: 'El autocuidado que nadie te enseñó', icon: 'self' },
  { label: 'Trauma y resiliencia', icon: 'shield' },
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
        <article class="card intro__card reveal">
          <span class="intro__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 3Z" />
              <path d="M9.5 22h5" />
            </svg>
          </span>
          <p class="intro__eyebrow">El espacio</p>
          <h2 class="intro__title">Qué es</h2>
          <p class="intro__text">
            Espacios de aprendizaje donde el conocimiento psicológico se convierte
            en herramientas reales para la vida cotidiana. No es terapia. Es
            entenderte mejor. Me gusta pensar en estos espacios como faros:
            lugares donde aprendemos juntos a mirarnos con más claridad, más
            compasión y menos estigma.
          </p>
        </article>
        <article class="card intro__card reveal" data-reveal-delay="120">
          <span class="intro__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="8" r="3" />
              <path d="M2 20c0-3.3 3.1-5 7-5s7 1.7 7 5" />
              <path d="M16 7.5a2.5 2.5 0 0 1 0 5" />
              <path d="M18 15.2c2.4.6 4 2 4 4.3" />
            </svg>
          </span>
          <p class="intro__eyebrow">Las personas</p>
          <h2 class="intro__title">Para quién</h2>
          <p class="intro__text">
            Para personas, familias, docentes, cuidadores y grupos comunitarios
            que quieren comprender sus emociones y construir una vida con más
            bienestar. Online en español para colombianos e hispanohablantes en
            cualquier parte del mundo.
          </p>
        </article>
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
        <!-- shared icon sprite (defined once, referenced via <use>) -->
        <svg width="0" height="0" class="topics__sprite" aria-hidden="true" focusable="false">
          <defs>
            <g id="ic-brain" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5 2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 1 2 2.5 2.5 0 0 0 0 4 2.5 2.5 0 0 0 2.5 2.5A2 2 0 0 0 12 19V5a1.5 1.5 0 0 0-2.5-1Z" />
              <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 1 0 4 2.5 2.5 0 0 1-2.5 2.5A2 2 0 0 1 12 19" />
            </g>
            <g id="ic-heart" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20s-6.5-4.3-9-9a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c-2.5 4.7-7 9-7 9Z" />
            </g>
            <g id="ic-family" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="7" r="2.4" /><circle cx="16" cy="7" r="2.4" />
              <path d="M3.5 19c0-2.7 2-4.5 4.5-4.5S12.5 16.3 12.5 19M11.5 19c0-2.7 2-4.5 4.5-4.5s4.5 1.8 4.5 4.5" />
            </g>
            <g id="ic-leaf" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z" /><path d="M5 19c3-5 6-7 10-9" />
            </g>
            <g id="ic-wave" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
            </g>
            <g id="ic-spark" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
            </g>
            <g id="ic-self" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
            </g>
            <g id="ic-shield" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3l7 3v5c0 4.4-3 8.2-7 10-4-1.8-7-5.6-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" />
            </g>
          </defs>
        </svg>

        <ul class="topics__grid">
          <li
            v-for="(t, i) in topics"
            :key="t.label"
            class="card topic__card reveal"
            :data-reveal-delay="(i % 4) * 70"
          >
            <span class="topic__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24"><use :href="`#ic-${t.icon}`" /></svg>
            </span>
            <span class="topic__label">{{ t.label }}</span>
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
    <section class="section closing">
      <div class="container closing__grid">
        <a :href="mailLink" class="closing__cta reveal">
          <span class="closing__cta-copy">
            <span class="closing__cta-title">¿Quieres saber más?</span>
            <span class="closing__cta-text">
              Cuéntame qué te interesa y diseñamos juntos el espacio que mejor
              responde a tu momento.
            </span>
          </span>
          <span class="closing__cta-action">
            Solicitar información
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </span>
        </a>

        <NuxtLink to="/cultura-del-cuidado" class="closing__cross reveal" data-reveal-delay="100">
          <span class="closing__cross-eyebrow">¿Para tu organización?</span>
          <span class="closing__cross-link">
            Visita Cultura del Cuidado
            <span aria-hidden="true">→</span>
          </span>
        </NuxtLink>
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
.intro__grid { display: grid; gap: 1.5rem; align-items: stretch; }
.intro__card {
  position: relative;
  padding: clamp(1.75rem, 1.4rem + 2vw, 2.75rem);
  overflow: hidden;
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.intro__card::before {
  content: '';
  position: absolute; inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-accent));
}
.intro__card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.intro__icon {
  display: grid; place-items: center;
  width: 52px; height: 52px;
  border-radius: 14px;
  background: var(--color-primary-tint);
  color: var(--color-primary);
  margin-bottom: 1.1rem;
}
.intro__eyebrow {
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.74rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--color-accent); margin-bottom: 0.35rem;
}
.intro__title { font-family: var(--font-display); font-size: var(--step-2); margin-bottom: 0.7rem; }
.intro__text { color: var(--color-ink-soft); line-height: 1.6; }
@media (min-width: 720px) { .intro__grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }

/* ---- Temas grid ---- */
.topics-sec { background: var(--color-surface-alt); }
.topics__sprite { position: absolute; width: 0; height: 0; }
.topics__grid { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; grid-template-columns: 1fr; }
.topic__card {
  display: flex; align-items: center; gap: 0.9rem;
  padding: 1.15rem 1.3rem;
  position: relative;
  overflow: hidden;
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur);
  border: 1px solid transparent;
}
.topic__icon {
  flex: 0 0 auto;
  display: grid; place-items: center;
  width: 44px; height: 44px;
  border-radius: 12px;
  background: var(--color-primary-tint);
  color: var(--color-primary);
  transition: background var(--dur), color var(--dur), transform var(--dur) var(--ease-out);
}
.topic__label { font-weight: 600; color: var(--color-ink); line-height: 1.35; }
.topic__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  border-color: var(--color-primary-tint);
}
.topic__card:hover .topic__icon {
  background: var(--color-primary);
  color: var(--color-on-primary);
  transform: scale(1.05);
}
@media (min-width: 640px) { .topics__grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1040px) { .topics__grid { grid-template-columns: repeat(4, 1fr); } }

/* ---- Closing CTA + cross-link ---- */
.closing { background: var(--color-surface-alt); }
.closing__grid {
  max-width: 52rem; margin-inline: auto;
  display: grid; gap: 1rem; align-items: stretch;
}

/* primary CTA — the whole card is the link, no separate button */
.closing__cta {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
  gap: 1.25rem;
  padding: clamp(1.5rem, 1.2rem + 2vw, 2.25rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-primary), #54468a);
  color: var(--color-on-primary);
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur);
}
.closing__cta:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.closing__cta-copy { display: flex; flex-direction: column; gap: 0.35rem; flex: 1 1 16rem; }
.closing__cta-title { font-family: var(--font-display); font-size: var(--step-2); line-height: 1.15; }
.closing__cta-text { color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; line-height: 1.5; max-width: 34ch; }
.closing__cta-action {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.15);
  font-weight: 600; white-space: nowrap;
  transition: background var(--dur), gap var(--dur);
}
.closing__cta:hover .closing__cta-action { background: rgba(255, 255, 255, 0.25); gap: 0.75rem; }

/* secondary cross-link card */
.closing__cross {
  display: flex; flex-direction: column; gap: 0.3rem;
  padding: 1.25rem clamp(1.5rem, 1.2rem + 2vw, 2.25rem);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  text-decoration: none;
  transition: border-color var(--dur), transform var(--dur) var(--ease-out);
}
.closing__cross:hover { border-color: var(--color-primary); transform: translateY(-2px); }
.closing__cross-eyebrow {
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--color-accent);
}
.closing__cross-link {
  display: inline-flex; align-items: center; gap: 0.45rem;
  font-weight: 600; color: var(--color-primary);
  transition: gap var(--dur);
}
.closing__cross:hover .closing__cross-link { gap: 0.7rem; }

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
