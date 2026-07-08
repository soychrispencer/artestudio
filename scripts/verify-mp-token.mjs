import fs from 'node:fs'

const envPath = 'C:/Users/chris/Desktop/Artestudio/.env.local'
const token = fs
  .readFileSync(envPath, 'utf8')
  .split(/\r?\n/)
  .find((line) => line.startsWith('MERCADOPAGO_ACCESS_TOKEN='))
  ?.split('=')
  .slice(1)
  .join('=')
  .trim()

if (!token) {
  console.error('No MERCADOPAGO_ACCESS_TOKEN in .env.local')
  process.exit(1)
}

const response = await fetch('https://api.mercadopago.com/users/me', {
  headers: { Authorization: `Bearer ${token}` },
})

const body = await response.json().catch(() => ({}))
console.log(
  JSON.stringify(
    {
      ok: response.ok,
      status: response.status,
      liveMode: body?.live_mode ?? null,
      userId: body?.id ?? null,
      isTestToken: token.startsWith('TEST-'),
      isLiveToken: token.startsWith('APP_USR-'),
    },
    null,
    2,
  ),
)
