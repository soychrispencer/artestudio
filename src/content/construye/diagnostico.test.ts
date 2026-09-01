import { describe, expect, it } from 'vitest'
import {
  computeDiagnosticResult,
  DIAGNOSTIC_QUESTIONS,
  type DiagnosticAnswers,
  type Letter,
} from './diagnostico'

function fill(letter: Letter): DiagnosticAnswers {
  return Object.fromEntries(DIAGNOSTIC_QUESTIONS.map((q) => [q.id, letter]))
}

describe('computeDiagnosticResult', () => {
  it('maps majority letter to stage', () => {
    expect(computeDiagnosticResult(fill('A')).stageId).toBe('idea')
    expect(computeDiagnosticResult(fill('B')).stageId).toBe('fundamentos')
    expect(computeDiagnosticResult(fill('C')).stageId).toBe('construccion')
    expect(computeDiagnosticResult(fill('D')).stageId).toBe('sistema')
  })

  it('breaks ties toward the lower letter', () => {
    const answers = fill('C')
    // 5A + 5C → empate → A (más baja)
    DIAGNOSTIC_QUESTIONS.slice(0, 5).forEach((q) => {
      answers[q.id] = 'A'
    })
    const result = computeDiagnosticResult(answers)
    expect(result.counts.A).toBe(5)
    expect(result.counts.C).toBe(5)
    expect(result.stageLetter).toBe('A')
    expect(result.stageId).toBe('idea')
  })
})
