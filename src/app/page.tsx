import { HeroSection } from '@/components/sections/HeroSection'
import { ResultsSection } from '@/components/sections/ResultsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      {/* 1. Hero: mensaje directo + precio ancla */}
      <HeroSection />

      {/* 2. Por qué Artestudio: métricas de confianza */}
      <ResultsSection />

      {/* 3. Planes: tabs por rubro + 3 niveles + complementarios */}
      <PricingSection />

      {/* 4. Proceso / confianza */}
      <TestimonialsSection />

      {/* 5. Portfolio */}
      <PortfolioSection />

      {/* 6. Contacto */}
      <ContactSection />
    </>
  )
}
