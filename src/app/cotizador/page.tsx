import type { Metadata } from 'next'
import { CotizadorSection } from '@/components/sections/CotizadorSection'

export const metadata: Metadata = {
  title: 'Cotizador Online | artestudio.cl',
  description:
    'Construye tu pack de servicios en línea: diseño, redes, audiovisual, web y desarrollo. Obtén una estimación clara de pago único y mensual.',
}

export default function QuoteBuilderPage() {
  return <CotizadorSection />
}
