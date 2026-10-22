import Link from 'next/link'
export default function SuccessPage() {
  return <main className="max-w-xl mx-auto px-6 pt-36 pb-24 space-y-6 text-[var(--text)]">
    <p className="text-sm text-muted">Artestudio · Contratación</p>
    <h1 className="text-4xl">Gracias por volver.</h1>
    <p>Consulta el estado definitivo de tu pago o suscripción en MercadoPago. Volver a esta página no confirma por sí solo una transacción aprobada.</p>
    <p>Coordinaremos el inicio y la recepción de materiales una vez confirmada la contratación. Conserva tu referencia de operación para cualquier consulta.</p>
    <a className="btn-whatsapp inline-flex px-6 py-3" href="https://wa.me/56938733230">Coordinar con Artestudio</a>
    <p><Link className="underline" href="/condiciones-servicios">Condiciones del servicio</Link></p>
    <p><Link className="underline" href="/servicios">Volver a servicios</Link></p>
  </main>
}
