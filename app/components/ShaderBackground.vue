<script setup lang="ts">
/**
 * Animated WebGL mesh-gradient backdrop.
 * Vue port of the React `@paper-design/shaders-react` <MeshGradient> using the
 * framework-agnostic core (`ShaderMount` + `meshGradientFragmentShader`).
 *
 * - Runs client-side only (WebGL/DOM) — SSR renders the static gradient fallback.
 * - Honors prefers-reduced-motion: keeps a soft static gradient, no animation.
 * - Two layered gradients tinted to PSYKE's lavender/sage palette.
 */
const props = withDefaults(
  defineProps<{
    /** Hex colors for the mesh gradient (PSYKE brand by default) */
    colors?: string[]
    speed?: number
    distortion?: number
    swirl?: number
  }>(),
  {
    colors: () => ['#faf7f2', '#cdbfe8', '#efeafa', '#a9c7b5', '#8b7fc0'],
    speed: 0.28,
    distortion: 0.8,
    swirl: 0.6,
  },
)

const host = ref<HTMLElement | null>(null)
const ready = ref(false) // true once the WebGL shader is mounted
let mount: { setUniforms: (u: Record<string, unknown>) => void; dispose?: () => void } | null = null

// hex (#rrggbb) -> [r,g,b,a] in 0..1
function hexToVec4(hex: string): [number, number, number, number] {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.replace(/(.)/g, '$1$1') : h, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, 1]
}

onMounted(async () => {
  if (typeof window === 'undefined' || !host.value) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Bail gracefully if WebGL is unavailable — the CSS fallback stays visible.
  const test = document.createElement('canvas')
  const hasWebGL = !!(test.getContext('webgl2') || test.getContext('webgl'))
  if (!hasWebGL) return

  try {
    const { ShaderMount, meshGradientFragmentShader } = await import(
      '@paper-design/shaders'
    )

    const uniforms = {
      u_colors: props.colors.slice(0, 10).map(hexToVec4),
      u_colorsCount: Math.min(props.colors.length, 10),
      u_distortion: props.distortion,
      u_swirl: props.swirl,
      u_grainMixer: 0,
      u_grainOverlay: 0,
      u_scale: 1,
      u_rotation: 0,
    }

    // speed 0 → fully static (no rAF cost) for reduced-motion users
    mount = new ShaderMount(
      host.value,
      meshGradientFragmentShader,
      uniforms,
      undefined,
      reduced ? 0 : props.speed,
    ) as unknown as typeof mount

    ready.value = true
  } catch {
    // keep the static fallback
  }
})

onBeforeUnmount(() => {
  mount?.dispose?.()
})
</script>

<template>
  <div class="shader" :class="{ 'shader--live': ready }">
    <!-- Static brand gradient: SSR output + fallback when WebGL/JS is off -->
    <div class="shader__fallback" aria-hidden="true" />
    <!-- WebGL canvas gets mounted into this host -->
    <div ref="host" class="shader__host" aria-hidden="true" />
  </div>
</template>

<style scoped>
.shader {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.shader__fallback,
.shader__host {
  position: absolute;
  inset: 0;
}
.shader__fallback {
  background:
    radial-gradient(60% 55% at 80% 10%, var(--color-primary-tint), transparent 62%),
    radial-gradient(55% 50% at 10% 25%, var(--color-accent-tint), transparent 58%),
    radial-gradient(70% 60% at 50% 100%, color-mix(in srgb, var(--color-primary-soft) 30%, transparent), transparent 70%),
    var(--color-bg);
  transition: opacity 800ms ease;
}
/* once the live shader is up, fade the static layer out */
.shader--live .shader__fallback { opacity: 0; }
.shader__host :deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
</style>
