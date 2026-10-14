import type { Metadata } from 'next'
import Link from 'next/link'
import { CONSTRUYE_PATHS } from '@/content/construye/diagnostico'
import styles from '@/components/construye/construye.module.css'

export const metadata: Metadata = {
  title: 'Guía práctica 01',
  description:
    'Descarga gratis la Guía práctica 01 de Método Construye: principios, pilares y plan de 30 días.',
  alternates: {
    canonical: '/construye/guia',
  },
}

export default function GuiaPage() {
  return (
    <div className={`${styles.mcShellPad} flex min-h-[calc(100vh-12rem)] flex-col justify-center py-14`}>
      <div className={styles.mcContent}>
        <Link href={CONSTRUYE_PATHS.home} className={styles.mcLink}>
          ← Inicio
        </Link>

        <p className={`${styles.mcPill} mt-10`}>Gratis</p>
        <h1 className={`${styles.mcDisplay} mt-6 text-4xl md:text-5xl`}>Guía práctica 01</h1>
        <p className={`mt-4 leading-relaxed ${styles.mcMuted}`}>
          Workbook imprimible: 12 principios, 10 pilares, diagnóstico A–D y una decisión de 30 días.
          Úsala como espejo, no como lectura pasiva.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={CONSTRUYE_PATHS.guiaPdf}
            download="Metodo-Construye-Guia-practica-01.pdf"
            className={`${styles.mcBtn} ${styles.mcBtnPrimary}`}
          >
            Descargar PDF gratis
          </a>
          <a
            href={CONSTRUYE_PATHS.guiaFile}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.mcBtn} ${styles.mcBtnGhost}`}
          >
            Abrir versión web
          </a>
        </div>

        <div className="mt-4">
          <Link href={CONSTRUYE_PATHS.diagnostico} className={`${styles.mcBtn} ${styles.mcBtnGhost}`}>
            Hacer el diagnóstico primero
          </Link>
        </div>

        <p className={`mt-6 text-sm ${styles.mcMuted}`}>
          Si aún no te diagnosticaste, conviene hacerlo antes: sabrás por dónde empezar en el workbook.
        </p>
      </div>
    </div>
  )
}
