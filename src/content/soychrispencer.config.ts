export type HubCta = {
  label: string
  href: string
}

export type HubProject = {
  title: string
  description: string
  tags: string[]
  website: string
  instagram?: string
}

export type HubTimelineItem = {
  period: string
  title: string
  subtitle: string
  summary: string
  bullets?: string[]
}

export type HubEducationItem = {
  period: string
  institution: string
  program: string
  details: string
}

export type HubVentureItem = {
  period: string
  name: string
  role: string
  summary: string
}

export type HubRealEstateItem = {
  period: string
  company: string
  role: string
  summary: string
}

export type HubSocialLink = {
  label: string
  handle: string
  url: string
  icon: 'instagram' | 'facebook' | 'threads' | 'tiktok' | 'youtube' | 'behance' | 'linkedin'
}

export type HubContactAction = {
  label: string
  href: string
  icon: 'whatsapp' | 'mail' | 'linkedin'
}

export type SoyChrisSpencerConfig = {
  profile: {
    name: string
    handle: string
    avatar: {
      src: string
      alt: string
      fallbackSrc: string
    }
  }
  hero: {
    headline: string
    subheadline: string
    chips: string[]
    ctas: {
      whatsapp: HubCta
      projects: HubCta
      email: HubCta
    }
  }
  professionalSummary: string[]
  projects: HubProject[]
  timeline: HubTimelineItem[]
  education: HubEducationItem[]
  ventures: HubVentureItem[]
  realEstate: HubRealEstateItem[]
  musicHighlights: string[]
  skills: string[]
  socials: HubSocialLink[]
  contactActions: HubContactAction[]
  metadata: {
    title: string
    description: string
  }
}

