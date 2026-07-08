import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pago pendiente',
  robots: { index: false, follow: false },
}

export default function PendingLayout({ children }: { children: React.ReactNode }) {
  return children
}
