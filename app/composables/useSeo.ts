import { site } from '~/data/site'

/**
 * Per-page SEO helper: sets title + description, canonical URL, and Open Graph
 * / Twitter tags built from the current route. Call once per page.
 */
export function useSeo(opts: { title: string; description: string; image?: string }) {
  const route = useRoute()
  const url = `${site.url}${route.path === '/' ? '' : route.path}`
  const image = `${site.url}${opts.image ?? '/og-image.jpg'}`

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogType: 'website',
    ogUrl: url,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogImage: image,
    ogLocale: 'es_CO',
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
