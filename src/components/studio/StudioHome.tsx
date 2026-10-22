'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { CONTACT, FAQ_ITEMS, HOME_DIAGNOSTICO, WA_LINKS, waLink } from '@/lib/site'
import s from './StudioHome.module.css'

function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

const expertise = [
  { name: 'Páginas web y tiendas', description: 'Sitios que expresan tu marca y hacen fácil el siguiente paso: contactar, reservar o comprar.', tags: 'Diseño UX/UI · Desarrollo · Tiendas online', href: '/servicios#web' },
  { name: 'Contenido y redes sociales', description: 'Edición de reels o gestión de contenido: elige cuánto necesitas delegar para publicar con continuidad.', tags: 'Reels · Calendario · Publicación', href: '/servicios#contenido' },
  { name: 'Marca y diseño', description: 'Una identidad reconocible, desde el logotipo hasta tus presentaciones y aplicaciones de marca.', tags: 'Identidad visual · Presentaciones · Plantillas', href: '/servicios#marca' },
  { name: 'Publicidad y posicionamiento', description: 'Campañas con una dirección clara, conectadas a tu web y a la forma en que vendes.', tags: 'Google Ads · Meta Ads · SEO', href: '/servicios#ads' },
  { name: 'Automatización e IA', description: 'Menos tareas repetitivas. Más tiempo para lo importante, con herramientas pensadas para tu operación.', tags: 'Integraciones · Asistentes · Procesos', href: '/servicios#ia' },
]

const digitalProducts = [
  { name: 'SimplePlataforma', type: 'Ecosistema digital', href: 'https://simpleplataforma.app' },
  { name: 'SimpleAutos', type: 'Automotor', href: 'https://simpleautos.app' },
  { name: 'SimplePropiedades', type: 'Propiedades', href: 'https://simplepropiedades.app' },
  { name: 'SimpleAgenda', type: 'Reservas y gestión', href: 'https://simpleagenda.app' },
  { name: 'SimpleSerenatas', type: 'Servicios y experiencias', href: 'https://simpleserenatas.app' },
  { name: 'SimpleResto', type: 'Producto en desarrollo', href: 'https://simpleresto.app' },
  { name: 'SimpleTickets', type: 'Producto en desarrollo', href: 'https://simpletickets.app' },
]

const clientWebsites = [
  { name: 'Paskal', type: 'Sitio web', href: 'https://www.paskal.cl' },
  { name: 'Remsco', type: 'Sitio web', href: 'https://www.remsco.cl' },
  { name: 'UCansteng', type: 'Sitio web', href: 'https://ucansteng.com' },
]

const visualIdentityProjects = [
  { name: 'Digital Minds', work: 'Identidad y contenido' },
  { name: 'Terapia Relacional', work: 'Identidad y redes sociales' },
  { name: 'Bukmy', work: 'Identidad, plataforma y redes' },
  { name: 'Estrellitas de Colores', work: 'Identidad y redes sociales' },
  { name: 'Hipodelicias', work: 'Identidad y redes sociales' },
  { name: 'ImacPro', work: 'Identidad y sitio web' },
  { name: 'El Bajonero', work: 'Identidad y redes sociales' },
  { name: 'Perú Pasión', work: 'Asesoría integral de marca' },
]

const archivedProjects = [
  { name: 'Symmec', type: 'Identidad · Web · Redes sociales' },
  { name: 'Bukmy', type: 'Identidad · Plataforma · Redes sociales' },
  { name: 'William TRD', type: 'Identidad · Web · Redes sociales' },
  { name: 'Gama Motors', type: 'Identidad · Web · Redes sociales' },
  { name: 'Windhouse', type: 'Identidad · Web · Redes sociales' },
  { name: 'Transportes Amsomar', type: 'Identidad · Web · Redes sociales' },
  { name: 'Model3D', type: 'Diseño y desarrollo web' },
]

type ProjectService = 'todos' | 'web' | 'marca' | 'contenido' | 'publicidad' | 'ia'

const projectFilters: { id: ProjectService; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Web y plataformas' },
  { id: 'marca', label: 'Marca y diseño' },
  { id: 'contenido', label: 'Redes y contenido' },
  { id: 'publicidad', label: 'Marketing y campañas' },
  { id: 'ia', label: 'Automatización e IA' },
]

