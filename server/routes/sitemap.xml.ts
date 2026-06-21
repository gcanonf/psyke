// Production domain — keep in sync with `site.url` in app/data/site.ts
const SITE_URL = 'https://psyke.com.co'

// Static routes of the site (keep in sync with app/data/site.ts nav + pages)
const routes = [
  { loc: '/', priority: '1.0', changefreq: 'monthly' },
  { loc: '/acerca', priority: '0.8', changefreq: 'yearly' },
  { loc: '/psicoterapia', priority: '0.9', changefreq: 'monthly' },
  { loc: '/emdr', priority: '0.9', changefreq: 'monthly' },
  { loc: '/cultura-del-cuidado', priority: '0.8', changefreq: 'monthly' },
  { loc: '/psicoeducacion', priority: '0.8', changefreq: 'monthly' },
  { loc: '/contacto', priority: '0.7', changefreq: 'yearly' },
]

export default defineEventHandler((event) => {
  const today = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})
