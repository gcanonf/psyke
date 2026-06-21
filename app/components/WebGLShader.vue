<script setup lang="ts">
/**
 * Animated WebGL wave shader — Vue port of the React/Three.js component.
 * The original splits R/G/B; here the channels are tinted toward PSYKE's
 * lavender + sage so it stays on-brand over a dark ground.
 *
 * - Client-only (WebGL) — SSR renders nothing; CSS fallback shows underneath.
 * - Honors prefers-reduced-motion: renders one static frame, no animation loop.
 * - Fills its positioned parent (absolute inset:0), not fixed fullscreen.
 */
const canvas = ref<HTMLCanvasElement | null>(null)

let cleanup: (() => void) | null = null

onMounted(async () => {
  if (typeof window === 'undefined' || !canvas.value) return

  // Bail gracefully if WebGL is unavailable
  const test = document.createElement('canvas')
  if (!(test.getContext('webgl2') || test.getContext('webgl'))) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const THREE = await import('three')

  const el = canvas.value
  const parent = el.parentElement as HTMLElement

  const vertexShader = `
    attribute vec3 position;
    void main() { gl_Position = vec4(position, 1.0); }
  `

  // Tinted wave lines: lavender, soft violet, sage — instead of pure R/G/B.
  const fragmentShader = `
    precision highp float;
    uniform vec2 resolution;
    uniform float time;
    uniform float xScale;
    uniform float yScale;
    uniform float distortion;

    void main() {
      vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
      float d = length(p) * distortion;

      float ax = p.x * (1.0 + d);
      float bx = p.x;
      float cx = p.x * (1.0 - d);

      // lower coefficient = softer, more tenuous glow
      float a = 0.022 / abs(p.y + sin((ax + time) * xScale) * yScale);
      float b = 0.022 / abs(p.y + sin((bx + time) * xScale) * yScale);
      float c = 0.022 / abs(p.y + sin((cx + time) * xScale) * yScale);

      // Map the three wave intensities onto brand hues
      vec3 lavender = vec3(0.55, 0.45, 0.85);
      vec3 violet   = vec3(0.42, 0.36, 0.72);
      vec3 sage     = vec3(0.40, 0.66, 0.55);

      vec3 col = a * lavender + b * violet + c * sage;
      // gentle overall dimming so the lines read as a soft glow, not neon
      col *= 0.8;
      gl_FragColor = vec4(col, 1.0);
    }
  `

  const scene = new THREE.Scene()
  const renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(new THREE.Color(0x140f24)) // deep plum, not pure black

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

  const uniforms = {
    resolution: { value: [parent.clientWidth, parent.clientHeight] },
    time: { value: 0.0 },
    xScale: { value: 1.0 },
    yScale: { value: 0.5 },
    distortion: { value: 0.05 },
  }

  const position = [
    -1, -1, 0, 1, -1, 0, -1, 1, 0,
    1, -1, 0, -1, 1, 0, 1, 1, 0,
  ]
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(position), 3))

  const material = new THREE.RawShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const resize = () => {
    const w = parent.clientWidth
    const h = parent.clientHeight
    renderer.setSize(w, h, false)
    uniforms.resolution.value = [w, h]
  }
  resize()

  let rafId = 0
  const render = () => renderer.render(scene, camera)

  if (reduced) {
    // single static frame, no loop
    uniforms.time.value = 1.0
    render()
  } else {
    const loop = () => {
      uniforms.time.value += 0.01
      render()
      rafId = requestAnimationFrame(loop)
    }
    loop()
  }

  let ro: ResizeObserver | null = null
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => {
      resize()
      if (reduced) render()
    })
    ro.observe(parent)
  } else {
    window.addEventListener('resize', resize)
  }

  cleanup = () => {
    if (rafId) cancelAnimationFrame(rafId)
    ro?.disconnect()
    window.removeEventListener('resize', resize)
    scene.remove(mesh)
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <canvas ref="canvas" class="shader-canvas" aria-hidden="true" />
</template>

<style scoped>
.shader-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
