#!/usr/bin/env node
/**
 * Sincroniza variables de Artestudio en Coolify y encola redeploy.
 * Credenciales Coolify: Simple/.env.deploy (COOLIFY_URL + COOLIFY_API_TOKEN)
 * Secretos MP: Simple/services/api/.env.local + Artestudio/.env.local
 *
 * Uso:
 *   node scripts/coolify-sync-artestudio.mjs           # audit
 *   node scripts/coolify-sync-artestudio.mjs --apply   # sync + deploy
 */
import fs from 'node:fs'

const ROOT = 'C:/Users/chris/Desktop/Artestudio'
const SIMPLE_DEPLOY = 'C:/Users/chris/Desktop/Simple/.env.deploy'
const SIMPLE_API_ENV = 'C:/Users/chris/Desktop/Simple/services/api/.env.local'
const ARTESTUDIO_ENV = `${ROOT}/.env.local`

const apply = process.argv.includes('--apply')
const force = process.argv.includes('--force')

function parseEnv(file) {
  if (!fs.existsSync(file)) return {}
  const out = {}
  for (const rawLine of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
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

function loadDeploy() {
  const env = parseEnv(SIMPLE_DEPLOY)
  const url = env.COOLIFY_URL?.replace(/\/$/, '')
  const token = env.COOLIFY_API_TOKEN
  if (!url || !token) {
    console.error('Faltan COOLIFY_URL o COOLIFY_API_TOKEN en Simple/.env.deploy')
    process.exit(1)
  }
  return { url, token }
}

function normalizeValue(value) {
  if (value == null) return ''
  let v = String(value).trim()
  if (
    (v.startsWith("'") && v.endsWith("'")) ||
    (v.startsWith('"') && v.endsWith('"'))
  ) {
    v = v.slice(1, -1)
  }
  return v
}
function preview(value) {
  if (!value) return '(vacío)'
  if (value.length <= 16) return '[set]'
  return `${value.slice(0, 12)}...${value.slice(-4)}`
}

const simpleApi = parseEnv(SIMPLE_API_ENV)
const artestudio = parseEnv(ARTESTUDIO_ENV)
const accessToken = simpleApi.MERCADO_PAGO_ACCESS_TOKEN || simpleApi.MERCADOPAGO_ACCESS_TOKEN
const publicKey =
  artestudio.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY || artestudio.MERCADOPAGO_PUBLIC_KEY || ''

/** Variables que deben existir en Coolify (producción). */
const TARGET = {
  MERCADOPAGO_ACCESS_TOKEN: accessToken,
  MERCADO_PAGO_ACCESS_TOKEN: accessToken,
  NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY: publicKey,
  NEXT_PUBLIC_SITE_URL: 'https://artestudio.cl',
  NEXT_PUBLIC_GA_ID: artestudio.NEXT_PUBLIC_GA_ID || '',
  NEXT_PUBLIC_WHATSAPP_NUMBER: '+56938744230',
  NEXT_PUBLIC_EMAIL: 'contacto@artestudio.cl',
  NEXT_PUBLIC_PHONE: '+56 9 3874 4230',
  NEXT_PUBLIC_INSTAGRAM_URL: 'https://instagram.com/artestudio.cl',
  NEXT_PUBLIC_TIKTOK_URL: 'https://tiktok.com/@artestudio.cl',
  NEXT_PUBLIC_FACEBOOK_URL: 'https://facebook.com/artestudio.cl',
}

const FORBIDDEN = new Set(['NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN'])

const { url, token } = loadDeploy()
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

async function listApps() {
  const res = await fetch(`${url}/api/v1/applications`, { headers })
  if (!res.ok) throw new Error(`List apps: ${res.status} ${await res.text()}`)
  return res.json()
}

async function listEnvs(uuid) {
  const res = await fetch(`${url}/api/v1/applications/${uuid}/envs`, { headers })
  if (!res.ok) throw new Error(`List envs: ${res.status} ${await res.text()}`)
  return res.json()
}

async function createEnv(uuid, key, value, isBuildtime = true) {
  const res = await fetch(`${url}/api/v1/applications/${uuid}/envs`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      key,
      value,
      is_buildtime: isBuildtime,
      is_runtime: true,
      is_literal: true,
    }),
  })
  if (!res.ok) throw new Error(`Create ${key}: ${res.status} ${await res.text()}`)
}

