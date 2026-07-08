import { Hero } from '@/components/sections/Hero'
import { Metodologia } from '@/components/sections/Metodologia'
import { Problemas } from '@/components/sections/Problemas'
import { Soluciones } from '@/components/sections/Soluciones'
import { PlanesSuscripcion } from '@/components/sections/PlanesSuscripcion'
import { ServiciosIndividuales } from '@/components/sections/ServiciosIndividuales'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <Metodologia />
      <Problemas />
      <Soluciones />
      <PlanesSuscripcion />
      <ServiciosIndividuales />
      <FAQ />
      <CTAFinal />
    </>
  )
}
