import { Hero } from '@/components/sections/Hero'
import { DosCaminos } from '@/components/sections/DosCaminos'
import { OfertaLandingExpress } from '@/components/sections/OfertaLandingExpress'
import { OfertaCrecimiento } from '@/components/sections/OfertaCrecimiento'
import { PorQueTresMeses } from '@/components/sections/PorQueTresMeses'
import { Proceso } from '@/components/sections/Proceso'
import { PruebaSocial } from '@/components/sections/PruebaSocial'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'

/**
 * Embudo: problema → caminos → ofertas → objeción 3 meses → proceso → prueba → FAQ → CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DosCaminos />
      <OfertaLandingExpress />
      <OfertaCrecimiento />
      <PorQueTresMeses />
      <Proceso />
      <PruebaSocial />
      <FAQ />
      <CTAFinal />
    </>
  )
}
