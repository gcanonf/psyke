<script setup lang="ts">
import { services } from '~/data/site'

/**
 * Tabbed feature showcase — Vue port of shadcnblocks Feature108.
 * Driven by the real PSYKE services. Accessible ARIA tabs (roving tabindex,
 * arrow-key navigation), brand-styled, reduced-motion friendly.
 */
const active = ref(0)
const tabRefs = ref<HTMLButtonElement[]>([])

// Short labels for the tab strip (the full title shows in the panel)
const labels = ['Psicoterapia', 'EMDR', 'Cultura del Cuidado', 'Psicoeducación']

function select(i: number) {
  active.value = i
}

// ARIA tabs keyboard pattern: ←/→ move, Home/End jump, focus follows
function onKey(e: KeyboardEvent, i: number) {
  const last = services.length - 1
  let next = i
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = i === last ? 0 : i + 1
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = i === 0 ? last : i - 1
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = last
  else return
  e.preventDefault()
  active.value = next
  tabRefs.value[next]?.focus()
}
</script>

<template>
  <section class="ft section" aria-labelledby="ft-h">
    <div class="container">
      <!-- Header -->
      <header class="ft__head reveal">
        <span class="ft__badge">Cómo te acompaño</span>
        <h2 id="ft-h" class="ft__title">Espacios de cuidado a tu medida</h2>
        <p class="ft__desc">
          Cada proceso es único. Elige el acompañamiento que mejor responde a tu
          momento de vida.
        </p>
      </header>

      <!-- "¿Qué necesitas hoy?" — quick routing into the right space -->
      <div class="ft__needs reveal" data-reveal-delay="60">
        <p class="ft__needs-q">¿Qué necesitas hoy?</p>
        <ul class="ft__needs-list">
          <li>
            <NuxtLink to="/psicoterapia" class="ft__need">
              <span class="ft__need-want">Quiero iniciar un proceso terapéutico</span>
              <span class="ft__need-arrow" aria-hidden="true">→</span>
              <span class="ft__need-to">Psicoterapia y EMDR</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cultura-del-cuidado" class="ft__need">
              <span class="ft__need-want">Quiero bienestar para mi organización</span>
              <span class="ft__need-arrow" aria-hidden="true">→</span>
              <span class="ft__need-to">Cultura del Cuidado</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/psicoeducacion" class="ft__need">
              <span class="ft__need-want">Quiero aprender sobre salud mental</span>
              <span class="ft__need-arrow" aria-hidden="true">→</span>
              <span class="ft__need-to">Psicoeducación para la Vida</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Tab strip -->
      <div class="ft__tabs reveal" role="tablist" aria-label="Servicios de PSYKE" data-reveal-delay="80">
        <button
          v-for="(s, i) in services"
          :key="s.slug"
          :ref="(el) => { if (el) tabRefs[i] = el as HTMLButtonElement }"
          :id="`ft-tab-${i}`"
          role="tab"
          :aria-selected="active === i"
          :aria-controls="`ft-panel-${i}`"
          :tabindex="active === i ? 0 : -1"
          class="ft__tab"
          :class="{ 'ft__tab--active': active === i }"
          @click="select(i)"
          @keydown="onKey($event, i)"
        >
          <ServiceIcon :slug="s.slug" class="ft__tab-icon" />
          {{ labels[i] }}
        </button>
      </div>

      <!-- Panel -->
      <div class="ft__panel reveal" data-reveal-delay="120">
        <template v-for="(s, i) in services" :key="s.slug">
          <div
            v-show="active === i"
            :id="`ft-panel-${i}`"
            role="tabpanel"
            :aria-labelledby="`ft-tab-${i}`"
            class="ft__grid"
          >
            <div class="ft__copy">
              <span class="ft__pill">{{ s.short }}</span>
              <h3 class="ft__h3">{{ s.title }}</h3>
              <p class="ft__p">{{ s.description }}</p>
              <NuxtLink :to="s.to" class="btn btn--primary ft__cta">Saber más</NuxtLink>
            </div>
            <div class="ft__media">
              <NuxtImg
                :src="s.image"
                :alt="s.imageAlt"
                width="800"
                height="560"
                sizes="(max-width: 900px) 90vw, 520px"
                placeholder
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tighter top so it sits closer to the hero above */
.ft.section { padding-top: clamp(2.5rem, 1.5rem + 3vw, 4rem); }
.ft__head { text-align: center; max-width: 42rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.ft__badge {
  display: inline-block;
  font-family: var(--font-body); font-weight: 600;
  font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--color-accent);
  padding: 0.35rem 0.9rem; border-radius: var(--radius-pill);
  background: var(--color-accent-tint); margin-bottom: 1rem;
}
.ft__title { font-size: var(--step-3); }
.ft__desc { margin-top: 0.9rem; color: var(--color-ink-soft); font-size: var(--step-0); }

