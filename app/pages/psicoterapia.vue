<script setup lang="ts">
import { contact, therapies } from '~/data/site'
useReveal()
useSeo({
  title: 'Psicoterapia online en español para hispanohablantes | PSYKE',
  description:
    'Psicoterapia online en español para adultos y adolescentes, con enfoque cognitivo-conductual y EMDR. Un espacio cálido y científicamente respaldado para hispanohablantes en cualquier parte del mundo.',
  keywords:
    'psicoterapia online en español, terapia cognitivo conductual online, terapia individual online hispanohablantes, psicóloga online adultos adolescentes',
})

const bookingLink = contact.booking

const processSteps = [
  { icon: 'start', title: 'Inicio del proceso terapéutico' },
  { icon: 'target', title: 'Identificar objetivos terapéuticos' },
  { icon: 'evidence', title: 'Intervención con técnicas basadas en evidencia científica' },
  { icon: 'evaluate', title: 'Evaluación de resultados terapéuticos' },
]

// Carousel (CSS scroll-snap + arrow / dot nav)
const trackEl = ref<HTMLElement | null>(null)
const activeSlide = ref(0)

// scroll so slide i maps evenly across the track's scroll range (every dot reachable)
function scrollToSlide(i: number) {
  const track = trackEl.value
  if (!track) return
  const maxScroll = track.scrollWidth - track.clientWidth
  const left = (i / (therapies.length - 1)) * maxScroll
  track.scrollTo({ left, behavior: 'smooth' })
}
// step by one card width (in actual pixels) so the arrows always move
function step(dir: 1 | -1) {
  const track = trackEl.value
  if (!track) return
  const first = track.children[0] as HTMLElement | undefined
  const second = track.children[1] as HTMLElement | undefined
  const cardStep = first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth * 0.85
  track.scrollBy({ left: dir * cardStep, behavior: 'smooth' })
}
function prev() {
  step(-1)
}
function next() {
  step(1)
}
function onTrackScroll() {
  const track = trackEl.value
  if (!track) return
  const maxScroll = track.scrollWidth - track.clientWidth
  // map scroll progress (0..1) evenly across all slides so every dot is reachable
  const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0
  activeSlide.value = Math.round(progress * (therapies.length - 1))
}
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
      <!-- Eva in her consulting room — fills the right half, edges blended
           softly into the light background (no hard frame). -->
      <div class="shader-hero__photo" aria-hidden="true">
        <NuxtImg
          src="/images/consulta-eva.jpg"
          alt=""
          width="1000"
          height="580"
          sizes="(max-width: 900px) 100vw, 640px"
          loading="eager"
          placeholder
        />
      </div>
      <div class="shader-hero__veil" aria-hidden="true" />
      <div class="container shader-hero__inner">
        <p class="shader-hero__eyebrow reveal">Psicoterapia</p>
        <h1 class="shader-hero__title reveal" data-reveal-delay="80">
          Consulta clínica
        </h1>
        <p class="shader-hero__lede reveal" data-reveal-delay="160">
          Ofrezco consulta psicológica online para hispanohablantes en Colombia y
          en cualquier país del mundo. Un espacio cálido, humano y científicamente
          respaldado, desde el enfoque cognitivo-conductual y la especialización
          en trauma y EMDR.
        </p>
        <div class="shader-hero__actions reveal" data-reveal-delay="240">
          <a :href="bookingLink" target="_blank" rel="noopener" class="btn btn--accent">
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

    <!-- Intro + featured quote -->
    <section class="section intro">
      <div class="container intro__inner reveal">
        <p class="intro__p">
          Juntos trabajamos para comprender tus emociones, sanar heridas del
          pasado y construir relaciones más saludables contigo mismo y con los
          demás.
        </p>
        <p class="intro__p">
          Con horarios flexibles que se adaptan a tu vida, sin importar tu zona
          horaria.
        </p>
        <blockquote class="intro__quote">
          La distancia no es un obstáculo para sanar.
        </blockquote>
      </div>
    </section>

    <!-- Process workflow -->
    <section class="section process" aria-labelledby="proc-h">
      <div class="container">
        <header class="head--center reveal">
          <p class="eyebrow">El proceso</p>
          <h2 id="proc-h" class="h2">Cómo es tu proceso terapéutico</h2>
        </header>
        <ol class="proc">
          <li
            v-for="(step, i) in processSteps"
            :key="step.title"
            class="proc__step reveal"
            :data-reveal-delay="i * 100"
          >
            <span class="proc__icon"><ProcessIcon :name="step.icon" /></span>
            <span class="proc__num">{{ i + 1 }}</span>
            <h3 class="proc__title">{{ step.title }}</h3>
          </li>
        </ol>
      </div>
    </section>

    <!-- Order from chaos -->
    <section class="section entropy-sec" aria-labelledby="ent-h">
      <div class="container entropy-grid">
        <div class="entropy-copy reveal">
          <p class="eyebrow">Del caos al orden</p>
          <h2 id="ent-h" class="h2">Encontrar orden en medio del caos</h2>
          <p class="entropy-text">
            A veces las emociones se sienten dispersas, impredecibles, en
            movimiento constante. La terapia no elimina la complejidad de la
            vida: te acompaña a darle estructura, a comprenderla y a encontrar
            calma y claridad en medio de ella.
          </p>
          <p class="entropy-text">
            Paso a paso, lo que se vivía como desorden empieza a tomar forma y
            sentido.
          </p>
        </div>
        <div class="entropy-viz reveal" data-reveal-delay="120">
          <EntropyCanvas :size="440" />
          <div class="entropy-labels" aria-hidden="true">
            <span>Caos</span>
            <span>Orden</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Modalities gallery (carousel) -->
    <section class="section gallery" aria-labelledby="gal-h">
      <div class="container">
        <header class="gallery__head reveal">
          <div>
            <p class="eyebrow">Modalidades</p>
            <h2 id="gal-h" class="h2">Acompañamiento para cada momento</h2>
            <p class="lede gallery__desc">
              Cada persona y cada momento es único. Estas son las formas en que
              puedo acompañarte.
            </p>
          </div>
          <div class="gallery__arrows">
            <button class="gallery__arrow" aria-label="Anterior" :disabled="activeSlide === 0" @click="prev">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button class="gallery__arrow" aria-label="Siguiente" :disabled="activeSlide === therapies.length - 1" @click="next">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </header>
      </div>

      <div class="container">
        <div ref="trackEl" class="gallery__track" @scroll.passive="onTrackScroll">
          <article v-for="t in therapies" :key="t.id" class="gallery__card">
            <div class="gallery__media">
              <NuxtImg
                :src="t.image"
                :alt="t.title"
                width="640"
                height="640"
                sizes="(max-width: 768px) 80vw, 420px"
                class="gallery__img"
                placeholder
              />
            </div>
            <div class="gallery__content">
              <p class="gallery__phrase">«{{ t.phrase }}»</p>
              <h3 class="gallery__title">{{ t.title }}</h3>
              <p class="gallery__text">{{ t.short }}</p>
              <NuxtLink
                :to="`/modalidades#${t.id}`"
                class="gallery__more"
                :aria-label="`Más información sobre ${t.title}`"
              >
                Más información
                <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>

        <div class="gallery__dots" role="tablist" aria-label="Modalidades">
          <button
            v-for="(t, i) in therapies"
            :key="t.id"
            class="gallery__dot"
            :class="{ 'gallery__dot--on': activeSlide === i }"
            :aria-label="`Ver ${t.title}`"
            :aria-selected="activeSlide === i"
            @click="scrollToSlide(i)"
          />
        </div>
      </div>
    </section>

    <!-- EMDR cross-link -->
    <section class="section emdr-cta">
      <div class="container emdr-cta__inner reveal">
        <p class="eyebrow">Especialización en trauma</p>
        <h2 class="h2">El trauma tiene un camino de sanación</h2>
        <p class="emdr-cta__text">
          Si cargas experiencias que dejaron huella, la terapia EMDR puede
          ayudarte a reprocesarlas para que dejen de doler y de condicionar tu
          presente.
        </p>
        <NuxtLink to="/emdr" class="btn btn--accent">Conoce la terapia EMDR</NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ---- Process workflow ---- */
