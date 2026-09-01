import type { Metadata } from 'next'
import { ResultView } from '@/components/construye/ResultView'

export const metadata: Metadata = {
  title: 'Tu resultado',
  description: 'Resultado de tu diagnóstico Método Construye: etapa, pilares débiles y siguientes pasos.',
  alternates: {
    canonical: '/construye/resultado',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ResultadoPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <ResultView />
    </div>
  )
}
