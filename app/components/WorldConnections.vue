<script setup lang="ts">
/**
 * Dimmed world map (public/images/world.svg) as a quiet, branded backdrop for
 * the Modalidades hero. Pure HTML/CSS, no deps.
 */
</script>

<template>
  <div class="world">
    <img src="/images/world.svg" alt="" class="world__map" aria-hidden="true" />
  </div>
</template>

<style scoped>
.world {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.world__map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.12; /* soft dimmed silhouette */
}
</style>
