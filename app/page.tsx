import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { StakeholderSection } from "@/components/stakeholder-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AllInOneSection } from "@/components/all-in-one-section"
import { TechnologySection } from "@/components/technology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <StakeholderSection />
      <FeaturesSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <AllInOneSection />
      <div id="technology">
        <TechnologySection />
      </div>
      <TestimonialsSection />
      <StatsSection />
      <FinalCtaSection />
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}
