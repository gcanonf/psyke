<script setup lang="ts">
import { contact } from '~/data/site'

const name = ref('')
const email = ref('')
const topic = ref('Psicoterapia')
const message = ref('')
const channel = ref<'whatsapp' | 'email'>('whatsapp')
const errors = ref<Record<string, string>>({})

const topics = [
  'Psicoterapia',
  'EMDR',
  'Cultura del Cuidado',
  'Psicoeducación',
  'Otro',
]

function validate() {
  const e: Record<string, string> = {}
  if (!name.value.trim()) e.name = 'Por favor escribe tu nombre.'
  if (channel.value === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
    e.email = 'Escribe un correo válido para responderte.'
  if (!message.value.trim()) e.message = 'Cuéntanos brevemente en qué te podemos acompañar.'
  errors.value = e
  return Object.keys(e).length === 0
}

function composeText() {
  return [
    `Hola PSYKE, soy ${name.value.trim()}.`,
    `Tema de interés: ${topic.value}.`,
    email.value ? `Mi correo: ${email.value.trim()}.` : '',
    '',
    message.value.trim(),
  ]
    .filter(Boolean)
    .join('\n')
}

function submit() {
  if (!validate()) {
    // focus first invalid field
    const first = Object.keys(errors.value)[0]
    document.getElementById(`field-${first}`)?.focus()
    return
  }
  const text = composeText()
  if (channel.value === 'whatsapp') {
    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener',
    )
  } else {
    const subject = `Cita PSYKE — ${topic.value} — ${name.value.trim()}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(text)}`
  }
}
</script>

<template>
  <form class="form card" novalidate @submit.prevent="submit">
    <div class="form__row">
      <label class="field">
        <span class="field__label">Nombre <span aria-hidden="true">*</span></span>
        <input
          id="field-name"
          v-model="name"
          type="text"
          name="name"
          autocomplete="name"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'err-name' : undefined"
        />
        <span v-if="errors.name" id="err-name" class="field__error" role="alert">{{ errors.name }}</span>
      </label>

      <label class="field">
        <span class="field__label">Correo electrónico</span>
        <input
          id="field-email"
          v-model="email"
          type="email"
          name="email"
          inputmode="email"
          autocomplete="email"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'err-email' : undefined"
        />
        <span v-if="errors.email" id="err-email" class="field__error" role="alert">{{ errors.email }}</span>
      </label>
    </div>

    <label class="field">
      <span class="field__label">Tema de interés</span>
      <select v-model="topic" name="topic" class="field__select">
        <option v-for="t in topics" :key="t" :value="t">{{ t }}</option>
      </select>
    </label>

    <label class="field">
      <span class="field__label">¿En qué te podemos acompañar? <span aria-hidden="true">*</span></span>
      <textarea
        id="field-message"
        v-model="message"
        name="message"
        rows="4"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'err-message' : undefined"
      />
      <span v-if="errors.message" id="err-message" class="field__error" role="alert">{{ errors.message }}</span>
    </label>

    <fieldset class="channel">
      <legend class="field__label">Quiero que me contacten por</legend>
      <div class="channel__options">
        <label class="chip" :class="{ 'chip--on': channel === 'whatsapp' }">
          <input v-model="channel" type="radio" value="whatsapp" name="channel" />
          WhatsApp
        </label>
        <label class="chip" :class="{ 'chip--on': channel === 'email' }">
          <input v-model="channel" type="radio" value="email" name="channel" />
          Correo
        </label>
      </div>
    </fieldset>

    <button type="submit" class="btn btn--primary form__submit">
      {{ channel === 'whatsapp' ? 'Enviar por WhatsApp' : 'Enviar por correo' }}
    </button>
    <p class="form__note">
      Tu mensaje se abrirá en {{ channel === 'whatsapp' ? 'WhatsApp' : 'tu correo' }} con los datos ya escritos.
    </p>
  </form>
</template>

<style scoped>
.form {
  padding: clamp(1.5rem, 1rem + 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.form__row { display: grid; gap: 1.1rem; }
.field { display: flex; flex-direction: column; gap: 0.4rem; }
.field__label {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--color-ink);
}
.field input,
.field textarea,
.field__select {
  font: inherit;
  padding: 0.8rem 0.9rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-ink);
  min-height: 48px;
  transition: border-color var(--dur), box-shadow var(--dur);
}
.field textarea { resize: vertical; min-height: 110px; }
.field input:focus,
.field textarea:focus,
.field__select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-tint);
}
.field input[aria-invalid='true'],
.field textarea[aria-invalid='true'] { border-color: #c0392b; }
.field__error { color: #c0392b; font-size: 0.85rem; font-weight: 500; }

.channel { border: 0; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.channel__options { display: flex; gap: 0.6rem; }
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--dur);
}
.chip input { accent-color: var(--color-primary); }
.chip--on { border-color: var(--color-primary); background: var(--color-primary-tint); color: var(--color-primary); }

.form__submit { justify-content: center; margin-top: 0.4rem; }
.form__note { font-size: 0.82rem; color: var(--color-muted); text-align: center; }

@media (min-width: 560px) {
  .form__row { grid-template-columns: 1fr 1fr; }
}
</style>
