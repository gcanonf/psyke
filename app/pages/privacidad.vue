<script setup lang="ts">
import { brand, contact, site } from '~/data/site'
useReveal()

// domain without protocol, e.g. "psyke.com.co"
const siteHost = site.url.replace(/^https?:\/\//, '')
useSeo({
  title: 'Política de privacidad y tratamiento de datos | PSYKE',
  description:
    'Política de privacidad, tratamiento de datos personales (Ley 1581 de 2012 / habeas data) y uso de cookies de PSYKE, Bogotá, Colombia.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Privacidad"
      title="Política de privacidad y tratamiento de datos"
      lede="Cuidamos tus datos con el mismo respeto con el que acompañamos cada proceso. Aquí te explicamos cómo los tratamos."
    />

    <section class="section">
      <div class="container prose privacy reveal">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <a :href="site.url">{{ siteHost }}</a>, sitio de
          {{ brand.professional }} (psicóloga), con domicilio en
          {{ contact.location }}, es responsable del tratamiento de los datos
          personales recolectados a través de este sitio web. Contacto:
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>.
        </p>

        <h2>2. Marco legal</h2>
        <p>
          El tratamiento de tus datos se realiza conforme a la
          <strong>Ley 1581 de 2012</strong> y el Decreto 1377 de 2013 de
          Colombia (habeas data), que regulan la protección de datos personales,
          así como a los principios de finalidad, libertad, seguridad y
          confidencialidad.
        </p>

        <h2>3. Datos que recolectamos</h2>
        <ul>
          <li>
            <strong>Datos de contacto</strong> que nos compartes
            voluntariamente al escribirnos (nombre, correo, teléfono y el
            contenido de tu mensaje), con el fin de responder y agendar citas.
          </li>
          <li>
            <strong>Datos de navegación anónimos</strong> (cookies de análisis),
            únicamente si das tu consentimiento, para entender cómo se usa el
            sitio y mejorarlo.
          </li>
        </ul>

        <h2>4. Finalidad</h2>
        <p>
          Usamos tus datos para responder tus solicitudes, agendar y gestionar
          citas, y mejorar nuestros servicios. La información clínica compartida
          en consulta se rige por el secreto profesional y la normativa de salud
          aplicable, y no se recolecta a través de este sitio web.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Utilizamos cookies <strong>estrictamente necesarias</strong> para el
          funcionamiento del sitio y, solo con tu permiso, cookies de
          <strong>análisis</strong> (Google Analytics, con IP anonimizada) que
          no se activan hasta que las aceptas. Puedes cambiar tu elección en
          cualquier momento desde el aviso de cookies.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Como titular de los datos, tienes derecho a conocer, actualizar,
          rectificar y suprimir tu información, así como a revocar la
          autorización otorgada. Para ejercer estos derechos, escríbenos a
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>.
        </p>

        <h2>7. Conservación y seguridad</h2>
        <p>
          Conservamos tus datos solo durante el tiempo necesario para las
          finalidades descritas y aplicamos medidas razonables para protegerlos.
          No compartimos tus datos con terceros, salvo obligación legal.
        </p>

        <h2>8. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta política para reflejar cambios legales o de
          nuestros servicios. La versión vigente siempre estará disponible en
          esta página.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.privacy { padding-top: 0; }
.privacy h2 {
  font-size: var(--step-1);
  color: var(--color-primary);
  margin: 2rem 0 0.6rem;
}
.privacy p,
.privacy li { color: var(--color-ink-soft); }
.privacy ul { padding-left: 1.2rem; list-style: disc; display: flex; flex-direction: column; gap: 0.5rem; }
.privacy a { color: var(--color-primary); font-weight: 600; }
</style>
