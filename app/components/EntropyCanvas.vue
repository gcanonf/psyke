<script setup lang="ts">
/**
 * Entropy visualization — Vue/Canvas port of the React "entropy" component.
 * A grid of particles: the LEFT half is chaotic (emotional turmoil), the RIGHT
 * half is ordered (calm/clarity) — a metaphor for the therapeutic journey from
 * caos to orden. Pure Canvas, no deps. Pauses under prefers-reduced-motion.
 */
const props = withDefaults(defineProps<{ size?: number }>(), { size: 420 })

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0

interface P {
  x: number
  y: number
  ox: number
  oy: number
  vx: number
  vy: number
  chaos: number // 0..1 influence
  ordered: boolean
}

onMounted(() => {
  if (typeof window === 'undefined' || !canvas.value) return
  const cvs = canvas.value
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const size = props.size
  cvs.width = size * dpr
  cvs.height = size * dpr
  const ctx = cvs.getContext('2d')!
  ctx.scale(dpr, dpr)

  const grid = 25
  const gap = size / grid
  const particles: P[] = []
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      const x = i * gap + gap / 2
      const y = j * gap + gap / 2
      // RIGHT half = ordered, LEFT half = chaotic (chaos→order, left to right)
      const ordered = x >= size / 2
      particles.push({
        x, y, ox: x, oy: y,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
        chaos: ordered ? 0 : 1,
        ordered,
      })
    }
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // ink/lavender on cream — read the CSS var for the dot color
  const styles = getComputedStyle(document.documentElement)
  const dot = styles.getPropertyValue('--color-primary').trim() || '#6d5ba6'

  let frame = 0
  function step() {
    ctx.clearRect(0, 0, size, size)

    for (const p of particles) {
      if (p.ordered) {
        // ordered: drift gently back toward home, mildly disturbed by chaos nearby
        let influence = 0
        for (const c of particles) {
          if (c.ordered) continue
          const dx = c.x - p.x
          const dy = c.y - p.y
          const d = Math.hypot(dx, dy)
          if (d < 100) influence = Math.max(influence, 1 - d / 100)
        }
        p.chaos = p.chaos * 0.99 + influence * 0.01
        p.x += (p.ox - p.x) * 0.05 + (Math.random() - 0.5) * p.chaos * 1.5
        p.y += (p.oy - p.y) * 0.05 + (Math.random() - 0.5) * p.chaos * 1.5
      } else {
        // chaotic: free movement, bounce off edges (left half only)
        p.x += p.vx
        p.y += p.vy
        if (p.x < 2 || p.x > size / 2) p.vx *= -1
        if (p.y < 2 || p.y > size - 2) p.vy *= -1
        p.x = Math.max(2, Math.min(size / 2, p.x))
        p.y = Math.max(2, Math.min(size - 2, p.y))
      }
    }

    // connecting lines between near neighbours
    ctx.strokeStyle = dot
    for (let a = 0; a < particles.length; a++) {
      const pa = particles[a]
      for (let b = a + 1; b < particles.length; b++) {
        const pb = particles[b]
        const dx = pa.x - pb.x
        const dy = pa.y - pb.y
        const d = Math.hypot(dx, dy)
        if (d < 26) {
          ctx.globalAlpha = (1 - d / 26) * 0.18
          ctx.beginPath()
          ctx.moveTo(pa.x, pa.y)
          ctx.lineTo(pb.x, pb.y)
          ctx.stroke()
        }
      }
    }

    // particles
    ctx.fillStyle = dot
    for (const p of particles) {
      ctx.globalAlpha = p.ordered ? 0.85 - p.chaos * 0.3 : 0.45
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.ordered ? 1.8 : 1.4, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    frame++
    if (!reduced) raf = requestAnimationFrame(step)
  }

  step() // one frame always; loops unless reduced-motion
})

onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

<template>
  <canvas ref="canvas" class="entropy" :style="{ width: size + 'px', height: size + 'px' }" aria-hidden="true" />
</template>

<style scoped>
.entropy {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
