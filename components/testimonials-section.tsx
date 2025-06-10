import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ram Sharma",
      location: "Kathmandu",
      review: "Excellent service! Found the best doctor for my condition quickly.",
      initial: "R",
      color: "blue",
    },
    {
      name: "Sita Poudel",
      location: "Pokhara",
      review: "Very convenient platform. Booking appointments is so easy now.",
      initial: "S",
      color: "green",
    },
    {
      name: "Hari Thapa",
      location: "Chitwan",
      review: "Great platform for healthcare. Highly recommend to everyone.",
      initial: "H",
      color: "purple",
    },
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Across Nepal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            const colors = colorClasses[testimonial.color as keyof typeof colorClasses]

            return (
              <Card key={index} className="p-4 md:p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${colors} rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base`}
                  >
                    {testimonial.initial}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