.process .head--center { margin-bottom: clamp(2.5rem, 2rem + 2vw, 3.5rem); }
.proc {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}
.proc__step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0.5rem;
}
.proc__icon {
  width: 64px; height: 64px;
  display: grid; place-items: center;
  color: var(--color-primary);
}
.proc__icon :deep(svg) { width: 40px; height: 40px; }
.proc__num {
  width: 34px; height: 34px;
  display: grid; place-items: center;
  margin: 0.75rem 0 1rem;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-family: var(--font-display);
  font-weight: 700; font-size: 1rem;
  box-shadow: var(--shadow);
  position: relative; z-index: 1;
}
.proc__title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-ink);
  line-height: 1.35;
  max-width: 22ch;
}

@media (min-width: 760px) {
  .proc { grid-template-columns: repeat(4, 1fr); }
  /* connecting line through the numbered nodes */
  .proc::before {
    content: '';
    position: absolute;
    top: 81px; /* aligns with the centre of the number nodes */
    left: 12.5%; right: 12.5%;
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      var(--color-accent-soft) 0 10px,
      transparent 10px 18px
    );
    z-index: 0;
  }
}

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
/* Large, very subtle logo mark watermark behind everything */
.shader-hero__watermark {
  position: absolute;
  z-index: 0;
  top: 50%;
  right: -6%;
  transform: translateY(-50%);
  height: 130%;
  width: auto;
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
  filter: saturate(0.6);
}
/* Eva in her consulting room — fills the right half full-height, its left and
   top edges dissolving into the light background (no visible frame). */
