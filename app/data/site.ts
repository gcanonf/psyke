// Central content source — all text extracted from the current PSYKE site.
// Editing copy here updates it everywhere.

// ── Site / SEO config ───────────────────────────────────────────────
// CHANGE `url` to the real production domain when it's known (no trailing slash).
export const site = {
  url: 'https://psyke.com.co', // ← placeholder; update on deploy
  name: 'PSYKE',
  locale: 'es_CO',
  // Bogotá, Colombia — used for local SEO / geo schema
  geo: { lat: 4.711, lng: -74.0721, region: 'CO-DC', city: 'Bogotá', country: 'CO' },
}

export const contact = {
  email: 'psyke.sas@gmail.com',
  phoneDisplay: '+57 304 553 2521',
  // E.164 without symbols for wa.me / tel
  whatsapp: '573045532521',
  location: 'Bogotá, Colombia',
  social: {
    facebook: 'https://www.facebook.com/psyke.sas/',
    instagram: 'https://www.instagram.com/psyke.sas/?hl=es',
    linkedin:
      'https://www.linkedin.com/in/eva-margarita-ca%C3%B1on-falla-psyke-sas/',
  },
}

export const brand = {
  name: 'PSYKE',
  legal: 'PSYKE SAS',
  tagline: 'Bienestar emocional y calidad de vida',
  motto: 'Cuidar de nuestra salud mental es cuidar de nuestra vida',
  professional: 'Eva Margarita Cañón Falla',
  role: 'Psicóloga · Fundadora de PSYKE',
}

export interface NavItem {
  label: string
  to: string
}

export const nav: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mí', to: '/acerca' },
  { label: 'Psicoterapia', to: '/psicoterapia' },
  { label: 'EMDR', to: '/emdr' },
  { label: 'Cultura del Cuidado', to: '/cultura-del-cuidado' },
  { label: 'Psicoeducación', to: '/psicoeducacion' },
]

export interface Service {
  slug: string
  to: string
  title: string
  short: string
  description: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'psicoterapia',
    to: '/psicoterapia',
    title: 'Psicoterapia',
    short: 'Consulta clínica online y presencial',
    description:
      'Atención clínica cálida y humanizada, con tratamientos respaldados científicamente desde un enfoque cognitivo-conductual. Sin límites geográficos y con horarios flexibles.',
    image: '/images/services/psicoterapia.jpg',
    imageAlt: 'Profesional cálida y cercana en un espacio de acompañamiento',
  },
  {
    slug: 'emdr',
    to: '/emdr',
    title: 'EMDR',
    short: 'Reprocesamiento del trauma',
    description:
      'Enfoque psicoterapéutico validado científicamente para procesar recuerdos dolorosos que siguen generando malestar: trauma, ansiedad y bloqueos emocionales.',
    image: '/images/services/emdr.jpg',
    imageAlt: 'Persona con los brazos abiertos al amanecer, símbolo de sanación',
  },
  {
    slug: 'cultura-del-cuidado',
    to: '/cultura-del-cuidado',
    title: 'Cultura del Cuidado',
    short: 'Talleres para equipos y comunidades',
    description:
      'Espacios formativos que equilibran el desarrollo profesional con el bienestar emocional para construir entornos más sanos y productivos.',
    image: '/images/services/cultura-del-cuidado.jpg',
    imageAlt: 'Grupo de personas abrazadas, símbolo de comunidad y cuidado',
  },
  {
    slug: 'psicoeducacion',
    to: '/psicoeducacion',
    title: 'Psicoeducación para la Vida',
    short: 'Talleres y conferencias',
    description:
      'Faros de conocimiento y cuidado: psicología, educación y trabajo comunitario para descubrir herramientas prácticas que fortalecen la salud mental.',
    image: '/images/services/psicoeducacion.jpg',
    imageAlt: 'Conferencia con un grupo de personas en un taller formativo',
  },
]

