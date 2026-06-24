<script setup lang="ts">
import { contact } from '~/data/site'
useReveal()
useSeo({
  title: 'Contacto · Agenda tu cita de psicología | PSYKE Bogotá',
  description:
    'Agenda tu cita con PSYKE en línea o escríbeme por correo electrónico. Psicoterapia y EMDR, atención online y presencial desde Bogotá, Colombia.',
})

const bookingLink = contact.booking
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contacto"
      title="Agenda tu cita"
      lede="Estoy aquí para acompañarte. Agenda tu cita en línea o escríbeme por correo y te contacto por WhatsApp para confirmar."
    />

    <section class="section">
      <div class="container contact__grid">
        <aside class="contact__info reveal">
          <h2 class="contact__h">Hablemos</h2>
          <ul class="contact__list">
            <li>
              <span class="contact__ico">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="4.5" width="18" height="16" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M3 9h18M8 2.5v4M16 2.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
              </span>
              <div>
                <span class="contact__label">Agendar cita</span>
                <a :href="bookingLink" target="_blank" rel="noopener">Reserva en línea</a>
              </div>
            </li>
            <li>
              <span class="contact__ico">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <div>
                <span class="contact__label">Correo</span>
                <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
              </div>
            </li>
            <li>
              <span class="contact__ico">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>
              </span>
              <div>
                <span class="contact__label">Ubicación</span>
                <span>{{ contact.location }} · Atención online</span>
              </div>
            </li>
          </ul>

          <div class="contact__social">
            <a :href="contact.social.instagram" target="_blank" rel="noopener" aria-label="Instagram"><SocialIcon name="instagram" /></a>
            <a :href="contact.social.facebook" target="_blank" rel="noopener" aria-label="Facebook"><SocialIcon name="facebook" /></a>
            <a :href="contact.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
          </div>
        </aside>

        <div class="contact__form reveal" data-reveal-delay="120">
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact__grid { display: grid; gap: clamp(2rem, 1.5rem + 3vw, 3.5rem); align-items: start; }
.contact__h { font-size: var(--step-2); margin-bottom: 1.5rem; }
.contact__list { display: flex; flex-direction: column; gap: 1.25rem; }
.contact__list li { display: flex; gap: 0.9rem; align-items: center; }
.contact__ico {
  width: 46px; height: 46px; flex: 0 0 auto;
  display: grid; place-items: center; border-radius: 50%;
  background: var(--color-primary-tint); color: var(--color-primary);
}
.contact__label { display: block; font-size: 0.8rem; color: var(--color-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
.contact__list a { color: var(--color-ink); font-weight: 500; }
.contact__list a:hover { color: var(--color-primary); }
.contact__social { display: flex; gap: 0.6rem; margin-top: 2rem; }
.contact__social a {
  width: 44px; height: 44px; display: grid; place-items: center;
  border-radius: 50%; border: 1.5px solid var(--color-border); color: var(--color-ink-soft);
  transition: all var(--dur);
}
.contact__social a:hover { border-color: var(--color-primary); color: var(--color-primary); background: var(--color-primary-tint); }

@media (min-width: 820px) { .contact__grid { grid-template-columns: 0.8fr 1.2fr; } }
</style>
