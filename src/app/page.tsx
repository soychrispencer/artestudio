import { Hero } from '@/components/sections/Hero'
import { HomeStats } from '@/components/sections/HomeStats'
import { HomeTrabajos } from '@/components/sections/HomeTrabajos'
import { Problemas } from '@/components/sections/Problemas'
import { HomeServicios } from '@/components/sections/HomeServicios'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeStats />
      <HomeTrabajos />
      <Problemas />
      <HomeServicios />
      <FAQ />
      <CTAFinal />
    </>
  )
}