export function StudioHome() {
  const [stageId, setStageId] = useState('fundamentos')
  const [projectService, setProjectService] = useState<ProjectService>('todos')
  const projectGridRef = useRef<HTMLDivElement>(null)
  const stage = HOME_DIAGNOSTICO.stages.find(item => item.id === stageId)!
  const projectMatches = (...services: Exclude<ProjectService, 'todos'>[]) => projectService === 'todos' || services.includes(projectService)
  const selectProjectService = (service: ProjectService) => {
    setProjectService(service)
    requestAnimationFrame(() => projectGridRef.current?.scrollTo({ left: 0, behavior: 'smooth' }))
  }
  const scrollProjects = (direction: -1 | 1) => {
    const track = projectGridRef.current
    const card = track?.querySelector<HTMLElement>(':scope > a:not([hidden])')
    if (!track || !card) return
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  return (
    <div className={s.home}>
      <section id="inicio" className={s.hero} aria-labelledby="studio-title">
        <div className={s.heroBackdrop} aria-hidden="true"><Image src="/logos/Artestudio-isotipo-acid.png" alt="" fill sizes="70vw" /></div>
        <div className={s.container}>
          <div className={s.heroEyebrow}><span><i /> Estudio creativo + tecnología</span></div>
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <h1 id="studio-title">Buenas ideas.<br />Mejor <em>ejecutadas.</em></h1>
              <p>Diseño, marketing e inteligencia artificial.<br className={s.desktopBreak} /> Conectamos las piezas para que tu negocio avance.</p>
              <div className={s.heroActions}>
                <a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer" className={s.primary}>Hablemos de tu proyecto <Arrow /></a>
                <a href="#trabajo" className={s.textLink}>Ver proyectos <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
          <div className={s.heroFoot}><span>Creatividad con intención. Tecnología con dirección.</span><a href="#servicios-home">Explora el estudio <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="servicios-home" className={s.services} aria-labelledby="services-title">
        <div className={s.container}>
          <div className={s.sectionHead}><div><p className={s.label}>01 / Lo que conectamos</p><h2 id="services-title">Tu siguiente<br /><em>movimiento.</em></h2></div><p>Desde una pieza puntual hasta un sistema completo.<br />Construimos lo que tu negocio necesita hoy.</p></div>
          <div className={s.serviceList}>{expertise.map((item, index) => <Link key={item.href} href={item.href} className={s.serviceRow}><span className={s.serviceNumber}>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.description}</p><span className={s.serviceTags}>{item.tags}</span></div><span className={s.serviceArrow}><Arrow /></span></Link>)}</div>
          <div className={s.servicesFoot}><p>¿Necesitas que todo trabaje junto?</p><Link href="/servicios/sistema-crecimiento">Conoce el Plan integral de crecimiento <Arrow /></Link></div>
        </div>
      </section>

      <section id="trabajo" className={s.work} aria-labelledby="work-title">
        <div className={s.container}>
          <div className={s.sectionHead}><div><p className={s.label}>02 / Trabajo seleccionado</p><h2 id="work-title">Las ideas<br />toman <em>forma.</em></h2></div><p>Negocios distintos. Una misma intención:<br />diseño con carácter y tecnología que funciona.</p></div>

          <div className={s.projectFilters} role="group" aria-label="Filtrar proyectos por servicio">
            {projectFilters.map(filter => <button key={filter.id} type="button" className={projectService === filter.id ? s.filterActive : ''} aria-pressed={projectService === filter.id} onClick={() => selectProjectService(filter.id)}>{filter.label}</button>)}
          </div>

          <div id="project-gallery" ref={projectGridRef} className={s.projectGrid} role="region" aria-roledescription="carrusel" aria-label="Proyectos seleccionados" tabIndex={0}>
            <a hidden={!projectMatches('web', 'marca')} className={s.project} href="https://theoncompany.cl" target="_blank" rel="noopener noreferrer">
              <div className={s.onVisual}><Image src="/images/casos/the-on-company-home.jpg" alt="Vista de la página de inicio de The ON Company, con sus líneas de eventos y diseño y construcción" fill sizes="(max-width: 760px) 86vw, (max-width: 900px) 46vw, 48vw" /><span className={s.roundArrow}><Arrow /></span></div>
              <div className={s.projectCaption}><div><h3>The ON Company</h3></div><span>Proyecto propio · Identidad visual y web<br />Redes sociales en desarrollo</span></div>
            </a>

          <a hidden={!projectMatches('web')} className={s.project} href="https://tradicional360.cl" target="_blank" rel="noopener noreferrer">
            <div className={s.tradicionalVisual}>
              <Image src="/images/casos/tradicional360-web.png" alt="Sitio web de Tradicional360 con su diagnóstico comercial interactivo" fill sizes="(max-width: 760px) 86vw, (max-width: 900px) 46vw, 32vw" />
              <div className={s.tradicionalOverlay}><span>Tradicional360</span><p>Más canal para<br /><em>conquistar.</em></p></div>
              <span className={s.roundArrow}><Arrow /></span>
            </div>
            <div className={s.projectCaption}><div><h3>Tradicional360</h3></div><span>Web · Diagnóstico interactivo</span></div>
          </a>

            <a hidden={!projectMatches('web')} className={s.project} href="https://quiralproyectos.cl" target="_blank" rel="noopener noreferrer">
              <div className={s.quiralVisual}><Image src="/images/casos/quiral.png" alt="Arquitectura y paisajismo de Quiral Proyectos" fill sizes="(max-width: 760px) 95vw, 45vw" /><div className={s.quiralOverlay}><span>Quiral Proyectos</span><p>Espacios para<br /><em>habitar mejor.</em></p></div><span className={s.roundArrow}><Arrow /></span></div>
              <div className={s.projectCaption}><div><h3>Quiral Proyectos</h3></div><span>Diseño y desarrollo web</span></div>
            </a>
            <a hidden={!projectMatches('web', 'marca', 'contenido')} className={s.project} href="https://atriabogadas.cl" target="_blank" rel="noopener noreferrer">
              <div className={s.atriaVisual}>
                <div className={s.atriaBoard}><Image src="/images/casos/atria-identidad.jpg" alt="Sistema de identidad visual de Atria Abogadas, con logotipo, paleta, redes sociales y aplicaciones" fill sizes="(max-width: 760px) 58vw, (max-width: 900px) 34vw, 22vw" /></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>Atria Abogadas</h3></div><span>Marca · Web · Contenido</span></div>
            </a>
            <a hidden={!projectMatches('web', 'marca', 'contenido')} className={s.project} href="https://bukmy.com" target="_blank" rel="noopener noreferrer">
              <div className={s.bukmyVisual}>
                <div className={s.bukmyArtworkBack}><Image src="/images/casos/bukmy-post-cursos.png" alt="" fill sizes="(max-width: 760px) 44vw, 25vw" /></div>
                <div className={s.bukmyArtworkFront}><Image src="/images/casos/bukmy-post-identidad.png" alt="Piezas gráficas para redes sociales de Bukmy, plataforma de cursos online" fill sizes="(max-width: 760px) 58vw, 32vw" /></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>Bukmy</h3></div><span>Marca · Plataforma · Redes</span></div>
            </a>
            <article hidden={!projectMatches('contenido')} className={s.project}>
              <div className={s.terapiaVisual}>
                <div className={s.terapiaArtworkBack}><Image src="/images/casos/terapia-capsula-carrusel.png" alt="" fill sizes="(max-width: 760px) 42vw, 23vw" /></div>
                <div className={s.terapiaArtworkFront}><Image src="/images/casos/terapia-control-carrusel.png" alt="Carrusel de contenido de Terapia Relacional sobre vínculos y comunicación" fill sizes="(max-width: 760px) 58vw, 32vw" /></div>
              </div>
              <div className={s.projectCaption}><div><h3>Terapia Relacional</h3></div><span>Redes y contenido</span></div>
            </article>
            <a hidden={!projectMatches('web')} className={s.project} href="https://simpleplataforma.app" target="_blank" rel="noopener noreferrer">
              <div className={s.simpleEcosystemVisual}>
                <div className={s.simpleEcosystemHeader}><span>Simple / Ecosistema digital</span><span>6 verticales</span></div>
                <div className={s.simpleEcosystemGrid}>
                  {[
                    ['SimpleAutos', 'simpleautos'],
                    ['SimplePropiedades', 'simplepropiedades'],
                    ['SimpleAgenda', 'simpleagenda'],
                    ['SimpleSerenatas', 'simpleserenatas'],
                    ['SimpleResto', 'simpleresto'],
                    ['SimpleTickets', 'simpletickets'],
                  ].map(([name, icon]) => <div className={s.simpleEcosystemTile} key={name}><Image src={`/images/casos/simple-verticals/ig-profile-${icon}.png`} alt={name} width={40} height={40} /></div>)}
                </div>
                <div className={s.simpleEcosystemFooter}><span>Una plataforma.<br /><em>Seis soluciones.</em></span><span className={s.roundArrow}><Arrow /></span></div>
              </div>
              <div className={s.projectCaption}><div><h3>Simple Plataforma</h3></div><span>Diseño y desarrollo de un ecosistema digital</span></div>
            </a>
            <a hidden={!projectMatches('web')} className={s.project} href="https://simpleautos.app" target="_blank" rel="noopener noreferrer">
              <div className={s.simpleAutosVisual}>
                <Image src="/images/casos/simpleautos-discover.jpg" alt="Vehículo destacado en la plataforma SimpleAutos" fill sizes="(max-width: 760px) 86vw, (max-width: 900px) 46vw, 32vw" />
                <div className={s.simpleAutosBrand}><Image src="/images/casos/simple-verticals/ig-profile-simpleautos.png" alt="" width={42} height={42} /><span>MARKETPLACE AUTOMOTOR</span></div>
                <div className={s.simpleAutosCopy}>Encuentra tu<br /><em>próximo auto.</em></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>SimpleAutos</h3></div><span>Marketplace automotor · Plataforma propia</span></div>
            </a>
            <a hidden={!projectMatches('web', 'publicidad')} className={s.project} href="https://simplepropiedades.app" target="_blank" rel="noopener noreferrer">
              <div className={s.simpleVisual}>
                <div className={s.simpleStory}><Image src="/images/casos/simplepropiedades-story-campana.png" alt="" fill sizes="(max-width: 760px) 38vw, 21vw" /></div>
                <div className={s.simplePost}><Image src="/images/casos/simplepropiedades-post-campana.png" alt="Piezas de campaña para SimplePropiedades: publica tu propiedad en minutos" fill sizes="(max-width: 760px) 52vw, 28vw" /></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>SimplePropiedades</h3></div><span>Plataforma · Campaña digital</span></div>
            </a>
            <a hidden={!projectMatches('web')} className={s.project} href="https://simpleagenda.app" target="_blank" rel="noopener noreferrer">
              <div className={s.simpleAgendaVisual}>
                <Image src="/images/casos/simpleagenda-professional.webp" alt="Profesional preparando su agenda de reservas" fill sizes="(max-width: 760px) 86vw, (max-width: 900px) 46vw, 32vw" />
                <div className={s.simpleAgendaDashboard}><Image src="/images/casos/simpleagenda-dashboard.svg" alt="Vista del panel de reservas de SimpleAgenda" fill sizes="(max-width: 760px) 74vw, 32vw" /></div>
                <div className={s.simpleAgendaBrand}><Image src="/images/casos/simple-verticals/ig-profile-simpleagenda.png" alt="" width={38} height={38} /><span>RESERVAS Y GESTIÓN</span></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>SimpleAgenda</h3></div><span>Reservas y gestión para profesionales</span></div>
            </a>
            <a hidden={!projectMatches('web')} className={s.project} href="https://simpleserenatas.app" target="_blank" rel="noopener noreferrer">
              <div className={s.serenatasVisual}>
                <div className={s.serenatasOrb} aria-hidden="true" />
                <div className={s.serenatasMark}><Image src="/images/casos/simpleserenatas-mark.png" alt="" width={82} height={82} /></div>
                <div className={s.serenatasCopy}><span>MARKETPLACE MUSICAL</span><p>La música<br />que <em>conecta.</em></p></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>SimpleSerenatas</h3></div><span>Marketplace de servicios musicales</span></div>
            </a>
            <a hidden={!projectMatches('web', 'ia')} className={s.project} href="https://simpleresto.app" target="_blank" rel="noopener noreferrer">
              <div className={s.restoVisual}>
                <Image className={s.restoAmbience} src="/images/casos/simpleresto-ambience.webp" alt="Equipo de un local gastronómico preparando pedidos" fill sizes="(max-width: 760px) 86vw, (max-width: 900px) 46vw, 32vw" />
                <div className={s.restoScreen}><Image src="/images/casos/simpleresto-operations.webp" alt="Panel real de pedidos de SimpleResto" fill sizes="(max-width: 760px) 76vw, 30vw" /></div>
                <div className={s.restoBrand}><Image src="/images/casos/simple-verticals/ig-profile-simpleresto.png" alt="" width={38} height={38} /><span>OPERACIÓN GASTRONÓMICA</span></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>SimpleResto</h3></div><span>Plataforma gastronómica · En desarrollo</span></div>
            </a>
            <a hidden={!projectMatches('web')} className={s.project} href="https://simpletickets.app" target="_blank" rel="noopener noreferrer">
              <div className={s.simpleTicketsVisual}>
                <Image src="/images/casos/simpletickets-concert.webp" alt="Público en un concierto para la plataforma SimpleTickets" fill sizes="(max-width: 760px) 86vw, (max-width: 900px) 46vw, 32vw" />
                <div className={s.simpleTicketCard}><div><Image src="/images/casos/simple-verticals/ig-profile-simpletickets.png" alt="" width={38} height={38} /><span>ENTRADAS<br />DIGITALES</span></div><i aria-hidden="true" /><b aria-hidden="true" /></div>
                <span className={s.roundArrow}><Arrow /></span>
              </div>
              <div className={s.projectCaption}><div><h3>SimpleTickets</h3></div><span>Plataforma de eventos · En desarrollo</span></div>
            </a>
          </div>
          <div className={s.galleryControls}>
            <p className={s.galleryHint}>Desliza o usa las flechas para ver los proyectos <span aria-hidden="true">↔</span></p>
            <div className={s.galleryButtons} aria-label="Controles del carrusel">
              <button type="button" onClick={() => scrollProjects(-1)} aria-label="Ver proyectos anteriores"><Arrow diagonal={false} /></button>
              <button type="button" onClick={() => scrollProjects(1)} aria-label="Ver proyectos siguientes"><Arrow diagonal={false} /></button>
            </div>
          </div>
          <div className={s.moreWork}>
            <a href={CONTACT.behance} target="_blank" rel="noopener noreferrer" className={s.portfolioLink}>Ver portafolio completo en Behance <Arrow /></a>
            <details className={s.moreProjects}>
              <summary><span>Otros proyectos y marcas</span><span>Plataformas, sitios e identidades.</span><b aria-hidden="true">+</b></summary>
              <div className={s.moreProjectContent}>
                <p><strong>Plataformas propias</strong><span>{digitalProducts.map((product, index) => <span key={product.name}><a href={product.href} target="_blank" rel="noopener noreferrer">{product.name}</a>{product.type === 'Producto en desarrollo' && <small>En desarrollo</small>}{index < digitalProducts.length - 1 && ', '}</span>)}</span></p>
                <p><strong>Web, identidad y contenido</strong><span>{clientWebsites.map((client, index) => <span key={client.name}><a href={client.href} target="_blank" rel="noopener noreferrer">{client.name}</a>{index < clientWebsites.length - 1 && ', '}</span>)}; {visualIdentityProjects.map((project, index) => <span key={project.name}>{project.name}{index < visualIdentityProjects.length - 1 && ', '}</span>)}</span></p>
                <p><strong>Proyectos históricos</strong><span>{archivedProjects.map((project, index) => <span key={project.name}>{project.name}{index < archivedProjects.length - 1 && ', '}</span>)}. Estos sitios ya no están publicados.</span></p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="estudio" className={s.approach} aria-labelledby="approach-title">
        <div className={s.container}>
          <div className={s.studioIntro}>
            <figure className={s.portrait}>
              <div className={s.portraitTop}><span>El lado humano de lo digital.</span><span aria-hidden="true">↗</span></div>
              <div className={s.portraitImage}><Image src="/images/brand/chris-spencer-studio-green.png" alt="Chris Spencer, fundador de Artestudio" fill sizes="(max-width: 760px) 90vw, 35vw" /></div>
              <figcaption><span><strong>Chris Spencer</strong><small>Fundador & dirección creativa</small></span><Image className={s.portraitMark} src="/logos/Artestudio-isotipo-acid.png" alt="" width={40} height={40} /></figcaption>
            </figure>
            <div className={s.studioCopy}><p className={s.label}>03 / El estudio</p><h2 id="approach-title">Un estudio.<br /><em>Todas las piezas.</em></h2><p>La marca que muestras, la web que recibe y el marketing que atrae deberían hablar el mismo idioma. En Artestudio los pensamos juntos, con un trato directo y una ejecución cuidada.</p><p className={s.studioSignature}>Soy Chris Spencer. Conecto la estrategia, el diseño y la tecnología para llevar cada proyecto de la idea a la implementación.</p><a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer">Conversemos sobre tu proyecto <Arrow /></a><div className={s.founderLinks}><a href="https://www.linkedin.com/in/soychrispencer" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="https://www.instagram.com/soychrispencer" target="_blank" rel="noopener noreferrer">Instagram <Arrow /></a><Link href="/soychrispencer">Trayectoria y perfil <Arrow /></Link></div></div>
          </div>
          <div className={s.steps}>{[
            ['Entender', 'Primero, tu negocio.', 'Escuchamos, revisamos lo que tienes y definimos qué necesita avanzar.'],
            ['Crear', 'Una dirección clara.', 'Damos forma a la estrategia, el diseño y la experiencia de tu marca.'],
            ['Conectar', 'Todo en funcionamiento.', 'Implementamos, conectamos y dejamos una base que puedas seguir mejorando.'],
          ].map(([name, title, text], index) => <div key={name}><span className={s.stepIndex}>0{index + 1} <span>↗</span></span><p className={s.stepName}>{name}</p><h3>{title}</h3><p>{text}</p></div>)}</div>
        </div>
      </section>

      <section id="diagnostico" className={s.diagnostic} aria-labelledby="diagnostic-title">
        <div className={s.container}>
          <div className={s.sectionHead}><div><p className={s.label}>04 / Encuentra el punto de partida</p><h2 id="diagnostic-title">¿Qué le falta<br />a tu <em>negocio?</em></h2></div><p>Identifica la etapa en la que estás.<br />Te orientamos sobre la próxima pieza a construir.</p></div>
          <div className={s.stageTabs} role="tablist" aria-label="Etapa de tu negocio">{HOME_DIAGNOSTICO.stages.map((item, index) => <button key={item.id} type="button" role="tab" id={`stage-${item.id}`} aria-selected={stageId === item.id} aria-controls={`panel-${item.id}`} tabIndex={stageId === item.id ? 0 : -1} onClick={() => setStageId(item.id)} onKeyDown={event => { if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (index + (event.key === 'ArrowRight' ? 1 : -1) + 4) % 4; setStageId(HOME_DIAGNOSTICO.stages[next].id); document.getElementById(`stage-${HOME_DIAGNOSTICO.stages[next].id}`)?.focus(); } }}><span>{item.number} /</span>{item.title}</button>)}</div>
          <div className={s.stagePanel} role="tabpanel" id={`panel-${stage.id}`} aria-labelledby={`stage-${stage.id}`} tabIndex={0}><div><p className={s.label}>Tu punto de partida</p><h3>{stage.headline}</h3><p>{stage.sintoma}</p></div><div className={s.stageNext}><p className={s.label}>La siguiente pieza</p><p>{stage.queConstruir}</p><a href={waLink(stage.waText)} target="_blank" rel="noopener noreferrer">Conversemos sobre tu etapa <Arrow /></a><Link href={stage.solucionLink} className={s.stageService}>{stage.solucionLabel} →</Link></div></div>
          <Link href={HOME_DIAGNOSTICO.fullQuizHref} className={s.quizLink}>¿Quieres profundizar? Haz el diagnóstico completo de 10 pilares <Arrow /></Link>
        </div>
      </section>

      <section className={s.faq} aria-labelledby="faq-title"><div className={s.container}><div className={s.faqGrid}><div><p className={s.label}>Antes de empezar</p><h2 id="faq-title">Hablemos<br /><em>claro.</em></h2></div><div>{[FAQ_ITEMS[1], FAQ_ITEMS[3], FAQ_ITEMS[5]].map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></div></section>

      <section id="contacto" className={s.contact} aria-labelledby="contact-title"><div className={s.container}><p className={s.label}>Tu próxima buena idea empieza con una conversación.</p><div className={s.contactGrid}><h2 id="contact-title">Hagamos<br />que <em>pase.</em></h2><a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer" className={s.contactArrow} aria-label="Hablemos de tu proyecto por WhatsApp"><Arrow /></a></div><div className={s.contactFoot}><a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer">Hablemos de tu proyecto <Arrow /></a><span>Atención directa · Proyectos en todo Chile</span></div></div></section>
    </div>
  )
}
