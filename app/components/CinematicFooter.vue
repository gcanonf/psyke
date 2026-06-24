<script setup lang="ts">
import { gsap } from 'gsap'
import { brand, contact } from '~/data/site'

const wrapper = ref<HTMLElement | null>(null)
const giant = ref<HTMLElement | null>(null)
const heading = ref<HTMLElement | null>(null)
const links = ref<HTMLElement | null>(null)

const year = new Date().getFullYear()

const bookingLink = contact.booking
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

const magnetCleanups: Array<() => void> = []
let io: IntersectionObserver | undefined

onMounted(() => {
  if (typeof window === 'undefined' || !wrapper.value) return

  // Apply gentle magnetic pull to pills (only enhancement that uses gsap)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) {
    wrapper.value
      .querySelectorAll<HTMLElement>('[data-magnetic]')
      .forEach((el) => magnetCleanups.push(magnetize(el)))
  }

  // Reveal: content is VISIBLE by default (CSS). A one-shot IntersectionObserver
  // just adds the 'is-in' class to play the entrance once the footer scrolls in.
  // If the observer never fires (short page / already in view on SPA nav), the
  // content is already shown — it can never get stuck invisible.
  const els = [giant.value, heading.value, links.value].filter(Boolean) as HTMLElement[]
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'))
    return
  }
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          ;(e.target as HTMLElement).classList.add('is-in')
          io?.unobserve(e.target)
        }
      }
    },
    { threshold: 0.15 },
  )
  els.forEach((el) => io!.observe(el))
})

onBeforeUnmount(() => {
  io?.disconnect()
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

      <!-- Giant background word — the logo mark stands in for the "Y" -->
      <div ref="giant" class="cf__giant" aria-hidden="true">
        <span class="cf__giant-text">PS</span>
        <img src="/logo-mark.svg" alt="" class="cf__giant-logo" />
        <span class="cf__giant-text">KE</span>
      </div>

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
            <a :href="bookingLink" target="_blank" rel="noopener" data-magnetic class="cf__pill cf__pill--lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M3 9h18M8 2.5v4M16 2.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
              Agendar cita
            </a>
            <a :href="mailLink" data-magnetic class="cf__pill cf__pill--lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Escríbeme por correo
            </a>
          </div>

          <div class="cf__social">
            <a :href="contact.social.instagram" target="_blank" rel="noopener" aria-label="Instagram"><SocialIcon name="instagram" /></a>
            <a :href="contact.social.facebook" target="_blank" rel="noopener" aria-label="Facebook"><SocialIcon name="facebook" /></a>
            <a :href="contact.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
          </div>
        </div>
      </div>

      <!-- Contact details (visible, so people can read/copy them) -->
      <address class="cf__contact">
        <a :href="`mailto:${contact.email}`" class="cf__contact-item">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          {{ contact.email }}
        </a>
        <span class="cf__contact-item cf__contact-item--plain">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5"/></svg>
          {{ contact.location }}
        </span>
      </address>

      <!-- Bottom bar -->
      <div class="cf__bottom">
        <div class="cf__copy">
          © {{ year }} {{ brand.legal }} · {{ brand.professional }}
          <NuxtLink to="/privacidad" class="cf__legal-link">Privacidad</NuxtLink>
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
/* Normal flowing footer (always shows all content on every page length) */
.cf-curtain {
  position: relative;
  width: 100%;
}
.cf {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 92vh;
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
/* Giant background word — logo mark replaces the "Y" */
.cf__giant {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 0; pointer-events: none; user-select: none;
  display: flex; align-items: center; justify-content: center; gap: 0.02em;
  font-size: 26vw;
  line-height: 0.9;
}

/* Reveal: the observed elements (giant word, title, links) are visible by
   default; the IntersectionObserver adds .is-in to replay a gentle entrance.
   They can never get stuck invisible — key fix for SPA navigation. */
.cf__giant,
.cf__title,
.cf__links {
  transition: opacity 700ms var(--ease-out), transform 700ms var(--ease-out);
}
@media (prefers-reduced-motion: no-preference) {
  .cf__giant:not(.is-in) { opacity: 0.001; transform: translateY(6vh) scale(0.9); }
  .cf__title:not(.is-in),
  .cf__links:not(.is-in) { opacity: 0.001; transform: translateY(28px); }
}
.cf__giant-text {
  font-family: var(--font-display);
  font-weight: 700; letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.06);
  background: linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 60%);
  -webkit-background-clip: text; background-clip: text;
}
.cf__giant-logo {
  height: 0.9em;   /* sized to the cap height of the giant letters */
  width: auto;
  opacity: 0.14;
  filter: brightness(2.4) saturate(0.7);
  /* balance the optical gap: a touch more room on the S side */
  margin-left: 0.04em;
  margin-right: -0.04em;
}

/* Center */
.cf__center {
  position: relative; z-index: 10;
  flex: 1;
  display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
  text-align: center;
  padding: clamp(3rem, 2rem + 5vw, 6rem) 1.5rem 0;
  max-width: 64rem; margin-inline: auto; width: 100%;
}
.cf__eyebrow {
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--color-accent-soft); margin-bottom: 1rem;
}
.cf__title {
  font-family: 'Caveat', cursive;
  font-size: clamp(2rem, 1.2rem + 3.2vw, 4rem);
  font-weight: 500; letter-spacing: 0; line-height: 1.1;
  color: #fff;
  background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(255,255,255,0.12));
  white-space: nowrap;
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

/* Contact details (visible, readable) */
.cf__contact {
  position: relative; z-index: 20;
  font-style: normal;
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 0.75rem 1.75rem;
  width: 100%; padding: 0 1.5rem;
  margin-top: 2.25rem;
}
.cf__contact-item {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-body); font-size: 0.92rem; font-weight: 500;
  color: rgba(255, 255, 255, 0.78);
  transition: color var(--dur);
}
.cf__contact-item svg { color: var(--color-accent-soft); flex: 0 0 auto; }
a.cf__contact-item:hover { color: #fff; }
a.cf__contact-item:hover svg { color: var(--color-accent); }
.cf__contact-item--plain { cursor: default; }

/* Bottom bar */
.cf__bottom {
  position: relative; z-index: 20;
  display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
  width: 100%; padding: 2rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 1.5rem;
}
.cf__copy { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); text-align: center; }
.cf__legal-link { color: rgba(255,255,255,0.6); margin-left: 0.6rem; transition: color var(--dur); }
.cf__legal-link:hover { color: #fff; }
/* social icons sit below the action buttons, centered */
.cf__social { display: flex; gap: 0.7rem; justify-content: center; margin-top: 0.5rem; }
.cf__social a {
  width: 52px; height: 52px; display: grid; place-items: center; border-radius: 50%;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7); transition: all 0.3s;
}
.cf__social :deep(svg) { width: 24px; height: 24px; }
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
  .cf__copy { text-align: left; }
}

@media (prefers-reduced-motion: reduce) {
  .cf__aurora { animation: none; }
  .cf-curtain { clip-path: none; height: auto; }
  .cf { position: relative; height: auto; min-height: 100vh; }
}
</style>
