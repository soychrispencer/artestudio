import type { Metadata } from 'next'
import { DiagnosticQuiz } from '@/components/construye/DiagnosticQuiz'

export const metadata: Metadata = {
  title: 'Diagnóstico',
  description:
    'Diagnostica tu negocio en 10 pilares: Idea, Fundamentos, Construcción o Sistema. 3–5 minutos.',
  alternates: {
    canonical: '/construye/diagnostico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DiagnosticoPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <DiagnosticQuiz />
    </div>
  )
}
