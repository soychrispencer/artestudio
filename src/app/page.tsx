import { HeroSection } from '@/components/sections/HeroSection'
import { EntryOffersSection } from '@/components/sections/EntryOffersSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { ServicesCatalogSection } from '@/components/sections/ServicesCatalogSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ContactSection } from '@/components/sections/ContactSection'

/**
 * One-page: inicio → ofertas → precios → servicios → proceso → contacto
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <EntryOffersSection />
      <PricingSection embedded />
      <ServicesCatalogSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
