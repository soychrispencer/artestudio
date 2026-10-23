'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT, FOOTER_SOLUTIONS, WA_LINKS } from '@/lib/site'
import s from '@/components/studio/StudioChrome.module.css'

export function Footer() {
  const pathname = usePathname()
  if (['/soychrispencer', '/construye', '/dev'].some(prefix => pathname.startsWith(prefix))) return null
  return (
    <footer className={s.footer}>
      <div className={s.footerInner}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}><Link href="/" aria-label="Artestudio inicio"><Image src="/logos/Artestudio-wordmark-white.svg" alt="Artestudio" width={260} height={54} /></Link><p>Creatividad con intención.<br />Tecnología con dirección.</p></div>
          <div><p className={s.footerLabel}>Explora</p><div className={s.footerLinks}>{FOOTER_SOLUTIONS.map(link => <Link key={link.label} href={link.href}>{link.label}</Link>)}</div></div>
          <div><p className={s.footerLabel}>Mantengamos el contacto</p><div className={s.footerLinks}><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer">{CONTACT.whatsapp} ↗</a><a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={CONTACT.behance} target="_blank" rel="noopener noreferrer">Behance ↗</a></div></div>
        </div>
        <div className={s.footerBottom}><span>© 2019–2026 Artestudio.</span><Link href="/condiciones-servicios">Condiciones de los servicios</Link><Link href="/construye">Conoce el Método Construye ↗</Link><a href="#contenido">Volver arriba ↑</a></div>
      </div>
    </footer>
  )
}
