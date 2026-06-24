<script setup lang="ts">
import { brand, nav, contact } from '~/data/site'

const open = ref(false)
const scrolled = ref(false)
const openMenu = ref<string | null>(null) // `to` of the dropdown currently open
const route = useRoute()

// Small grace period so moving the cursor from the trigger to the menu
// (or briefly off it) doesn't snap the dropdown shut.
let closeTimer: ReturnType<typeof setTimeout> | null = null
function showMenu(to: string) {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  openMenu.value = to
}
function scheduleClose() {
  if (closeTimer) clearTimeout(closeTimer)
  closeTimer = setTimeout(() => (openMenu.value = null), 180)
}
// Close immediately when a sub-item is chosen, and drop focus so the
// CSS :focus-within rule can't hold the menu open afterwards.
function closeMenu(e?: Event) {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  openMenu.value = null
  ;(e?.target as HTMLElement | undefined)?.blur?.()
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (closeTimer) clearTimeout(closeTimer)
})

// close mobile menu + dropdown on navigation
watch(
  () => route.fullPath,
  () => {
    open.value = false
    openMenu.value = null
  },
)

const bookingLink = contact.booking
</script>

<template>
  <header class="header" :class="{ 'header--solid': scrolled || open }">
    <div class="container header__inner">
      <NuxtLink to="/" class="brand" aria-label="PSYKE — Inicio">
        <img src="/logo-mark.svg" alt="" class="brand__logo" width="48" height="45" />
        <span class="brand__name">{{ brand.name }}</span>
      </NuxtLink>

      <nav class="nav" aria-label="Navegación principal">
        <template v-for="item in nav" :key="item.to">
          <!-- Item with a dropdown of sub-modalities -->
          <div
            v-if="item.children?.length"
            class="nav__group"
            :class="{ 'nav__group--open': openMenu === item.to }"
            @mouseenter="showMenu(item.to)"
            @mouseleave="scheduleClose"
          >
            <NuxtLink
              :to="item.to"
              class="nav__link nav__link--has-menu"
              :class="{ 'nav__link--active': route.path === item.to }"
              :aria-expanded="openMenu === item.to"
              @focus="showMenu(item.to)"
            >
              {{ item.label }}
              <svg class="nav__chevron" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </NuxtLink>
            <div
              class="nav__menu"
              :class="{ 'nav__menu--open': openMenu === item.to }"
              @mouseenter="showMenu(item.to)"
              @mouseleave="scheduleClose"
            >
              <div class="nav__panel" role="menu">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="nav__menu-link"
                  role="menuitem"
                  @click="closeMenu"
                >
                  <span class="nav__menu-rail" aria-hidden="true" />
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Plain link -->
          <NuxtLink
            v-else
            :to="item.to"
            class="nav__link"
            :class="{ 'nav__link--active': route.path === item.to }"
          >
            {{ item.label }}
          </NuxtLink>
        </template>
      </nav>

      <a :href="bookingLink" target="_blank" rel="noopener" class="btn btn--accent header__cta">
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
        <template v-for="item in nav" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="mobile-nav__link"
            :class="{ 'mobile-nav__link--active': route.path === item.to }"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            v-for="child in item.children"
            :key="child.to"
            :to="child.to"
            class="mobile-nav__link mobile-nav__link--child"
          >
            {{ child.label }}
          </NuxtLink>
        </template>
        <a :href="bookingLink" target="_blank" rel="noopener" class="btn btn--accent mobile-nav__cta">
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
  gap: 0.55rem;
  margin-right: auto;
}
.brand__logo {
  height: 42px;
  width: auto;
  display: block;
  transition: transform var(--dur) var(--ease-out);
}
.brand:hover .brand__logo { transform: scale(1.05); }
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

/* dropdown */
.nav__group { position: relative; display: inline-flex; }
.nav__link--has-menu { display: inline-flex; align-items: center; gap: 0.3rem; }
.nav__chevron { transition: transform var(--dur) var(--ease-out); }
.nav__group--open .nav__chevron { transform: rotate(180deg); }
.nav__menu {
  position: absolute;
  top: 100%; left: 50%;
  /* transparent padding bridges the gap to the trigger so the cursor never
     crosses dead space — the menu stays open on hover-through. */
  padding-top: 10px;
  transform: translateX(-50%);
  min-width: 14rem;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.22s var(--ease-out);
}
.nav__menu--open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.nav__panel {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.45rem;
  background: color-mix(in srgb, var(--color-bg) 82%, transparent);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  border: 1px solid color-mix(in srgb, var(--color-border-soft) 70%, transparent);
  border-radius: 1rem;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 24px 48px -12px rgba(44, 38, 56, 0.28),
    0 8px 16px -8px rgba(44, 38, 56, 0.18);
  transform: translateY(8px) scale(0.97);
  transform-origin: top center;
  transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1);
}
.nav__menu--open .nav__panel { transform: translateY(0) scale(1); }
.nav__menu-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.85rem;
  border-radius: 0.65rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: background var(--dur), color var(--dur), padding-left var(--dur);
}
.nav__menu-rail {
  width: 3px; height: 1.1rem; flex: none;
  border-radius: 3px;
  background: var(--color-accent);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform var(--dur) var(--ease-out);
}
.nav__menu-link:hover {
  background: var(--color-primary-tint);
  color: var(--color-primary);
}
.nav__menu-link:hover .nav__menu-rail,
.nav__menu-link:focus-visible .nav__menu-rail { transform: scaleY(1); }

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
.mobile-nav__link--child {
  padding-left: 1.25rem;
  font-size: 0.95rem;
  color: var(--color-ink-soft);
  border-bottom: 1px solid var(--color-border-soft);
}
.mobile-nav__link--child::before { content: '— '; color: var(--color-border); }
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