/* "¿Qué necesitas hoy?" routing block */
.ft__needs { max-width: 46rem; margin: 0 auto clamp(2rem, 1.5rem + 2vw, 3rem); }
.ft__needs-q {
  text-align: center;
  font-family: var(--font-display);
  font-size: var(--step-1);
  color: var(--color-ink);
  margin-bottom: 1.25rem;
}
.ft__needs-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem; }
.ft__need {
  display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem 0.75rem;
  padding: 0.95rem 1.25rem;
  border-radius: var(--radius);
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  text-decoration: none;
  transition: border-color var(--dur), background var(--dur), transform var(--dur) var(--ease-out);
}
.ft__need:hover { border-color: var(--color-primary); background: var(--color-primary-tint); transform: translateY(-2px); }
.ft__need-want { font-weight: 600; color: var(--color-ink); }
.ft__need-arrow { color: var(--color-accent); font-weight: 700; }
.ft__need-to { color: var(--color-primary); font-weight: 600; }

/* Tab strip */
.ft__tabs {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 0.5rem; margin-bottom: 2rem;
}
.ft__tab {
  display: inline-flex; align-items: center; gap: 0.55rem;
  padding: 0.7rem 1.25rem; border-radius: var(--radius-pill);
  font-family: var(--font-body); font-weight: 600; font-size: 0.95rem;
  color: var(--color-ink-soft);
  background: transparent; border: 1.5px solid var(--color-border);
  transition: all var(--dur) var(--ease-out);
  min-height: 44px;
}
/* Hover only affects inactive tabs; add a tint so lavender text stays legible */
.ft__tab:not(.ft__tab--active):hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-tint);
}
.ft__tab--active {
  background: var(--color-primary); border-color: var(--color-primary);
  color: var(--color-on-primary); box-shadow: var(--shadow);
}
.ft__tab--active:hover { background: #5d4d93; } /* darken slightly, keep white text */
.ft__tab-icon { width: 18px; height: 18px; flex: 0 0 auto; }

/* Panel */
.ft__panel {
  background: var(--color-surface-alt);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 1rem + 3vw, 4rem);
}
.ft__grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: center; }
.ft__copy { order: 2; }
.ft__pill {
  display: inline-block; font-weight: 600; font-size: 0.82rem;
  color: var(--color-primary); padding: 0.3rem 0.85rem;
  border-radius: var(--radius-pill); background: var(--color-primary-tint);
  margin-bottom: 1rem;
}
.ft__h3 { font-size: var(--step-2); margin-bottom: 0.75rem; }
.ft__p { color: var(--color-ink-soft); margin-bottom: 1.75rem; max-width: 46ch; }
.ft__cta { justify-content: center; }
.ft__media {
  order: 1;
  border-radius: var(--radius); overflow: hidden;
  box-shadow: var(--shadow); aspect-ratio: 10 / 7;
}
.ft__media :deep(img) { width: 100%; height: 100%; object-fit: cover; }

@media (min-width: 900px) {
  .ft__grid { grid-template-columns: 1fr 1fr; }
  .ft__copy { order: 1; }
  .ft__media { order: 2; }
}
</style>
