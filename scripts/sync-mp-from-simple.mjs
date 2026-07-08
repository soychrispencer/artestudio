import fs from 'node:fs'

const simpleEnvPath = 'C:/Users/chris/Desktop/Simple/services/api/.env.local'
const artestudioEnvPath = 'C:/Users/chris/Desktop/Artestudio/.env.local'

function parseEnv(content) {
  const out = {}
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const idx = line.indexOf('=')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    const hashIdx = value.indexOf(' #')
    if (hashIdx !== -1) value = value.slice(0, hashIdx).trim()
    out[key] = value
  }
  return out
}

function upsertEnvLine(lines, key, value) {
  const prefix = `${key}=`
  const idx = lines.findIndex((line) => line.trim().startsWith(prefix))
  const next = `${key}=${value}`
  if (idx === -1) lines.push(next)
  else lines[idx] = next
}

if (!fs.existsSync(simpleEnvPath)) {
  console.error('No se encontró Simple:', simpleEnvPath)
  process.exit(1)
}

const simple = parseEnv(fs.readFileSync(simpleEnvPath, 'utf8'))
const accessToken = simple.MERCADO_PAGO_ACCESS_TOKEN || simple.MERCADOPAGO_ACCESS_TOKEN

if (!accessToken) {
  console.error('Simple no tiene MERCADO_PAGO_ACCESS_TOKEN')
  process.exit(1)
}

let lines = fs.existsSync(artestudioEnvPath)
  ? fs.readFileSync(artestudioEnvPath, 'utf8').split(/\r?\n/)
  : []

upsertEnvLine(lines, 'MERCADOPAGO_ACCESS_TOKEN', accessToken)
upsertEnvLine(lines, 'MERCADO_PAGO_ACCESS_TOKEN', accessToken)

fs.writeFileSync(artestudioEnvPath, `${lines.filter((l, i, arr) => !(i === arr.length - 1 && l === '')).join('\n')}\n`)

console.log(
  JSON.stringify(
    {
      ok: true,
      synced: ['MERCADOPAGO_ACCESS_TOKEN', 'MERCADO_PAGO_ACCESS_TOKEN'],
      tokenPreview: `${accessToken.slice(0, 12)}...${accessToken.slice(-4)}`,
      live: accessToken.startsWith('APP_USR-'),
    },
    null,
    2,
  ),
)
