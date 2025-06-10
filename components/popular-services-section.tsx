import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Users, Stethoscope, Shield, UserCheck, Settings, Home } from "lucide-react"

export function PopularServicesSection() {
  const services = [
    { icon: Heart, title: "Cardiology", description: "Heart specialists", color: "blue" },
    { icon: Activity, title: "Neurology", description: "Brain & nerve care", color: "green" },
    { icon: Users, title: "Pediatrics", description: "Child healthcare", color: "purple" },
    { icon: Stethoscope, title: "General Medicine", description: "Primary care", color: "orange" },
    { icon: Shield, title: "Orthopedics", description: "Bone & joint care", color: "red" },
    { icon: UserCheck, title: "Dermatology", description: "Skin specialists", color: "teal" },
    { icon: Settings, title: "Surgery", description: "Surgical procedures", color: "yellow" },
    { icon: Home, title: "Home Care", description: "At-home services", color: "indigo" },
  ]

  const colorClasses = {
    blue: "from-blue-50 to-indigo-50 from-blue-500 to-blue-600",
    green: "from-green-50 to-emerald-50 from-green-500 to-green-600",
    purple: "from-purple-50 to-violet-50 from-purple-500 to-purple-600",
    orange: "from-orange-50 to-amber-50 from-orange-500 to-orange-600",
    red: "from-red-50 to-pink-50 from-red-500 to-red-600",
    teal: "from-teal-50 to-cyan-50 from-teal-500 to-teal-600",
    yellow: "from-yellow-50 to-amber-50 from-yellow-500 to-yellow-600",
    indigo: "from-indigo-50 to-blue-50 from-indigo-500 to-indigo-600",
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Popular Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Often Get For</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((area, index) => {
            const Icon = area.icon
            const colors = colorClasses[area.color as keyof typeof colorClasses]

            return (
              <Card
                key={index}
                className={`p-3 md:p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]} border-0`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`bg-gradient-to-br ${colors.split(" ")[2]} ${colors.split(" ")[3]} rounded-lg p-2`}>
                    <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">{area.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{area.description}</p>
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
