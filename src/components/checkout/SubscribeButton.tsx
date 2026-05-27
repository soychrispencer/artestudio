'use client'

import type { ReactNode } from 'react'
import { ShoppingCart } from 'tabler-icons-react'
import { useCart } from '@/components/cart/CartProvider'
import { trackEvent } from '@/lib/analytics'

type SubscribeButtonProps = {
  planId: string
  title: string
  setup: number
  monthly: number
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

export function SubscribeButton({
  planId,
  title,
  setup,
  monthly,
  children,
  variant = 'primary',
  className = '',
}: SubscribeButtonProps) {
  const { addItem, openCart } = useCart()

  const handleClick = () => {
    trackEvent('subscribe_click', { plan_id: planId, setup, monthly })
    addItem({
      id: planId,
      title,
      setup,
      monthly,
      quantity: 1,
    })
    openCart()
  }

  const base =
    variant === 'primary'
      ? 'btn-whatsapp w-full justify-center py-3.5'
      : 'btn-outline w-full justify-center py-3.5'

  return (
    <button type="button" onClick={handleClick} className={`${base} ${className}`}>
      <ShoppingCart className="w-4 h-4" />
      {children}
    </button>
  )
}
