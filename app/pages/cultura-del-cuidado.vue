<script setup lang="ts">
import { careWorkshops, contact } from '~/data/site'
useReveal()
useSeo({
  title:
    'Bienestar organizacional en español | Programas de cuidado para equipos',
  description:
    'Programas de bienestar organizacional para empresas e instituciones hispanohablantes. Cuidado, autoliderazgo y resiliencia para equipos en Colombia y el mundo.',
})

const mailLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Propuesta de Cultura del Cuidado',
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
      <img src="/logo-mark.svg" alt="" class="shader-hero__watermark" aria-hidden="true" />
      <div class="shader-hero__veil" aria-hidden="true" />
      <div class="container shader-hero__inner">
        <p class="shader-hero__eyebrow reveal">Cultura del Cuidado</p>
        <h1 class="shader-hero__title reveal" data-reveal-delay="80">
          Bienestar organizacional
        </h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          Las organizaciones que prosperan no son las que más exigen. Son las que
          cuidan.
        </p>
        <div class="shader-hero__actions reveal" data-reveal-delay="240">
          <a :href="mailLink" class="btn btn--accent">
            Solicitar propuesta personalizada
          </a>
        </div>
      </div>
      <a href="#contenido" class="shader-hero__scroll" aria-label="Desplázate para conocer más">
        <span>Conoce los talleres</span>
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
              <path d="M12 21s-6.5-4.3-9-9a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c-2.5 4.7-7 9-7 9Z" />
            </svg>
          </span>
          <p class="intro__eyebrow">El programa</p>
          <h2 class="intro__title">Qué es</h2>
          <p class="intro__text">
            Cultura del Cuidado es un programa de bienestar organizacional para
            equipos e instituciones que quieren construir entornos donde las
            personas no solo rindan, sino que florezcan. Porque cuidar no es un
            beneficio adicional. Es la base de todo lo que vale la pena.
          </p>
        </article>
        <article class="card intro__card reveal" data-reveal-delay="120">
          <span class="intro__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="7" r="3" />
              <circle cx="5.5" cy="10" r="2.2" />
              <circle cx="18.5" cy="10" r="2.2" />
              <path d="M2 20c0-2.5 2-4 4-4M22 20c0-2.5-2-4-4-4M7 21c0-3 2.2-5 5-5s5 2 5 5" />
            </svg>
          </span>
          <p class="intro__eyebrow">Las organizaciones</p>
          <h2 class="intro__title">Para quién</h2>
          <p class="intro__text">
            Para empresas, instituciones educativas y organizaciones sociales en
            Colombia y cualquier país hispanohablante. Presencial o virtual, a la
            medida de cada equipo.
          </p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">Seis espacios de cuidado</p>
          <h2 class="h2">Un programa a la medida de cada equipo</h2>
          <p class="lede">
            Seis espacios que se combinan y ajustan según las necesidades de cada
            organización.
          </p>
        </header>
        <div class="ws__grid">
          <article
            v-for="(w, i) in careWorkshops"
            :key="w.title"
            class="card ws__card reveal"
            :data-reveal-delay="i * 70"
          >
            <div class="ws__media">
              <NuxtImg
                :src="w.image"
                :alt="`Taller de ${w.title}`"
                width="600"
                height="450"
                sizes="(max-width: 720px) 90vw, 360px"
                class="ws__img"
                placeholder
              />
              <span class="ws__num">0{{ i + 1 }}</span>
            </div>
            <div class="ws__body">
              <h3>{{ w.title }}</h3>
              <p>{{ w.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured quote -->
    <section class="section quote-feature">
      <div class="container quote-feature__inner reveal">
        <svg class="quote-feature__mark" viewBox="0 0 32 32" width="56" height="56" aria-hidden="true">
          <path d="M12 8c-3.3 0-6 2.7-6 6v10h9V14H9c0-1.7 1.3-3 3-3V8Zm14 0c-3.3 0-6 2.7-6 6v10h9V14h-6c0-1.7 1.3-3 3-3V8Z" fill="var(--color-primary-tint)" />
        </svg>
        <blockquote class="quote-feature__text">
          Un equipo que se siente cuidado no solo rinde más.
          <em>Florece.</em> Y un equipo que florece transforma todo lo que toca.
        </blockquote>
      </div>
    </section>

    <section class="section feature">
      <div class="container feature__inner reveal">
        <h2 class="h2">¿Construimos juntos el programa de tu equipo?</h2>
        <p class="prose-p">
          Diseñamos una propuesta a la medida de tu organización, presencial o
          virtual, según sus necesidades y su momento.
        </p>
        <div class="feature__cta">
          <a :href="mailLink" class="btn btn--accent">
            Solicitar propuesta personalizada
          </a>
        </div>
        <NuxtLink to="/psicoeducacion" class="feature__cross">
          <span class="feature__cross-eyebrow">¿Aprendizaje personal sobre salud mental?</span>
          <span class="feature__cross-link">
            Visita Psicoeducación para la Vida
            <span aria-hidden="true">→</span>
          </span>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ---- Full-screen shader hero (same as EMDR / Psicoterapia) ---- */
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

/* ---- Featured quote ---- */
.quote-feature { padding-block: clamp(3rem, 2rem + 4vw, 5.5rem); }
.quote-feature__inner { max-width: 48rem; margin-inline: auto; text-align: center; }
.quote-feature__mark { display: block; margin: 0 auto 1rem; }
.quote-feature__text {
  font-family: var(--font-display);
  font-size: var(--step-2);
  line-height: 1.4;
  color: var(--color-ink);
}
.quote-feature__text em { font-style: italic; color: var(--color-primary); }

.h2 { font-size: var(--step-3); margin-bottom: 0.9rem; }
.head--center { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.ws__grid { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
.ws__card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.ws__card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.ws__media { position: relative; aspect-ratio: 4 / 3; overflow: hidden; }
.ws__img,
.ws__img :deep(img) { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out); }
.ws__card:hover .ws__img :deep(img) { transform: scale(1.05); }
.ws__num {
  position: absolute; top: 0.85rem; left: 0.85rem;
  width: 38px; height: 38px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-ink) 55%, transparent);
  backdrop-filter: blur(6px);
  color: #fff;
  font-family: var(--font-display); font-weight: 700; font-size: 0.95rem;
}
.ws__body { padding: 1.5rem; }
.ws__card h3 { color: var(--color-primary); font-size: var(--step-1); margin-bottom: 0.5rem; }
.ws__card p { color: var(--color-ink-soft); }
.feature { background: var(--color-surface-alt); }
.feature__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.feature__cta { margin-top: 1.75rem; }
.feature__cross {
  display: inline-flex; flex-direction: column; gap: 0.3rem;
  margin-top: 2rem; padding: 1rem 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  text-decoration: none;
  transition: border-color var(--dur), transform var(--dur) var(--ease-out);
}
.feature__cross:hover { border-color: var(--color-primary); transform: translateY(-2px); }
.feature__cross-eyebrow {
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--color-accent);
}
.feature__cross-link {
  display: inline-flex; align-items: center; gap: 0.45rem;
  font-weight: 600; color: var(--color-primary);
  transition: gap var(--dur);
}
.feature__cross:hover .feature__cross-link { gap: 0.7rem; }
.prose-p { color: var(--color-ink-soft); }

/* Qué es / Para quién */
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

@media (min-width: 720px) { .ws__grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ws__grid { grid-template-columns: repeat(3, 1fr); } }
</style>
