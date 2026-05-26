import { HeroSection } from '@/components/sections/HeroSection'
import { EntryOffersSection } from '@/components/sections/EntryOffersSection'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { ComplementServicesSection } from '@/components/sections/ComplementServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EntryOffersSection />
      <ResultsSection />
      <PricingSection />
      <ComplementServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