async function updateEnv(uuid, key, value, row) {
  const res = await fetch(`${url}/api/v1/applications/${uuid}/envs`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      key,
      value,
      is_buildtime: row?.is_buildtime ?? true,
      is_runtime: row?.is_runtime ?? true,
      is_literal: row?.is_literal ?? true,
    }),
  })
  if (!res.ok) throw new Error(`Update ${key}: ${res.status} ${await res.text()}`)
}

async function deleteEnv(uuid, envUuid) {
  const res = await fetch(`${url}/api/v1/applications/${uuid}/envs/${envUuid}`, {
    method: 'DELETE',
    headers,
  })
  if (!res.ok) throw new Error(`Delete env: ${res.status} ${await res.text()}`)
}

async function deploy(uuid) {
  const res = await fetch(`${url}/api/v1/deploy?uuid=${uuid}&force=${force}`, { headers })
  const body = await res.json()
  if (!res.ok) throw new Error(`Deploy: ${res.status} ${JSON.stringify(body)}`)
  return body
}

async function verifyMpToken() {
  if (!accessToken) return { ok: false, error: 'sin access token' }
  const res = await fetch('https://api.mercadopago.com/users/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const body = await res.json().catch(() => ({}))
  return {
    ok: res.ok,
    status: res.status,
    liveMode: body?.live_mode ?? null,
    userId: body?.id ?? null,
  }
}

async function main() {
  if (!accessToken) {
    console.error('No hay access token en Simple/services/api/.env.local')
    process.exit(1)
  }

  const mpCheck = await verifyMpToken()
  console.log('MercadoPago token:', mpCheck)

  const apps = await listApps()
  const app = apps.find((a) => String(a.fqdn || '').includes('artestudio'))
  if (!app) {
    console.error('No se encontró la app artestudio en Coolify')
    process.exit(1)
  }

  console.log(`\nApp: ${app.name}`)
  console.log(`UUID: ${app.uuid}`)
  console.log(`Build: ${app.build_pack} ${app.dockerfile_location || ''}`)
  console.log(`Status: ${app.status}`)
  console.log(`FQDN: ${app.fqdn}`)

  const envRows = await listEnvs(app.uuid)
  const byKey = new Map()
  for (const row of envRows) {
    const list = byKey.get(row.key) ?? []
    list.push(row)
    byKey.set(row.key, list)
  }

  let issues = 0
  let changed = false

  for (const forbidden of FORBIDDEN) {
    const rows = byKey.get(forbidden) ?? []
    if (!rows.length) continue
    issues += rows.length
    console.log(`\n!! Eliminar ${forbidden} (no debe ir al cliente)`)
    if (apply) {
      for (const row of rows) await deleteEnv(app.uuid, row.uuid)
      changed = true
    }
  }

  for (const [key, expected] of Object.entries(TARGET)) {
    const rows = byKey.get(key) ?? []
    const current = rows[0] ? normalizeValue(rows[0].real_value ?? rows[0].value ?? '') : undefined

    if (!expected && expected !== '') {
      console.log(`\n-- ${key}: sin valor fuente, omitido`)
      continue
    }

    const ok = current === expected
    if (!ok) {
      issues += 1
      console.log(`\n!! ${key}`)
      console.log(`   actual:   ${preview(current)}`)
      console.log(`   esperado: ${preview(expected)}`)
    } else {
      console.log(`\nOK ${key} = ${preview(expected)}`)
    }

    if (rows.length > 1) {
      issues += rows.length - 1
      console.log(`   duplicados: ${rows.length}`)
      if (apply) {
        for (const row of rows.slice(1)) await deleteEnv(app.uuid, row.uuid)
        changed = true
      }
    }

    if (!apply || ok) continue

    if (!rows.length) {
      await createEnv(app.uuid, key, expected)
      console.log('   acción: creada')
    } else {
      await updateEnv(app.uuid, key, expected, rows[0])
      console.log('   acción: actualizada')
    }
    changed = true
  }

  console.log(`\n--- ${issues} diferencia(s) ---`)

  if (apply && changed) {
    console.log('\nEncolando redeploy (force=' + force + ')…')
    const body = await deploy(app.uuid)
    console.log(JSON.stringify(body, null, 2))
  } else if (apply && !changed) {
    console.log('\nVariables ya correctas. Sin redeploy.')
  } else if (!apply && issues > 0) {
    console.log('\nEjecuta: node scripts/coolify-sync-artestudio.mjs --apply')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
