import Link from 'next/link'
import { CONSTRUYE_PATHS } from '@/content/construye/diagnostico'
import styles from '@/components/construye/construye.module.css'

export default function ConstruyePage() {
  return (
    <div>
      <section
        id="mc-hero"
        className={`${styles.mcBand} ${styles.mcBandHero} ${styles.mcBandDark}`}
      >
        <div className={styles.mcShellPad}>
          <div className={styles.mcContent}>
            <p className={`${styles.mcPill} mb-6`}>Método Construye</p>

            <h1 className={`${styles.mcDisplay} text-[clamp(2.6rem,8vw,4.6rem)]`}>
              Construye,
              <br />
              <span className={styles.mcSerif}>no improvises.</span>
            </h1>

            <p className={`mt-6 max-w-xl text-lg leading-relaxed md:text-xl ${styles.mcMuted}`}>
              Diagnostica en qué etapa está tu negocio y descarga la Guía práctica 01 — el primer paso
              para dejar de improvisar.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={CONSTRUYE_PATHS.diagnostico}
                className={`${styles.mcBtn} ${styles.mcBtnPrimary}`}
              >
                Hacer el diagnóstico
                <span aria-hidden>→</span>
              </Link>
              <Link href={CONSTRUYE_PATHS.guia} className={`${styles.mcBtn} ${styles.mcBtnGhost}`}>
                Ver la guía
              </Link>
            </div>

            <p className={`mt-8 text-sm ${styles.mcMuted}`}>
              3–5 minutos · 10 pilares · Resultado inmediato
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.mcBand} ${styles.mcBandLight}`}>
        <div className={styles.mcShellPad}>
          <div className={styles.mcContentWide}>
            <p className={styles.mcStepNum}>Cómo funciona</p>
            <h2 className={`${styles.mcDisplay} mt-3 text-3xl md:text-4xl`}>Tres pasos. Sin humo.</h2>
            <p className={`mt-3 max-w-xl ${styles.mcMuted}`}>
              Del diagnóstico a la guía: un recorrido corto para ver tu negocio con honestidad.
            </p>

            <div className={styles.mcSteps}>
              {[
                {
                  n: '01',
                  t: 'Diagnóstico',
                  d: 'Respondes 10 preguntas sobre los pilares de tu negocio. Sin teoría: señales concretas.',
                },
                {
                  n: '02',
                  t: 'Resultado',
                  d: 'Ves tu etapa (Idea, Fundamentos, Construcción o Sistema) y dónde estás más débil.',
                },
                {
                  n: '03',
                  t: 'Guía práctica',
                  d: 'Descargas el workbook gratis para trabajar principios, pilares y un plan de 30 días.',
                },
              ].map((item) => (
                <div key={item.n} className={styles.mcStep}>
                  <p className={styles.mcStepNum}>{item.n}</p>
                  <h3 className={`mt-3 text-xl font-bold ${styles.mcInk}`}>{item.t}</h3>
                  <p className={`mt-2 text-[0.95rem] leading-relaxed ${styles.mcMuted}`}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.mcBand} ${styles.mcBandLight} ${styles.mcBandClose}`}>
        <div className={styles.mcShellPad}>
          <div className={styles.mcContent}>
            <div className={styles.mcHazloBlock}>
              <p className={styles.mcStepNum}>Siguiente paso</p>
              <h2 className={`${styles.mcDisplay} mt-3 text-3xl md:text-4xl`}>
                Empieza por mirarte
                <br />
                <span className={styles.mcSerif}>con honestidad</span>
              </h2>
              <p className={`mt-4 max-w-xl ${styles.mcMuted}`}>
                La guía no vende un atajo. Te da un marco para ver qué existe, qué está improvisado y qué
                falta convertir en sistema.
              </p>
              <Link
                href={CONSTRUYE_PATHS.diagnostico}
                className={`${styles.mcBtn} ${styles.mcBtnPrimary} mt-8`}
              >
                Empezar diagnóstico
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
