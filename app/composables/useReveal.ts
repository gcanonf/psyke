/**
 * Scroll-reveal via IntersectionObserver.
 * Add `v-reveal` is not a thing — instead give elements the `.reveal` class
 * and mount this once (it observes all `.reveal` nodes inside the page).
 * Fully no-ops under prefers-reduced-motion.
 */
export function useReveal() {
  onMounted(() => {
    if (typeof window === 'undefined') return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay
            if (delay) el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => io.observe(el))

    onBeforeUnmount(() => io.disconnect())
  })
}
