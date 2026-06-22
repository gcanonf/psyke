// Cookie consent + Google Analytics (consent-gated, Consent Mode v2).
// Client-only. GA loads ONLY after the user accepts the "analytics" category.
// The GA4 id comes from NUXT_PUBLIC_GA_ID (set in Coolify). If empty, GA is off.

import 'vanilla-cookieconsent/dist/cookieconsent.css'
import * as CookieConsent from 'vanilla-cookieconsent'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const gaId = useRuntimeConfig().public.gaId as string

  // ── Google Consent Mode v2: default everything to denied ──────────
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  })
  window.gtag('js', new Date())

  let gaLoaded = false
  function loadGA() {
    if (gaLoaded || !gaId) return
    gaLoaded = true
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(s)
    window.gtag('config', gaId, { anonymize_ip: true })
  }

  // grant/deny analytics based on the consent state
  function syncConsent() {
    const granted = CookieConsent.acceptedCategory('analytics')
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    })
    if (granted) loadGA()
  }

  CookieConsent.run({
    guiOptions: {
      consentModal: { layout: 'box', position: 'bottom left' },
      preferencesModal: { layout: 'box' },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {
        enabled: false,
        autoClear: { cookies: [{ name: /^_ga/ }, { name: '_gid' }] },
      },
    },
    onConsent: syncConsent,
    onChange: syncConsent,

    language: {
      default: 'es',
      translations: {
        es: {
          consentModal: {
            title: 'Tu privacidad importa',
            description:
              'Usamos cookies necesarias para que el sitio funcione y, con tu permiso, cookies de análisis para entender cómo se usa la página y mejorarla. Puedes aceptar, rechazar o configurar tus preferencias.',
            acceptAllBtn: 'Aceptar',
            acceptNecessaryBtn: 'Rechazar',
            showPreferencesBtn: 'Configurar',
            footer:
              '<a href="/privacidad">Política de privacidad</a>',
          },
          preferencesModal: {
            title: 'Preferencias de cookies',
            acceptAllBtn: 'Aceptar todas',
            acceptNecessaryBtn: 'Rechazar todas',
            savePreferencesBtn: 'Guardar preferencias',
            closeIconLabel: 'Cerrar',
            sections: [
              {
                title: 'Uso de cookies',
                description:
                  'Cuidamos tus datos con el mismo respeto con el que acompañamos cada proceso. A continuación puedes elegir qué cookies permitir.',
              },
              {
                title: 'Cookies estrictamente necesarias',
                description:
                  'Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.',
                linkedCategory: 'necessary',
              },
              {
                title: 'Cookies de análisis',
                description:
                  'Nos permiten medir de forma anónima cómo se usa el sitio (Google Analytics) para mejorar tu experiencia. Solo se activan si las aceptas.',
                linkedCategory: 'analytics',
              },
            ],
          },
        },
      },
    },
  })
})
