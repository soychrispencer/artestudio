import { Hero } from '@/components/sections/Hero'
import { PlanesSuscripcion } from '@/components/sections/PlanesSuscripcion'
import { PropiedadSection } from '@/components/sections/PropiedadSection'
import { AddonsSection } from '@/components/sections/AddonsSection'
import { Proceso } from '@/components/sections/Proceso'
import { PruebaSocial } from '@/components/sections/PruebaSocial'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <PlanesSuscripcion />
      <PropiedadSection />
      <AddonsSection />
      <Proceso />
      <PruebaSocial />
      <FAQ />
      <CTAFinal />
    </>
  )
}
