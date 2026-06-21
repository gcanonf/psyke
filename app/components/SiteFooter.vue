<script setup lang="ts">
import { brand, nav, contact } from '~/data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <NuxtLink to="/" class="footer__logo">
          <BrandLogo style="width: 40px; height: 40px" />
          <span>{{ brand.name }}</span>
        </NuxtLink>
        <p class="footer__tagline">{{ brand.motto }}.</p>
        <div class="footer__social">
          <a :href="contact.social.instagram" target="_blank" rel="noopener" aria-label="Instagram de PSYKE">
            <SocialIcon name="instagram" />
          </a>
          <a :href="contact.social.facebook" target="_blank" rel="noopener" aria-label="Facebook de PSYKE">
            <SocialIcon name="facebook" />
          </a>
          <a :href="contact.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn de Eva Margarita Cañón Falla">
            <SocialIcon name="linkedin" />
          </a>
        </div>
      </div>

      <nav class="footer__nav" aria-label="Mapa del sitio">
        <h3 class="footer__heading">Navegación</h3>
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      </nav>

      <div class="footer__contact">
        <h3 class="footer__heading">Contacto</h3>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <a :href="`tel:+${contact.whatsapp}`">{{ contact.phoneDisplay }}</a>
        <span>{{ contact.location }}</span>
        <NuxtLink to="/contacto" class="footer__contact-cta">Agenda tu cita →</NuxtLink>
      </div>
    </div>

    <div class="container footer__legal">
      <span>© {{ year }} {{ brand.legal }} · {{ brand.professional }}</span>
      <span>Bienestar emocional y calidad de vida</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-ink);
  color: #d8d2e4;
  padding-top: clamp(3rem, 2rem + 4vw, 5rem);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
}
.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: 0.12em;
  color: #fff;
}
.footer__tagline {
  margin-top: 0.9rem;
  max-width: 30ch;
  color: #b6aecb;
  font-style: italic;
}
.footer__social {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}
.footer__social a {
  width: 42px; height: 42px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  transition: background var(--dur), transform var(--dur) var(--ease-out);
}
.footer__social a:hover { background: var(--color-accent); transform: translateY(-2px); }

.footer__heading {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1rem;
}
.footer__nav,
.footer__contact { display: flex; flex-direction: column; gap: 0.7rem; }
.footer__nav a,
.footer__contact a,
.footer__contact span {
  color: #c7c0d8;
  font-size: 0.95rem;
  transition: color var(--dur);
}
.footer__nav a:hover,
.footer__contact a:hover { color: #fff; }
.footer__contact-cta { color: var(--color-accent-soft) !important; font-weight: 600; margin-top: 0.4rem; }

.footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: space-between;
  padding-block: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.82rem;
  color: #948cab;
}

@media (min-width: 720px) {
  .footer__grid { grid-template-columns: 2fr 1fr 1.2fr; }
}
</style>
