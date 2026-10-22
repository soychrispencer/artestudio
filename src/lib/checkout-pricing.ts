import { SUBSCRIPTION_PLANS, SOCIAL_MEDIA_PLANS, VIDEO_PACK_4, VIDEO_PACK_8 } from './subscriptions'

export const withIVA = (net: number) => Math.round(net * 119 / 100)
export const ONLINE_PLANS = [...SUBSCRIPTION_PLANS, ...SOCIAL_MEDIA_PLANS.filter(p => p.setup === 0), VIDEO_PACK_4, VIDEO_PACK_8]
export function getOnlinePlan(id: string) {
  return ONLINE_PLANS.find(plan => plan.id === id)
}
export function monthlyServiceLabel(id: string) {
  return id === 'plan-esencial' ? 'Hosting y mantención técnica' : id === 'plan-landing-redes' ? 'Redes sociales + operación web' : 'Servicio mensual'
}
