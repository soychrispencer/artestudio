/**
 * Utilidades y funciones auxiliares para artestudio.cl
 */

/**
 * Formatea un número como precio en pesos chilenos
 */
export function formatPrice(price: string | number): string {
  const num = typeof price === 'string' ? parseFloat(price) : price
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(num)
}

/**
 * Abre WhatsApp con un mensaje pre-escrito
 */
export function openWhatsApp(
  phoneNumber: string = '+56938733230',
  message?: string
): void {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : 'Hola, me interesa conocer más sobre artestudio.cl'

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Error al copiar:', err)
  }
}

/**
 * Formatea una fecha en español
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Verifica si el usuario está en un dispositivo móvil
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Scroll suave a un elemento
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Obtiene los parámetros de URL
 */
export function getUrlParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const result: Record<string, string> = {}

  params.forEach((value, key) => {
    result[key] = value
  })

  return result
}

/**
 * Espera un tiempo determinado
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Calcula el descuento
 */
export function calculateDiscount(
  originalPrice: number,
  discountPercentage: number
): number {
  return originalPrice * (1 - discountPercentage / 100)
}

/**
 * Obtiene el nombre del navegador
 */
export function getBrowserName(): string {
  if (typeof window === 'undefined') return 'Unknown'

  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Firefox') > -1) return 'Firefox'
  if (userAgent.indexOf('Chrome') > -1) return 'Chrome'
  if (userAgent.indexOf('Safari') > -1) return 'Safari'
  if (userAgent.indexOf('Edge') > -1) return 'Edge'
  return 'Unknown'
}

/**
 * Debounce para funciones
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle para funciones
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false

  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Combina clases CSS condicionalmente (versión ligera de clsx/tailwind-merge)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
