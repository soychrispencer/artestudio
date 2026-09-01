'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  CONSTRUYE_PATHS,
  DIAGNOSTIC_QUESTIONS,
  LETTER_LABELS,
  STORAGE_KEY,
  computeDiagnosticResult,
  type DiagnosticAnswers,
  type Letter,
} from '@/content/construye/diagnostico'
import styles from '@/components/construye/construye.module.css'

const OPTIONS: Letter[] = ['A', 'B', 'C', 'D']

export function DiagnosticQuiz() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<DiagnosticAnswers>({})

  const total = DIAGNOSTIC_QUESTIONS.length
  const current = DIAGNOSTIC_QUESTIONS[index]
  const selected = answers[current.id]
  const answeredCount = useMemo(
    () => DIAGNOSTIC_QUESTIONS.filter((q) => answers[q.id]).length,
    [answers],
  )
  const progress = (answeredCount / total) * 100

  function choose(letter: Letter) {
    setAnswers((prev) => ({ ...prev, [current.id]: letter }))
  }

  function goNext() {
    if (!answers[current.id]) return

    if (index < total - 1) {
      setIndex((i) => i + 1)
      return
    }

    const result = computeDiagnosticResult(answers)
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result))
    } catch {
      // ignore quota / private mode
    }
    router.push(CONSTRUYE_PATHS.resultado)
  }

  return (
    <div className={`${styles.mcShellPad} py-10 md:py-14`}>
      <div className={styles.mcContent}>
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link href={CONSTRUYE_PATHS.home} className={styles.mcLink}>
          ← Inicio
        </Link>
        <p className={`text-sm tabular-nums ${styles.mcMuted}`}>
          {Math.min(index + 1, total)} / {total}
        </p>
      </div>

      <div className={styles.mcProgressTrack} aria-hidden>
        <div className={styles.mcProgressFill} style={{ width: `${progress}%` }} />
      </div>

      <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.16em] ${styles.mcAccent}`}>
        Pilar · {current.pillar}
      </p>
      <h1 className={`mt-3 text-2xl font-bold leading-snug md:text-3xl ${styles.mcInk}`}>
        {current.question}
      </h1>
      <p className={`mt-3 text-sm ${styles.mcMuted}`}>
        Elige la opción que más se parece a tu realidad hoy.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        {OPTIONS.map((letter) => (
          <button
            key={letter}
            type="button"
            onClick={() => choose(letter)}
            className={`${styles.mcOption} ${selected === letter ? styles.mcOptionActive : ''}`}
          >
            <span className={`block text-xs font-semibold uppercase tracking-[0.14em] ${styles.mcAccent}`}>
              {letter} · {LETTER_LABELS[letter]}
            </span>
            <span className={`mt-1 block text-[0.95rem] ${styles.mcInk}`}>{optionHint(letter)}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between gap-4">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className={`text-sm disabled:opacity-30 ${styles.mcMuted}`}
        >
          Anterior
        </button>
        <button
          type="button"
          disabled={!selected}
          onClick={goNext}
          className={`text-sm font-semibold disabled:opacity-30 ${styles.mcAccent}`}
        >
          {index < total - 1 ? 'Siguiente →' : 'Ver resultado →'}
        </button>
      </div>
      </div>
    </div>
  )
}

function optionHint(letter: Letter): string {
  switch (letter) {
    case 'A':
      return 'No lo tengo definido o casi no existe.'
    case 'B':
      return 'Existe a ratos, según el día o la urgencia.'
    case 'C':
      return 'Hay piezas reales, pero incompletas o desconectadas.'
    case 'D':
      return 'Está claro, documentado y se sostiene sin improvisar.'
  }
}
