import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Zap } from "lucide-react"

export function CompanyCultureSection() {
  const values = [
    {
      icon: Heart,
      title: "Patient First",
      description: "Everything we do is centered around improving patient care and experience.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as one team to achieve our mission of better healthcare.",
      color: "green",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate to bring the best healthcare solutions to Nepal.",
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
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Company Culture</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Building a healthier Nepal together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            const colors = colorClasses[value.color as keyof typeof colorClasses]

            return (
              <Card key={index} className="p-6 md:p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div
                  className={`bg-gradient-to-br ${colors} rounded-2xl p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6`}
                >
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
