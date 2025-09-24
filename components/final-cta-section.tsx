"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Start Your Healthcare Journey Today</h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
          Thousands of Nepalis are already using our platform. Join them and experience the future of healthcare.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => window.open("https://patient.upchaarnepal.com/signup", "_blank")}
            className="bg-[#059669] hover:bg-green-700 text-white"
          >
            <Play className="h-6 w-6 mr-3" />
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-[#059669] text-[#059669] hover:bg-green-100"
            onClick={() => window.open("/about", "_blank")}
          >
            <ArrowRight className="h-6 w-6 mr-3" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
