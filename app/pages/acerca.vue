<script setup lang="ts">
import { brand } from '~/data/site'
useReveal()
useSeoMeta({
  title: 'Sobre mí · Eva Margarita Cañón Falla · PSYKE',
  description:
    'Soy Eva Margarita Cañón Falla, psicóloga con dos maestrías y más de 15 años de experiencia en salud mental, educación socioemocional y protección de la niñez. Fundadora de PSYKE en Bogotá.',
})

// Education (from her LinkedIn profile)
const education = [
  {
    initials: 'UBA',
    institution: 'University of Buenos Aires',
    degree: 'Maestría en Problemáticas Sociales Infanto-Juveniles',
    year: '2024',
    note: 'Materias completas y tesis sustentada; título en trámite.',
  },
  {
    initials: 'UAM',
    institution: 'Universidad Autónoma de Madrid',
    degree: 'Maestría en Psicología Cognitiva y Aprendizaje',
    year: 'Doble titulación',
    note: 'Maestría académica en doble titulación con FLACSO Argentina.',
  },
  {
    initials: 'FL',
    institution: 'FLACSO Argentina',
    degree: 'Maestría en Psicología Cognitiva y Aprendizaje',
    year: 'Doble titulación',
    note: 'Estudio de los procesos cognitivos y de aprendizaje.',
  },
  {
    initials: 'KL',
    institution: 'Fundación Universitaria Konrad Lorenz',
    degree: 'Psicología',
    year: 'Pregrado',
    note: 'Formación profesional de base como psicóloga.',
  },
]

// Real professional journey (from her LinkedIn profile)
const journey = [
  {
    period: '2016 — hoy',
    role: 'Fundadora · Bienestar emocional y salud mental',
    org: 'PSYKE SAS',
    text: 'PSYKE surge como respuesta a la creciente necesidad de establecer entornos que fomenten el bienestar y la salud mental, a nivel individual y grupal, impulsando transformaciones significativas basadas en el autoconocimiento, el autocuidado y la atención hacia los demás.',
  },
  {
    period: '2025',
    role: 'Especialista Pedagógica IPAS',
    org: 'Profamilia Colombia',
    text: 'Acompañamiento pedagógico en salud sexual y reproductiva.',
  },
  {
    period: '2023',
    role: 'Líder Territorial · Zona Centro',
    org: 'Organización de Estados Iberoamericanos (OEI)',
    text: 'Implementación de metodologías y actividades pedagógicas con la comunidad educativa en el marco del Programa “Viva la Escuela”.',
  },
  {
    period: '2020 — 2023',
    role: 'Asesora pedagógica · Profesional psicosocial y de salud mental',
    org: 'Universidad Nacional de Colombia',
    text: 'Diseño de secuencias didácticas para la promoción de la salud mental y el desarrollo de habilidades socioemocionales en la comunidad educativa del Distrito, en comités de convivencia escolar de 200 instituciones.',
  },
  {
    period: '2012 — 2018',
    role: 'Psicóloga · Planeación educativa',
    org: 'Secretaría de Educación Distrital · ICBF',
    text: 'Atención a situaciones críticas en colegios públicos y privados, y acompañamiento a víctimas en el Centro de Atención (CAIVAS) y el Sistema de Responsabilidad Penal Adolescente.',
  },
  {
    period: '2005 — 2012',
    role: 'Psicóloga · Promoción y prevención',
    org: 'Ai.Bi · Hospital de Usaquén · U. Militar Nueva Granada',
    text: 'Promoción de los derechos de la niñez, intervención en crisis, prevención del Síndrome de Burnout y educación para la salud con familias y comunidades.',
  },
]
</script>

