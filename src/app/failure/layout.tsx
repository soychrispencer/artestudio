import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pago no completado',
  robots: { index: false, follow: false },
}

export default function FailureLayout({ children }: { children: React.ReactNode }) {
  return children
}
