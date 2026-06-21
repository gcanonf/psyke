/**
 * Subtle scroll parallax for a background element.
 * Pass a ref to the element whose CSS var `--parallax` should update.
 * Honors prefers-reduced-motion (no-op). Uses rAF-throttled scroll.
 */
export function useParallax(
  el: Ref<HTMLElement | null>,
  intensity = 0.18,
) {
  if (typeof window === 'undefined') return

  let raf = 0
  let ticking = false

  function update() {
    ticking = false
    const node = el.value
    if (!node) return
    const rect = node.getBoundingClientRect()
    // progress: -1 (below viewport) .. 1 (above), 0 when centered
    const center = rect.top + rect.height / 2
    const progress = (center - window.innerHeight / 2) / window.innerHeight
    const offset = -progress * intensity * rect.height
    node.style.setProperty('--parallax', `${offset.toFixed(1)}px`)
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    raf = requestAnimationFrame(update)
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })
}
