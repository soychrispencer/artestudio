import { formatCLP } from '@/lib/subscriptions'
import { withIVA } from '@/lib/checkout-pricing'
import { waLink } from '@/lib/site'

const formatPrice = (amount: number) => formatCLP(amount)

const plans = [
  {
    name: 'Base',
    amount: 5_990,
    idealFor: 'Para una landing o web informativa que ya está lista y necesita seguir activa.',
    contentChanges: 'No incluye',
    responseTime: 'Hasta 2 días hábiles',
  },
  {
    name: 'Activa',
    amount: 49_990,
    idealFor: 'Para mantener textos e imágenes actualizados cada mes.',
    contentChanges: 'Hasta 2 horas al mes',
    responseTime: 'Hasta 1 día hábil',
  },
  {
    name: 'Tienda',
    amount: 89_990,
    idealFor: 'Para tiendas que requieren cambios frecuentes de contenido o catálogo.',
    contentChanges: 'Hasta 4 horas totales al mes',
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
          Elige el plan que necesita tu web
        </h2>
        <p className="text-sm text-muted leading-relaxed mt-3">
          Todos los niveles cubren un sitio e incluyen hosting, SSL, respaldo semanal,
          mantención técnica básica y soporte de lunes a viernes, de 9:00 a 18:00.
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
                  <dt className="text-xs text-muted">Cambios de contenido</dt>
                  <dd className="font-medium text-[var(--text)] mt-0.5">
                    {plan.contentChanges}
                    {plan.name !== 'Base' && <span className="text-xs text-muted"> · horas no acumulables</span>}
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
        se cotizan antes de realizarlos.
      </p>
    </section>
  )
}
