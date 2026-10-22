import { formatCLP } from '@/lib/subscriptions'
import { withIVA } from '@/lib/checkout-pricing'
import { waLink } from '@/lib/site'

const formatPrice = (amount: number) => formatCLP(amount)

const plans = [
  {
    name: 'Hosting Esencial',
    amount: 5_990,
    idealFor: 'Para mantener una landing o web informativa alojada, respaldada y disponible.',
    technicalCare: 'Hosting, SSL y respaldo semanal',
    technicalAdjustments: 'No incluye horas de ajustes',
    responseTime: 'Hasta 2 días hábiles',
  },
  {
    name: 'Mantención Técnica',
    amount: 19_990,
    idealFor: 'Para sitios que necesitan revisiones y cuidados técnicos periódicos.',
    technicalCare: 'Revisión periódica y actualizaciones compatibles',
    technicalAdjustments: 'Hasta 30 min de ajustes técnicos menores al mes',
    responseTime: 'Hasta 2 días hábiles',
  },
  {
    name: 'Soporte Prioritario',
    amount: 29_990,
    idealFor: 'Para sitios que requieren más acompañamiento y respuesta prioritaria.',
    technicalCare: 'Revisión periódica y actualizaciones compatibles',
    technicalAdjustments: 'Hasta 1 hora de ajustes técnicos menores al mes',
    responseTime: 'Hasta 1 día hábil',
  },
] as const

export function MaintenancePlans() {
  return (
    <section aria-labelledby="maintenance-plans-title" className="mt-12 w-full">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-2">
          Planes mensuales
        </p>
        <h2 id="maintenance-plans-title" className="text-2xl md:text-3xl text-[var(--text)]">
          Hosting y soporte según lo que necesita tu web
        </h2>
        <p className="text-sm text-muted leading-relaxed mt-3">
          Todos los planes cubren un sitio e incluyen hosting, SSL, respaldo semanal,
          revisión técnica básica y soporte de lunes a viernes, de 9:00 a 18:00.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
        {plans.map((plan) => {
          const message = `Hola Artestudio, quiero cotizar el plan ${plan.name} de mantención web por ${formatPrice(plan.amount)} + IVA al mes para mi sitio.`

          return (
            <article
              key={plan.name}
              className="flex flex-col border border-[var(--border)] border-t-2 border-t-[#c8ff00] bg-surface p-5"
            >
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">{plan.name}</h3>
                <p className="text-xs text-muted leading-relaxed mt-1 min-h-[3.5rem]">
                  {plan.idealFor}
                </p>
              </div>

              <div className="mt-5 pb-4 border-b border-[var(--border)]">
                <p className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--text)]">
                  {formatPrice(plan.amount)}
                  <span className="ml-1 whitespace-nowrap text-xs font-medium tracking-normal text-muted">+ IVA/mes</span>
                </p>
                <p className="text-xs text-muted mt-1">
                  Total mensual con IVA: {formatPrice(withIVA(plan.amount))}
                </p>
              </div>

              <dl className="space-y-3 py-4 text-sm flex-1">
                <div>
                  <dt className="text-xs text-muted">Cobertura técnica</dt>
                  <dd className="font-medium text-[var(--text)] mt-0.5">{plan.technicalCare}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Ajustes técnicos menores</dt>
                  <dd className="font-medium text-[var(--text)] mt-0.5">
                    {plan.technicalAdjustments}
                    {plan.name !== 'Hosting Esencial' && <span className="text-xs text-muted"> · tiempo no acumulable</span>}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Primera respuesta</dt>
                  <dd className="font-medium text-[var(--text)] mt-0.5">{plan.responseTime}</dd>
                </div>
              </dl>

              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex justify-center items-center py-2.5 px-3 text-xs font-semibold"
              >
                Cotizar plan {plan.name}
              </a>
            </article>
          )
        })}
      </div>

      <p className="text-xs text-muted leading-relaxed mt-4">
        El tiempo indicado es para la primera respuesta, no para resolver la solicitud. Los cambios adicionales
        se cotizan antes de realizarlos. La carga o actualización de productos, catálogo y contenido se cotiza aparte.
      </p>
    </section>
  )
}
