/**
 * Información detallada de cada servicio
 */

export interface ServiceDetail {
  id: number
  slug: string
  family:
    | 'Redes Sociales'
    | 'Diseño & Branding'
    | 'Producción Audiovisual'
    | 'Web & Desarrollo'
    | 'Packs Integrales'
  billingModel: 'unitario' | 'mensual' | 'proyecto' | 'desde'
  title: string
  subtitle: string
  shortDescription: string
  longDescription: string
  icon: string
  color: string
  price: number
  oldPrice?: number
  pricePrefix?: 'desde' | 'cotizar'
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
    family: 'Redes Sociales',
    billingModel: 'mensual',
    title: 'Gestión de Redes Sociales',
    subtitle: 'Planes combo claros para crecer con contenido, estrategia y comunidad',
    shortDescription:
      'Estructura simplificada en 3 planes combo: Esencial, Pro y Full. También puedes contratar solo administración o solo diseño como opción secundaria.',
    longDescription:
      'Reestructuramos el servicio para facilitar la decisión: tres planes combo con foco en resultados y ahorro real. Cada plan integra gestión, contenido y community management. Si solo necesitas una parte del servicio, puedes optar por administración o diseño por separado en modalidad mensual.',
    icon: 'BrandInstagram',
    color: '#E1306C',
    price: 127500,
    supportImage: 'https://images.pexels.com/photos/2055500/pexels-photo-2055500.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Esencial - Combo',
        price: 127500,
        billing: 'mensual',
        features: [
          '8 posts mensuales estáticos',
          '3 historias',
          '1 reel mensual',
          'Community management básico',
          'Programación de contenido y reporte mensual',
          'Estrategia inicial de contenido',
          '2 rondas de ajustes',
        ],
      },
      {
        name: 'Pro - Combo',
        price: 289000,
        oldPrice: 339980,
        billing: 'mensual',
        recommended: true,
        features: [
          '12 posts + 6 historias + 2 reels',
          'Community management profesional',
          'Copy estratégico y calendario quincenal',
          'Reporte quincenal con optimizaciones',
          'Pack de diseño completo integrado',
          'Ahorro frente a contratación por separado',
        ],
      },
      {
        name: 'Full - Combo',
        price: 485000,
        oldPrice: 569980,
        billing: 'mensual',
        features: [
          '20 posts + historias frecuentes + 4 reels',
          'Community management intensivo',
          'Reporte semanal y análisis avanzado',
          'Coordinación de contenido para campañas',
          'Acompañamiento estratégico mensual',
          'Mesa de crecimiento y priorización',
          'Gestión de ads orgánicos de apoyo',
          'Community management intensivo',
        ],
      },
    ],
    deliverables: [
      'Gestión mensual de redes según plan',
      'Planificación y calendarización de contenidos',
      'Community management y atención de comunidad',
      'Diseños y piezas según combo contratado',
      'Reportes de rendimiento y recomendaciones',
      'Optimización continua de formatos y frecuencia',
    ],
    addons: [
      {
        name: 'Esencial - Solo Administración',
        description: 'Ideal si ya tienes diseñador interno y solo necesitas gestión.',
        price: 79990,
        billing: 'mensual',
        badge: 'Solo gestión',
      },
      {
        name: 'Pro - Solo Administración',
        description: 'Gestión estratégica con mayor frecuencia y análisis.',
        price: 199990,
        billing: 'mensual',
        badge: 'Solo gestión',
      },
      {
        name: 'Full - Solo Administración',
        description: 'Gestión intensiva para marcas con alto volumen.',
        price: 349990,
        billing: 'mensual',
        badge: 'Solo gestión',
      },
      {
        name: 'Esencial - Solo Diseños',
        description: 'Pack de piezas para redes sin gestión de comunidad.',
        price: 69990,
        billing: 'mensual',
        badge: 'Solo diseño',
      },
      {
        name: 'Pro - Solo Diseños',
        description: 'Mayor volumen y variaciones por campaña.',
        price: 139990,
        billing: 'mensual',
        badge: 'Solo diseño',
      },
      {
        name: 'Full - Solo Diseños',
        description: 'Diseño intensivo mensual para campañas continuas.',
        price: 219990,
        billing: 'mensual',
        badge: 'Solo diseño',
      },
      {
        name: 'Diseños Unitarios para Redes',
        description: 'Post estático, animado o reel gráfico por pieza.',
        price: 29000,
        badge: 'Entrada',
      },
    ],
    process: [
      {
        title: 'Diagnóstico de Marca',
        description:
          'Analizamos audiencia, canal y competencia para definir enfoque creativo',
      },
      {
        title: 'Producción de Contenidos',
        description: 'Diseñamos piezas y reels según formato, objetivo y calendario',
      },
      {
        title: 'Publicación y Gestión',
        description: 'Publicamos en horarios óptimos y respondemos interacciones',
      },
      {
        title: 'Optimización',
        description: 'Medimos rendimiento y ajustamos para mejorar alcance y conversión',
      },
    ],
    whyChooseUs: [
      '3 planes principales para decidir rápido',
      'Foco en combo: gestión + diseño con ahorro',
      'Estrategia, operación y creatividad en una sola mesa',
      'Escalable por etapas según evolución del negocio',
      'Reportes accionables, no solo métricas sueltas',
      'Opciones separadas disponibles si solo necesitas una parte',
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1611162616433-5f6f3be9b66c?w=500&h=500&fit=crop',
    ],
    cta: 'Activar Plan de Redes',
    whatsappMessage: "Hola Artestudio, quiero contratar un plan combo de redes sociales. ¿Me ayudan a elegir entre Esencial, Pro y Full?",
    faq: [
      {
        question: '¿Cuál plan recomiendan para empezar?',
        answer:
          'En la mayoría de pymes recomendamos Pro porque equilibra volumen, estrategia y frecuencia.',
      },
      {
        question: '¿Puedo contratar solo administración o solo diseño?',
        answer:
          'Sí. Está disponible como opción secundaria en complementos mensuales.',
      },
      {
        question: '¿Qué redes cubren?',
        answer:
          'Trabajamos principalmente Instagram, TikTok y Facebook. También podemos extender a LinkedIn.',
      },
      {
        question: '¿Incluye pauta publicitaria?',
        answer:
          'No incluye inversión de pauta. Si quieres, agregamos gestión de Meta Ads como complemento mensual.',
      },
      {
        question: '¿Ofrecen diseño unitario para redes?',
        answer:
          'Sí. Tenemos una línea dedicada de Diseños Unitarios para Redes con página propia.',
      },
    ],
    relatedServices: [10, 3, 4, 7],
  },
  {
    id: 2,
    slug: 'branding',
    family: 'Diseño & Branding',
    billingModel: 'proyecto',
    title: 'Branding e Identidad Visual',
    subtitle: 'Dos niveles claros: Esencial y Completa',
    shortDescription:
      'Construimos tu identidad visual con estructura profesional. Elige nivel Esencial o Completa según etapa de negocio.',
    longDescription:
      'Tu marca debe ser reconocible, consistente y escalable. Por eso estructuramos branding en dos niveles: Esencial para emprendedores que parten con foco, y Completa para marcas que necesitan una identidad más robusta y aplicaciones avanzadas.',
    icon: 'Palette',
    color: '#9333EA',
    price: 250000,
    supportImage: 'https://images.pexels.com/photos/4480519/pexels-photo-4480519.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Esencial',
        price: 250000,
        recommended: true,
        features: [
          'Logo profesional con 2 rutas de diseño',
          'Paleta de color y tipografías base',
          'Mini manual de marca',
          'Versiones principales del logo',
          '2 rondas de revisión',
        ],
      },
      {
        name: 'Completa',
        price: 490000,
        features: [
          'Sistema visual completo y versátil',
          'Logo principal + secundarios y símbolos',
          'Manual de marca extendido (digital + print)',
          'Aplicaciones de marca (papelería y redes)',
          'Lineamientos de voz y tono visual',
          '3 rondas de revisión',
        ],
      },
    ],
    deliverables: [
      'Propuesta de identidad visual según nivel contratado',
      'Sistema de logo y versiones finales',
      'Paleta y tipografía corporativa',
      'Manual de uso de marca',
      'Archivos finales en formatos editables y de uso',
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
      'Modelo de 2 niveles, sin confusión de compra',
      'Estrategia visual aplicada al negocio',
      'Identidades memorables y funcionales',
      'Documentación clara para equipos y proveedores',
      'Escalabilidad para campañas digitales y web',
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
        question: '¿Cuál es la diferencia entre Esencial y Completa?',
        answer:
          'Esencial entrega la base sólida de identidad; Completa incorpora sistema visual más amplio y aplicaciones avanzadas.',
      },
      {
        question: '¿Tengo derechos de autor del logo?',
        answer:
          'Por supuesto, todos los archivos y derechos de autor son completamente tuyos. Puedes usarlos sin restricciones.',
      },
    ],
    relatedServices: [3, 5, 1, 10],
  },
  {
    id: 3,
    slug: 'diseno-grafico',
    family: 'Diseño & Branding',
    billingModel: 'unitario',
    title: 'Diseño Gráfico Editorial y Corporativo',
    subtitle: 'Presentaciones, impresos, catálogos y material de marca',
    shortDescription:
      'Servicio enfocado en piezas editoriales, impresas y corporativas. No incluye posts/reels para redes sociales.',
    longDescription:
      'Este servicio cubre diseño gráfico fuera de redes sociales: presentaciones, catálogos, flyers, papelería y material comercial. Si necesitas contenido para Instagram, TikTok o Facebook (estático, animado o reels), el servicio correcto es Diseños Unitarios para Redes.',
    icon: 'Brush',
    color: '#EC4899',
    price: 55000,
    supportImage: 'https://images.pexels.com/photos/7484736/pexels-photo-7484736.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Flyer / Afiche (impreso)',
        price: 55000,
        features: [
          '1 pieza para impresión',
          'Sangrado y márgenes seguros',
          'Formato listo para imprenta (PDF/X)',
          '2 rondas de revisión',
          'Entrega lista para imprimir',
        ],
      },
      {
        name: 'Presentación / Pitch Deck',
        price: 90000,
        features: [
          'Hasta 10 láminas',
          'Diseño editorial y coherencia visual',
          'Versión para pantalla + versión para impresión',
          '1 ronda de revisión',
          'Entrega en PDF + editable',
        ],
      },
      {
        name: 'Menú o Carta Comercial',
        price: 90000,
        features: [
          'Hasta 4 páginas o secciones',
          'Diseño editorial legible y visualmente coherente',
          'Versión para impresión y digital',
          '1 ronda de revisión',
        ],
      },
      {
        name: 'Papelería Corporativa',
        price: 160000,
        features: [
          'Tarjeta de presentación + hoja membretada + firma',
          'Aplicación coherente con tu identidad',
          'Archivos editables y listos para uso',
          '2 rondas de revisión',
        ],
      },
      {
        name: 'Catálogo / Brochure',
        price: 180000,
        features: [
          'Hasta 8 páginas',
          'Diseño de estructura editorial y jerarquía visual',
          'Preparación para digital e impresión',
          '2 rondas de revisión',
        ],
      },
      {
        name: 'Pack Corporativo',
        price: 290000,
        recommended: true,
        features: [
          'Flyer/afiche + presentación + papelería corporativa',
          'Línea visual integrada para ventas y presentación',
          'Archivos editables y finales',
          '2 rondas de revisión',
        ],
      },
    ],
    addons: [
      {
        name: 'Preparación para imprenta',
        description: 'Sangrado, perfil de color y archivos finales.',
        price: 65000,
      },
      {
        name: 'Adaptación a formato extra',
        description: 'Reutilizamos la pieza en otro formato o tamaño.',
        price: 25000,
      },
      {
        name: 'Ilustración personalizada',
        description: 'Elemento gráfico a medida para pieza editorial o corporativa.',
        price: 75000,
      },
    ],
    deliverables: [
      'Piezas editoriales y corporativas según plan',
      'Archivos optimizados para impresión y uso digital',
      'Archivos editables cuando aplica',
      'Rondas de revisión definidas',
      'Entrega lista para presentar, publicar o imprimir',
    ],
    process: [
      {
        title: 'Brief Comercial',
        description: 'Definimos objetivo de comunicación y formato final',
      },
      {
        title: 'Dirección Visual',
        description: 'Diseñamos estructura, jerarquía y estilo de pieza',
      },
      {
        title: 'Ajustes',
        description: 'Refinamos el diseño elegido según tu feedback',
      },
      {
        title: 'Entrega Final',
        description: 'Preparamos archivos finales editables e impresión/digital',
      },
    ],
    whyChooseUs: [
      'Especialización en piezas editoriales y corporativas',
      'Criterio de diseño orientado a ventas y claridad',
      'Preparación técnica para imprenta y digital',
      'Archivos profesionales listos para equipo interno o proveedores',
      'No se solapa con servicio de redes sociales',
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
          'Incluimos rondas de revisión según el plan para asegurar un resultado sólido.',
      },
      {
        question: '¿Esto incluye posts o reels para Instagram/TikTok?',
        answer:
          'No. Para contenido de redes sociales debes usar Diseños Unitarios para Redes.',
      },
      {
        question: '¿En qué programas se entregan los archivos?',
        answer:
          'Los archivos se entregan en Illustrator editable, PNG, PDF y SVG. Compatible con cualquier programa.',
      },
      {
        question: '¿Puedo combinar piezas y packs?',
        answer:
          'Sí. Puedes combinar presentaciones, catálogos y piezas impresas según tu necesidad.',
      },
    ],
    relatedServices: [2, 10, 1, 5],
  },
  {
    id: 4,
    slug: 'edicion-video',
    family: 'Producción Audiovisual',
    billingModel: 'unitario',
    title: 'Edición de Video',
    subtitle: 'Podcasts, educativos, clips y redes sociales',
    shortDescription:
      'Edición profesional para Reels, TikTok, YouTube y podcasts. Precios desde $35.000.',
    longDescription:
      'Editamos tu material para que se vea dinámico y profesional. Trabajamos con podcasts, videos educativos, videoclips y contenido para redes sociales. Optimizamos ritmo, audio, color y formato según la plataforma. Servicio enfocado en edición (no incluye grabación).',
    icon: 'Video',
    color: '#6366F1',
    price: 35000,
    supportImage: 'https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
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
    family: 'Web & Desarrollo',
    billingModel: 'proyecto',
    title: 'Diseño Web y eCommerce',
    subtitle: 'Dos rutas claras: Web Express o Web Growth con foco en conversión',
    shortDescription:
      'Empieza con Web Express desde $249.990 o escala a Web Growth desde $490.000. Incluye mantención y administración mensual opcional.',
    longDescription:
      'No todas las webs requieren el mismo nivel de inversión. Por eso estructuramos este servicio en dos rutas: Web Express Autoadministrable para salir rápido con una base profesional, y Web Growth para negocios que necesitan convertir mejor, medir resultados y optimizar de forma continua. Trabajamos WordPress, WooCommerce, Shopify y Jumpseller según tu modelo de negocio, con continuidad técnica y de contenidos cuando la necesites.',
    icon: 'Brush',
    color: '#8B5CF6',
    price: 249990,
    supportImage: 'https://images.pexels.com/photos/16129700/pexels-photo-16129700.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    plans: [
      {
        name: 'Web Express Autoadministrable',
        price: 249990,
        features: [
          'Landing o micrositio de entrada (hasta 1 sección larga o 2 páginas)',
          'Diseño responsive + estructura de copy comercial',
          'Formulario de contacto + CTA WhatsApp',
          'SEO técnico base y rendimiento inicial',
          'Capacitación para autoadministración',
          'Soporte 30 días',
        ],
      },
      {
        name: 'Web Growth de Conversión',
        price: 490000,
        recommended: true,
        features: [
          'Sitio corporativo hasta 10 páginas',
          'Arquitectura de contenidos orientada a captación y confianza',
          'Integración con analítica y eventos de conversión',
          'SEO on-page intermedio + estructura para escalar',
          'Capacitación completa del equipo',
          'Soporte 90 días',
        ],
      },
      {
        name: 'eCommerce Performance',
        price: 790000,
        features: [
          'Tienda online hasta 60 productos cargados',
          'Flujo de compra optimizado para conversión',
          'Integración de pagos y despacho',
          'Configuración de pixel, analítica y eventos de compra',
          'Automatizaciones base de carrito y correo',
          'Soporte 120 días',
        ],
      },
    ],
    deliverables: [
      'Documento de alcance y estructura de contenidos',
      'Diseño responsive profesional (mobile, tablet y desktop)',
      'Sitio o tienda 100% funcional y listo para publicar',
      'Integraciones de contacto y conversión según plan',
      'Analítica y eventos clave configurados según alcance',
      'Capacitación de uso y operación para tu equipo',
      '2 rondas de revisión incluidas',
    ],
    addons: [
      {
        name: 'Mantención Técnica Esencial',
        description: 'Actualizaciones, backups y monitoreo técnico mensual.',
        price: 59990,
        billing: 'mensual',
        badge: 'Mensual',
      },
      {
        name: 'Mantención Técnica Pro',
        description: 'Mantenimiento técnico + soporte prioritario + hardening básico.',
        price: 99990,
        billing: 'mensual',
        badge: 'Mensual',
      },
      {
        name: 'Administración de Contenidos',
        description: 'Carga de contenido, ajustes visuales y publicación semanal.',
        price: 89990,
        billing: 'mensual',
        badge: 'Mensual',
      },
      {
        name: 'Growth Web (SEO + CRO)',
        description: 'Mejoras continuas de conversión y posicionamiento mensual.',
        price: 169990,
        billing: 'mensual',
        badge: 'Mensual',
      },
    ],
    process: [
      {
        title: 'Descubrimiento y Estrategia',
        description:
          'Definimos objetivos, audiencia y arquitectura de información',
      },
      {
        title: 'UX y Diseño',
        description: 'Diseñamos estructura, jerarquía visual y recorrido de conversión',
      },
      {
        title: 'Implementación y Optimización',
        description:
          'Desarrollamos el sitio, lo optimizamos para velocidad y SEO, y hacemos pruebas completas',
      },
      {
        title: 'Lanzamiento',
        description: 'Publicamos, medimos y te dejamos listo para operar o delegar la administración',
      },
    ],
    whyChooseUs: [
      'Dos rutas claras para decidir sin fricción (Express vs Growth)',
      'Enfoque en conversión y negocio, no solo estética',
      'Arquitectura web pensada para escalar por etapas',
      'Compatibilidad con WordPress, Shopify, WooCommerce y Jumpseller',
      'Continuidad mensual opcional con mantención y administración',
      'Capacitación y autonomía para no depender de terceros',
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    ],
    cta: 'Cotizar mi Web',
    whatsappMessage: "Hola Artestudio, quiero cotizar una web y también me interesa conocer sus planes de mantención/administración mensual.",
    faq: [
      {
        question: '¿Puedo actualizar el contenido yo mismo después?',
        answer:
          'Absolutamente, te capacitamos para que puedas actualizar contenido fácilmente.',
      },
      {
        question: '¿Cuál es la diferencia entre Web Express y Web Growth?',
        answer:
          'Web Express es para salir rápido con una base profesional autoadministrable. Web Growth incorpora estructura avanzada de conversión, analítica y escalabilidad para marcas en crecimiento.',
      },
      {
        question: '¿Puedo partir con Web Express y luego escalar?',
        answer:
          'Sí. Es una ruta recomendada para reducir riesgo: lanzas rápido, validas y luego evolucionas a una versión Growth.',
      },
      {
        question: '¿Qué pasa después del lanzamiento?',
        answer:
          'Puedes operar por tu cuenta o contratar mantención técnica y/o administración web mensual.',
      },
      {
        question: '¿Incluye tienda online?',
        answer:
          'Sí, el plan eCommerce Performance contempla implementación de tienda online.',
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
    relatedServices: [11, 2, 1, 7],
  },
    {
      id: 6,
      slug: 'desarrollo-y-plataformas',
      family: 'Web & Desarrollo',
      billingModel: 'desde',
      title: 'Desarrollo de Apps y Plataformas',
      subtitle: 'Sistemas, apps y automatizaciones a la medida',
      shortDescription:
        'Desarrollo a medida desde $490.000 para MVPs acotados. Escalamos según alcance e integraciones.',
      longDescription:
        'Creamos productos digitales listos para operar: paneles internos, marketplaces, SaaS y automatizaciones de negocio. Partimos con un MVP acotado desde $490.000 y evolucionamos por etapas para reducir riesgo y validar más rápido.',
      icon: 'Code',
      color: '#2563EB',
      price: 490000,
      pricePrefix: 'desde',
      supportImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop',
      plans: [
        {
          name: 'Starter',
          price: 490000,
          features: [
            'MVP funcional de plataforma (módulo clave de negocio)',
            'Formularios avanzados e integraciones simples',
            'SEO técnico y estructura de conversión',
            'QA y despliegue inicial',
            'Soporte de estabilización',
          ],
        },
        {
          name: 'Plataforma',
          price: 1200000,
          recommended: true,
          features: [
            'App web, portal o eCommerce custom',
            'Arquitectura backend + frontend',
            'Login, usuarios, panel de administración y APIs',
            'Integraciones externas y automatizaciones iniciales',
            'Soporte de evolución post-lanzamiento',
          ],
        },
        {
          name: 'SaaS / Enterprise',
          price: 3500000,
          features: [
            'Plataforma SaaS escalable o arquitectura enterprise',
            'Módulos avanzados y flujos complejos',
            'CI/CD, monitoreo y documentación técnica',
            'Integraciones de alto nivel y dashboards',
            'Roadmap técnico de crecimiento',
          ],
        },
      ],
      addons: [
        {
          name: 'Soporte Básico',
          description: 'Bugs, actualizaciones, backup mensual y soporte por ticket (48h).',
          price: 149990,
          billing: 'mensual',
          badge: 'Mensual',
        },
        {
          name: 'Soporte Pro',
          description: 'Incluye básico + nuevas funciones menores y monitoreo de uptime (24h).',
          price: 299990,
          billing: 'mensual',
          badge: 'Mensual',
        },
        {
          name: 'Soporte Dedicado',
          description: '8-10 horas mensuales asignadas y gestión técnica continua.',
          price: 590000,
          billing: 'mensual',
          badge: 'Mensual',
        },
      ],
      deliverables: [
        'Arquitectura técnica y planificación por etapas',
        'MVP funcional o plataforma completa según plan',
        'Desarrollo backend, frontend y APIs',
        'Documentación de flujos y despliegue',
        'Pruebas y QA',
        'Despliegue y monitoreo',
        'Soporte post-lanzamiento',
      ],
      process: [
        {
          title: 'Discovery y Alcance',
          description: 'Definimos objetivos, funcionalidades críticas y roadmap',
        },
        {
          title: 'Diseño Funcional',
          description: 'Modelamos flujos de usuario y arquitectura del sistema',
        },
        {
          title: 'Construcción Iterativa',
          description: 'Sprints con entregas funcionales, QA y feedback continuo',
        },
        {
          title: 'Lanzamiento y Escalado',
          description: 'Despliegue, estabilización y optimización basada en datos',
        },
      ],
      whyChooseUs: [
        'Partida accesible con MVP desde $490.000',
        'Desarrollo por etapas para reducir riesgo',
        'Tramos orientativos claros por complejidad',
        'Buenas prácticas de seguridad y rendimiento',
        'Integración con herramientas y servicios externos',
        'Soporte técnico y evolutivo mensual',
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
        question: '¿Cómo se define el precio?',
        answer: 'Definimos valor por alcance y complejidad. Puedes comenzar desde $490.000 con un MVP acotado.',
      },
      {
        question: '¿Ofrecen mantenimiento?',
        answer: 'Sí. Contamos con soporte Básico, Pro y Dedicado para continuidad técnica mensual.',
      },
      ],
      relatedServices: [5, 11, 7],
    },
    {
      id: 7,
      slug: 'presencia-digital-completa',
      family: 'Packs Integrales',
      billingModel: 'proyecto',
      title: 'Presencia Digital Completa',
      subtitle: 'Acompañamiento Integral para tu Negocio: Desde Identidad Hasta Lanzamiento',
      shortDescription:
        'Servicio integral para emprendedores y negocios: identidad visual, sitio web, redes sociales y estrategia de lanzamiento.',
      longDescription:
        'Servicio end-to-end para emprendedores y empresas que necesitan presencia digital profesional desde cero. Creamos tu identidad visual, construimos tu sitio web, configuramos y administramos redes sociales y definimos la estrategia de lanzamiento. El precio es desde y el pack se ajusta según el alcance.',
      icon: 'Sparkles',
      color: '#10B981',
      price: 890000,
      supportImage: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?w=800&q=80&auto=format&fit=crop',
      plans: [
        {
          name: 'Pack Inicio (desde)',
          price: 890000,
          features: [
            'Identidad visual base (logo, paleta, tipografías)',
            'Sitio web hasta 5 páginas',
            'Configuración de redes sociales',
            '1 mes de administración esencial',
            'Pack inicial de piezas para redes',
            'Asesoría de lanzamiento',
          ],
        },
        {
          name: 'Pack Lanzamiento',
          price: 1490000,
          recommended: true,
          features: [
            'Identidad visual completa + manual breve',
            'Sitio web hasta 10 páginas',
            'Configuración de redes + lineamientos de contenido',
            '2 meses de administración',
            'Pack de contenido extendido',
            'Calendario de lanzamiento',
          ],
        },
        {
          name: 'Pack Growth',
          price: 2490000,
          features: [
            'Identidad visual completa + aplicaciones',
            'Sitio web hasta 15 páginas',
            '3 meses de administración y optimización',
            'Contenido premium y planificación avanzada',
            'Soporte estratégico mensual',
            'Prioridad en entregas',
          ],
        },
      ],
      addons: [
        {
          name: 'Mes adicional de redes sociales',
          description: 'Extiende la administración mensual.',
          price: 199990,
          billing: 'mensual',
          badge: 'Mensual',
        },
        {
          name: 'Sesión estratégica extra',
          description: 'Sesión 1:1 para planificación y objetivos.',
          price: 75000,
        },
      ],
      deliverables: [
        'Consultoría de negocio y modelo de ingresos',
        'Identidad visual completa (logo, paleta, manual de marca)',
        'Sitio web profesional (según pack)',
        'Configuración y administración de redes sociales',
        'Pack de diseños para redes (plantillas editables)',
        'Estrategia de lanzamiento y contenido inicial',
        'Capacitación y soporte según pack',
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
      relatedServices: [1, 2, 5, 11],
    },
  {
    id: 8,
    slug: 'edicion-audio',
    family: 'Producción Audiovisual',
    billingModel: 'unitario',
    title: 'Edición & Mezcla de Audio',
    subtitle: 'Audio Profesional para Cualquier Proyecto',
    shortDescription:
      'Sonido profesional para podcasts, videos o música. Desde $99.000 por episodio, con Pack Audio Completo desde $135.000.',
    longDescription:
      'El audio es fundamental para crear contenido profesional. Desde podcasts hasta videos, ofrecemos edición y mezcla de audio de calidad estudio. Tu contenido sonará tan bueno como se ve.',
    icon: 'Music',
    color: '#06B6D4',
    price: 99000,
    supportImage: 'https://images.pexels.com/photos/34228406/pexels-photo-34228406.jpeg?w=800&q=80&auto=format&fit=crop',
    addons: [
      {
        name: 'Pack Audio Completo (Edición + Mastering)',
        description: 'Flujo completo para dejar tu audio listo para publicar.',
        price: 135000,
        badge: 'Combo',
      },
    ],
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
      {
        question: '¿Tienen un combo con mastering?',
        answer:
          'Sí. Puedes contratar el Pack Audio Completo (Edición + Mastering) desde $135.000.',
      },
    ],
    relatedServices: [9, 1],
  },
  {
    id: 9,
    slug: 'mastering',
    family: 'Producción Audiovisual',
    billingModel: 'unitario',
    title: 'Mastering de Audio',
    subtitle: 'El Toque Final Profesional',
    shortDescription:
      'El toque final profesional para audio. Desde $45.000 por canción o en Pack Audio Completo desde $135.000.',
    longDescription:
      'El mastering es el último paso crítico en la producción de audio. Nos aseguramos de que tu música suene excepcional en todos los dispositivos y plataformas. Es la diferencia entre un audio bueno y uno profesional.',
    icon: 'AdjustmentsHorizontal',
    color: '#10B981',
    price: 45000,
    supportImage: 'https://images.pexels.com/photos/8198631/pexels-photo-8198631.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    addons: [
      {
        name: 'Pack Audio Completo (Edición + Mastering)',
        description: 'Incluye edición, limpieza y mastering en un flujo integrado.',
        price: 135000,
        badge: 'Combo',
      },
    ],
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
      {
        question: '¿Puedo contratar edición + mastering juntos?',
        answer: 'Sí, tenemos Pack Audio Completo desde $135.000.',
      },
    ],
    relatedServices: [8, 1],
  },
  {
    id: 10,
    slug: 'diseno-redes',
    family: 'Redes Sociales',
    billingModel: 'unitario',
    title: 'Diseños Unitarios para Redes',
    subtitle: 'Solo contenido para Instagram, TikTok y Facebook',
    shortDescription:
      'Servicio específico de contenido para redes sociales: estático, animado y reel gráfico. No incluye impresos ni piezas editoriales.',
    longDescription:
      'Este servicio está diseñado para clientes que necesitan contenido puntual sin contratar un plan mensual completo. Incluye piezas estáticas, contenido animado y reels gráficos con foco en rendimiento y estética de marca.',
    icon: 'BrandInstagram',
    color: '#F97316',
    price: 29000,
    supportImage: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Esencial - Estático',
        price: 29000,
        features: [
          'Post, story o banner en 1 formato',
          'Diseño en Ai/Ps o Canva según requerimiento',
          'Entrega PNG/JPG + editable',
          '1 ronda de revisión',
        ],
      },
      {
        name: 'Pro - Animado',
        price: 59000,
        features: [
          'Post o story animado hasta 15 segundos',
          'Transiciones y movimiento de marca',
          'Entrega en MP4 + GIF optimizado',
          '1 ronda de revisión',
        ],
      },
      {
        name: 'Full - Reel Gráfico',
        price: 89000,
        features: [
          'Pieza de motion hasta 45 segundos',
          'Tipografía animada y efectos de ritmo',
          'Entrega en MP4 9:16 HD',
          '2 rondas de revisión',
        ],
      },
      {
        name: 'Pack 3 Estáticos',
        price: 79000,
        features: [
          '3 piezas coherentes por campaña',
          'Estilo visual unificado',
          'Archivos optimizados para publicar',
          '1 ronda de revisión',
        ],
      },
      {
        name: 'Pack 3 Animados',
        price: 149000,
        features: [
          '3 piezas animadas de campaña',
          'Entregables en MP4 + GIF',
          'Variación de mensaje por audiencia',
          '1 ronda de revisión',
        ],
      },
      {
        name: 'Pack Lanzamiento',
        price: 219000,
        recommended: true,
        features: [
          '2 estáticos + 1 animado + 1 reel gráfico',
          'Estructura visual de campaña integrada',
          'Todos los formatos para publicar',
          '2 rondas de revisión',
        ],
      },
    ],
    deliverables: [
      'Diseño por pieza o pack según selección',
      'Formatos optimizados para redes sociales',
      'Archivos editables cuando aplique',
      'Revisiones según plan',
      'Entrega lista para publicación',
    ],
    process: [
      {
        title: 'Brief y Referencias',
        description: 'Definimos objetivo, mensaje y estilo de la pieza',
      },
      {
        title: 'Diseño y Animación',
        description: 'Construimos la pieza con foco en impacto visual',
      },
      {
        title: 'Ajustes',
        description: 'Aplicamos feedback dentro de rondas incluidas',
      },
      {
        title: 'Entrega Final',
        description: 'Exportamos en formatos listos para cada plataforma',
      },
    ],
    whyChooseUs: [
      'Servicio ideal para probar sin compromiso mensual',
      'Especialización en formatos para redes',
      'Rapidez de entrega y criterio de diseño',
      'Packs de campaña para escalar resultados',
      'Complemento directo para gestión de redes',
    ],
    portfolio: [],
    cta: 'Cotizar Diseños Unitarios',
    whatsappMessage: "Hola Artestudio, quiero cotizar Diseños Unitarios para Redes (estático, animado o reel gráfico).",
    faq: [
      {
        question: '¿Este servicio reemplaza el plan de redes?',
        answer: 'No. Es una opción por pieza para necesidades puntuales y campañas específicas.',
      },
      {
        question: '¿Incluye grabación de video?',
        answer: 'No. El Reel Gráfico usa motion y recursos visuales, no contempla filmación.',
      },
      {
        question: '¿Puedo pedir varias piezas por mes?',
        answer: 'Sí, puedes combinar unitarios o elegir packs para obtener mejor precio por volumen.',
      },
      {
        question: '¿Si necesito flyers, catálogos o presentaciones?',
        answer: 'Ese alcance corresponde a Diseño Gráfico Editorial y Corporativo.',
      },
    ],
    relatedServices: [1, 3, 4],
  },
  {
    id: 11,
    slug: 'mantencion-web',
    family: 'Web & Desarrollo',
    billingModel: 'mensual',
    title: 'Mantención y Administración Web',
    subtitle: 'Soporte técnico y gestión de contenidos para tu sitio',
    shortDescription:
      'Servicio recurrente para mantener tu web actualizada, segura y activa. Planes desde $49.990/mes.',
    longDescription:
      'Un sitio web sin mantenimiento pierde rendimiento y oportunidades. Este servicio combina cuidado técnico (actualizaciones, respaldo, seguridad) y gestión de contenido para que tu web se mantenga útil, vigente y orientada a conversión.',
    icon: 'Target',
    color: '#0EA5E9',
    price: 49990,
    supportImage: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?w=800&q=80&auto=format&fit=crop',
    plans: [
      {
        name: 'Esencial',
        price: 49990,
        billing: 'mensual',
        features: [
          'Actualización CMS y plugins',
          'Backup mensual y revisión SSL',
          'Revisión básica de velocidad',
          'Soporte por email',
        ],
      },
      {
        name: 'Pro',
        price: 89990,
        billing: 'mensual',
        recommended: true,
        features: [
          'Todo Esencial',
          'Hasta 5 actualizaciones de contenido/mes',
          'Reporte mensual de rendimiento',
          'Soporte prioritario',
        ],
      },
      {
        name: 'Full',
        price: 149990,
        billing: 'mensual',
        features: [
          'Todo Pro',
          'Gestión activa de contenidos y medios',
          'Mejoras visuales menores (hasta 3h/mes)',
          'Acompañamiento continuo del sitio',
        ],
      },
    ],
    addons: [
      {
        name: 'Actualización puntual de contenidos',
        description: 'Hasta 3 cambios puntuales con entrega en 48h.',
        price: 35000,
      },
      {
        name: 'Pack mensual de actualizaciones',
        description: 'Hasta 10 cambios mensuales con prioridad.',
        price: 79990,
        billing: 'mensual',
        badge: 'Mensual',
      },
      {
        name: 'Gestión de tienda online',
        description: 'Carga y actualización de hasta 20 productos mensuales.',
        price: 129990,
        billing: 'mensual',
        badge: 'Mensual',
      },
    ],
    deliverables: [
      'Mantenimiento técnico periódico',
      'Respaldo y control de seguridad',
      'Actualizaciones de contenido según plan',
      'Reportes de estado y rendimiento',
      'Soporte y continuidad operativa',
    ],
    process: [
      {
        title: 'Auditoría inicial',
        description: 'Revisamos estado técnico y prioridades del sitio',
      },
      {
        title: 'Plan mensual',
        description: 'Definimos tareas técnicas y de contenido por mes',
      },
      {
        title: 'Ejecución',
        description: 'Aplicamos mejoras, actualizaciones y soporte continuo',
      },
      {
        title: 'Reporte',
        description: 'Entregamos estado del sitio y próximos pasos',
      },
    ],
    whyChooseUs: [
      'Convierte un sitio estático en un activo vivo',
      'Reduce riesgo técnico y caídas inesperadas',
      'Integra soporte técnico + administración de contenido',
      'Modelos recurrentes claros y escalables',
      'Ideal para clientes web ya entregados',
    ],
    portfolio: [],
    cta: 'Mantener mi Sitio',
    whatsappMessage: "Hola Artestudio, quiero contratar mantención y/o administración web mensual.",
    faq: [
      {
        question: '¿Puedo contratar solo cambios puntuales?',
        answer: 'Sí. Puedes tomar actualizaciones puntuales por solicitud desde $35.000.',
      },
      {
        question: '¿Es solo para sitios desarrollados por ustedes?',
        answer: 'No. También podemos tomar sitios existentes tras una revisión inicial.',
      },
      {
        question: '¿Incluye SEO?',
        answer: 'El plan Full puede incorporar mejoras continuas de contenido y estructura con enfoque SEO.',
      },
    ],
    relatedServices: [5, 6, 7],
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
