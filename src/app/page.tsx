import { Hero } from '@/components/sections/Hero'
import { HomeServicios } from '@/components/sections/HomeServicios'
import { HomeAMedida } from '@/components/sections/HomeAMedida'
import { HomeConstruye } from '@/components/sections/HomeConstruye'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServicios />
      <HomeAMedida />
      <HomeConstruye />
      <CTAFinal />
    </>
  )
}
