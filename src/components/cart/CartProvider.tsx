'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { X, Trash, ChevronLeft } from 'tabler-icons-react'
import { formatPrice } from '@/lib/utils'
import { VALIDATION } from '@/lib/constants'

export type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
  billing?: 'mensual'
}

type CartContextValue = {
  items: CartItem[]
  total: number
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
          setItems(parsed)
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
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  )

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((entry) => entry.id === item.id)
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: clampQuantity(entry.quantity + item.quantity) }
            : entry
        )
      }
      return [...prev, { ...item, quantity: clampQuantity(item.quantity) }]
    })
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
  const { items, total, isOpen, closeCart, removeItem, updateQuantity, clear } = useCart()
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formStartedAt, setFormStartedAt] = useState<number | null>(null)
  const [honeypot, setHoneypot] = useState('')
  const [isHuman, setIsHuman] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  if (!isOpen) return null

  const steps = ['Carrito', 'Datos', 'Verificar']
  const currentStep = steps[step] ?? steps[0]
  const isCartEmpty = items.length === 0
  const captchaQuestion = '¿Cuánto es 3 + 4?'

  const goToStep = (nextStep: number) => {
    setError('')
    setStep(nextStep)
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

    if (captchaAnswer.trim() !== '7') {
      return 'Completa la verificación anti-spam.'
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
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-dark-bg border-l border-gray-200 dark:border-dark-bg-tertiary shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-dark-bg-tertiary">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (step > 0) {
                  goToStep(step - 1)
                }
              }}
              className={`w-10 h-10 rounded-xl border border-gray-200 dark:border-dark-bg-tertiary flex items-center justify-center transition-colors ${
                step === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:border-primary'
              }`}
              aria-label="Volver"
              disabled={step === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                Paso {step + 1} de 3
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {currentStep}
              </h3>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-xl border border-gray-200 dark:border-dark-bg-tertiary flex items-center justify-center hover:border-primary transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pt-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-gray-500 dark:text-dark-text-secondary">
            {steps.map((label, idx) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full border ${
                    idx <= step
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-200 dark:border-dark-bg-tertiary text-gray-400'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
                {idx < steps.length - 1 && (
                  <span className="flex-1 h-px bg-gray-200 dark:bg-dark-bg-tertiary" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {step === 0 && (
            <>
              {items.length === 0 && (
                <div className="rounded-2xl border border-dashed border-gray-200 dark:border-dark-bg-tertiary p-6 text-center text-gray-600 dark:text-dark-text-secondary">
                  Tu carrito está vacío.
                </div>
              )}

              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary p-4 bg-gray-50 dark:bg-dark-bg-secondary"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                        {formatPrice(item.price)} CLP
                        {item.billing === 'mensual' && (
                          <span className="ml-1">/mes</span>
                        )}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                      aria-label="Quitar item"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary text-gray-700 dark:text-dark-text-secondary"
                      >
                        -
                      </button>
                      <span className="min-w-[28px] text-center font-semibold text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border border-gray-200 dark:border-dark-bg-tertiary text-gray-700 dark:text-dark-text-secondary"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                  Datos de contacto
                </p>
                <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-2">
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
                <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  Nombre y apellido *
                  <input
                    type="text"
                    value={buyer.name}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, name: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    placeholder="Ej: Valentina Soto"
                    required
                  />
                </label>
                <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  Email *
                  <input
                    type="email"
                    value={buyer.email}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, email: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    placeholder="hola@tudominio.cl"
                    required
                  />
                </label>
                <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  WhatsApp / Teléfono *
                  <input
                    type="tel"
                    value={buyer.phone}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, phone: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </label>
                <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  Empresa (opcional)
                  <input
                    type="text"
                    value={buyer.company}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, company: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    placeholder="Nombre de la marca"
                  />
                </label>
                <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  {captchaQuestion} *
                  <input
                    type="text"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    placeholder="Respuesta"
                    required
                  />
                </label>
                <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-dark-text-secondary">
                  <input
                    type="checkbox"
                    checked={isHuman}
                    onChange={(e) => setIsHuman(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
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
              <div className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary bg-gray-50 dark:bg-dark-bg-secondary p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                  Datos confirmados
                </p>
                <div className="mt-3 text-sm text-gray-700 dark:text-dark-text-secondary space-y-2">
                  <p><span className="font-semibold text-gray-900 dark:text-white">Cliente:</span> {buyer.name}</p>
                  <p><span className="font-semibold text-gray-900 dark:text-white">Email:</span> {buyer.email}</p>
                  <p><span className="font-semibold text-gray-900 dark:text-white">Teléfono:</span> {buyer.phone}</p>
                  {buyer.company && (
                    <p><span className="font-semibold text-gray-900 dark:text-white">Empresa:</span> {buyer.company}</p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-dark-bg-tertiary p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                  Resumen de compra
                </p>
                <div className="mt-3 space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-700 dark:text-dark-text-secondary">
                      <span>
                        {item.title} x{item.quantity}
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                Al continuar serás redirigido a MercadoPago para completar el pago.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 dark:border-dark-bg-tertiary p-6 space-y-4">
          <div className="flex items-center justify-between text-lg font-semibold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
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
              disabled={isCartEmpty}
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
                  window.localStorage.setItem(
                    'last_order',
                    JSON.stringify({
                      orderId,
                      buyer,
                      items,
                      total,
                    })
                  )

                  const res = await fetch('/api/payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      items,
                      customer: buyer,
                      orderId,
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
              disabled={isCartEmpty || isSubmitting}
            >
              {isSubmitting ? 'Procesando...' : 'Pagar con MercadoPago'}
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