export const whyTherapy: string[] = [
  'Gestionar emociones que generan malestar',
  'Aumentar tu bienestar emocional y calidad de vida',
  'Desarrollar el autoconocimiento',
  'Aprender herramientas para resolver conflictos',
  'Adoptar hábitos más saludables',
  'Afrontar cambios y transiciones vitales',
  'Mejorar la relación con las personas de tu entorno',
]

export const therapyTypes = [
  {
    title: 'Adultos',
    text: 'Psicoterapia enfocada en el equilibrio emocional y el desarrollo personal.',
  },
  {
    title: 'Adolescentes',
    text: 'Un espacio seguro para acompañar los retos propios de la adolescencia.',
  },
  {
    title: 'Crisis y trauma',
    text: 'Intervención en crisis y situaciones emocionalmente difíciles.',
  },
  {
    title: 'EMDR',
    text: 'Terapia de desensibilización y reprocesamiento por movimientos oculares.',
  },
]

export const emdrFor: string[] = [
  'Experiencias traumáticas: violencia, abuso, accidentes, pérdidas o separaciones dolorosas',
  'Haber presenciado eventos de fuerte impacto emocional',
  'Heridas de la infancia: abandono, negligencia emocional o entornos inseguros',
  'Dificultades de confianza y apego',
  'Estrés crónico o relaciones que han dejado huella',
  'Reacciones emocionales intensas ante detonantes específicos',
  'Bloqueos que no se han resuelto con otros procesos terapéuticos',
]

export const careWorkshops = [
  {
    title: 'Autoliderazgo',
    text: 'Desarrolla la habilidad de dirigirte a ti mismo con claridad y propósito, fortaleciendo la toma de decisiones, la resiliencia y la confianza personal.',
    image: '/images/cultura/autoliderazgo.jpg',
  },
  {
    title: 'Comunicación y escucha activa',
    text: 'Herramientas prácticas para construir conexiones más profundas, con mensajes claros y una escucha empática en lo personal y lo profesional.',
    image: '/images/cultura/comunicacion.jpg',
  },
  {
    title: 'Gestión del tiempo',
    text: 'Estrategias para optimizar la productividad y equilibrar responsabilidades a través de la priorización y la eliminación de distracciones.',
    image: '/images/cultura/tiempo.jpg',
  },
  {
    title: 'Resiliencia',
    text: 'Regulación emocional y manejo de la frustración a través de la inteligencia emocional y la toma de decisiones consciente.',
    image: '/images/cultura/resiliencia.jpg',
  },
  {
    title: 'Negociación y gestión de conflictos',
    text: 'Cultiva una mentalidad Ganar-Ganar y enfoques colaborativos para crear acuerdos mutuamente beneficiosos.',
    image: '/images/cultura/negociacion.jpg',
  },
  {
    title: 'Equilibrio físico, mental y espiritual',
    text: 'Integra actividad física, nutrición, meditación y manejo del estrés para un bienestar integral.',
    image: '/images/cultura/equilibrio.jpg',
  },
]

export const differentiators = [
  'Compromiso social e impacto comunitario',
  'Formación profesional continua',
  'Enfoque de promoción y prevención en salud mental',
  'Metodologías pedagógicas innovadoras',
  'Amplia red profesional',
]

export interface Testimonial {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Noa',
    role: 'Proceso terapéutico',
    quote:
      'El espacio con Eva siempre ha sido un espacio donde me encuentro a mí, con todos mis defectos y mi potencia.',
  },
  {
    name: 'Nohemí',
    role: 'Proceso terapéutico',
    quote:
      'En este proceso terapéutico que camino contigo aprendo a habitarme con más conciencia, a entenderme desde un lugar más amoroso.',
  },
  {
    name: 'Evelin',
    role: 'Proceso terapéutico',
    quote:
      'Te conocí sin querer conocerte, arrastrando la certeza de que nada podría sembrar en mi tierra reseca.',
  },
  {
    name: 'Paola',
    role: 'Proceso de recuperación',
    quote:
      'La terapia con Eva ha sido fundamental en mi proceso de recuperación; estaba en un punto crítico de mi vida.',
  },
]
