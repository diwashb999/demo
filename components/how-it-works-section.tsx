import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Heart } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "1",
      icon: Search,
      title: "Search & Discover",
      description: "Find doctors and healthcare providers near you",
      color: "blue",
    },
    {
      step: "2",
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your appointment at convenient time",
      color: "green",
    },
    {
      step: "3",
      icon: Heart,
      title: "Get Treatment",
      description: "Receive quality healthcare service",
      color: "purple",
    },
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 from-blue-50 to-indigo-50 text-blue-600",
    green: "from-green-500 to-green-600 from-green-50 to-emerald-50 text-green-600",
    purple: "from-purple-500 to-purple-600 from-purple-50 to-violet-50 text-purple-600",
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting Started is Simple</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get your healthcare service in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorClasses[step.color as keyof typeof colorClasses]

            return (
              <div key={index} className="text-center">
                <div
                  className={`bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]} rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6`}
                >
                  <span className="text-lg md:text-xl font-bold text-white">{step.step}</span>
                </div>
                <div
                  className={`bg-gradient-to-br ${colors.split(" ")[2]} ${colors.split(" ")[3]} rounded-3xl p-4 md:p-6 hover:shadow-lg transition-all duration-300`}
                >
                  <Icon className={`h-10 w-10 md:h-12 md:w-12 ${colors.split(" ")[4]} mx-auto mb-3 md:mb-4`} />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