export const soychrispencerConfig: SoyChrisSpencerConfig = {
  profile: {
    name: 'Chris Spencer',
    handle: '@soychrispencer',
    avatar: {
      src: '/soychrispencer/avatar.png',
      alt: 'Chris Spencer',
      fallbackSrc: '/soychrispencer/avatar-placeholder.svg',
    },
  },
  hero: {
    headline: 'Constructor creativo de proyectos y oportunidades',
    subheadline: 'Asesoria • Desarrollo • Inversion',
    chips: ['Creatividad', 'Tecnologia', 'Negocios'],
    ctas: {
      whatsapp: {
        label: 'WhatsApp',
        href: 'https://wa.me/56938733230?text=Hola%20Chris,%20vengo%20desde%20tu%20perfil%20y%20quiero%20hablar%20de%20un%20proyecto.',
      },
      projects: {
        label: 'Ver proyectos',
        href: '#proyectos',
      },
      email: {
        label: 'Escribeme',
        href: 'mailto:soychrispencer@gmail.com',
      },
    },
  },
  professionalSummary: [
    'Soy creativo, emprendedor y constructor de proyectos con vision de largo plazo.',
    'Egresado de Musica y Sonido en UNIACC, con trayectoria artistica desde la infancia y experiencia en produccion musical, marketing digital, desarrollo web y corretaje inmobiliario.',
    'Combino creatividad, tecnologia y negocio para desarrollar marcas, plataformas y activos con vision estrategica de largo plazo.',
  ],
  projects: [
    {
      title: 'Artestudio',
      description: 'Mi estudio creativo: branding, marketing y desarrollo web para marcas que quieren crecer de forma sostenible.',
      tags: ['Branding', 'Marketing', 'Desarrollo'],
      website: 'https://www.artestudio.cl',
      instagram: 'https://instagram.com/artestudio.cl',
    },
    {
      title: 'SimplePlataforma',
      description: 'Landing del ecosistema Simple: plataforma, CRM y verticales para ordenar operacion y acelerar ventas.',
      tags: ['Plataforma', 'CRM', 'Ecosistema'],
      website: 'https://simpleplataforma.app',
    },
    {
      title: 'SimplePropiedades',
      description: 'Vertical inmobiliaria para captacion, publicacion y gestion comercial de oportunidades.',
      tags: ['PropTech', 'Inmobiliario', 'Comercial'],
      website: 'https://simplepropiedades.app',
      instagram: 'https://instagram.com/simplepropiedades.app',
    },
    {
      title: 'SimpleAutos',
      description: 'Vertical automotriz para convertir vitrinas en negocio: leads, seguimiento y cierre.',
      tags: ['AutoTech', 'Leads', 'Ventas'],
      website: 'https://simpleautos.app',
      instagram: 'https://instagram.com/simpleautos.app',
    },
  ],
  timeline: [
    {
      period: '1994 - 1996',
      title: 'Formacion musical inicial',
      subtitle: 'Clases particulares con Maestro Sergio Rivera',
      summary: 'Inicio formal en bateria y lenguaje musical.',
    },
    {
      period: '2005 - 2006',
      title: 'Formacion complementaria',
      subtitle: 'Academia Evolucion + Escuela Moderna',
      summary: 'Diplomado academico en bateria e inicio de etapa instrumental profesional.',
      bullets: [
        'Academia Evolucion - Diplomado Academico en Bateria (2005)',
        'IP Escuela Moderna de Musica - Interprete Instrumental en Bateria (desde 2006)',
      ],
    },
    {
      period: '2008 - 2010',
      title: 'Base tecnologica',
      subtitle: 'Universidad de Tarapaca',
      summary: 'Estudios de Ingenieria en Informatica (incompletos por cambio de carrera).',
    },
    {
      period: '2009 - 2011',
      title: 'Formacion y servicio cultural',
      subtitle: 'Talleres y comunidad',
      summary: 'Monitor de batucada y talleres en Teleton.',
    },
    {
      period: '2011 - 2015',
      title: 'Egreso profesional',
      subtitle: 'UNIACC - Musica y Sonido',
      summary: 'Egresado como musico profesional, instrumento principal bateria, con foco en produccion musical.',
    },
    {
      period: '2012 - 2015',
      title: 'Consolidacion artistica',
      subtitle: 'Proyectos, escenarios y reconocimiento',
      summary: 'Lanzamientos, conciertos y primeras colaboraciones de alcance internacional.',
      bullets: [
        'Banda Sin Apuro - LP lanzado (2012)',
        'Endorser Exodus Cymbals (2012)',
        'Concierto Dakar (2013)',
        'Conciertos en Lima, Peru',
        'Presentaciones en Sala SCD Providencia',
      ],
    },
    {
      period: '2015',
      title: 'Intercambio internacional',
      subtitle: 'Universidad Sergio Arboleda, Bogota',
      summary: 'Alumno becado con especializacion en musica latinoamericana.',
    },
    {
      period: '2016 - Actualidad',
      title: 'Proyecto artistico vigente',
      subtitle: 'Rey Villano / El Ro',
      summary: 'Participacion activa en producciones, shows y colaboraciones en escena nacional.',
      bullets: [
        'Teloneando a Los Tres (2019)',
        'Teloneando a Joe Vasconcellos (2020)',
      ],
    },
    {
      period: '2014 - Ene 2025',
      title: 'Emprendimiento gastronomico',
      subtitle: 'El Bajonero Sandwicheria',
      summary: 'Dueno y administrador durante mas de 10 anos, con operacion en Santiago Centro y Providencia.',
    },
    {
      period: 'Mar 2019 - Actualidad',
      title: 'Fundador',
      subtitle: 'Artestudio SPA',
      summary: 'Agencia de marketing digital, branding y desarrollo web para pymes, marcas personales y empresas.',
    },
    {
      period: 'Dic 2022 - May 2023',
      title: 'Socio administrador',
      subtitle: 'El Circo Restobar',
      summary: 'Gestion comercial y operativa en etapa de expansion del negocio.',
    },
    {
      period: 'Nov 2022 - Ene 2025',
      title: 'Corredor de propiedades',
      subtitle: 'NowHouse',
      summary: 'Arriendos, ventas y evaluacion de oportunidades inmobiliarias.',
    },
    {
      period: 'Feb 2025 - Dic 2025',
      title: 'Asesor inmobiliario',
      subtitle: 'SSilva',
      summary: 'Asesoria estrategica de inversion, cierre comercial y prospeccion.',
    },
    {
      period: '2025 - Actualidad',
      title: 'Builder de ecosistema digital',
      subtitle: 'SimplePlataforma + verticales',
      summary: 'Desarrollo de activos digitales propios orientados a negocio, automatizacion y conversion.',
      bullets: [
        'SimplePlataforma',
        'SimplePropiedades',
        'SimpleAutos',
      ],
    },
  ],
  education: [
    {
      period: '2011 - 2015',
      institution: 'UNIACC',
      program: 'Musica y Sonido, Mencion Interprete Instrumental',
      details: 'Egresado como musico profesional, instrumento principal bateria, con especializacion en produccion musical.',
    },
    {
      period: '2015',
      institution: 'Universidad Sergio Arboleda, Bogota',
      program: 'Intercambio internacional en musica',
      details: 'Alumno becado, con especializacion en musica latinoamericana.',
    },
    {
      period: '2008 - 2010',
      institution: 'Universidad de Tarapaca',
      program: 'Ingenieria en Informatica',
      details: 'Estudios incompletos por cambio de carrera.',
    },
    {
      period: '2005 - 2021',
      institution: 'Formacion complementaria',
      program: 'Bateria y produccion musical',
      details: 'Academia Evolucion, Escuela Moderna y clases de produccion con Sebastian Cancinos (2020 - 2021).',
    },
  ],
  ventures: [
    {
      period: 'Mar 2019 - Actualidad',
      name: 'Artestudio SPA',
      role: 'Fundador',
      summary: 'Branding, desarrollo web, ecommerce, estrategia digital, campanas Meta y produccion audiovisual.',
    },
    {
      period: '2014 - Ene 2025',
      name: 'El Bajonero Sandwicheria',
      role: 'Dueno administrador',
      summary: 'Operacion integral de negocio gastronomico por mas de 10 anos.',
    },
    {
      period: 'Dic 2022 - May 2023',
      name: 'El Circo Restobar',
      role: 'Socio administrador',
      summary: 'Gestion comercial y operativa.',
    },
    {
      period: '2025 - Actualidad',
      name: 'Ecosistema Simple',
      role: 'Product builder',
      summary: 'Construccion de plataformas verticales para digitalizar procesos y ventas.',
    },
  ],
  realEstate: [
    {
      period: 'Nov 2022 - Ene 2025',
      company: 'NowHouse',
      role: 'Corredor de propiedades',
      summary: 'Arriendos, ventas y evaluacion de oportunidades.',
    },
    {
      period: 'Feb 2025 - Dic 2025',
      company: 'SSilva',
      role: 'Asesor inmobiliario',
      summary: 'Asesoria estrategica inmobiliaria con foco en inversion y cierre comercial.',
    },
    {
      period: 'Actualidad',
      company: 'SimplePropiedades',
      role: 'Vertical propia en desarrollo',
      summary: 'Integracion de experiencia inmobiliaria con tecnologia y automatizacion comercial.',
    },
  ],
  musicHighlights: [
    'Banda Sin Apuro (LP 2012)',
    'Proyecto Rey Villano / El Ro (2016 - actualidad)',
    'Sala SCD Providencia',
    'Concierto Dakar 2013',
    'Conciertos en Lima, Peru',
    'Teloneando a Los Tres (2019)',
    'Teloneando a Joe Vasconcellos (2020)',
    'Endorser Exodus Cymbals (2012)',
    'Monitor de batucada y talleres en Teleton (2009 - 2011)',
  ],
  skills: [
    'Branding y desarrollo de marca',
    'Desarrollo web (HTML, CSS, JS, Node)',
    'Ecommerce (WooCommerce, Shopify, Jumpseller)',
    'Marketing digital y captacion de leads',
    'Produccion y edicion audiovisual',
    'Edicion de audio (ProTools)',
    'Edicion de video (Premiere, After Effects)',
    'Desarrollo de plataformas y herramientas con IA',
    'Gestion de negocios y administracion',
    'Analisis inmobiliario',
    'Produccion musical profesional',
  ],
  socials: [
    {
      label: 'Instagram',
      handle: '@soychrispencer',
      url: 'https://instagram.com/soychrispencer',
      icon: 'instagram',
    },
    {
      label: 'TikTok',
      handle: '@soychrispencer',
      url: 'https://www.tiktok.com/@soychrispencer',
      icon: 'tiktok',
    },
    {
      label: 'YouTube',
      handle: '@soychrispencer',
      url: 'https://www.youtube.com/@soychrispencer',
      icon: 'youtube',
    },
    {
      label: 'Facebook',
      handle: '@soychrispencer',
      url: 'https://www.facebook.com/soychrispencer',
      icon: 'facebook',
    },
    {
      label: 'Threads',
      handle: '@soychrispencer',
      url: 'https://www.threads.net/@soychrispencer',
      icon: 'threads',
    },
    {
      label: 'Behance',
      handle: '@soychrispencer',
      url: 'https://www.behance.net/soychrispencer',
      icon: 'behance',
    },
    {
      label: 'LinkedIn',
      handle: '@soychrispencer',
      url: 'https://www.linkedin.com/in/soychrispencer',
      icon: 'linkedin',
    },
  ],
  contactActions: [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/56938733230?text=Hola%20Chris,%20vengo%20desde%20tu%20perfil%20y%20quiero%20hablar%20de%20un%20proyecto.',
      icon: 'whatsapp',
    },
    {
      label: 'Escribeme',
      href: 'mailto:soychrispencer@gmail.com',
      icon: 'mail',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/soychrispencer',
      icon: 'linkedin',
    },
  ],
  metadata: {
    title: 'Chris Spencer | Constructor creativo',
    description: 'Soy Chris Spencer. Constructor creativo de proyectos con enfoque en estrategia, ejecucion y crecimiento.',
  },
}


