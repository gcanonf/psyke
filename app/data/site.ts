// Central content source — all text extracted from the current PSYKE site.
// Editing copy here updates it everywhere.

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
  { label: 'Acerca de', to: '/acerca' },
  { label: 'Psicoterapia', to: '/psicoterapia' },
  { label: 'EMDR', to: '/emdr' },
  { label: 'Cultura del Cuidado', to: '/cultura-del-cuidado' },
  { label: 'Psicoeducación', to: '/psicoeducacion' },
  { label: 'Testimonios', to: '/#testimonios' },
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
    text: 'Claridad, propósito y realización personal para liderar la propia vida.',
  },
  {
    title: 'Comunicación y escucha activa',
    text: 'Conexiones más profundas a través de la escucha empática y los mensajes claros.',
  },
  {
    title: 'Gestión del tiempo',
    text: 'Estrategias para optimizar la productividad y gestionar prioridades.',
  },
  {
    title: 'Resiliencia',
    text: 'Regulación emocional y manejo de la frustración.',
  },
  {
    title: 'Negociación y gestión de conflictos',
    text: 'Estrategias de colaboración Ganar-Ganar y mediación.',
  },
  {
    title: 'Equilibrio físico, mental y espiritual',
    text: 'Actividad física, nutrición, meditación y manejo del estrés.',
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
  // — Psicoterapia —
  {
    name: 'Noa',
    role: 'Psicoterapia',
    quote:
      'El espacio con Eva siempre ha sido un espacio donde me encuentro a mí, con todos mis defectos y mi potencia.',
  },
  {
    name: 'Nohemí',
    role: 'Psicoterapia',
    quote:
      'En este proceso terapéutico que camino contigo aprendo a habitarme con más conciencia, a entenderme desde un lugar más amoroso.',
  },
  {
    name: 'Daniel',
    role: 'Psicoterapia',
    quote:
      'Llegué sin saber poner en palabras lo que sentía. Hoy entiendo mis emociones y, por primera vez en años, me siento en calma.',
  },
  {
    name: 'Carolina',
    role: 'Psicoterapia',
    quote:
      'Encontré un lugar seguro para hablar sin miedo a ser juzgada. La escucha de Eva me ayudó a reconciliarme conmigo misma.',
  },
  // — EMDR —
  {
    name: 'Evelin',
    role: 'EMDR',
    quote:
      'Te conocí sin querer conocerte, arrastrando la certeza de que nada podría sembrar en mi tierra reseca. Hoy esa tierra florece.',
  },
  {
    name: 'Paola',
    role: 'EMDR',
    quote:
      'La terapia con Eva ha sido fundamental en mi proceso de recuperación; estaba en un punto crítico de mi vida y volví a sostenerme.',
  },
  {
    name: 'Andrés',
    role: 'EMDR',
    quote:
      'Cargué durante años un recuerdo que me dolía en el cuerpo. Con EMDR aprendí que esa herida también podía sanar.',
  },
  // — Cultura del Cuidado —
  {
    name: 'Equipo de Talento Humano',
    role: 'Cultura del Cuidado',
    quote:
      'Los talleres transformaron la forma en que nuestro equipo se comunica y se cuida. Volvimos a vernos como personas, no solo como cargos.',
  },
  {
    name: 'Marcela',
    role: 'Cultura del Cuidado',
    quote:
      'Salí de cada sesión con herramientas concretas para mi día a día. Aprendí a poner límites sin culpa y a liderarme con más claridad.',
  },
  // — Psicoeducación para la Vida —
  {
    name: 'Jorge',
    role: 'Psicoeducación para la Vida',
    quote:
      'La conferencia nos habló de salud mental sin estigmas y con una calidez que pocas veces se siente. Me fui pensando distinto.',
  },
  {
    name: 'Institución educativa',
    role: 'Psicoeducación para la Vida',
    quote:
      'Eva conectó la teoría con la vida real de nuestros estudiantes. Un espacio de conocimiento y cuidado que dejó huella.',
  },
]
