import { HeroSection } from '@/components/sections/HeroSection'
import { EntryOffersSection } from '@/components/sections/EntryOffersSection'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { HomePlansTeaser } from '@/components/sections/HomePlansTeaser'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ContactSection } from '@/components/sections/ContactSection'

/**
 * Inicio = embudo comercial simple:
 * Hero → 3 ofertas → por qué → enlace a precios/servicios → proceso → contacto
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <EntryOffersSection />
      <ResultsSection />
      <HomePlansTeaser />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
