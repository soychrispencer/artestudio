'use client'

import Image from 'next/image'
import { ArrowRight, BrandInstagram, Check, TargetArrow, WorldWww } from 'tabler-icons-react'
import { SubscribeButton } from '@/components/checkout/SubscribeButton'
import { SECTION_IDS, WA_LINKS } from '@/lib/site'
import { CRECE_PLAN, formatCLP } from '@/lib/subscriptions'

const CRECE_POINTS = [
  {
    icon: WorldWww,
    title: 'Landing de conversión',
    text: 'Una página clara para explicar tu oferta y llevar al contacto.',
  },
  {
    icon: BrandInstagram,
    title: 'Redes activas',
    text: 'Contenido mensual alineado con la landing y tu marca.',
  },
  {
    icon: TargetArrow,
    title: 'Captación enfocada',
    text: 'Pensado para generar consultas, no solo presencia online.',
  },
] as const

export function PlanCrece() {
  return (
    <section
      id={SECTION_IDS.crece}
      className="scroll-mt-20 py-16 md:py-24 border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-center">
          <div>
            <p className="section-label">Pack de crecimiento</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
              Plan Crece: landing page + redes sociales
            </h2>
            <p className="text-muted-light max-w-2xl mb-6">
              Para negocios que necesitan una landing lista para captar clientes y redes sociales con contenido
              constante desde el primer mes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {CRECE_POINTS.map((point) => {
                const Icon = point.icon

                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-[var(--border)] bg-card p-4"
                  >
                    <Icon className="w-5 h-5 text-primary mb-3" />
                    <h3 className="text-sm font-semibold text-[var(--text)] mb-1">{point.title}</h3>
                    <p className="text-xs text-muted-light leading-relaxed">{point.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-card">
              <Image
                src="/images/contenido-redes.png"
                alt="Planificación de contenido para redes sociales y captación de clientes"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <article className="relative rounded-3xl border border-primary/40 bg-card p-6 md:p-7 shadow-sm">
            <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-wide">
              {CRECE_PLAN.badge}
            </span>

            <div className="mb-5">
              <p className="text-sm font-semibold text-primary mb-1">{CRECE_PLAN.name}</p>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-2">{CRECE_PLAN.tagline}</h3>
              <p className="text-sm text-muted-light">Para quién: {CRECE_PLAN.idealFor}</p>
            </div>

            <div className="mb-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4">
              <p className="text-xs text-muted uppercase tracking-wide mb-1">Activación landing + redes</p>
              {CRECE_PLAN.originalSetup && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted line-through">
                    Antes {formatCLP(CRECE_PLAN.originalSetup)}
                  </span>
                  <span className="text-xs font-semibold text-primary">Pack promocional</span>
                </div>
              )}
              <p className="text-3xl font-bold text-primary">{formatCLP(CRECE_PLAN.setup)}</p>
              <p className="text-xs text-muted mt-2">
                + {formatCLP(CRECE_PLAN.monthly)}/mes · Landing activa, soporte y contenidos mensuales
              </p>
            </div>

            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">Incluye</p>
              <ul className="space-y-2">
                {CRECE_PLAN.includes.slice(0, 7).map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-light">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border)] space-y-3">
              <p className="text-xs text-muted-light">
                <span className="font-semibold text-[var(--text)]">Tiempo de entrega:</span>{' '}
                {CRECE_PLAN.delivery}
              </p>
              <SubscribeButton
                planId={CRECE_PLAN.id}
                title={`Plan ${CRECE_PLAN.name} — Artestudio`}
                setup={CRECE_PLAN.setup}
                monthly={CRECE_PLAN.monthly}
                className="rounded-full px-5 py-3 text-sm"
              >
                Quiero captar clientes
              </SubscribeButton>
              <a
                href={WA_LINKS.planCrece}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-full px-5 py-3 text-sm w-full justify-center"
              >
                <ArrowRight className="w-4 h-4" />
                Consultar antes de contratar
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
