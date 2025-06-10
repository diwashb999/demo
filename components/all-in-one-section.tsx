import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, FileText, Smartphone, BarChart3 } from "lucide-react"

export function AllInOneSection() {
  const features = [
    { icon: Video, title: "Telemedicine", description: "Virtual consultations with doctors", color: "blue" },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Secure health record management",
      color: "green",
    },
    { icon: Smartphone, title: "Mobile App", description: "Access healthcare on the go", color: "purple" },
    { icon: BarChart3, title: "Analytics", description: "Health insights and reports", color: "orange" },
  ]

  const colorClasses = {
    blue: "from-blue-50 to-indigo-50 text-blue-600",
    green: "from-green-50 to-emerald-50 text-green-600",
    purple: "from-purple-50 to-violet-50 text-purple-600",
    orange: "from-orange-50 to-amber-50 text-orange-600",
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Complete Solution</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All-in-One</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for healthcare management in one platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon
            const colors = colorClasses[item.color as keyof typeof colorClasses]

            return (
              <Card
                key={index}
                className={`text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${colors} border-0`}
              >
                <Icon className={`h-8 w-8 md:h-12 md:w-12 ${colors.split(" ")[2]} mx-auto mb-3 md:mb-4`} />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
