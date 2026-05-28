import { Hero } from '@/components/sections/Hero'
import { PlanesSuscripcion } from '@/components/sections/PlanesSuscripcion'
import { ServiciosIndividuales } from '@/components/sections/ServiciosIndividuales'
import { Proceso } from '@/components/sections/Proceso'
import { PruebaSocial } from '@/components/sections/PruebaSocial'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <PlanesSuscripcion />
      <ServiciosIndividuales />
      <Proceso />
      <PruebaSocial />
      <FAQ />
      <CTAFinal />
    </>
  )
}
