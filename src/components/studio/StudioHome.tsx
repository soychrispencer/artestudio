'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CONTACT, FAQ_ITEMS, HOME_DIAGNOSTICO, WA_LINKS, waLink } from '@/lib/site'
import s from './StudioHome.module.css'

function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

const expertise = [
  { name: 'Web & e-commerce', description: 'Sitios que expresan tu marca y hacen fácil el siguiente paso: contactar, reservar o comprar.', tags: 'Diseño UX/UI · Desarrollo · Tiendas online', href: '/servicios#web' },
  { name: 'Contenido & marca', description: 'Una identidad reconocible en cada publicación, video y punto de contacto con tus clientes.', tags: 'Diseño · Redes sociales · Reels', href: '/servicios#contenido' },
  { name: 'Marketing digital', description: 'Campañas con una dirección clara, conectadas a tu web y a la forma en que vendes.', tags: 'Google Ads · Meta Ads · Medición', href: '/servicios#ads' },
  { name: 'IA & automatización', description: 'Menos tareas repetitivas. Más tiempo para lo importante, con herramientas pensadas para tu operación.', tags: 'Integraciones · Agentes · Procesos', href: '/servicios#ia' },
]

export function StudioHome() {
  const [stageId, setStageId] = useState('fundamentos')
  const stage = HOME_DIAGNOSTICO.stages.find(item => item.id === stageId)!

  return (
    <div className={s.home}>
      <section id="inicio" className={s.hero} aria-labelledby="studio-title">
        <div className={s.container}>
          <div className={s.heroEyebrow}><span><i /> Estudio creativo + tecnología</span><span>Independiente. Desde Chile.</span></div>
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <h1 id="studio-title">Buenas ideas.<br />Mejor<br /><em>ejecutadas.</em></h1>
              <p>Diseño, marketing e inteligencia artificial.<br className={s.desktopBreak} /> Conectamos las piezas para que tu negocio avance.</p>
              <div className={s.heroActions}>
                <a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer" className={s.primary}>Hablemos de tu proyecto <Arrow /></a>
                <a href="#trabajo" className={s.textLink}>Ver proyectos <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <figure className={s.portrait}>
              <div className={s.portraitTop}><span>El lado humano de lo digital.</span><span aria-hidden="true">↗</span></div>
              <div className={s.portraitImage}><Image src="/images/brand/chris-spencer-studio-green.png" alt="Chris Spencer, fundador de Artestudio" fill priority sizes="(max-width: 760px) 100vw, 43vw" /></div>
              <figcaption><span><strong>Chris Spencer</strong><small>Fundador & dirección creativa</small></span><Image className={s.portraitMark} src="/logos/Artestudio-isotipo-acid.png" alt="" width={40} height={40} /></figcaption>
            </figure>
          </div>
          <div className={s.heroFoot}><span>Creatividad con intención. Tecnología con dirección.</span><a href="#trabajo">Explora el estudio <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="trabajo" className={s.work} aria-labelledby="work-title">
        <div className={s.container}>
          <div className={s.sectionHead}><div><p className={s.label}>01 / Trabajo seleccionado</p><h2 id="work-title">Las ideas<br />toman <em>forma.</em></h2></div><p>Negocios distintos. Una misma intención:<br />diseño con carácter y tecnología que funciona.</p></div>

          <a className={`${s.project} ${s.projectFeatured}`} href="https://tradicional360.cl" target="_blank" rel="noopener noreferrer">
            <div className={s.featuredVisual}>
              <div className={s.visualLabel}><span>Tradicional360®</span><span>Web / Estrategia digital</span></div>
              <div className={s.browserFrame}><div className={s.browserBar}><span aria-hidden="true">● ● ●</span><span>tradicional360.cl</span><span aria-hidden="true">↗</span></div><div className={s.browserImage}><Image src="/images/casos/tradicional360-web.png" alt="Diseño de la web Tradicional360: propuesta comercial y radar de diagnóstico" fill sizes="(max-width: 760px) 95vw, 80vw" /></div></div>
              <span className={s.projectOpen}><Arrow /><span>Visitar proyecto</span></span>
            </div>
            <div className={s.projectCaption}><div><h3>Tradicional360</h3><p>Una nueva forma de presentar la consultoría comercial.</p></div><span>Diseño web · Desarrollo · Diagnóstico interactivo</span></div>
          </a>

          <div className={s.projectGrid}>
            <a className={s.project} href="https://quiralproyectos.cl" target="_blank" rel="noopener noreferrer">
              <div className={s.quiralVisual}><Image src="/images/casos/quiral.png" alt="Arquitectura y paisajismo de Quiral Proyectos" fill sizes="(max-width: 760px) 95vw, 45vw" /><div className={s.quiralOverlay}><span>Quiral Proyectos</span><p>Espacios para<br /><em>habitar mejor.</em></p></div><span className={s.roundArrow}><Arrow /></span></div>
              <div className={s.projectCaption}><div><h3>Quiral Proyectos</h3><p>Arquitectura, paisaje y una presencia digital a su altura.</p></div><span>Diseño web / Desarrollo</span></div>
            </a>
            <a className={s.project} href="https://atriabogadas.cl" target="_blank" rel="noopener noreferrer">
              <div className={s.atriaVisual}><div className={s.atriaBack} aria-hidden="true"><Image src="/images/casos/atria-olivo.svg" alt="" width={160} height={280} /></div><div className={s.atriaPaper}><Image src="/images/casos/atria-logo.svg" alt="Identidad visual de Atria Abogadas" width={280} height={360} /><span>Derecho de familia</span></div><span className={s.roundArrow}><Arrow /></span></div>
              <div className={s.projectCaption}><div><h3>Atria Abogadas</h3><p>Una identidad que acompaña y transmite confianza.</p></div><span>Identidad visual / Web</span></div>
            </a>
          </div>
          <a href={CONTACT.behance} target="_blank" rel="noopener noreferrer" className={s.portfolioLink}>Más del estudio en Behance <Arrow /></a>
        </div>
      </section>

      <section id="servicios-home" className={s.services} aria-labelledby="services-title">
        <div className={s.container}>
          <div className={s.sectionHead}><div><p className={s.label}>02 / Lo que conectamos</p><h2 id="services-title">Tu siguiente<br /><em>movimiento.</em></h2></div><p>Desde una pieza puntual hasta un sistema completo.<br />Construimos lo que tu negocio necesita hoy.</p></div>
          <div className={s.serviceList}>{expertise.map((item, index) => <Link key={item.href} href={item.href} className={s.serviceRow}><span className={s.serviceNumber}>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.description}</p><span className={s.serviceTags}>{item.tags}</span></div><span className={s.serviceArrow}><Arrow /></span></Link>)}</div>
          <div className={s.servicesFoot}><p>¿Necesitas que todo trabaje junto?</p><Link href="/servicios/sistema-crecimiento">Conoce el Sistema de Crecimiento <Arrow /></Link></div>
        </div>
      </section>

      <section id="estudio" className={s.approach} aria-labelledby="approach-title">
        <div className={s.container}>
          <div className={s.approachIntro}><p className={s.label}>03 / Del concepto a la acción</p><div><h2 id="approach-title">Un estudio.<br /><em>Todas las piezas.</em></h2><p>La marca que muestras, la web que recibe y el marketing que atrae deberían hablar el mismo idioma. En Artestudio los pensamos juntos, con un trato directo y una ejecución cuidada.</p></div></div>
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
