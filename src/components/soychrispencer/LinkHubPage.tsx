'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, ExternalLink, Mail, X } from 'tabler-icons-react'
import {
  siBehance,
  siFacebook,
  siInstagram,
  siLinkedin,
  siThreads,
  siTiktok,
  siWhatsapp,
  siYoutube,
} from 'simple-icons'
import { soychrispencerConfig } from '@/content/soychrispencer.config'
import styles from './soychrispencer.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
}

const socialIconMap: Record<
  'instagram' | 'facebook' | 'threads' | 'tiktok' | 'youtube' | 'behance' | 'linkedin',
  { path: string }
> = {
  instagram: siInstagram,
  facebook: siFacebook,
  threads: siThreads,
  tiktok: siTiktok,
  youtube: siYoutube,
  behance: siBehance,
  linkedin: siLinkedin,
}

const contactIconMap: Record<'whatsapp' | 'linkedin', { path: string }> = {
  whatsapp: siWhatsapp,
  linkedin: siLinkedin,
}

function BrandIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  )
}

export function SoyChrisSpencerHub() {
  const [copied, setCopied] = useState(false)
  const [isTrajectoryOpen, setIsTrajectoryOpen] = useState(false)
  const [avatarSrc, setAvatarSrc] = useState(soychrispencerConfig.profile.avatar.src)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [copied])

  useEffect(() => {
    if (!isTrajectoryOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTrajectoryOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isTrajectoryOpen])

  const trajectoryPreview = useMemo(() => {
    const prioritizedTitles = [
      'Builder de ecosistema digital',
      'Fundador',
      'Asesor inmobiliario',
      'Proyecto artistico vigente',
    ]

    const featured = prioritizedTitles
      .map((title) => soychrispencerConfig.timeline.find((item) => item.title === title))
      .filter((item): item is (typeof soychrispencerConfig.timeline)[number] => Boolean(item))

    return featured.length > 0 ? featured : soychrispencerConfig.timeline.slice(-4).reverse()
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(soychrispencerConfig.profile.handle)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const handleAvatarError = () => {
    if (avatarSrc !== soychrispencerConfig.profile.avatar.fallbackSrc) {
      setAvatarSrc(soychrispencerConfig.profile.avatar.fallbackSrc)
    }
  }

  return (
    <>
      <div className={`${styles.page} text-white`} data-soychrispencer-root>
        <div className={styles.grid} />
        <div className={`${styles.glow} ${styles.glowTop}`} />
        <div className={`${styles.glow} ${styles.glowBottom}`} />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <motion.section
            id="home"
            className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:p-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <span className={`${styles.heroBadge} inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]`}>
                Constructor creativo
              </span>

              <div className="space-y-3">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {soychrispencerConfig.profile.name}
                </h1>
                <p className="text-base font-medium text-primary-light sm:text-lg">
                  {soychrispencerConfig.profile.handle}
                </p>
                <p className="text-xl font-medium text-white/90 sm:text-2xl">
                  {soychrispencerConfig.hero.headline}
                </p>
                <p className="text-base text-white/70 sm:text-lg">
                  {soychrispencerConfig.hero.subheadline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {soychrispencerConfig.hero.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={soychrispencerConfig.hero.ctas.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <BrandIcon path={siWhatsapp.path} className="h-4 w-4" />
                  {soychrispencerConfig.hero.ctas.whatsapp.label}
                </a>
                <a
                  href={soychrispencerConfig.hero.ctas.projects.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-light/60 hover:bg-white/10"
                >
                  {soychrispencerConfig.hero.ctas.projects.label}
                </a>
                <a
                  href={soychrispencerConfig.hero.ctas.email.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-light/60 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {soychrispencerConfig.hero.ctas.email.label}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
              <div className="space-y-4">
                <div className={`${styles.avatarRing} relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-primary/40 to-primary-light/20`}>
                  <Image
                    src={avatarSrc}
                    alt={soychrispencerConfig.profile.avatar.alt}
                    fill
                    sizes="176px"
                    className="object-cover"
                    onError={handleAvatarError}
                    unoptimized
                    priority
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Perfil profesional
                  </p>
                  <div className="mt-2 space-y-2">
                    {soychrispencerConfig.professionalSummary.map((line) => (
                      <p key={line} className="text-sm text-white/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            id="proyectos"
            className="scroll-mt-28 pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-8 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
                Que hago hoy
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">Proyectos y plataformas</h2>
              <p className="max-w-2xl text-white/70">
                Desarrollo marcas, productos y sistemas comerciales enfocados en resultados reales.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {soychrispencerConfig.projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className={`${styles.glassCard} ${styles.lift} rounded-3xl p-6`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="text-sm leading-relaxed text-white/75">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.title}-${tag}`}
                          className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/20"
                      >
                        Ver
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {project.instagram ? (
                        <a
                          href={project.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-primary-light/45 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary-light transition-colors duration-300 hover:bg-primary/20"
                        >
                          <BrandIcon path={siInstagram.path} className="h-4 w-4" />
                          Instagram
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="cv"
            className="scroll-mt-28 pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-8 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
                Trayectoria
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">Resumen profesional y experiencia reciente</h2>
              <p className="max-w-3xl text-white/70">
                Aqui ves lo principal y lo mas reciente. El detalle completo esta disponible en el boton Ver trayectoria completa.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {trajectoryPreview.map((item) => (
                  <article key={`${item.period}-${item.title}`} className={`${styles.glassCard} ${styles.lift} rounded-2xl p-5`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">{item.period}</p>
                    <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{item.subtitle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.summary}</p>
                  </article>
                ))}
              </div>

              <div className="space-y-5">
                <div className={`${styles.glassCard} rounded-3xl p-6`}>
                  <h3 className="text-xl font-semibold">Lo principal hoy</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li>• Fundador de Artestudio y constructor del ecosistema Simple.</li>
                    <li>• Enfoque en asesoria, desarrollo y crecimiento de proyectos.</li>
                    <li>• Experiencia combinada en creatividad, negocio e inmobiliario.</li>
                  </ul>
                </div>

                <div className={`${styles.glassCard} rounded-3xl p-6`}>
                  <h3 className="text-xl font-semibold">Habilidades clave</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {soychrispencerConfig.skills.slice(0, 8).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsTrajectoryOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary-light/45 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary-light transition-colors duration-300 hover:bg-primary/20"
                >
                  Ver trayectoria completa
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="redes"
            className="scroll-mt-28 pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-8 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
                Redes personales
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">Conectemos donde quieras</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {soychrispencerConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.socialButton} rounded-2xl p-4`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                        <BrandIcon path={socialIconMap[social.icon].path} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{social.label}</p>
                        <p className="text-xs text-white/65">{social.handle}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/60" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-300" />
                    Copiado: {soychrispencerConfig.profile.handle}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copiar {soychrispencerConfig.profile.handle}
                  </>
                )}
              </button>
            </div>
          </motion.section>

          <motion.section
            id="contacto"
            className="scroll-mt-28 pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-8`}>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-light">
                  Contacto
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Si tienes una idea, hablemos.
                </h2>
                <p className="max-w-2xl text-white/75">
                  Te puedo ayudar a definir, construir y escalar tu proyecto. El canal mas directo es WhatsApp.
                </p>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {soychrispencerConfig.contactActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={action.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary-light/60 hover:bg-white/[0.12]"
                  >
                    {action.icon === 'mail' ? (
                      <Mail className="h-4 w-4" />
                    ) : (
                      <BrandIcon path={contactIconMap[action.icon].path} className="h-4 w-4" />
                    )}
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <AnimatePresence>
        {isTrajectoryOpen ? (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setIsTrajectoryOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              aria-label="Cerrar trayectoria"
            />

            <motion.div
              className="relative z-10 w-full max-w-6xl rounded-3xl border border-white/15 bg-[#090415]/95 p-4 shadow-2xl sm:p-6"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label="Trayectoria completa"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">CV publico</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">Trayectoria completa</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTrajectoryOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10"
                  aria-label="Cerrar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="custom-scrollbar mt-4 max-h-[calc(88vh-6.5rem)] overflow-y-auto pr-1 sm:pr-2">
                <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                  <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
                    <h4 className="mb-5 text-xl font-semibold">Timeline cronologica</h4>
                    <div className="relative pl-7">
                      <div className={styles.timelineLine} />
                      <div className="space-y-8">
                        {soychrispencerConfig.timeline.map((item) => (
                          <article key={`${item.period}-${item.title}`} className="relative">
                            <span className={`${styles.timelineBullet} absolute -left-7 top-1.5`} />
                            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-primary-light">
                              {item.period}
                            </p>
                            <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                            <p className="text-sm text-white/70">{item.subtitle}</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">{item.summary}</p>
                            {item.bullets?.length ? (
                              <ul className="mt-2 space-y-1 text-sm text-white/70">
                                {item.bullets.map((bullet) => (
                                  <li key={bullet}>• {bullet}</li>
                                ))}
                              </ul>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
                      <h4 className="text-xl font-semibold">Formacion academica</h4>
                      <div className="mt-4 space-y-4">
                        {soychrispencerConfig.education.map((item) => (
                          <article key={`${item.period}-${item.institution}`} className="space-y-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                            <p className="text-xs uppercase tracking-[0.14em] text-primary-light">{item.period}</p>
                            <p className="text-sm font-semibold text-white">{item.institution}</p>
                            <p className="text-sm text-white/80">{item.program}</p>
                            <p className="text-sm text-white/65">{item.details}</p>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
                      <h4 className="text-xl font-semibold">Emprendimientos</h4>
                      <div className="mt-4 space-y-4">
                        {soychrispencerConfig.ventures.map((item) => (
                          <article key={`${item.period}-${item.name}`} className="space-y-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                            <p className="text-xs uppercase tracking-[0.14em] text-primary-light">{item.period}</p>
                            <p className="text-sm font-semibold text-white">{item.name}</p>
                            <p className="text-sm text-white/80">{item.role}</p>
                            <p className="text-sm text-white/65">{item.summary}</p>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
                      <h4 className="text-xl font-semibold">Experiencia inmobiliaria</h4>
                      <div className="mt-4 space-y-4">
                        {soychrispencerConfig.realEstate.map((item) => (
                          <article key={`${item.period}-${item.company}`} className="space-y-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                            <p className="text-xs uppercase tracking-[0.14em] text-primary-light">{item.period}</p>
                            <p className="text-sm font-semibold text-white">{item.company}</p>
                            <p className="text-sm text-white/80">{item.role}</p>
                            <p className="text-sm text-white/65">{item.summary}</p>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
                      <h4 className="text-xl font-semibold">Trayectoria artistica</h4>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {soychrispencerConfig.musicHighlights.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${styles.glassCard} rounded-3xl p-6 sm:p-7`}>
                      <h4 className="text-xl font-semibold">Habilidades clave</h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {soychrispencerConfig.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}


