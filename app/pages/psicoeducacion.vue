<script setup lang="ts">
useReveal()
useSeoMeta({
  title: 'Psicoeducación para la Vida · Talleres y conferencias · PSYKE',
  description:
    'Faros de conocimiento y cuidado: talleres y conferencias que integran psicología, educación y trabajo comunitario para fortalecer la salud mental sin estigmas.',
})

const formats = [
  { title: 'Talleres', text: 'Espacios participativos con herramientas prácticas para la vida diaria.' },
  { title: 'Conferencias', text: 'Encuentros que conectan la investigación y la teoría con lo cotidiano.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Psicoeducación para la Vida"
      title="Faros de conocimiento y cuidado"
      lede="«Me gusta pensar en estos espacios como faros de conocimiento y cuidado.» Integro psicología, educación y trabajo comunitario para acompañar a personas y grupos en el descubrimiento de herramientas prácticas."
    />

    <section class="section">
      <div class="container two-col">
        <div class="prose reveal">
          <h2 class="h2">Salud mental sin estigmas</h2>
          <p>
            Abordamos la salud mental sin estigmas y con una visión más humana,
            conectando la investigación y la teoría con su aplicación en la vida
            cotidiana.
          </p>
          <p>
            A través de programas personalizados y metodologías participativas,
            ayudo a las personas y a los grupos a fortalecer su salud mental,
            cultivar el cuidado emocional y construir relaciones más sanas.
          </p>
        </div>
        <div class="formats reveal" data-reveal-delay="120">
          <article v-for="f in formats" :key="f.title" class="card format__card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section quote-sec">
      <div class="container">
        <blockquote class="bigquote reveal">
          «Acompañar a las personas y a los grupos en un camino donde descubran
          herramientas prácticas.»
        </blockquote>
      </div>
    </section>

    <CtaBand
      title="Diseñemos un espacio de aprendizaje"
      text="Talleres y conferencias para tu institución, empresa o comunidad. Cuéntanos tu necesidad."
    />
  </div>
</template>

<style scoped>
.two-col { display: grid; gap: 2rem; align-items: start; }
.h2 { font-size: var(--step-3); margin-bottom: 1rem; }
.formats { display: flex; flex-direction: column; gap: 1.25rem; }
.format__card { padding: 1.75rem; }
.format__card h3 { color: var(--color-primary); font-size: var(--step-1); margin-bottom: 0.4rem; }
.format__card p { color: var(--color-ink-soft); }
.quote-sec { background: var(--color-surface-alt); padding-block: clamp(3rem, 2rem + 4vw, 5rem); }
.bigquote {
  max-width: 44rem; margin-inline: auto; text-align: center;
  font-family: var(--font-display); font-style: italic;
  font-size: var(--step-2); line-height: 1.4; color: var(--color-primary);
}
@media (min-width: 760px) { .two-col { grid-template-columns: 1.2fr 0.8fr; } }
</style>