<template>
  <div>
    <!-- Full-screen shader hero with portrait rising from the bottom -->
    <section class="shader-hero">
      <div class="shader-hero__bg" aria-hidden="true">
        <ShaderBackground
          :colors="['#faf7f2', '#cdbfe8', '#efeafa', '#a9c7b5', '#8b7fc0']"
          :speed="0.3"
        />
      </div>
      <img src="/images/about/margarita.png" alt="" class="shader-hero__portrait" aria-hidden="true" />
      <div class="shader-hero__veil" aria-hidden="true" />
      <div class="container shader-hero__inner">
        <p class="shader-hero__eyebrow reveal">Sobre mí</p>
        <h1 class="shader-hero__title reveal" data-reveal-delay="80">{{ brand.professional }}</h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          Psicóloga y fundadora de PSYKE. Acompaño a personas, comunidades y
          organizaciones sociales en su camino de crecer y sanar.
        </p>
      </div>
      <a href="#contenido" class="shader-hero__scroll" aria-label="Desplázate para conocer más">
        <span>Conoce mi historia</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </section>

    <span id="contenido" />

    <section class="section">
      <div class="container about-grid">
        <div class="about-media reveal">
          <NuxtImg
            src="/images/eva-2.jpg"
            :alt="`Retrato de ${brand.professional}, psicóloga fundadora de PSYKE`"
            width="560"
            height="685"
            sizes="(max-width: 800px) 90vw, 440px"
            placeholder
          />
        </div>
        <div class="prose reveal" data-reveal-delay="120">
          <p>
            Soy <strong>Eva Margarita</strong>, psicóloga con maestría en
            Problemáticas Sociales Infanto-Juveniles y maestría en Psicología
            Cognitiva y Aprendizaje, lo que me permite abordar de manera integral
            los desafíos que enfrentamos.
          </p>
          <p>
            Cuento con más de 15 años de experiencia en el sector educativo,
            especializándome en el diseño, la implementación y la evaluación de
            proyectos enfocados en la formación ciudadana, la educación para la
            paz y el desarrollo de competencias socioemocionales.
          </p>
          <p>
            Poseo un sólido conocimiento en educación socioemocional, salud
            mental escolar y protección de los derechos de niños, niñas y
            adolescentes. Tengo competencias en el direccionamiento estratégico
            de procesos orientados al desarrollo de habilidades socioemocionales,
            la prevención de riesgos psicosociales y la promoción de la
            convivencia y el bienestar.
          </p>
          <blockquote class="quote">
            «En PSYKE, creo que cada persona y comunidad tiene el potencial de
            crecer y sanar.»
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Professional journey -->
    <section class="section journey" aria-labelledby="jr-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Trayectoria</p>
          <h2 id="jr-h" class="diff__title">Un camino dedicado al bienestar</h2>
        </header>
        <ol class="jr">
          <li
            v-for="(j, i) in journey"
            :key="j.role"
            class="jr__item reveal"
            :data-reveal-delay="i * 70"
          >
            <span class="jr__period">{{ j.period }}</span>
            <div class="jr__body">
              <h3 class="jr__role">{{ j.role }}</h3>
              <p class="jr__org">{{ j.org }}</p>
              <p class="jr__text">{{ j.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Education -->
    <section class="section education" aria-labelledby="edu-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Formación académica</p>
          <h2 id="edu-h" class="diff__title">Dónde me he formado</h2>
        </header>
        <div class="edu__grid">
          <article
            v-for="(e, i) in education"
            :key="e.institution"
            class="card edu__card reveal"
            :data-reveal-delay="i * 80"
          >
            <span class="edu__badge">{{ e.initials }}</span>
            <div class="edu__body">
              <h3 class="edu__inst">{{ e.institution }}</h3>
              <p class="edu__degree">{{ e.degree }}</p>
              <p class="edu__note">{{ e.note }}</p>
            </div>
            <span class="edu__year">{{ e.year }}</span>
          </article>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ---- Full-screen shader hero with portrait rising from the bottom ---- */
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
/* big, tenue portrait anchored to the bottom, fading up into the background */
.shader-hero__portrait {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: clamp(-4rem, -2vw, 0rem);
  height: clamp(60vh, 70vh, 85vh);
  width: auto;
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
  -webkit-mask-image: linear-gradient(to top, #000 55%, transparent 92%);
  mask-image: linear-gradient(to top, #000 55%, transparent 92%);
}
/* soft light veil so the title stays legible */
.shader-hero__veil {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(to right, rgba(250, 247, 242, 0.85) 0%, rgba(250, 247, 242, 0.5) 45%, transparent 78%),
    linear-gradient(to top, rgba(250, 247, 242, 0.45) 0%, transparent 45%);
}
.shader-hero__inner { position: relative; z-index: 3; max-width: 44rem; padding-block: 8rem; }
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
.shader-hero__scroll {
  position: absolute; z-index: 3; left: 50%; bottom: 1.75rem;
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

/* ---- Professional journey timeline ---- */
.journey { background: var(--color-surface-alt); }
.jr {
  max-width: 46rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.jr__item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
  padding: 1.5rem 0 1.75rem 1.5rem;
  position: relative;
  border-left: 2px solid var(--color-border);
}
.jr__item::before {
  content: '';
  position: absolute;
  left: -7px; top: 1.9rem;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-surface-alt);
}
.jr__item:last-child { border-left-color: transparent; }
.jr__period {
  font-family: var(--font-body); font-weight: 700;
  font-size: 0.8rem; letter-spacing: 0.08em;
  color: var(--color-accent);
}
.jr__role { font-size: var(--step-1); color: var(--color-ink); margin-top: 0.1rem; }
.jr__org { font-weight: 600; color: var(--color-primary); margin-top: 0.15rem; }
.jr__text { color: var(--color-ink-soft); margin-top: 0.5rem; font-size: 0.96rem; }

@media (min-width: 640px) {
  .jr__item { grid-template-columns: 9rem 1fr; gap: 1.25rem; align-items: start; }
  .jr__period { padding-top: 0.3rem; }
}

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
.diff__title { font-size: var(--step-3); }

/* ---- Education cards ---- */
.education { background: var(--color-surface-alt); padding-top: 0; }
/* trim the doubled gap where journey meets education (same background) */
.journey.section { padding-bottom: clamp(1.5rem, 1rem + 2vw, 2.5rem); }
.edu__grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
.edu__card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'badge body' 'badge year';
  align-items: start;
  gap: 0.4rem 1.1rem;
  padding: 1.5rem;
}
.edu__badge {
  grid-area: badge;
  width: 60px; height: 60px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, var(--color-primary), #54468a);
  color: #fff;
  font-family: var(--font-display); font-weight: 700;
  font-size: 1.05rem; letter-spacing: 0.02em;
  box-shadow: var(--shadow);
}
.edu__body { grid-area: body; }
.edu__inst { font-size: var(--step-1); color: var(--color-ink); }
.edu__degree { color: var(--color-primary); font-weight: 600; margin-top: 0.2rem; }
.edu__note { color: var(--color-ink-soft); font-size: 0.92rem; margin-top: 0.5rem; }
.edu__year {
  grid-area: year;
  align-self: end;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em;
  color: var(--color-accent); text-transform: uppercase;
}

@media (min-width: 720px) {
  .edu__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 760px) {
  .about-grid { grid-template-columns: 0.85fr 1.15fr; }
}
</style>