.shader-hero__photo {
  position: absolute;
  z-index: 0;
  inset: 0 0 0 auto;
  width: min(56%, 48rem);
  height: 100%;
  pointer-events: none;
}
.shader-hero__photo :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 58% 42%;
  /* soft dissolve on the left, top and bottom; the right runs to the page edge */
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 34%, #000 72%),
    linear-gradient(to top, transparent 0%, #000 18%),
    linear-gradient(to bottom, transparent 0%, #000 14%);
  mask-image:
    linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 34%, #000 72%),
    linear-gradient(to top, transparent 0%, #000 18%),
    linear-gradient(to bottom, transparent 0%, #000 14%);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}
/* soft light veil so the title stays legible over the mesh gradient + photo */
.shader-hero__veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(to right, rgba(250, 247, 242, 0.9) 0%, rgba(250, 247, 242, 0.6) 42%, transparent 72%),
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

/* On phones: text is top-aligned in the upper portion, the photo sits in the
   bottom ~44% and fades upward — the two never overlap. */
@media (max-width: 899px) {
  .shader-hero { align-items: flex-start; }
  .shader-hero__inner { padding-block: 6.5rem 0; }
  .shader-hero__photo {
    inset: auto 0 0 0;
    width: 100%;
    height: 46%;
  }
  .shader-hero__photo :deep(img) {
    object-position: 60% 32%;
    /* fade only starts near the very top of the photo band, so text above stays clean */
    -webkit-mask-image: linear-gradient(to top, #000 62%, transparent 100%);
    mask-image: linear-gradient(to top, #000 62%, transparent 100%);
    -webkit-mask-composite: source-over;
    mask-composite: add;
  }
  /* veil covers the whole upper area so any faint image edge stays behind text */
  .shader-hero__veil {
    background:
      linear-gradient(to bottom, rgba(250,247,242,0.85) 0%, rgba(250,247,242,0.75) 48%, transparent 66%);
  }
}

.h2 { font-size: var(--step-3); margin-bottom: 1rem; }
.head--center { text-align: center; max-width: 40rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }

/* ---- EMDR cross-link ---- */
.emdr-cta { background: var(--color-surface-alt); }
.emdr-cta__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.emdr-cta__text { color: var(--color-ink-soft); margin: 0.75rem 0 1.75rem; }

/* ---- Intro + featured quote ---- */
.intro__inner { max-width: 46rem; margin-inline: auto; text-align: center; }
.intro__p { color: var(--color-ink-soft); font-size: var(--step-0); }
.intro__p + .intro__p { margin-top: 1rem; }
.intro__quote {
  margin-top: 2rem;
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--step-2);
  line-height: 1.4;
  color: var(--color-primary);
}

/* ---- Order from chaos (entropy) ---- */
.entropy-sec { background: var(--color-surface-alt); }
.entropy-grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: center; }
.entropy-text { color: var(--color-ink-soft); margin-top: 1rem; max-width: 48ch; }
.entropy-viz { justify-self: center; width: 100%; max-width: 440px; }
.entropy-labels {
  display: flex; justify-content: space-between;
  margin-top: 0.75rem;
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase;
}
.entropy-labels span:first-child { color: var(--color-muted); }
.entropy-labels span:last-child { color: var(--color-primary); }
@media (min-width: 860px) {
  .entropy-grid { grid-template-columns: 1fr auto; }
}
/* ---- Modalities gallery (carousel) ---- */
.gallery__head {
  display: flex; flex-wrap: wrap; gap: 1.5rem;
  justify-content: space-between; align-items: flex-end;
  margin-bottom: clamp(1.75rem, 1.4rem + 2vw, 2.75rem);
}
.gallery__desc { margin-top: 0.75rem; max-width: 44ch; }
.gallery__arrows { display: none; gap: 0.6rem; }
.gallery__arrow {
  width: 48px; height: 48px; flex: 0 0 auto;
  display: grid; place-items: center; border-radius: 50%;
  border: 1.5px solid var(--color-border); background: transparent;
  color: var(--color-ink); cursor: pointer; transition: all var(--dur);
}
.gallery__arrow:hover:not(:disabled) { border-color: var(--color-primary); color: var(--color-primary); background: var(--color-primary-tint); }
.gallery__arrow:disabled { opacity: 0.35; cursor: not-allowed; }

/* scroll-snap track (kept within the container width) */
.gallery__track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.5rem 0 1.5rem;
  scrollbar-width: none;
}
.gallery__track::-webkit-scrollbar { display: none; }
.gallery__card {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: min(78vw, 18rem);
  border-radius: var(--radius-lg);
  overflow: hidden;
  scroll-snap-align: start;
  background: var(--color-surface);
  box-shadow: var(--shadow-lg);
}
.gallery__media {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* square image up top */
  overflow: hidden;
}
.gallery__img,
.gallery__img :deep(img) { width: 100%; height: 100%; object-fit: cover; transition: transform 600ms var(--ease-out); }
.gallery__card:hover .gallery__img :deep(img) { transform: scale(1.05); }
/* solid light footer — text always crisp and readable */
.gallery__content { padding: 1.4rem; }
.gallery__phrase { font-family: var(--font-display); font-style: italic; color: var(--color-accent); margin-bottom: 0.35rem; font-size: 0.95rem; }
.gallery__title { font-size: var(--step-1); color: var(--color-primary); margin-bottom: 0.55rem; }
.gallery__text { font-size: 0.9rem; line-height: 1.5; color: var(--color-ink-soft); }
.gallery__more {
  display: inline-flex; align-items: center; gap: 0.35rem;
  margin-top: 0.9rem; font-size: 0.85rem; font-weight: 600;
  color: var(--color-primary); text-decoration: none;
  transition: gap var(--dur), color var(--dur);
}
.gallery__more span { transition: transform var(--dur); }
.gallery__more:hover { color: var(--color-accent); }
.gallery__more:hover span { transform: translateX(4px); }

.gallery__dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: 1.5rem; }
.gallery__dot {
  width: 9px; height: 9px; border-radius: 50%; border: 0; padding: 0;
  background: var(--color-border); cursor: pointer; transition: all var(--dur);
}
.gallery__dot--on { background: var(--color-primary); transform: scale(1.3); }

@media (min-width: 768px) {
  .gallery__arrows { display: flex; }
  .gallery__card { width: 21rem; }
}
</style>
