import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setup confirmado',
  robots: { index: false, follow: false },
}

export default function PagoExitoLayout({ children }: { children: React.ReactNode }) {
  return children
}
