'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ShoppingCart, Menu2, X } from 'tabler-icons-react'
import { NAV_LINKS, WA_LINKS } from '@/lib/site'
import { useCart } from '@/components/cart/CartProvider'
import { trackEvent } from '@/lib/analytics'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import s from '@/components/studio/StudioChrome.module.css'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const { items, openCart } = useCart()
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus() } }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menuOpen])

  if (['/soychrispencer', '/construye', '/dev'].some(prefix => pathname.startsWith(prefix))) return null

  return (
    <>
      <a href="#contenido" className={s.skipLink}>Ir al contenido</a>
      <header className={s.header} data-home={pathname === '/'}>
        <div className={s.navInner}>
          <Link href="/" aria-label="Artestudio inicio" className={s.logo}><Image src="/logos/Artestudio-wordmark-white.svg" alt="Artestudio" width={159} height={33} priority /></Link>
          <nav className={s.desktopNav} aria-label="Navegación principal">{NAV_LINKS.map(link => <Link key={link.href} href={link.href} aria-current={link.href === '/servicios' && pathname.startsWith('/servicios') ? 'page' : undefined}>{link.label}</Link>)}</nav>
          <div className={s.navActions}>
            {pathname !== '/' && <ThemeToggle className={s.iconButton} />}
            {cartCount > 0 && <button type="button" className={s.iconButton} onClick={() => { trackEvent('header_cart_click'); openCart() }} aria-label={`Abrir carrito, ${cartCount} productos`}><ShoppingCart size={18} /><span className={s.cartCount}>{cartCount}</span></button>}
            <a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer" className={s.navCta}>Conversemos <ArrowUpRight size={16} /></a>
            <button ref={menuButton} type="button" className={`${s.iconButton} ${s.menuButton}`} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="studio-mobile-nav" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X size={20} /> : <Menu2 size={20} />}</button>
          </div>
        </div>
        {menuOpen && <nav id="studio-mobile-nav" className={s.mobileNav} aria-label="Navegación móvil">{NAV_LINKS.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={20} /></Link>)}<a href={WA_LINKS.reunion} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Hablemos de tu proyecto <ArrowUpRight size={20} /></a></nav>}
      </header>
    </>
  )
}
