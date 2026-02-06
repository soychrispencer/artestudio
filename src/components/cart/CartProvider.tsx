'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { X, Trash } from 'tabler-icons-react'
import { formatPrice } from '@/lib/utils'

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
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-dark-bg border-l border-gray-200 dark:border-dark-bg-tertiary shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-dark-bg-tertiary">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
              Carrito
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Tu selección
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-xl border border-gray-200 dark:border-dark-bg-tertiary flex items-center justify-center hover:border-primary transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
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
        </div>

        <div className="border-t border-gray-200 dark:border-dark-bg-tertiary p-6 space-y-4">
          {showForm && (
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-dark-text-secondary">
                  Datos de contacto
                </p>
              </div>
              <div className="grid gap-3">
                <label className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  Nombre y apellido
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
                  Email
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
                  WhatsApp / Teléfono
                  <input
                    type="tel"
                    value={buyer.phone}
                    onChange={(e) => setBuyer((prev) => ({ ...prev, phone: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-gray-200 dark:border-dark-bg-tertiary bg-white dark:bg-dark-bg px-3 py-2 text-gray-900 dark:text-white"
                    placeholder="+56 9 1234 5678"
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
              </div>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
            </div>
          )}
          <div className="flex items-center justify-between text-lg font-semibold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="w-full btn-whatsapp px-6 py-3"
              disabled={items.length === 0}
            >
              Continuar contratación
            </button>
          )}
          {showForm && (
            <button
              onClick={async () => {
                if (!buyer.name.trim() || !buyer.email.trim()) {
                  setError('Completa nombre y email para continuar.')
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
              disabled={items.length === 0 || isSubmitting}
            >
              {isSubmitting ? 'Procesando...' : 'Pagar con MercadoPago'}
            </button>
          )}
          {items.length > 0 && (
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
