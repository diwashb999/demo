"use client"

import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { FeaturesSection } from "@/components/features-section"
import { ForEveryoneSection } from "@/components/for-everyone-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { AllInOneSection } from "@/components/all-in-one-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TechnologySection } from "@/components/technology-section"
import { CareersSection } from "@/components/careers-section"
import { PopularServicesSection } from "@/components/popular-services-section"
import { CompanyCultureSection } from "@/components/company-culture-section"
import { GetStartedSection } from "@/components/get-started-section"
import { ContactSection } from "@/components/contact-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function HealthcareLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <ForEveryoneSection />
      <HowItWorksSection />

      <div id="pricing">
        <PricingSection />
      </div>

      <AllInOneSection />
      <TestimonialsSection />
      <TechnologySection />
      <CareersSection />
      <PopularServicesSection />
      <CompanyCultureSection />
      <GetStartedSection />
      <ContactSection />
      <FinalCtaSection />
    </div>
  )
}
