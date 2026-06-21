<script setup lang="ts">
/**
 * Static radial hub: the logo sits in the centre with the keywords arranged
 * in a circle around it (each at its own angle). All text visible at once —
 * no rotation, no clicking. Connector lines radiate from the centre.
 */
export interface OrbitNode {
  id: number
  keyword: string
  text: string
}
const props = defineProps<{ nodes: OrbitNode[] }>()

// position each node evenly around the circle (start at top, -90°)
function nodePos(index: number, total: number) {
  const angle = (index / total) * 360 - 90
  const rad = (angle * Math.PI) / 180
  // percentage offsets from centre (radius — nodes sit near the logo)
  const r = 34
  const x = 50 + r * Math.cos(rad)
  const y = 50 + r * Math.sin(rad)
  return { x, y }
}
</script>

<template>
  <div class="radial">
    <div class="radial__stage">
      <!-- connector lines + center logo -->
      <svg class="radial__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line
          v-for="(node, i) in nodes"
          :key="'l' + node.id"
          x1="50" y1="50"
          :x2="nodePos(i, nodes.length).x"
          :y2="nodePos(i, nodes.length).y"
        />
      </svg>

      <div class="radial__center reveal">
        <span class="radial__halo" aria-hidden="true" />
        <span class="radial__ring" aria-hidden="true" />
        <span class="radial__ring radial__ring--2" aria-hidden="true" />
        <img src="/logo-mark.svg" alt="PSYKE" class="radial__logo" />
      </div>

      <!-- nodes around the circle -->
      <div
        v-for="(node, i) in nodes"
        :key="node.id"
        class="radial__node reveal"
        :style="{
          left: nodePos(i, nodes.length).x + '%',
          top: nodePos(i, nodes.length).y + '%',
        }"
        :data-reveal-delay="i * 90"
      >
        <div class="radial__body">
          <h3 class="radial__keyword">{{ node.keyword }}</h3>
          <p class="radial__text">{{ node.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radial { width: 100%; }

/* ---- mobile: simple centred stack (circle math needs width) ---- */
.radial__stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.radial__lines { display: none; }
.radial__center {
  position: relative;
  width: clamp(120px, 30vw, 160px);
  height: clamp(120px, 30vw, 160px);
  display: grid; place-items: center;
}
.radial__logo { width: 100%; height: auto; position: relative; z-index: 1; }
.radial__halo {
  position: absolute; inset: -14%;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-primary-tint), transparent 70%);
}
/* pulsing rings around the logo */
.radial__ring {
  position: absolute; inset: 0;
  border-radius: 50%;
  border: 1px solid var(--color-primary);
  opacity: 0.4;
  animation: radial-ping 3s ease-out infinite;
}
.radial__ring--2 { animation-delay: 1.5s; }
@keyframes radial-ping {
  0% { transform: scale(0.9); opacity: 0.5; }
  100% { transform: scale(1.9); opacity: 0; }
}
.radial__node { display: flex; max-width: 34rem; text-align: center; justify-content: center; }
.radial__keyword { font-size: var(--step-1); color: var(--color-primary); margin-bottom: 0.25rem; }
.radial__text { color: var(--color-ink-soft); line-height: 1.5; }

@media (prefers-reduced-motion: reduce) {
  .radial__ring { animation: none; }
}

/* ---- desktop: true circular arrangement ---- */
@media (min-width: 920px) {
  .radial__stage {
    display: block;
    position: relative;
    width: min(100%, 60rem);
    margin-inline: auto;
    aspect-ratio: 16 / 10;
  }
  .radial__lines {
    display: block;
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    z-index: 0;
  }
  .radial__lines line {
    stroke: var(--color-border);
    stroke-width: 0.15;
    vector-effect: non-scaling-stroke;
  }
  .radial__center {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    width: clamp(120px, 13vw, 168px);
    height: clamp(120px, 13vw, 168px);
    z-index: 2;
  }
  .radial__node {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 17rem;
    max-width: none;
    z-index: 1;
    align-items: center;
  }
  .radial__keyword { font-size: var(--step-1); }
  .radial__text { font-size: 0.98rem; line-height: 1.5; }
}
</style>
