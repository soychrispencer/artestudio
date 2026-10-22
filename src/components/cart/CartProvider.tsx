'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { X, Trash, ChevronLeft } from 'tabler-icons-react'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { getOnlinePlan, monthlyServiceLabel, withIVA } from '@/lib/checkout-pricing'
import { trackEvent } from '@/lib/analytics'
import { VALIDATION } from '@/lib/constants'

export type CartItem = {
  id: string
  title: string
  setup: number    // Pago único
  setupWaived?: number // Activación promocional incluida
  monthly: number  // Pago recurrente
  regularMonthly?: number // Precio normal de referencia para promociones
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  total: number
  monthlyTotal: number
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clear: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

function clampQuantity(value: number) {
  if (Number.isNaN(value)) return 1
  return Math.max(1, Math.min(10, Math.floor(value)))
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const stored = window.localStorage.getItem('cart')
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[]
        if (Array.isArray(parsed)) {
          setItems(parsed.flatMap(item => {
            const plan = getOnlinePlan(item.id)
            return plan ? [{ id: plan.id, title: plan.name, setup: plan.setup, monthly: plan.monthly, quantity: 1 }] : []
          }).filter((item, index, all) => all.findIndex(other => other.id === item.id) === index))
        }
      } catch {
        window.localStorage.removeItem('cart')
      }
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items, mounted])

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.setup * item.quantity, 0),
    [items]
  )

  const monthlyTotal = useMemo(
    () => items.reduce((acc, item) => acc + item.monthly * item.quantity, 0),
    [items]
  )

  const addItem = (item: CartItem) => {
    const plan = getOnlinePlan(item.id)
    if (!plan) return
    setItems(prev => [...prev.filter(entry => entry.id !== plan.id), { id: plan.id, title: plan.name, setup: plan.setup, monthly: plan.monthly, quantity: 1 }])
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((entry) => entry.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, quantity: clampQuantity(quantity) } : entry
      )
    )
  }

  const clear = () => setItems([])
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const value: CartContextValue = {
    items,
    total,
    monthlyTotal,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    openCart,
    closeCart,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
      {mounted && <CartDrawer />}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

function CartDrawer() {
  const { items, total, monthlyTotal, isOpen, closeCart, removeItem, clear } = useCart()
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formStartedAt, setFormStartedAt] = useState<number | null>(null)
  const [honeypot, setHoneypot] = useState('')
  const [isHuman, setIsHuman] = useState(false)
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  const dialogRef = useRef<HTMLElement>(null)
  const [termsAccepted, setTermsAccepted] = useState(false)
  useEffect(() => {
    if (!isOpen) return
    setStep(0)
    setTermsAccepted(false)
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLElement>('button:not([disabled])')?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { document.querySelector<HTMLButtonElement>('[aria-label="Cerrar carrito"]')?.click(); return }
      if (event.key !== 'Tab') return
      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), a[href], [tabindex="0"]') ?? []).filter(el => el.getClientRects().length)
      const first = focusable[0], last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', onKey)
    trackEvent('checkout_open')
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', onKey); previous?.focus() }
  }, [isOpen, items])

  if (!isOpen) return null

  const steps = ['Carrito', 'Datos', 'Verificar']
  const currentStep = steps[step] ?? steps[0]
  const isCartEmpty = items.length === 0
  const hasSubscription = monthlyTotal > 0
  const hasHybridCheckout = total > 0 && monthlyTotal > 0
  const checkoutTotalToday = withIVA(total)
  const monthlyFinal = withIVA(monthlyTotal)
  const dueNet = total || monthlyTotal
  const mixedCycles = items.some(i => i.setup > 0) && items.some(i => i.setup === 0)
  const unavailable = items.some(i => !getOnlinePlan(i.id))

  const goToStep = (nextStep: number) => {
    setError('')
    setStep(nextStep)
    trackEvent('checkout_step', { step: nextStep + 1 })
    if (nextStep === 1 && !formStartedAt) {
      setFormStartedAt(Date.now())
    }
  }

  const validateForm = () => {
    if (honeypot.trim()) {
      return 'No pudimos validar tu solicitud.'
    }

    if (!formStartedAt || Date.now() - formStartedAt < 2500) {
      return 'Verificación en curso. Intenta nuevamente en unos segundos.'
    }

    const name = buyer.name.trim()
    const email = buyer.email.trim()
    const phone = buyer.phone.trim()
    const company = buyer.company.trim()

    if (!name || name.length < 5 || name.split(/\s+/).length < 2) {
      return 'Ingresa nombre y apellido completos.'
    }

    if (!email) {
      return 'Completa tu email para continuar.'
    }

    if (!VALIDATION.emailRegex.test(email)) {
      return 'El email ingresado no es válido.'
    }

    if (!phone) {
      return 'Completa tu teléfono o WhatsApp.'
    }

    if (!VALIDATION.phoneRegex.test(phone)) {
      return 'El teléfono contiene caracteres no válidos.'
    }

    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length < 8 || phoneDigits.length > 12) {
      return 'El teléfono debe tener entre 8 y 12 dígitos.'
    }

    if (company && company.length < 2) {
      return 'El nombre de empresa debe tener al menos 2 caracteres.'
    }

    if (!isHuman) {
      return 'Confirma que eres una persona para continuar.'
    }

    return ''
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden
      />
      <aside ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="cart-title" className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--surface)] border-l border-[var(--border)] shadow-xl flex flex-col text-[var(--text)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (step > 0) {
                  goToStep(step - 1)
                }
              }}
              className={`w-10 h-10 rounded-xl border border-line flex items-center justify-center transition-colors ${
                step === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:border-primary'
              }`}
              aria-label="Volver"
              disabled={step === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Paso {step + 1} de 3
              </p>
              <h3 id="cart-title" className="text-xl font-semibold text-ink">
                {currentStep}
              </h3>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-xl border border-line flex items-center justify-center hover:border-primary transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pt-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted">
            {steps.map((label, idx) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full border ${
                    idx <= step
                      ? 'border-primary bg-primary text-black'
                      : 'border-line text-accent-2'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
                {idx < steps.length - 1 && (
                  <span className="flex-1 h-px bg-line" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {step === 0 && (
            <>
              {hasHybridCheckout && (
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-muted-light">
                  Pagarás en <span className="font-semibold text-primary">2 pasos</span>: implementación hoy y servicio mensual con primer cobro a los 30 días del pago aprobado.
                </div>
              )}
              {items.length === 0 && (
                <div className="rounded-2xl border border-dashed border-line p-6 text-center text-muted-light">
                  Tu carrito está vacío.
                </div>
              )}

              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-line p-4 bg-field"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-ink">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-light space-y-1">
                        {item.setup > 0 && (
                          <span className="block">
                            Implementación neta: <span className="font-semibold text-primary">{formatPrice(item.setup)}</span>
                            {item.monthly > 0 ? ' (pago único hoy)' : ''}
                          </span>
                        )}
                        {item.monthly > 0 && (
                          <span className="block">
                            {monthlyServiceLabel(item.id)} (neto): <span className="font-semibold text-primary">{formatPrice(item.monthly)}/mes</span>
                            {item.setup > 0 ? ' (paso 2 en MercadoPago)' : ''}
                          </span>
                        )}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted hover:text-red-500 transition-colors"
                      aria-label="Quitar item"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted">Un servicio por marca. Importes netos.</span>
                    <span className="font-semibold text-ink text-right text-sm">
                      {item.setup > 0 && item.monthly > 0 ? (
                        <>
                          <span className="block">{formatPrice(item.setup * item.quantity)} hoy</span>
                          <span className="block text-muted font-normal">{formatPrice(item.monthly * item.quantity)}/mes</span>
                        </>
                      ) : item.monthly > 0 ? (
                        `${formatPrice(item.monthly * item.quantity)}/mes`
                      ) : (
                        formatPrice(item.setup * item.quantity)
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted">
                  Datos de contacto
                </p>
                <p className="text-sm text-muted-light mt-2">
                  Completa tus datos para registrar la solicitud y coordinar la entrega.
                </p>
              </div>
              <div className="grid gap-4">
                <label className="sr-only" aria-hidden="true">
                  No completar
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="sr-only"
                  />
                </label>
                <label className="text-sm text-muted-light">
                  Nombre y apellido *
                  <input
                    type="text"
                    value={buyer.name}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, name: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-line bg-[var(--bg)] px-3 py-2 text-ink"
                    placeholder="Juan Pérez"
                    required
                  />
                </label>
                <label className="text-sm text-muted-light">
                  Email *
                  <input
                    type="email"
                    value={buyer.email}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, email: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-line bg-[var(--bg)] px-3 py-2 text-ink"
                    placeholder="hola@tudominio.cl"
                    required
                  />
                </label>
                <label className="text-sm text-muted-light">
                  WhatsApp / Teléfono *
                  <input
                    type="tel"
                    value={buyer.phone}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, phone: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-line bg-[var(--bg)] px-3 py-2 text-ink"
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </label>
                <label className="text-sm text-muted-light">
                  Empresa (opcional)
                  <input
                    type="text"
                    value={buyer.company}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, company: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-line bg-[var(--bg)] px-3 py-2 text-ink"
                    placeholder="Nombre de la marca"
                  />
                </label>
                <label className="flex items-start gap-3 text-sm text-muted-light">
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-line-strong text-primary focus:ring-primary"
                  />
                  Confirmo que soy una persona y no un bot.
                </label>
              </div>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-field p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Datos confirmados
                </p>
                <div className="mt-3 text-sm text-muted-light space-y-2">
                  <p><span className="font-semibold text-ink">Cliente:</span> {buyer.name}</p>
                  <p><span className="font-semibold text-ink">Email:</span> {buyer.email}</p>
                  <p><span className="font-semibold text-ink">Teléfono:</span> {buyer.phone}</p>
                  {buyer.company && (
                    <p><span className="font-semibold text-ink">Empresa:</span> {buyer.company}</p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-line p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Resumen de pago
                </p>
                <div className="mt-3 space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="space-y-1 text-sm text-muted-light">
                      <p className="font-semibold text-ink">
                        {item.title} x{item.quantity}
                      </p>
                      {item.setup > 0 && (
                        <div className="flex justify-between">
                          <span>Implementación (neto)</span>
                          <span className="font-semibold text-ink">
                            {formatPrice(item.setup * item.quantity)}
                          </span>
                        </div>
                      )}
                      {item.monthly > 0 && (
                        <div className="flex justify-between">
                          <span>{monthlyServiceLabel(item.id)} (neto)</span>
                          <span className="font-semibold text-ink">
                            {formatPrice(item.monthly * item.quantity)}/mes
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {hasHybridCheckout && (
                  <p className="mt-4 pt-4 border-t border-line text-xs text-muted">
                    Paso 1: pagas la implementación. Paso 2: autorizas la mensualidad; primer cobro 30 días después del pago aprobado.
                  </p>
                )}
              </div>

              <p className="text-xs text-muted">
                {hasHybridCheckout
                  ? 'La implementación se paga hoy. Después autorizas la mensualidad con primer cobro a los 30 días. Permanencia inicial mínima de 3 meses de servicio mensual.'
                  : hasSubscription
                    ? 'MercadoPago activará el cobro automático mensual. La suscripción tiene permanencia mínima de 3 meses.'
                    : 'Pago seguro en línea.'}
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-line p-6 space-y-4">
          <div className="text-sm text-muted space-y-1"><p>Neto {total ? 'hoy' : 'mensual'}: {formatPrice(dueNet)}</p><p>IVA (19%): {formatPrice(withIVA(dueNet) - dueNet)}</p></div>
          {(mixedCycles || unavailable) && <p role="alert" className="text-sm text-red-500">Estos servicios necesitan fechas o alcance por propuesta. Contrátalos por separado o <a className="underline" href="https://wa.me/56938733230">coordina una propuesta</a>.</p>}
          {items.length > 0 && <p className="text-xs text-muted">Permanencia inicial: 3 meses de servicio mensual. Renovación mensual posterior. <Link href="/condiciones-servicios" target="_blank" rel="noopener noreferrer" className="underline">Plazos, cancelación y propiedad de los archivos ↗</Link>.</p>}
          {step === 2 && <label className="flex gap-3 text-sm"><input type="checkbox" checked={termsAccepted} onChange={event => setTermsAccepted(event.target.checked)} />He leído el alcance, el total con IVA y las condiciones de contratación.</label>}
          <div className="flex flex-col text-right">
            {hasHybridCheckout ? (
              <>
                <span className="text-lg font-bold text-[var(--text)]">
                  Total hoy con IVA: {formatPrice(checkoutTotalToday)}
                </span>
                <span className="text-sm text-muted">
                  Luego: {formatPrice(monthlyFinal)}/mes con IVA
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-[var(--text)]">
                {hasSubscription ? 'Mensualidad con IVA' : 'Total hoy con IVA'}: {formatPrice(hasSubscription ? monthlyFinal : checkoutTotalToday)}
                {hasSubscription ? '/mes' : ''}
              </span>
            )}
          </div>
          {error && step !== 1 && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          {step === 0 && (
            <button
              onClick={() => {
                if (!isCartEmpty) {
                  goToStep(1)
                }
              }}
              className="w-full btn-whatsapp px-6 py-3"
              disabled={isCartEmpty || mixedCycles || unavailable}
            >
              Continuar contratación
            </button>
          )}
          {step === 1 && (
            <button
              onClick={() => {
                const nextError = validateForm()
                if (nextError) {
                  setError(nextError)
                  return
                }
                setError('')
                goToStep(2)
              }}
              className="w-full btn-whatsapp px-6 py-3"
              disabled={isCartEmpty}
            >
              Revisar y continuar
            </button>
          )}
          {step === 2 && (
            <button
              onClick={async () => {
                const nextError = validateForm()
                if (nextError) {
                  setError(nextError)
                  goToStep(1)
                  return
                }

                setError('')
                setIsSubmitting(true)
                try {
                  const orderId = typeof crypto !== 'undefined' && crypto.randomUUID
                    ? `AS-${crypto.randomUUID()}`
                    : `AS-${Date.now()}`
                  const checkoutMode = hasHybridCheckout
                    ? 'setup_then_subscription'
                    : hasSubscription
                      ? 'subscription'
                      : 'standard'

                  window.localStorage.setItem(
                    'last_order',
                    JSON.stringify({
                      orderId,
                      buyer,
                      items,
                      monthlyTotal,
                      monthlyFinal,
                      setupTotal: total,
                      totalToday: checkoutTotalToday,
                    })
                  )

                  const res = await fetch('/api/payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      items,
                      customer: buyer,
                      orderId,
                      checkoutMode,
                      termsAccepted,
                    }),
                  })

                  const data = await res.json()
                  if (data.init_point || data.sandbox_init_point) {
                    const redirect = data.init_point ?? data.sandbox_init_point
                    window.location.href = redirect
                  } else if (data.id) {
                    window.location.href = `https://www.mercadopago.cl/checkout/v1/redirect?pref_id=${data.id}`
                  } else if (data.error) {
                    setError(data.error)
                  }
                } catch (err) {
                  console.error(err)
                  setError('No pudimos iniciar el pago. Intenta nuevamente.')
                } finally {
                  setIsSubmitting(false)
                }
              }}
              className="w-full btn-whatsapp px-6 py-3"
              disabled={isCartEmpty || isSubmitting || !termsAccepted || mixedCycles || unavailable}
            >
              {isSubmitting
                ? 'Procesando...'
                : hasHybridCheckout
                  ? 'Pagar implementación (paso 1 de 2)'
                  : hasSubscription
                    ? 'Activar suscripción en MercadoPago'
                    : 'Pagar con MercadoPago'}
            </button>
          )}
          {step === 0 && items.length > 0 && (
            <button
              onClick={clear}
              className="w-full btn-outline px-6 py-3"
            >
              Vaciar carrito
            </button>
          )}
        </div>
      </aside>
    </div>
  )
}
