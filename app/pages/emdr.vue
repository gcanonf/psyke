<script setup lang="ts">
import { contact } from '~/data/site'
useReveal()
useSeoMeta({
  title: 'EMDR · Terapia para procesar el trauma · PSYKE',
  description:
    'EMDR con Eva Margarita Cañón Falla, especialista certificada. Enfoque validado científicamente para reprocesar recuerdos dolorosos: trauma, ansiedad, fobias y bloqueos emocionales. Online y presencial.',
})

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola, me gustaría agendar una sesión de EMDR con PSYKE.',
)}`

// The 8 phases of the EMDR protocol
const phases = [
  { title: 'Historia clínica', text: 'Conocemos tu historia, identificamos los recuerdos a trabajar y definimos juntos los objetivos del proceso.' },
  { title: 'Preparación', text: 'Aprendes herramientas de estabilización y autocuidado para sentirte segura antes de comenzar el reprocesamiento.' },
  { title: 'Evaluación', text: 'Identificamos el recuerdo diana, las creencias asociadas y las sensaciones que aún genera en tu cuerpo.' },
  { title: 'Desensibilización', text: 'A través de la estimulación bilateral, el recuerdo va perdiendo su carga emocional perturbadora.' },
  { title: 'Instalación', text: 'Reforzamos una creencia positiva y más adaptativa sobre ti misma y sobre lo vivido.' },
  { title: 'Examen corporal', text: 'Revisamos que el recuerdo ya no active tensión ni malestar físico residual.' },
  { title: 'Cierre', text: 'Cerramos cada sesión en un estado de calma y equilibrio, con recursos para los días siguientes.' },
  { title: 'Reevaluación', text: 'En la siguiente sesión verificamos los avances y damos continuidad al proceso.' },
]

// For whom EMDR is — merged "para quién" + "qué trabajamos" (deduplicated)
const emdrHelps = [
  'Experiencias traumáticas: violencia, abuso, accidentes, pérdidas o separaciones dolorosas',
  'Estrés postraumático y trauma complejo',
  'Heridas de la infancia: abandono, negligencia emocional o entornos inseguros',
  'Dificultades de confianza y apego',
  'Ansiedad intensa, ataques de pánico e hipervigilancia',
  'Recuerdos intrusivos, flashbacks y pesadillas',
  'Duelos y pérdidas difíciles de elaborar',
  'Fobias y miedos desproporcionados',
  'Vergüenza, culpa o creencias negativas persistentes sobre ti misma',
  'Bloqueos que no se han resuelto con otros procesos terapéuticos',
]

// What to expect in the first session
const firstSession = [
  'Conversamos sobre lo que te trae a consulta y tus síntomas actuales.',
  'Definimos juntos los objetivos de tu proceso.',
  'Construimos un plan de seguridad con herramientas de estabilización.',
  'Te explico en qué consiste EMDR y evaluamos si es el enfoque adecuado para ti.',
  'Acordamos el ritmo y la frecuencia de las sesiones.',
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
        <p class="shader-hero__eyebrow reveal">EMDR · Especialista en trauma</p>
        <h1 class="shader-hero__title reveal" data-reveal-delay="80">¿Qué es EMDR?</h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          Un enfoque psicoterapéutico validado científicamente para reprocesar
          recuerdos dolorosos que siguen generando malestar: trauma, ansiedad,
          fobias y bloqueos emocionales.
        </p>
        <div class="shader-hero__actions reveal" data-reveal-delay="240">
          <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent">
            Agendar una sesión de EMDR
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

    <!-- How it works -->
    <section class="section how" aria-labelledby="how-h">
      <div class="container how__grid">
        <div class="how__copy reveal">
          <p class="eyebrow">Cómo funciona</p>
          <h2 id="how-h" class="h2">Tu cerebro tiene la capacidad de sanar</h2>
          <p class="prose-p">
            EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares)
            utiliza la <strong>estimulación bilateral</strong> —a través de
            movimientos oculares u otros estímulos alternados— para ayudar al
            cerebro a reprocesar los recuerdos dolorosos.
          </p>
          <p class="prose-p">
            Así, esos recuerdos van perdiendo su carga emocional perturbadora:
            no se borran, pero dejan de doler y de condicionar tu presente.
          </p>
        </div>
        <div class="how__card card reveal" data-reveal-delay="120">
          <div class="evidence__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <p>
            «Las heridas no sanan solas. Pero con un acompañamiento adecuado, tu
            mente puede reorganizar lo vivido y devolverte la calma.»
          </p>
        </div>
      </div>
    </section>

    <!-- The 8 phases -->
    <section class="section phases" aria-labelledby="phases-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">El proceso</p>
          <h2 id="phases-h" class="h2">Las ocho fases del protocolo EMDR</h2>
        </header>
        <ol class="phases__grid">
          <li
            v-for="(p, i) in phases"
            :key="p.title"
            class="phases__item card reveal"
            :data-reveal-delay="(i % 4) * 70"
          >
            <span class="phases__num">{{ i + 1 }}</span>
            <h3 class="phases__title">{{ p.title }}</h3>
            <p class="phases__text">{{ p.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- For whom / what we work with -->
    <section class="section forwho" aria-labelledby="forwho-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">¿Para quién está dirigido?</p>
          <h2 id="forwho-h" class="h2">Cuando el peso emocional no se ha resuelto</h2>
          <p class="lede">
            Para quienes cargan experiencias difíciles que no se han elaborado,
            ya sea de forma consciente o expresadas a través de síntomas físicos,
            sueño alterado o hipervigilancia constante. EMDR puede ayudarte con:
          </p>
        </header>
        <ul class="forwho__grid">
          <li
            v-for="(item, i) in emdrHelps"
            :key="item"
            class="forwho__item card reveal"
            :data-reveal-delay="(i % 2) * 60"
          >
            <CheckMark /> <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section evidence">
      <div class="container evidence__inner reveal">
        <h2 class="h2">Evidencia científica sobre la terapia EMDR</h2>
        <p class="prose-p">
          Distintos investigadores han realizado estudios rigurosos —incluyendo
          investigaciones controladas, meta-análisis y revisiones sistemáticas—
          que han contribuido a respaldar la evidencia científica de este enfoque.
        </p>
        <div class="evidence__video reveal" data-reveal-delay="120">
          <iframe
            src="https://www.youtube-nocookie.com/embed/avptKSgd8F8?si=VBLY-T5THyhI1vKM"
            title="EMDR — evidencia científica"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </section>

    <!-- First session -->
    <section class="section first" aria-labelledby="first-h">
      <div class="container first__grid">
        <div class="first__copy reveal">
          <p class="eyebrow">Tu primera sesión</p>
          <h2 id="first-h" class="h2">Empezar con seguridad y a tu ritmo</h2>
          <p class="prose-p">
            El reprocesamiento no comienza el primer día: antes construimos una
            base segura. Esto es lo que vivimos en nuestro primer encuentro.
          </p>
        </div>
        <ul class="first__list reveal" data-reveal-delay="120">
          <li v-for="step in firstSession" :key="step">
            <CheckMark /> <span>{{ step }}</span>
          </li>
        </ul>
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

  </div>
</template>

<style scoped>
.h2 { font-size: var(--step-3); margin-bottom: 0.9rem; }
.head { max-width: 48rem; margin-bottom: clamp(2rem, 1.5rem + 2vw, 3rem); }
.head--center { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.eyebrow + .h2 { margin-top: 0; }

/* ---- Full-screen shader hero (same as Psicoterapia) ---- */
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
@media (prefers-reduced-motion: reduce) {
  .shader-hero__scroll svg { animation: none; }
}

/* How it works */
.how { background: var(--color-surface-alt); }
.how__grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: center; }
.how__card {
  padding: clamp(1.75rem, 1.4rem + 2vw, 2.75rem);
  text-align: center;
}
.how__card p {
  font-family: var(--font-display); font-style: italic;
  font-size: var(--step-1); line-height: 1.5; color: var(--color-ink);
}

/* Phases */
/* trim the doubled gap between phases and the for-whom section (same bg) */
.phases.section { padding-bottom: clamp(1.5rem, 1rem + 2vw, 2.5rem); }
.forwho.section { padding-top: clamp(2rem, 1.5rem + 2vw, 3rem); }
.phases__grid { display: grid; gap: 1.1rem; grid-template-columns: 1fr; list-style: none; padding: 0; margin: 0; }
.phases__item { padding: 1.5rem; position: relative; }
.phases__num {
  font-family: var(--font-display); font-weight: 700;
  font-size: 1.4rem; color: var(--color-accent);
}
.phases__title { font-size: var(--step-1); color: var(--color-primary); margin: 0.25rem 0 0.5rem; }
.phases__text { color: var(--color-ink-soft); font-size: 0.95rem; }

/* First session */
.first__grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: start; }
.first__list { display: flex; flex-direction: column; gap: 1rem; }
.first__list li { display: flex; gap: 0.75rem; align-items: flex-start; color: var(--color-ink-soft); }
.forwho__grid { display: grid; gap: 1rem; grid-template-columns: 1fr; }
.forwho__item { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1.2rem 1.4rem; font-weight: 500; line-height: 1.45; }

.evidence { background: var(--color-surface-alt); }
.evidence__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.evidence__video {
  margin-top: 2rem;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.evidence__video iframe { width: 100%; height: 100%; display: block; border: 0; }
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
  .phases__grid { grid-template-columns: repeat(2, 1fr); }
  .how__grid { grid-template-columns: 1.2fr 0.8fr; }
  .first__grid { grid-template-columns: 0.9fr 1.1fr; }
}
@media (min-width: 1024px) {
  .phases__grid { grid-template-columns: repeat(4, 1fr); }
}
</style>
