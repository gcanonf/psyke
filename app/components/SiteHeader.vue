<script setup lang="ts">
import { brand, nav, contact } from '~/data/site'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

function onScroll() {
  scrolled.value = window.scrollY > 12
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// close mobile menu on navigation
watch(
  () => route.fullPath,
  () => (open.value = false),
)

const waLink = computed(
  () =>
    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      'Hola, me gustaría agendar una cita con PSYKE.',
    )}`,
)
</script>

<template>
  <header class="header" :class="{ 'header--solid': scrolled || open }">
    <div class="container header__inner">
      <NuxtLink to="/" class="brand" aria-label="PSYKE — Inicio">
        <BrandLogo class="brand__logo" />
        <span class="brand__name">{{ brand.name }}</span>
      </NuxtLink>

      <nav class="nav" aria-label="Navegación principal">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="nav__link"
          :class="{ 'nav__link--active': route.path === item.to }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent header__cta">
        Agendar cita
      </a>

      <button
        class="burger"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
        @click="open = !open"
      >
        <span :class="{ 'burger__top--x': open }" />
        <span :class="{ 'burger__mid--x': open }" />
        <span :class="{ 'burger__bot--x': open }" />
      </button>
    </div>

    <Transition name="drawer">
      <nav
        v-if="open"
        id="mobile-nav"
        class="mobile-nav"
        aria-label="Navegación móvil"
      >
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="mobile-nav__link"
          :class="{ 'mobile-nav__link--active': route.path === item.to }"
        >
          {{ item.label }}
        </NuxtLink>
        <a :href="waLink" target="_blank" rel="noopener" class="btn btn--accent mobile-nav__cta">
          Agendar cita
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background var(--dur) var(--ease-out),
    box-shadow var(--dur) var(--ease-out), backdrop-filter var(--dur);
}
.header--solid {
  background: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--color-border-soft);
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-right: auto;
}
.brand__logo { width: 34px; height: 34px; }
.brand__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.12em;
  color: var(--color-primary);
}

.nav {
  display: none;
  gap: 1.5rem;
  align-items: center;
}
.nav__link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-ink-soft);
  position: relative;
  padding: 0.4rem 0;
  transition: color var(--dur);
}
.nav__link::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 2px;
  background: var(--color-accent);
  transition: width var(--dur) var(--ease-out);
}
.nav__link:hover { color: var(--color-ink); }
.nav__link:hover::after,
.nav__link--active::after { width: 100%; }
.nav__link--active { color: var(--color-primary); }

.header__cta { display: none; }

/* burger */
.burger {
  width: 44px; height: 44px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: 0;
  margin-left: auto;
}
.burger span {
  width: 24px; height: 2px;
  background: var(--color-ink);
  border-radius: 2px;
  transition: transform var(--dur) var(--ease-out), opacity var(--dur);
}
.burger__top--x { transform: translateY(7px) rotate(45deg); }
.burger__mid--x { opacity: 0; }
.burger__bot--x { transform: translateY(-7px) rotate(-45deg); }

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem clamp(1.25rem, 4vw, 2.5rem) 1.75rem;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border-soft);
}
.mobile-nav__link {
  padding: 0.85rem 0.25rem;
  font-weight: 500;
  font-size: 1.05rem;
  color: var(--color-ink-soft);
  border-bottom: 1px solid var(--color-border-soft);
}
.mobile-nav__link--active { color: var(--color-primary); }
.mobile-nav__cta { margin-top: 1rem; justify-content: center; }

.drawer-enter-active,
.drawer-leave-active { transition: opacity var(--dur), transform var(--dur) var(--ease-out); }
.drawer-enter-from,
.drawer-leave-to { opacity: 0; transform: translateY(-8px); }

@media (min-width: 1024px) {
  .nav { display: flex; }
  .header__cta { display: inline-flex; }
  .burger { display: none; }
}
</style>
