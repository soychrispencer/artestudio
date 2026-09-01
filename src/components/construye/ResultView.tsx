'use client'

import { useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  CONSTRUYE_PATHS,
  DIAGNOSTIC_QUESTIONS,
  LETTER_LABELS,
  STAGES,
  STORAGE_KEY,
  type DiagnosticResult,
  type Letter,
} from '@/content/construye/diagnostico'
import styles from '@/components/construye/construye.module.css'

function readStoredResult(): DiagnosticResult | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as DiagnosticResult
  } catch {
    return null
  }
}

const emptySubscribe = () => () => {}

export function ResultView() {
  const router = useRouter()
  const result = useSyncExternalStore(emptySubscribe, readStoredResult, () => null)

  useEffect(() => {
    if (!result) router.replace(CONSTRUYE_PATHS.diagnostico)
  }, [result, router])

  if (!result) {
    return (
      <div className={`${styles.mcShellPad} py-20 ${styles.mcMuted}`}>
        <div className={styles.mcContent}>Cargando tu resultado…</div>
      </div>
    )
  }

  const stage = STAGES[result.stageId]
  const order: Letter[] = ['A', 'B', 'C', 'D']

  return (
    <div className={`${styles.mcShellPad} py-10 md:py-14`}>
      <div className={styles.mcContent}>
        <Link href={CONSTRUYE_PATHS.home} className={styles.mcLink}>
          ← Inicio
        </Link>

        <p className={`${styles.mcPill} mt-10`}>Tu etapa · {stage.letter}</p>
        <h1 className={`${styles.mcDisplay} mt-6 text-4xl md:text-5xl`}>{stage.title}</h1>
        <p className={`${styles.mcSerif} mt-4 text-2xl ${styles.mcAccent}`}>{stage.headline}</p>
        <p className={`mt-4 max-w-2xl leading-relaxed ${styles.mcMuted}`}>{stage.body}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className={styles.mcCard}>
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${styles.mcAccent}`}>
              Más débil
            </p>
            <p className={`mt-2 text-lg font-bold ${styles.mcInk}`}>{result.weakest.pillar}</p>
            <p className={`mt-1 text-sm ${styles.mcMuted}`}>
              {result.weakest.letter} · {LETTER_LABELS[result.weakest.letter]}
            </p>
          </div>
          <div className={styles.mcCard}>
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${styles.mcAccent}`}>
              Más fuerte
            </p>
            <p className={`mt-2 text-lg font-bold ${styles.mcInk}`}>{result.strongest.pillar}</p>
            <p className={`mt-1 text-sm ${styles.mcMuted}`}>
              {result.strongest.letter} · {LETTER_LABELS[result.strongest.letter]}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className={`text-lg font-bold ${styles.mcInk}`}>Distribución</h2>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {order.map((letter) => (
              <div key={letter} className={`${styles.mcCard} text-center !p-3`}>
                <p className={`text-xs ${styles.mcAccent}`}>{letter}</p>
                <p className={`mt-1 text-2xl font-bold ${styles.mcInk}`}>{result.counts[letter]}</p>
                <p className={`mt-0.5 text-[0.65rem] ${styles.mcMuted}`}>{LETTER_LABELS[letter]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className={`text-lg font-bold ${styles.mcInk}`}>Tus 10 pilares</h2>
          <ul className={`mt-4 divide-y border-y ${styles.mcDivider}`}>
            {DIAGNOSTIC_QUESTIONS.map((q) => {
              const letter = result.answers[q.id]
              return (
                <li key={q.id} className="flex items-center justify-between gap-4 py-3">
                  <span className={`text-sm ${styles.mcInk}`}>{q.pillar}</span>
                  <span
                    className={`shrink-0 text-xs font-semibold uppercase tracking-wide ${styles.mcAccent}`}
                  >
                    {letter} · {LETTER_LABELS[letter]}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={`${styles.mcHazlo} mt-12 rounded-r-xl p-6 md:p-8`}>
          <h2 className={`text-xl font-bold ${styles.mcInk}`}>Siguiente paso</h2>
          <p className={`mt-2 ${styles.mcMuted}`}>
            Descarga la Guía práctica 01 y trabaja el pilar más débil con el workbook. Sin atajos:
            claridad primero.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={CONSTRUYE_PATHS.guia} className={`${styles.mcBtn} ${styles.mcBtnPrimary}`}>
              Descargar Guía práctica 01
            </Link>
            <Link href={CONSTRUYE_PATHS.diagnostico} className={`${styles.mcBtn} ${styles.mcBtnGhost}`}>
              Repetir diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
