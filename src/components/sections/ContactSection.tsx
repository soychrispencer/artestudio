'use client'

import Link from 'next/link'
import { BrandWhatsapp } from 'tabler-icons-react'
import { CONTACT_INFO } from '@/lib/constants'
import { PageSection } from '@/components/ui/PageSection'
import { SECTION_IDS } from '@/lib/navigation'
import { trackEvent } from '@/lib/analytics'

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hola artestudio, quiero hablar de mi proyecto.')}`

  return (
    <PageSection
      id={SECTION_IDS.contacto}
      eyebrow="Paso 5"
      title="Contacto"
      description="Cuéntanos qué necesitas. Respondemos por WhatsApp o email."
      muted
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('contact_cta_click', { target: 'whatsapp' })}
          className="btn-whatsapp px-6 py-3.5 justify-center"
        >
          <BrandWhatsapp className="w-5 h-5" />
          WhatsApp
        </Link>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          onClick={() => trackEvent('contact_cta_click', { target: 'email' })}
          className="btn-outline px-6 py-3.5 justify-center"
        >
          {CONTACT_INFO.email}
        </a>
      </div>
    </PageSection>
  )
}
