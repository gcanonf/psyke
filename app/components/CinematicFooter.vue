<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { brand, contact } from '~/data/site'

const wrapper = ref<HTMLElement | null>(null)
const giant = ref<HTMLElement | null>(null)
const heading = ref<HTMLElement | null>(null)
const links = ref<HTMLElement | null>(null)

const year = new Date().getFullYear()

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola, me gustaría agendar una cita con PSYKE.',
)}`
const mailLink = `mailto:${contact.email}?subject=${encodeURIComponent('Cita PSYKE')}`

// Magnetic pull — gentle (original used 0.4 / scale 1.05; softened here)
function magnetize(el: HTMLElement) {
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    gsap.to(el, { x: x * 0.25, y: y * 0.25, scale: 1.03, ease: 'power2.out', duration: 0.4 })
  }
  const onLeave = () =>
    gsap.to(el, { x: 0, y: 0, scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1 })
  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)
  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  }
}

let ctx: gsap.Context | undefined
const magnetCleanups: Array<() => void> = []

onMounted(() => {
  if (typeof window === 'undefined' || !wrapper.value) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    // Show everything statically; no scroll-jacking, no magnetic effects.
    gsap.set([giant.value, heading.value, links.value], { opacity: 1, y: 0, scale: 1 })
    return
  }

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.fromTo(
      giant.value,
      { y: '8vh', scale: 0.85, opacity: 0 },
      {
        y: '0vh', scale: 1, opacity: 1, ease: 'power1.out',
        scrollTrigger: { trigger: wrapper.value, start: 'top 80%', end: 'bottom bottom', scrub: 1 },
      },
    )
    gsap.fromTo(
      [heading.value, links.value],
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: wrapper.value, start: 'top 45%', end: 'bottom bottom', scrub: 1 },
      },
    )
  }, wrapper.value)

  // Apply gentle magnetic pull to pills
  wrapper.value
    .querySelectorAll<HTMLElement>('[data-magnetic]')
    .forEach((el) => magnetCleanups.push(magnetize(el)))
})

onBeforeUnmount(() => {
  ctx?.revert()
  magnetCleanups.forEach((fn) => fn())
})

function scrollToTop() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
}
</script>

<template>
  <div ref="wrapper" class="cf-curtain">
    <footer class="cf">
      <!-- Ambient aurora + grid -->
      <div class="cf__aurora" aria-hidden="true" />
      <div class="cf__grid" aria-hidden="true" />

      <!-- Giant background word -->
      <div ref="giant" class="cf__giant" aria-hidden="true">{{ brand.name }}</div>

      <!-- Center content -->
      <div class="cf__center">
        <p class="cf__eyebrow">{{ brand.tagline }}</p>
        <h2 ref="heading" class="cf__title">Tu historia merece un espacio seguro</h2>
        <p class="cf__motto">
          Da el primer paso hacia tu bienestar. Agenda una cita y comencemos a
          caminar juntos este proceso.
        </p>

        <div ref="links" class="cf__links">
          <div class="cf__pills cf__pills--primary">
            <a :href="waLink" target="_blank" rel="noopener" data-magnetic class="cf__pill cf__pill--lg">
              <SocialIcon name="whatsapp" />
              Agendar por WhatsApp
            </a>
            <a :href="mailLink" data-magnetic class="cf__pill cf__pill--lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Escríbeme por correo
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="cf__bottom">
        <div class="cf__copy">© {{ year }} {{ brand.legal }} · {{ brand.professional }}</div>

        <div class="cf__social">
          <a :href="contact.social.instagram" target="_blank" rel="noopener" aria-label="Instagram"><SocialIcon name="instagram" /></a>
          <a :href="contact.social.facebook" target="_blank" rel="noopener" aria-label="Facebook"><SocialIcon name="facebook" /></a>
          <a :href="contact.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
        </div>

        <button data-magnetic class="cf__top" aria-label="Volver arriba" @click="scrollToTop">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Curtain reveal: contents only visible within this box; footer fixed underneath */
.cf-curtain {
  position: relative;
  height: 100vh;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.cf {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--color-ink);
  color: #efeafa;
  -webkit-font-smoothing: antialiased;
}

/* Ambient aurora */
.cf__aurora {
  position: absolute;
  left: 50%; top: 50%;
  width: 80vw; height: 60vh;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  filter: blur(80px);
  background: radial-gradient(circle at 50% 50%,
    color-mix(in srgb, var(--color-primary) 38%, transparent) 0%,
    color-mix(in srgb, var(--color-accent) 22%, transparent) 45%,
    transparent 70%);
  animation: cf-breathe 9s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 0;
}
@keyframes cf-breathe {
  from { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
  to { transform: translate(-50%, -50%) scale(1.08); opacity: 0.85; }
}

/* Grid */
.cf__grid {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent);
  mask-image: linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent);
}

/* Giant word */
.cf__giant {
  position: absolute;
  bottom: -4vh; left: 50%;
  transform: translateX(-50%);
  z-index: 0; pointer-events: none; user-select: none; white-space: nowrap;
  font-family: var(--font-display);
  font-size: 26vw; line-height: 0.75; font-weight: 700; letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.06);
  background: linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 60%);
  -webkit-background-clip: text; background-clip: text;
}

/* Center */
.cf__center {
  position: relative; z-index: 10;
  flex: 1;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center;
  padding: 5rem 1.5rem 0;
  max-width: 64rem; margin-inline: auto; width: 100%;
}
.cf__eyebrow {
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--color-accent-soft); margin-bottom: 1rem;
}
.cf__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.8rem + 4vw, 5.5rem);
  font-weight: 600; letter-spacing: -0.02em; line-height: 1.05;
  color: #fff;
  background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.55) 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 24px rgba(255,255,255,0.12));
}
.cf__motto { margin-top: 1rem; color: rgba(255,255,255,0.6); font-style: italic; max-width: 40ch; }
.cf__links { margin-top: 2.5rem; display: flex; flex-direction: column; align-items: center; gap: 1.25rem; width: 100%; }
.cf__pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; width: 100%; }

/* Glass pills */
.cf__pill {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.85rem 1.5rem; border-radius: 999px;
  font-family: var(--font-body); font-weight: 600; font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s, background 0.3s;
  will-change: transform;
}
.cf__pill:hover { color: #fff; border-color: rgba(255,255,255,0.25); background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03)); }
.cf__pill--lg { padding: 1.05rem 2rem; font-size: 1rem; color: #fff; }

/* Bottom bar */
.cf__bottom {
  position: relative; z-index: 20;
  display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
  width: 100%; padding: 0 1.5rem 2rem;
}
.cf__copy { order: 2; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); text-align: center; }
.cf__social { order: 1; display: flex; gap: 0.6rem; }
.cf__social a {
  width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7); transition: all 0.3s;
}
.cf__social a:hover { color: #fff; background: var(--color-accent); border-color: transparent; }
.cf__top {
  order: 3;
  width: 48px; height: 48px; border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7); will-change: transform; transition: color 0.3s;
}
.cf__top:hover { color: #fff; }
.cf__top svg { transition: transform 0.3s; }
.cf__top:hover svg { transform: translateY(-3px); }

@media (min-width: 768px) {
  .cf__bottom { flex-direction: row; justify-content: space-between; padding-bottom: 2.5rem; }
  .cf__copy { order: 1; text-align: left; }
  .cf__social { order: 2; }
}

@media (prefers-reduced-motion: reduce) {
  .cf__aurora { animation: none; }
  .cf-curtain { clip-path: none; height: auto; }
  .cf { position: relative; height: auto; min-height: 100vh; }
}
</style>
