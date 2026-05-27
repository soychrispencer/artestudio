import { Hero } from '@/components/sections/Hero'
import { Problema } from '@/components/sections/Problema'
import { Servicios } from '@/components/sections/Servicios'
import { Planes } from '@/components/sections/Planes'
import { Proceso } from '@/components/sections/Proceso'
import { Testimonios } from '@/components/sections/Testimonios'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <Servicios />
      <Planes />
      <Proceso />
      <Testimonios />
      <FAQ />
      <CTAFinal />
    </>
  )
}
