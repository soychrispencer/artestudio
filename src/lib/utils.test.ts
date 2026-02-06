import { describe, expect, it, vi } from 'vitest'
import { calculateDiscount, cn, formatPrice, openWhatsApp } from './utils'

describe('utils', () => {
  it('formatPrice formats CLP values', () => {
    expect(formatPrice(1234)).toBe('$1.234')
    expect(formatPrice('1000')).toBe('$1.000')
  })

  it('calculateDiscount returns the discounted price', () => {
    expect(calculateDiscount(100, 20)).toBe(80)
  })

  it('cn joins class names safely', () => {
    expect(cn('a', false, undefined, 'b', null)).toBe('a b')
  })

  it('openWhatsApp opens the correct URL', () => {
    const originalWindow = globalThis.window as
      | (Window & typeof globalThis)
      | undefined
    const open = vi.fn()
    globalThis.window = { open } as unknown as Window & typeof globalThis

    openWhatsApp('+56 9 1234 5678', 'Hola mundo')

    expect(open).toHaveBeenCalledWith(
      'https://wa.me/56912345678?text=Hola%20mundo',
      '_blank'
    )

    globalThis.window = originalWindow as Window & typeof globalThis
  })
})
