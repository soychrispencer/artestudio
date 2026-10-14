export type Letter = 'A' | 'B' | 'C' | 'D'

export type StageId = 'idea' | 'fundamentos' | 'construccion' | 'sistema'

export const LETTER_LABELS: Record<Letter, string> = {
  A: 'No existe',
  B: 'Improvisado',
  C: 'Incompleto',
  D: 'Sistema',
}

export const STAGES: Record<
  StageId,
  {
    letter: Letter
    title: string
    headline: string
    body: string
  }
> = {
  idea: {
    letter: 'A',
    title: 'Idea',
    headline: 'Hay intención real. Todavía faltan fundamentos.',
    body: 'No es un fracaso: es el punto de partida. Antes de buscar más clientes o más herramientas, necesitas claridad sobre el problema, la oferta y hacia dónde vas.',
  },
  fundamentos: {
    letter: 'B',
    title: 'Fundamentos',
    headline: 'Hay movimiento, pero casi todo depende de ti.',
    body: 'Estás ocupado y avanzas a ratos. El riesgo es confundir actividad con construcción. Tu siguiente paso es convertir lo improvisado en piezas claras y repetibles.',
  },
  construccion: {
    letter: 'C',
    title: 'Construcción',
    headline: 'Ya tienes piezas reales. Falta convertirlas en sistema.',
    body: 'No parte de cero. El trabajo ahora es conectar lo que existe: menos reinventar cada día, más orden, medición y entrega consistente.',
  },
  sistema: {
    letter: 'D',
    title: 'Sistema',
    headline: 'Hay estructura real. El foco es optimizar.',
    body: 'Tu negocio ya no vive solo de urgencias. El siguiente nivel es fortalecer el pilar más débil y mejorar sin volver a improvisar.',
  },
}

export const DIAGNOSTIC_QUESTIONS: {
  id: string
  pillar: string
  question: string
}[] = [
  {
    id: 'direccion',
    pillar: 'Dirección',
    question: '¿Tienes claro qué problema resuelves y hacia dónde vas?',
  },
  {
    id: 'marca',
    pillar: 'Marca',
    question: '¿Tu marca transmite una identidad clara y consistente?',
  },
  {
    id: 'producto',
    pillar: 'Producto / Servicio',
    question: '¿Tu oferta responde a un problema claro (idealmente ya contrastado)?',
  },
  {
    id: 'marketing',
    pillar: 'Marketing',
    question: '¿Tienes definido cómo descubren que existes?',
  },
  {
    id: 'ventas',
    pillar: 'Ventas',
    question: '¿Cómo pasa alguien de interesado a cliente? ¿Ese proceso está claro?',
  },
  {
    id: 'operaciones',
    pillar: 'Operaciones',
    question: '¿Puedes entregar con calidad constante?',
  },
  {
    id: 'finanzas',
    pillar: 'Finanzas',
    question: '¿Sabes cuánto gana y cuesta tu negocio cada mes?',
  },
  {
    id: 'tecnologia',
    pillar: 'Tecnología',
    question: '¿Usas herramientas o IA para problemas reales del negocio?',
  },
  {
    id: 'legal',
    pillar: 'Legal',
    question: '¿Tienes ordenados los aspectos legales básicos?',
  },
  {
    id: 'mejora',
    pillar: 'Mejora continua',
    question: '¿Mides si tu negocio mejora con el tiempo?',
  },
]

const LETTER_RANK: Record<Letter, number> = { A: 0, B: 1, C: 2, D: 3 }

const STAGE_BY_LETTER: Record<Letter, StageId> = {
  A: 'idea',
  B: 'fundamentos',
  C: 'construccion',
  D: 'sistema',
}

export type DiagnosticAnswers = Record<string, Letter>

export type DiagnosticResult = {
  stageId: StageId
  stageLetter: Letter
  counts: Record<Letter, number>
  weakest: { id: string; pillar: string; letter: Letter }
  strongest: { id: string; pillar: string; letter: Letter }
  answers: DiagnosticAnswers
}

export function computeDiagnosticResult(answers: DiagnosticAnswers): DiagnosticResult {
  const counts: Record<Letter, number> = { A: 0, B: 0, C: 0, D: 0 }
  for (const q of DIAGNOSTIC_QUESTIONS) {
    const letter = answers[q.id]
    if (letter) counts[letter] += 1
  }

  const order: Letter[] = ['A', 'B', 'C', 'D']
  let stageLetter: Letter = 'A'
  let best = -1
  for (const letter of order) {
    const n = counts[letter]
    if (n > best) {
      best = n
      stageLetter = letter
    }
    // empate → prevalece la más baja (ya recorrimos A→D, solo actualizamos si es estrictamente mayor)
  }

  let weakest = {
    id: DIAGNOSTIC_QUESTIONS[0].id,
    pillar: DIAGNOSTIC_QUESTIONS[0].pillar,
    letter: (answers[DIAGNOSTIC_QUESTIONS[0].id] || 'A') as Letter,
  }
  let strongest = { ...weakest }

  for (const q of DIAGNOSTIC_QUESTIONS) {
    const letter = answers[q.id]
    if (!letter) continue
    if (LETTER_RANK[letter] < LETTER_RANK[weakest.letter]) {
      weakest = { id: q.id, pillar: q.pillar, letter }
    }
    if (LETTER_RANK[letter] > LETTER_RANK[strongest.letter]) {
      strongest = { id: q.id, pillar: q.pillar, letter }
    }
  }

  return {
    stageId: STAGE_BY_LETTER[stageLetter],
    stageLetter,
    counts,
    weakest,
    strongest,
    answers,
  }
}

export const STORAGE_KEY = 'mc-diagnostico-v1'

export const CONSTRUYE_PATHS = {
  home: '/construye',
  diagnostico: '/construye/diagnostico',
  resultado: '/construye/resultado',
  guia: '/construye/guia',
  guiaFile: '/construye/guia-practica-01.html',
  guiaPdf: '/construye/metodo-construye-guia-practica-01.pdf',
} as const
