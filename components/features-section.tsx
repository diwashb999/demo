import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Shield, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Easy Search",
      description: "Find doctors and healthcare providers near you",
      color: "blue",
    },
    {
      icon: Calendar,
      title: "Quick Booking",
      description: "Book appointments instantly online",
      color: "green",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your health data is safe and secure",
      color: "purple",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round the clock customer support",
      color: "orange",
    },
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Our Features</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Made Simple for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making healthcare accessible and convenient in Nepal through modern technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl p-5 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
