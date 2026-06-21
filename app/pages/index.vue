<script setup lang="ts">
import { brand, contact, whyTherapy, differentiators } from '~/data/site'

useReveal()

useSeoMeta({
  title: 'PSYKE · Psicología y bienestar emocional · Eva Margarita Cañón Falla',
  description:
    'Psicoterapia, EMDR y programas de cuidado emocional con Eva Margarita Cañón Falla. Atención clínica online y presencial desde Bogotá. Cuidar de tu salud mental es cuidar de tu vida.',
})

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola, me gustaría agendar una cita con PSYKE.',
)}`

// Split the reasons around the central image (about-us style layout)
const whyLeft = whyTherapy.slice(0, Math.ceil(whyTherapy.length / 2))
const whyRight = whyTherapy.slice(Math.ceil(whyTherapy.length / 2))
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <ShaderBackground class="hero__shader" />
      <div class="container hero__inner">
        <div class="hero__copy">
          <p class="eyebrow reveal">{{ brand.tagline }}</p>
          <h1 class="hero__title reveal" data-reveal-delay="80">
            Cuidar de tu salud mental es cuidar de tu vida
          </h1>
          <p class="lede hero__lede reveal" data-reveal-delay="160">
            Acompañamiento psicológico cálido y humano. Psicoterapia, EMDR y
            programas de cuidado emocional, online y presencial, con
            {{ brand.professional }}.
          </p>
          <div class="hero__actions reveal" data-reveal-delay="240">
            <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent">
              Agenda tu primera cita
            </a>
            <NuxtLink to="/psicoterapia" class="btn btn--ghost">Conoce el proceso</NuxtLink>
          </div>
        </div>
        <div class="hero__media reveal" data-reveal-delay="200">
          <div class="hero__circle">
            <NuxtImg
              src="/images/output-circle.jpg"
              alt="Mujer con los brazos abiertos al atardecer frente al mar, símbolo de bienestar"
              width="900"
              height="900"
              sizes="(max-width: 900px) 80vw, 460px"
              loading="eager"
              placeholder
            />
          </div>
          <div class="hero__badge card">
            <span class="hero__badge-num">+20</span>
            <span class="hero__badge-text">años acompañando procesos de salud mental</span>
          </div>
        </div>
      </div>
      <div class="hero__bg" aria-hidden="true" />
    </section>

    <!-- SERVICES (tabbed showcase) -->
    <FeatureTabs />

    <!-- ABOUT STRIP -->
    <section class="section about" aria-labelledby="about-h">
      <div class="container about__grid">
        <div class="about__media reveal">
          <NuxtImg
            src="/images/eva.jpg"
            :alt="`Retrato de ${brand.professional}, psicóloga fundadora de PSYKE`"
            width="560"
            height="841"
            sizes="(max-width: 800px) 90vw, 440px"
            placeholder
          />
        </div>
        <div class="about__copy reveal" data-reveal-delay="120">
          <p class="eyebrow">Acerca de PSYKE</p>
          <h2 id="about-h" class="head__title">{{ brand.professional }}</h2>
          <p class="prose-p">
            Soy psicóloga con más de 20 años de experiencia en programas
            educativos y de salud mental. Mi trabajo integra el desarrollo
            humano, los derechos y la política pública para ofrecerte un
            acompañamiento integral y profundamente humano.
          </p>
          <blockquote class="about__quote">
            «En PSYKE, creo que cada persona y comunidad tiene el potencial de
            crecer y sanar.»
          </blockquote>
          <ul class="about__list">
            <li v-for="d in differentiators" :key="d">
              <CheckMark /> {{ d }}
            </li>
          </ul>
          <NuxtLink to="/acerca" class="btn btn--ghost">Conoce mi historia</NuxtLink>
        </div>
      </div>
    </section>

    <!-- WHY THERAPY (about-us style: items flanking a central image) -->
    <section class="section why" aria-labelledby="why-h">
      <div class="container">
        <header class="head head--center reveal">
          <p class="eyebrow">¿Por qué ir a terapia?</p>
          <h2 id="why-h" class="head__title">Razones para dar el primer paso</h2>
        </header>

        <div class="why3">
          <ul class="why3__col">
            <li
              v-for="(w, i) in whyLeft"
              :key="w"
              class="why3__item reveal"
              :data-reveal-delay="i * 80"
            >
              <span class="why3__icon"><CheckMark /></span>
              <span class="why3__text">{{ w }}</span>
            </li>
          </ul>

          <div class="why3__media reveal" data-reveal-delay="120">
            <NuxtImg
              src="/images/services/cultura-del-cuidado.jpg"
              alt="Personas acompañándose en su proceso de bienestar"
              width="800"
              height="560"
              sizes="(max-width: 1000px) 90vw, 360px"
              placeholder
            />
            <span class="why3__halo" aria-hidden="true" />
          </div>

          <ul class="why3__col">
            <li
              v-for="(w, i) in whyRight"
              :key="w"
              class="why3__item reveal"
              :data-reveal-delay="i * 80"
            >
              <span class="why3__icon"><CheckMark /></span>
              <span class="why3__text">{{ w }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS (bento) -->
    <TestimonialsBento />
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  position: relative;
  padding-top: clamp(7rem, 5rem + 8vw, 10rem);
  padding-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
  overflow: hidden;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(70% 60% at 85% 0%, var(--color-primary-tint), transparent 60%),
    radial-gradient(60% 50% at 5% 20%, var(--color-accent-tint), transparent 55%),
    var(--color-bg);
}
/* Animated WebGL shader backdrop — above the base gradient, behind content */
.hero__shader {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* fade out toward the bottom so it blends into the next section */
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);
}
.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(2.5rem, 2rem + 4vw, 4rem);
  align-items: center;
}
.hero__title { font-size: var(--step-4); margin-top: 0.4rem; }
.hero__lede { margin-top: 1.4rem; max-width: 44ch; }
.hero__actions { margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 0.8rem; }

.hero__media { position: relative; display: flex; justify-content: center; }
/* Large circle whose edges fade softly into the page background */
.hero__circle {
  position: relative;
  width: clamp(18rem, 34vw, 30rem);
  aspect-ratio: 1 / 1;
}
.hero__circle :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* very gradual radial fade — fully gone well before the box edge, so no line
     ever meets the section bounds */
  -webkit-mask-image: radial-gradient(circle at 50% 48%, #000 20%, rgba(0,0,0,0.5) 42%, rgba(0,0,0,0.18) 58%, transparent 72%);
  mask-image: radial-gradient(circle at 50% 48%, #000 20%, rgba(0,0,0,0.5) 42%, rgba(0,0,0,0.18) 58%, transparent 72%);
}
.hero__badge {
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 1rem 1.25rem;
  max-width: 16rem;
}
.hero__badge-num {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}
.hero__badge-text { font-size: 0.85rem; color: var(--color-ink-soft); }

/* shared section head */
.head { margin-bottom: clamp(2rem, 1.5rem + 2vw, 3rem); }
.head--center { text-align: center; max-width: 40rem; margin-inline: auto; }
.head__title { font-size: var(--step-3); }


/* ABOUT */
.about { background: var(--color-surface-alt); position: relative; overflow: hidden; }
.about__grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: center; }
.about__media { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); aspect-ratio: 56 / 84; }
.about__media :deep(img) { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.prose-p { color: var(--color-ink-soft); margin-top: 1rem; max-width: 52ch; }
.about__quote {
  margin: 1.5rem 0;
  padding-left: 1.1rem;
  border-left: 3px solid var(--color-accent);
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-1);
  color: var(--color-ink);
}
.about__list { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.75rem; }
.about__list li { display: flex; gap: 0.6rem; align-items: flex-start; color: var(--color-ink-soft); }

/* WHY — about-us style: items flanking a central image */
.why3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 1.5rem + 3vw, 3.5rem);
  align-items: center;
}
.why3__col { display: flex; flex-direction: column; gap: clamp(1.5rem, 1rem + 2vw, 2.5rem); }
.why3__item { display: flex; align-items: flex-start; gap: 0.9rem; }
.why3__icon {
  flex: 0 0 auto;
  width: 44px; height: 44px;
  display: grid; place-items: center;
  border-radius: 12px;
  background: var(--color-accent-tint);
  transition: transform var(--dur) var(--ease-out), background var(--dur);
}
.why3__item:hover .why3__icon { transform: translateY(-3px); background: var(--color-primary-tint); }
.why3__text {
  font-size: var(--step-0);
  color: var(--color-ink);
  font-weight: 500;
  line-height: 1.45;
  padding-top: 0.4rem;
}
.why3__media {
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 22rem;
}
.why3__media :deep(img) {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 1;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}
.why3__media::before {
  content: '';
  position: absolute;
  inset: -0.85rem;
  border: 3px solid var(--color-accent-soft);
  border-radius: calc(var(--radius) + 0.5rem);
  z-index: 0;
}
.why3__halo {
  position: absolute;
  width: 8rem; height: 8rem;
  right: -2.5rem; top: -2rem;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 70%);
  filter: blur(8px);
  z-index: 0;
}

@media (min-width: 900px) {
  .why3 { grid-template-columns: 1fr auto 1fr; }
  /* right column items align their text toward the image for symmetry */
  .why3__col:last-child .why3__item { flex-direction: row-reverse; text-align: right; }
}
@media (min-width: 900px) {
  .hero__inner { grid-template-columns: 1.05fr 0.95fr; }

  /* About: full-height portrait bleeding off the left, fading out to the right */
  .about { padding-block: 0; }
  .about__grid {
    grid-template-columns: 1fr;
    gap: 0;
    min-height: 38rem;
    align-items: center;
  }
  .about__media {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: clamp(28rem, 44vw, 42rem);
    border-radius: 0;
    aspect-ratio: auto;
    box-shadow: none;
    /* desvanecer: fade the image out toward its right edge */
    -webkit-mask-image: linear-gradient(to right, #000 55%, transparent 100%);
    mask-image: linear-gradient(to right, #000 55%, transparent 100%);
  }
  .about__copy {
    grid-column: 1;
    /* start the text closer in; it sits over the faded edge of the image */
    margin-left: clamp(16rem, 30vw, 28rem);
    padding-block: clamp(4rem, 3rem + 4vw, 6rem);
    position: relative;
    z-index: 1;
  }
}
</style>
