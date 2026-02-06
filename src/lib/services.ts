/**
 * Información detallada de cada servicio
 */

export interface ServiceDetail {
  id: number
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  longDescription: string
  icon: string
  color: string
  price: number
  oldPrice?: number
  plans?: {
    name: string
    price: number
    oldPrice?: number
    billing?: 'mensual'
    recommended?: boolean
    features: string[]
  }[]
  addons?: {
    name: string
    description?: string
    price: number
    oldPrice?: number
    billing?: 'mensual'
    badge?: string
  }[]
  videoEditPrice?: number
  deliverables: string[]
  process: {
    title: string
    description: string
  }[]
  whyChooseUs: string[]
  portfolio: string[]
  cta: string
  whatsappMessage?: string
  faq: {
    question: string
    answer: string
  }[]
  relatedServices?: number[]
  supportImage?: string
}

export const SERVICES_DETAILS: ServiceDetail[] = [
  {
    id: 1,
    slug: 'redes-sociales',
    title: 'Administración y Diseños para Redes Sociales',
    subtitle: 'Gestión, Contenido Diseñado y Community Management',
    shortDescription:
      'Servicio mensual integral para marcas que necesitan constancia. Elige administración, diseño de packs o ambos con descuento.',
    longDescription:
      'Tu solución integral para redes sociales. Combinamos estrategia, creación de contenido, programación, community management y reportes claros. Elige el plan que se adapte a ti: solo administración, solo diseño de packs o ambos combinados con 15% de descuento. Nuestro equipo se encarga de la consistencia, el tono y la calidad de tu comunicación.',
    icon: 'BrandInstagram',
    color: '#E1306C',
    price: 199990,
    supportImage: 'https://images.pexels.com/photos/2055500/pexels-photo-2055500.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Esencial - Administración',
        price: 79990,
        billing: 'mensual',
        features: [
          'Planificación y calendarización de contenido',
          'Programación y publicación en horarios óptimos',
          'Gestión de comunidad: respuestas a comentarios y mensajes',
          'Monitoreo y métricas en Metricool (licencia no incluida)',
          'Reporte mensual y recomendaciones',
          'Estrategia inicial y optimización básica',
        ],
      },
      {
        name: 'Pro - Administración',
        price: 199990,
        billing: 'mensual',
        features: [
          'Planificación estratégica mensual',
          'Publicación y programación multicanal',
          'Gestión de comunidad y moderación avanzada',
          'Monitoreo de rendimiento y métricas en Metricool (licencia no incluida)',
          'Reporte quincenal con insights y acciones',
          'Copy y optimización de publicaciones',
          'Soporte en la gestión de campañas orgánicas',
        ],
      },
      {
        name: 'Pro+ - Administración',
        price: 349990,
        billing: 'mensual',
        features: [
          'Estrategia mensual avanzada y roadmap de crecimiento',
          'Publicación diaria y calendarización completa',
          'Gestión completa de comunidad y atención al cliente en redes',
          'Monitoreo y dashboards en Metricool (licencia no incluida)',
          'Reportes semanales con optimizaciones',
          'Soporte en campañas y coordinación con ads (costos de ads no incluidos)',
          'Análisis y optimización continua',
        ],
      },
      {
        name: 'Esencial - Diseños',
        price: 69990,
        billing: 'mensual',
        features: [
          'Pack de 10 diseños personalizados (posts, historias, carruseles) — creados en Illustrator/Photoshop o Canva según requerimiento',
          'Plantillas editables en Canva (3 plantillas)',
          'Optimización para Instagram y TikTok',
          'Entrega de archivos editables (AI, PSD o Canva)',
          'Archivos listos para publicar',
          '2 rondas de revisión',
        ],
      },
      {
        name: 'Pro - Diseños',
        price: 139990,
        billing: 'mensual',
        features: [
          'Pack de 20 diseños personalizados (AI/PSD/Canva)',
          'Plantillas editables en Canva (5 plantillas)',
          'Edición de video corta en Premiere para reels (si aplica)',
          'Optimización multiplataforma (IG, TikTok, FB)',
          'Diseños temáticos según campaña',
          'Historias y contenido de temporada',
          'Archivos en alta resolución y editables',
          '2 rondas de revisión',
        ],
      },
      {
        name: 'Pro+ - Diseños',
        price: 219990,
        billing: 'mensual',
        features: [
          'Pack de 30 diseños personalizados (AI/PSD/Canva) y assets para campañas',
          'Plantillas editables en Canva (8 plantillas)',
          'Edición avanzada de video en Premiere para reels y anuncios',
          'Historias, reels y contenido premium',
          'Optimización multi-plataforma',
          'Actualizaciones mensuales de plantillas',
          'Acceso a biblioteca de recursos',
          '3 rondas de revisión',
        ],
      },
      {
        name: 'Esencial - Combo (Admin + Diseños)',
        price: 127500,
        oldPrice: 149980,
        billing: 'mensual',
        features: [
          '8 posts mensuales estáticos',
          '3 historias',
          '1 reel básico (edición ligera)',
          'Pack de 10 diseños personalizados',
          'Plantillas editables en Canva (3)',
          'Programación y reporte mensual',
          'Community management básico',
          'Estrategia inicial de contenido',
          '2 rondas de revisión',
          'Ahorro del 15% vs. contratar por separado',
        ],
      },
      {
        name: 'Pro - Combo (Admin + Diseños)',
        price: 289000,
        oldPrice: 339980,
        billing: 'mensual',
        recommended: true,
        features: [
          '12 posts mensuales + 4 carruseles',
          '6 historias',
          '2 reels (edición estándar)',
          'Pack de 20 diseños personalizados',
          'Plantillas editables en Canva (5)',
          'Estrategia quincenal y copy personalizado',
          'Reporte quincenal detallado',
          'Community management profesional',
          'Análisis de métricas avanzado',
          '2 rondas de revisión',
          'Ahorro del 15% vs. contratar por separado',
        ],
      },
      {
        name: 'Pro+ - Combo (Admin + Diseños)',
        price: 485000,
        oldPrice: 569980,
        billing: 'mensual',
        features: [
          '20 posts mensuales, 8 carruseles',
          'Historias frecuentes (10/semana)',
          '4 reels con edición avanzada',
          'Pack de 30 diseños personalizados',
          'Plantillas editables en Canva (8)',
          'Community management intenso',
          'Gestión de ads y campañas básicas',
          'Reportes semanales personalizados',
          'Análisis y optimización continua',
          'Actualizaciones mensuales de plantillas',
          '3 rondas de revisión',
          'Ahorro del 15% vs. contratar por separado',
        ],
      },
    ],
    videoEditPrice: 35000,
    deliverables: [
      'Estrategia de contenido mensual personalizada',
      'Creación de contenido según plan (posts, historias, reels, carruseles)',
      'Diseños personalizados según opción elegida',
      'Plantillas editables en Canva (reutilizables)',
      'Programación en horarios óptimos',
      'Community management profesional',
      'Reportes de métricas y recomendaciones',
      'Optimización continua basada en datos',
      'Buenas prácticas para fortalecer tu presencia',
      'Add-on de edición de video para Reels/TikTok/Shorts desde $35.000',
    ],
    addons: [
      {
        name: 'Edición de video Short (Reels/TikTok)',
        description: 'Hasta 60 segundos en formato 9:16, con ritmo dinámico.',
        price: 35000,
      },
    ],
    process: [
      {
        title: 'Auditoría y Estrategia',
        description:
          'Analizamos tu marca, competencia y audiencia para crear una estrategia única',
      },
      {
        title: 'Diseño y Creación',
        description: 'Diseñamos y producimos contenido visual impactante según el plan',
      },
      {
        title: 'Publicación y Gestión',
        description: 'Publicamos en horarios óptimos y gestionamos la comunidad diariamente',
      },
      {
        title: 'Análisis y Optimización',
        description: 'Medimos resultados y optimizamos la estrategia continuamente',
      },
    ],
    whyChooseUs: [
      'Solución integral: elige administración, diseño, o ambos',
      'Planes flexibles que se adaptan a tu presupuesto',
      'Ahorro del 15% al combinar administración + diseño',
      'Plantillas editables para máxima flexibilidad',
      'Especialistas en contenido y crecimiento orgánico',
      'Reportes claros de métricas y oportunidades',
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1611162616433-5f6f3be9b66c?w=500&h=500&fit=crop',
    ],
    cta: 'Activar Redes Sociales',
    whatsappMessage: "Hola Artestudio, me interesa potenciar mis redes sociales con sus planes de administración y diseño. ¿Podrían asesorarme?",
    faq: [
      {
        question: '¿Cuál es la diferencia entre los planes?',
        answer:
          'Administración: gestión y contenidos según plan. Diseños: pack de assets y plantillas editables. Combo: ambos con 15% de descuento.',
      },
      {
        question: '¿Puedo cambiar de plan después?',
        answer:
          'Claro, somos flexibles. Puedes cambiar o upgrade en cualquier momento. Solo avísanos.',
      },
      {
        question: '¿Cuánto tiempo tarda en verse resultados?',
        answer:
          'Se suelen ver señales iniciales en las primeras semanas y mejoras más consistentes con continuidad y ajustes.',
      },
      {
        question: '¿Qué redes incluye?',
        answer:
          'Incluimos Instagram, TikTok y Facebook. Si necesitas LinkedIn u otras, podemos ajustar según tus necesidades.',
      },
      {
        question: '¿Pueden editar mis videos para redes?',
        answer:
          'Sí. Ofrecemos un add-on de edición de video para Shorts/Reels/TikTok desde $35.000 por pieza.',
      },
      {
        question: '¿Incluye pauta publicitaria?',
        answer:
          'La pauta pagada no está incluida. Podemos sumar campañas como servicio adicional si lo necesitas.',
      },
    ],
    relatedServices: [2, 3, 4, 7],
  },
  {
    id: 2,
    slug: 'branding',
    title: 'Branding - Identidad Visual',
    subtitle: 'Crea tu ADN Visual Único',
    shortDescription:
      'Identidad visual estratégica y manual de marca. Diseños memorables con dirección creativa.',
    longDescription:
      'Tu marca es mucho más que un logo: es la promesa que haces a tus clientes. Creamos identidades visuales completas que transmiten tus valores, diferencian tu propuesta y generan conexiones duraderas.',
    icon: 'Palette',
    color: '#9333EA',
    price: 250000,
    oldPrice: 500000,
    supportImage: 'https://images.pexels.com/photos/4480519/pexels-photo-4480519.jpeg?w=800&q=80&auto=format&fit=crop',
    deliverables: [
      'Diseño de logo profesional (3 conceptos)',
      'Paleta de colores personalizada',
      'Tipografía corporativa',
      'Manual de marca (PDF completo)',
      'Aplicaciones de marca (tarjetas, sobre, etc)',
      'Guías de uso en digital y print',
      'Versiones del logo (color, blanco, negro)',
      '2 rondas de revisión',
    ],
    process: [
      {
        title: 'Descubrimiento',
        description:
          'Profundizamos en tu negocio, valores y visión mediante sesiones de consultoría',
      },
      {
        title: 'Concepto Creativo',
        description: 'Desarrollamos 3 conceptos visuales únicos basados en tu esencia',
      },
      {
        title: 'Refinamiento',
        description: 'Perfeccionamos el concepto elegido con ajustes y detalle',
      },
      {
        title: 'Manual de Marca',
        description: 'Documentamos todo en un manual profesional para tu equipo',
      },
    ],
    whyChooseUs: [
      'Estrategia detrás de cada línea y color',
      'Diseños atemporales y memorables',
      'Manual de marca completo incluido',
      'Rondas de ajuste claras para avanzar rápido',
      'Aplicaciones profesionales de la marca',
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    ],
    cta: 'Crear mi Identidad Visual',
    whatsappMessage: "Hola Artestudio, estoy buscando crear una identidad visual única para mi marca. Me interesa el servicio de Branding.",
    faq: [
      {
        question: '¿Incluye renovación de logo existente?',
        answer:
          'Sí, podemos modernizar un logo existente. Comenzaríamos desde la estructura actual.',
      },
      {
        question: '¿Cuánto tiempo toma?',
        answer:
          'El proyecto típicamente toma 2-3 semanas desde el primer descubrimiento hasta el manual final.',
      },
      {
        question: '¿Incluye piezas para redes o packaging?',
        answer:
          'Podemos sumar un pack de piezas o complementar con Diseño Gráfico/Redes Sociales con precio preferente.',
      },
      {
        question: '¿Tengo derechos de autor del logo?',
        answer:
          'Por supuesto, todos los archivos y derechos de autor son completamente tuyos. Puedes usarlos sin restricciones.',
      },
    ],
    relatedServices: [3, 5, 1],
  },
  {
    id: 3,
    slug: 'diseno-grafico',
    title: 'Diseño Gráfico',
    subtitle: 'Diseños que Impactan y Comunican',
    shortDescription:
      'Logos, papelería y activos digitales. Diseños claros, versátiles y listos para usar.',
    longDescription:
      'Desde logos contundentes hasta papelería completa, creamos diseños gráficos que transmiten profesionalismo y capturan la esencia de tu marca. Cada proyecto es una oportunidad de dejar una impresión duradera.',
    icon: 'Brush',
    color: '#EC4899',
    price: 100000,
    supportImage: 'https://images.pexels.com/photos/7484736/pexels-photo-7484736.jpeg?w=800&q=80&auto=format&fit=crop',
    deliverables: [
      'Logo o activo gráfico principal',
      'Versiones alternas (color, blanco, negro)',
      'Archivos en múltiples formatos (PNG, PDF, SVG)',
      'Propuestas iniciales de concepto',
      '2 rondas de revisión incluidas',
      'Entrega de archivos fuente editable',
    ],
    process: [
      {
        title: 'Entender tu Visión',
        description: 'Escuchamos tus necesidades y referencias para el diseño',
      },
      {
        title: 'Exploración Creativa',
        description: 'Creamos múltiples opciones y estilos para tu consideración',
      },
      {
        title: 'Perfeccionamiento',
        description: 'Refinamos el diseño elegido según tu feedback',
      },
      {
        title: 'Entrega Final',
        description: 'Preparamos archivos en todos los formatos necesarios',
      },
    ],
    whyChooseUs: [
      'Diseños originales y únicos',
      'Múltiples opciones para elegir',
      'Archivos en formatos profesionales',
      'Soporte técnico post-entrega',
      'Versatilidad de estilos (moderno, clásico, minimalista, etc)',
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    ],
    cta: 'Diseñar mis Gráficos',
    whatsappMessage: "Hola Artestudio, necesito ayuda con piezas gráficas y diseño profesional. ¿Me cuentan más sobre su servicio de Diseño Gráfico?",
    faq: [
      {
        question: '¿Puedo solicitar cambios después de recibir el diseño?',
        answer:
          'Incluimos 2 rondas de revisión para asegurar un resultado sólido.',
      },
      {
        question: '¿Necesito identidad completa?',
        answer:
          'Si aún no tienes branding, recomendamos partir por Identidad Visual para asegurar coherencia.',
      },
      {
        question: '¿En qué programas se entregan los archivos?',
        answer:
          'Los archivos se entregan en Illustrator editable, PNG, PDF y SVG. Compatible con cualquier programa.',
      },
    ],
    relatedServices: [2, 1, 5],
  },
  {
    id: 4,
    slug: 'edicion-video',
    title: 'Edición de Video',
    subtitle: 'Podcasts, educativos, clips y redes sociales',
    shortDescription:
      'Edición profesional para Reels, TikTok, YouTube y podcasts. Precios desde $35.000.',
    longDescription:
      'Editamos tu material para que se vea dinámico y profesional. Trabajamos con podcasts, videos educativos, videoclips y contenido para redes sociales. Optimizamos ritmo, audio, color y formato según la plataforma. Servicio enfocado en edición (no incluye grabación).',
    icon: 'Video',
    color: '#6366F1',
    price: 35000,
    supportImage: 'https://images.pexels.com/photos/4147815/pexels-photo-4147815.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Shorts (Reels/TikTok/Shorts)',
        price: 35000,
        features: [
          'Hasta 60 segundos (9:16)',
          'Corte y ritmo dinámico',
          'Corrección de color básica',
          'Limpieza y nivelación de audio',
          'Música libre de derechos (si aplica)',
          '1 ronda de revisión',
          'Entrega en 1080x1920',
        ],
      },
      {
        name: 'Social Pro',
        price: 69000,
        features: [
          'Hasta 90 segundos',
          'Subtítulos animados',
          'Títulos y motion graphics simples',
          'Corrección de color y audio mejorada',
          '1 formato adicional (1:1 o 16:9)',
          '2 rondas de revisión',
          'Entrega optimizada para plataforma',
        ],
      },
      {
        name: 'Podcast / Educativo',
        price: 160000,
        features: [
          'Hasta 30 minutos finales',
          'Edición multicámara (si aplica)',
          'Limpieza de audio y mezcla básica',
          'Intro/Outro + lower thirds',
          '1 versión larga + 2 cortes cortos',
          '2 rondas de revisión',
          'Entrega en 16:9',
        ],
      },
      {
        name: 'Pack mensual 4 Shorts',
        price: 125000,
        oldPrice: 140000,
        billing: 'mensual',
        features: [
          '4 videos mensuales (hasta 60s)',
          'Formato 9:16 optimizado',
          'Audio limpio + color básico',
          '1 ronda de revisión por pieza',
          'Entrega programada en el mes',
        ],
      },
      {
        name: 'Pack mensual 8 Shorts',
        price: 235000,
        oldPrice: 280000,
        billing: 'mensual',
        features: [
          '8 videos mensuales (hasta 60s)',
          'Formato 9:16 optimizado',
          'Subtítulos simples incluidos',
          '1 ronda de revisión por pieza',
          'Entrega programada en el mes',
        ],
      },
      {
        name: 'Pack mensual 12 Shorts',
        price: 330000,
        oldPrice: 420000,
        billing: 'mensual',
        features: [
          '12 videos mensuales (hasta 60s)',
          'Formato 9:16 optimizado',
          'Subtítulos + rótulos simples',
          '2 rondas de revisión por pieza',
          'Entrega programada en el mes',
        ],
      },
    ],
    deliverables: [
      'Edición desde material entregado',
      'Cortes, ritmo y continuidad',
      'Ajuste básico de color',
      'Mejora de audio y niveles',
      'Exportación optimizada por plataforma',
      'Rondas de revisión según plan',
    ],
    process: [
      {
        title: 'Briefing y Material',
        description: 'Recibimos tus archivos, referencias y objetivos del video',
      },
      {
        title: 'Edición y Ritmo',
        description: 'Montamos, limpiamos audio y ajustamos color',
      },
      {
        title: 'Revisión',
        description: 'Iteramos según el plan con feedback claro y rápido',
      },
      {
        title: 'Entrega Final',
        description: 'Exportamos en el formato ideal para cada plataforma',
      },
    ],
    whyChooseUs: [
      'Narrativa clara para retener audiencia',
      'Optimización por plataforma (9:16, 1:1, 16:9)',
      'Audio y ritmo cuidados',
      'Turnaround ágil',
      'Packs mensuales con descuento',
    ],
    portfolio: [],
    cta: 'Editar mi Video',
    whatsappMessage: "Hola Artestudio, necesito edición de video para mi contenido. ¿Me pueden orientar?",
    faq: [
      {
        question: '¿Incluye grabación?',
        answer:
          'No. El servicio es de edición sobre material entregado. Si necesitas grabación, lo cotizamos aparte.',
      },
      {
        question: '¿Qué debo enviar?',
        answer:
          'Archivos de video, audio, logos, referencias y el objetivo del contenido.',
      },
      {
        question: '¿Hay packs mensuales?',
        answer:
          'Sí, ofrecemos packs por volumen para Reels, TikTok y Shorts con precio preferente.',
      },
      {
        question: '¿Incluye subtítulos?',
        answer:
          'Sí, en el plan Social Pro y en videos educativos cuando se requiera.',
      },
    ],
    relatedServices: [1, 8, 5],
  },
  {
    id: 5,
    slug: 'diseno-web',
    title: 'Diseño Web',
    subtitle: 'Sitios Modernos, Rápidos y Efectivos (WordPress, Shopify, WooCommerce, Jumpseller)',
    shortDescription:
      'Sitios modernos, rápidos y optimizados para SEO. Convierte visitantes en clientes.',
    longDescription:
      'Tu sitio web es un canal clave para captar y convertir. Trabajamos con WordPress/WooCommerce para control total y con Shopify/Jumpseller para comercio ágil en la nube. Utilizamos plantillas premium como base de optimización y luego las ajustamos a medida según tu marca y objetivos. Si el proyecto requiere desarrollo custom o funcionalidades avanzadas, lo evaluamos y lo trabajamos como desarrollo a medida dentro del servicio de Apps y Plataformas. *Nota: el servicio de diseño web no incluye creación de logotipo ni identidad corporativa.*',
    icon: 'Brush',
    color: '#8B5CF6',
    price: 149990,
    oldPrice: 299990,
    supportImage: 'https://images.pexels.com/photos/16129700/pexels-photo-16129700.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    plans: [
      {
        name: 'Esencial',
        price: 149990,
        oldPrice: 299990,
        features: [
          'Hasta 5 páginas',
          '5 GB de almacenamiento SSD',
          'Transferencia Ilimitada',
          'Certificado SSL',
          'Dominio .cl o .com',
          'Diseño responsivo',
          'Formulario de contacto',
          'Enlaces redes sociales',
          'Botón WhatsApp integrado',
          'Optimización SEO Esencial',
          'Soporte 1 mes',
        ],
      },
      {
        name: 'Pro',
        price: 199990,
        oldPrice: 299990,
        features: [
          'Hasta 10 páginas',
          '7 GB de almacenamiento SSD',
          'Transferencia Ilimitada',
          'Certificado SSL',
          'Dominio .cl o .com',
          'Diseño responsivo',
          'Formulario de contacto',
          'Enlaces redes sociales',
          'Botón WhatsApp integrado',
          'Optimización SEO Pro',
          'Soporte 3 meses',
        ],
      },
      {
        name: 'Pro+',
        price: 249990,
        oldPrice: 349990,
        features: [
          'Hasta 15 páginas',
          '15 GB de almacenamiento SSD',
          'Transferencia Ilimitada',
          'Certificado SSL',
          'Dominio .cl o .com',
          'Diseño responsivo',
          'Formulario de contacto',
          'Enlaces redes sociales',
          'Botón WhatsApp integrado',
          'Funciones eCommerce incluidas',
          'Optimización SEO Pro+',
          'Soporte 6 meses',
        ],
      },
    ],
    deliverables: [
      'Diseño responsive profesional (mobile, tablet, desktop)',
      'Sitio web completamente funcional',
      'Optimización SEO en página',
      'Formularios y contacto integrado',
      'Integración con analítica (Google Analytics)',
      'Certificado SSL incluido',
      'Hosting y dominio por 1 año (WordPress/hosting tradicional)',
      'Configuración en Shopify/Jumpseller (suscripción por cuenta del cliente, si aplica)',
      'Capacitación de uso y mantenimiento',
      '2 rondas de revisión incluidas',
    ],
    addons: [
      {
        name: 'Diseño de logo básico',
        description: 'Logo profesional con 2 propuestas y 1 ronda de ajustes.',
        price: 60000,
        oldPrice: 120000,
        badge: '50% OFF',
      },
      {
        name: 'Mantenimiento web mensual',
        description: 'Actualizaciones, backups y soporte técnico prioritario.',
        price: 49990,
        billing: 'mensual',
        badge: 'Mensual',
      },
    ],
    process: [
      {
        title: 'Descubrimiento y Estrategia',
        description:
          'Definimos objetivos, audiencia y estructura del sitio mediante sesiones de consultoría',
      },
      {
        title: 'Diseño de Wireframes',
        description: 'Creamos la estructura visual del sitio antes de desarrollar',
      },
      {
        title: 'Diseño Visual',
        description: 'Diseñamos cada página con tu identidad visual y los mejores estándares',
      },
      {
        title: 'Desarrollo y Optimización',
        description:
          'Desarrollamos el sitio, lo optimizamos para velocidad y SEO, y hacemos pruebas completas',
      },
      {
        title: 'Lanzamiento y Capacitación',
        description:
          'Lanzamos el sitio en vivo y te capacitamos para mantenerlo actualizado',
      },
    ],
    whyChooseUs: [
      'Diseño moderno y profesional',
      'Optimizado para convertir visitantes',
      'Velocidad de carga máxima',
      'SEO friendly desde el inicio',
      'Responsive en todos los dispositivos',
      'Capacitación incluida',
      '50% descuento promocional 🎉',
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    ],
    cta: 'Crear mi Sitio Web',
    whatsappMessage: "Hola Artestudio, quiero un sitio web profesional que venda. Me interesa cotizar su servicio de Diseño Web.",
    faq: [
      {
        question: '¿Puedo actualizar el contenido yo mismo después?',
        answer:
          'Absolutamente, te capacitamos para que puedas actualizar contenido fácilmente.',
      },
      {
        question: '¿Qué pasa después del lanzamiento?',
        answer:
          'Ofrecemos planes de mantenimiento mensuales opcionales para mantener tu sitio actualizado.',
      },
      {
        question: '¿Incluye tienda online?',
        answer:
          'La tienda online está incluida en el plan Pro+ o se puede agregar como módulo adicional en otros planes.',
      },
      {
        question: '¿Debo pagar mensualidades a la plataforma?',
        answer: 'Si eliges Shopify o Jumpseller, sí (se paga directo a ellos). En WordPress no hay mensualidad de plataforma, solo hosting anual.',
      },
      {
        question: '¿Los planes aplican igual para Shopify/Jumpseller?',
        answer: 'Sí como referencia de alcance. En Shopify/Jumpseller el hosting/SSL ya está incluido en la suscripción, y ajustamos el plan a esa plataforma.',
      },
      {
        question: '¿Incluye el diseño de mi logo?',
        answer: 'No, el diseño web se enfoca en la estructura y funcionalidad. La identidad visual (logo, branding) es un servicio independiente.',
      },
    ],
    relatedServices: [2, 1, 7],
  },
    {
      id: 6,
      slug: 'desarrollo-y-plataformas',
      title: 'Desarrollo de Apps y Plataformas',
      subtitle: 'Sistemas, apps y plataformas a la medida',
      shortDescription:
        'Apps web, móviles y sistemas escalables a medida, desde MVP hasta productos completos.',
      longDescription:
        'Desarrollamos aplicaciones web, APIs y plataformas SaaS escalables con arquitectura sólida. Usamos automatización y herramientas inteligentes para acelerar sin perder calidad. Integramos pagos, analítica y servicios externos con buenas prácticas de seguridad y rendimiento.',
      icon: 'Code',
      color: '#2563EB',
      price: 1200000,
      supportImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop',
      deliverables: [
        'Arquitectura técnica y planificación',
        'Prototipo funcional (MVP)',
        'Desarrollo backend y frontend',
        'APIs y documentación',
        'Pruebas y QA',
        'Despliegue y monitoreo',
        'Soporte post-lanzamiento (por contrato)',
      ],
      process: [
        {
          title: 'Consultoría y Requerimientos',
          description: 'Definimos alcance, KPIs y roadmap técnico',
        },
        {
          title: 'Prototipado',
          description: 'Wireframes y prototipos interactivos',
        },
        {
          title: 'Desarrollo Iterativo',
          description: 'Sprints con entregas funcionales y testing continuo',
        },
        {
          title: 'Lanzamiento y Escalado',
          description: 'Despliegue, monitoreo y optimización post-lanzamiento',
        },
      ],
      whyChooseUs: [
        'Desarrollo ágil con automatización y buenas prácticas',
        'Buenas prácticas de seguridad y rendimiento',
        'Integración con herramientas y servicios externos',
        'Soporte y evolución del producto',
      ],
      portfolio: [],
      cta: 'Desarrollar mi Plataforma',
      whatsappMessage: "Hola Artestudio, tengo un proyecto de plataforma/app y busco desarrollo a medida. Me gustaría conversar sobre ello.",
      faq: [
        {
          question: '¿Qué tecnologías usan?',
          answer: 'Utilizamos tecnologías modernas (Node, Next.js, React, Python, etc.) según la necesidad del proyecto.',
        },
        {
          question: '¿Ofrecen mantenimiento?',
          answer: 'Sí, ofrecemos planes de soporte y mantenimiento a medida.',
        },
      ],
      relatedServices: [5, 7],
    },
    {
      id: 7,
      slug: 'presencia-digital-completa',
      title: 'Presencia Digital Completa',
      subtitle: 'Acompañamiento Integral para tu Negocio: Desde Identidad Hasta Lanzamiento',
      shortDescription:
        'Servicio integral para emprendedores y negocios: identidad visual, sitio web, redes sociales y estrategia de lanzamiento.',
      longDescription:
        'Servicio end-to-end para emprendedores y empresas que necesitan presencia digital profesional desde cero. Creamos tu identidad visual, construimos tu sitio web, configuramos y administramos redes sociales y definimos la estrategia de lanzamiento. Ideal para partir con todo alineado y ahorrar tiempo.',
      icon: 'Sparkles',
      color: '#10B981',
      price: 690000,
      supportImage: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?w=800&q=80&auto=format&fit=crop',
      deliverables: [
        'Consultoría de negocio y modelo de ingresos',
        'Identidad visual completa (logo, paleta, manual de marca)',
        'Sitio web profesional (5-10 páginas)',
        'Configuración y primer mes de administración de redes sociales',
        'Pack inicial de diseños para redes (plantillas editables)',
        'Estrategia de lanzamiento y contenido inicial',
        'Capacitación y soporte durante primer mes',
      ],
      process: [
        {
          title: 'Kickoff y Diagnóstico',
          description: 'Entendemos tu idea, mercado, audiencia y objetivos comerciales',
        },
        {
          title: 'Identidad y Presencia',
          description: 'Creamos tu identidad visual, sitio web y presencia en redes',
        },
        {
          title: 'Estrategia de Lanzamiento',
          description: 'Definimos canales, mensajería y plan de contenido inicial',
        },
        {
          title: 'Lanzamiento y Optimización',
          description: 'Activamos todos los canales y monitoreamos resultados iniciales',
        },
      ],
      whyChooseUs: [
        'Solución integral: no necesitas múltiples proveedores',
        'Ahorro vs contratar los servicios por separado',
        'Equipo multidisciplinario especializado (diseño, web, marketing)',
        'Partner estratégico que te acompaña en todas las etapas',
        'Enfoque en resultados medibles y crecimiento sostenible',
        'Capacitación incluida para autonomía',
      ],
      portfolio: [],
      cta: 'Activar Presencia Digital Completa',
      whatsappMessage: "Hola Artestudio, soy emprendedor y necesito el pack de Presencia Digital Completa para lanzar mi negocio. ¿Cómo empezamos?",
      faq: [
        {
          question: '¿A quién está dirigido?',
          answer: 'Emprendedores, freelancers, startups y pequeños negocios en etapa inicial o crecimiento.',
        },
        {
          question: '¿Qué sucede después del lanzamiento?',
          answer: 'Ofrecemos planes de administración y mantenimiento mensuales continuos si lo requieres.',
        },
        {
          question: '¿Incluye marketing o publicidad pagada?',
          answer: 'Incluimos estrategia y primer mes de administración orgánica. Marketing pagado es un servicio adicional opcional.',
        },
        {
          question: '¿Puedo partir con un servicio y sumar el pack después?',
          answer: 'Sí, podemos iniciar con branding o web y luego completar el paquete cuando lo necesites.',
        },
      ],
      relatedServices: [1, 2, 5],
    },
  {
    id: 8,
    slug: 'edicion-audio',
    title: 'Edición & Mezcla de Audio',
    subtitle: 'Audio Profesional para Cualquier Proyecto',
    shortDescription:
      'Sonido profesional para podcasts, videos o música. Desde $99.000 por episodio.',
    longDescription:
      'El audio es fundamental para crear contenido profesional. Desde podcasts hasta videos, ofrecemos edición y mezcla de audio de calidad estudio. Tu contenido sonará tan bueno como se ve.',
    icon: 'Music',
    color: '#06B6D4',
    price: 99000,
    supportImage: 'https://images.pexels.com/photos/34228406/pexels-photo-34228406.jpeg?w=800&q=80&auto=format&fit=crop',
    deliverables: [
      'Edición profesional de audio',
      'Eliminar ruido de fondo',
      'Nivelación de volumen y dinámica',
      'Corrección tonal y balance general',
      'Agregar efectos de transición',
      'Mezcla equilibrada de pistas',
      'Exportación en múltiples formatos',
      '2 rondas de revisión',
    ],
    process: [
      {
        title: 'Recepción de Archivos',
        description: 'Recibimos tu audio en cualquier formato profesional',
      },
      {
        title: 'Limpieza de Audio',
        description: 'Eliminamos ruido de fondo, clics y otros artefactos',
      },
      {
        title: 'Mezcla y Edición',
        description:
          'Equilibramos niveles, corregimos dinámicas y aplicamos efectos profesionales',
      },
      {
        title: 'Exportación Final',
        description:
          'Entregamos archivos de audio profesionales en los formatos que necesites',
      },
    ],
    whyChooseUs: [
      'Equipo profesional de audio',
      'Calidad de estudio en cada proyecto',
      'Rápido turnaround',
      'Múltiples formatos de salida',
      'Rondas de revisión claras',
    ],
    portfolio: [],
    cta: 'Editar mi Audio',
    whatsappMessage: "Hola Artestudio, tengo grabaciones que necesitan edición y mezcla profesional. Me interesa su servicio de Audio.",
    faq: [
      {
        question: '¿Cuánto tiempo tarda la edición?',
        answer:
          'Depende del largo del audio. Típicamente 3-5 días para proyectos de hasta 30 minutos.',
      },
      {
        question: '¿El precio es por episodio o por proyecto?',
        answer:
          'Es un precio base por episodio de hasta 30 minutos. Si el proyecto es más largo o complejo, ajustamos la cotización.',
      },
      {
        question: '¿Puedo hacer cambios después de entregado?',
        answer:
          'Incluimos 2 rondas de revisión. Ajustes adicionales se cotizan según el alcance.',
      },
    ],
    relatedServices: [9, 1],
  },
  {
    id: 9,
    slug: 'mastering',
    title: 'Mastering de Audio',
    subtitle: 'El Toque Final Profesional',
    shortDescription:
      'El toque final profesional para audio. Desde $45.000 por canción.',
    longDescription:
      'El mastering es el último paso crítico en la producción de audio. Nos aseguramos de que tu música suene excepcional en todos los dispositivos y plataformas. Es la diferencia entre un audio bueno y uno profesional.',
    icon: 'AdjustmentsHorizontal',
    color: '#10B981',
    price: 45000,
    supportImage: 'https://images.pexels.com/photos/8198631/pexels-photo-8198631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    deliverables: [
      'Análisis espectral profesional',
      'Ecualización detallada',
      'Compresión multibanda',
      'Limitación de picos',
      'Maximización de loudness',
      'Archivos master de referencia',
      'Archivos para plataformas (Spotify, Apple Music, etc)',
      'Metadatos ISRC preparados',
    ],
    process: [
      {
        title: 'Recepción de Mezcla',
        description: 'Recibes tu mezcla completa en formato profesional sin compresión',
      },
      {
        title: 'Análisis Detallado',
        description:
          'Analizamos espectral y dinámicamente el audio para identificar mejoras',
      },
      {
        title: 'Procesamiento Profesional',
        description:
          'Aplicamos técnicas de mastering con equipo de referencia profesional',
      },
      {
        title: 'Distribución Multi-formato',
        description: 'Preparamos archivos para cada plataforma de distribución',
      },
    ],
    whyChooseUs: [
      'Ingenieros de mastering certificados',
      'Sala de monitoreo calibrada profesionalmente',
      'Referencia en múltiples sistemas',
      'Conocimiento de estándares de plataforma',
      'Calidad a nivel sello discográfico',
    ],
    portfolio: [],
    cta: 'Masterizar mi Audio',
    whatsappMessage: "Hola Artestudio, busco el toque final profesional para mis tracks. Me interesa el servicio de Mastering.",
    faq: [
      {
        question: '¿Necesito una mezcla perfecta para masterizar?',
        answer:
          'No, el mastering puede corregir muchos problemas de mezcla, pero una mezcla sólida siempre ayuda.',
      },
      {
        question: '¿Cuántos cambios incluye?',
        answer:
          'Incluye dos rondas de revisión. Cambios adicionales tienen costo extra.',
      },
      {
        question: '¿Para cuántas canciones es?',
        answer: 'El precio es por canción. Ofrecemos descuentos para álbumes completos.',
      },
    ],
    relatedServices: [8, 1],
  },
]

/**
 * Obtiene un servicio por su slug
 */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAILS.find((s) => s.slug === slug)
}

/**
 * Obtiene los servicios relacionados completos
 */
export function getRelatedServices(service: ServiceDetail): ServiceDetail[] {
  if (!service.relatedServices) return []
  return SERVICES_DETAILS.filter((s) => service.relatedServices?.includes(s.id))
}
