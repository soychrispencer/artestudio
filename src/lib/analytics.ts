type AnalyticsParams = Record<string, string | number | boolean | null | undefined>

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return

  const gtagFn = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtagFn !== 'function') return

  gtagFn('event', eventName, params)
}
