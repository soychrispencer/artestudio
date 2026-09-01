'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONSTRUYE_PATHS } from '@/content/construye/diagnostico'
import styles from '@/components/construye/construye.module.css'

export function ConstruyeChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLanding = pathname === CONSTRUYE_PATHS.home
  const [heroDark, setHeroDark] = useState(true)
  const overDark = isLanding && heroDark

  useEffect(() => {
    if (!isLanding) return

    const hero = document.getElementById('mc-hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroDark(entry.boundingClientRect.bottom > 72)
      },
      { threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1] },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [isLanding])

  return (
    <>
      <header className={`${styles.mcHeader} ${overDark ? styles.mcHeaderDark : ''}`}>
        <div className={`${styles.mcShellPad} flex items-center justify-between gap-4`}>
          <Link href={CONSTRUYE_PATHS.home} className={styles.mcBrand}>
            <span className={styles.mcBrandName}>
              Método <span className={styles.mcBrandAccent}>Construye</span>
            </span>
            <span className={styles.mcBrandMeta}>by Artestudio</span>
          </Link>
          <Link href={CONSTRUYE_PATHS.diagnostico} className={styles.mcHeaderLink}>
            Diagnóstico
          </Link>
        </div>
      </header>
      <div className={styles.construyeMain}>{children}</div>
      <footer className={styles.mcFooter}>
        <div className={`${styles.mcShellPad} flex flex-wrap items-center justify-between gap-3`}>
          <p>Construye, no improvises.</p>
          <p>
            Una publicación de <a href="https://artestudio.cl">Artestudio</a>
          </p>
        </div>
      </footer>
    </>
  )
}
