import { Shield, Award, Lock, Star } from "lucide-react"

export function TrustedBySection() {
  const trustIndicators = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      title: "ISO 27001",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lock,
      title: "256-bit SSL",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Star,
      title: "FDA Approved",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-600 text-sm md:text-base font-medium">
            Trusted by healthcare professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <div key={index} className="text-center">
                <div
                  className={`${indicator.bgColor} rounded-2xl p-4 md:p-6 mb-3 md:mb-4 mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center`}
                >
                  <Icon className={`h-8 w-8 md:h-10 md:w-10 ${indicator.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{indicator.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
