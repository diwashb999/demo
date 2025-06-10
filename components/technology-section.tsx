import { Badge } from "@/components/ui/badge"
import { Shield, Smartphone, Globe, Users, Heart } from "lucide-react"

export function TechnologySection() {
  const features = [
    {
      icon: Shield,
      title: "Nepal Medical Council Compliant",
      description: "Fully compliant with Nepal's healthcare regulations and data protection standards.",
      color: "green",
    },
    {
      icon: Smartphone,
      title: "Mobile-First for Nepal",
      description: "Designed for Nepal's mobile-first population with offline capabilities for remote areas.",
      color: "blue",
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Connecting healthcare providers from Kathmandu to remote villages across all 7 provinces.",
      color: "purple",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "Built specifically for Nepal's unique healthcare challenges and cultural needs.",
      color: "orange",
    },
  ]

  const colorClasses = {
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Technology</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Healthcare Technology Made for Nepal</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            UpchaarNepal is Nepal's first comprehensive healthcare ecosystem, designed to address the unique challenges
            of healthcare delivery across our diverse geography and communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Features */}
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colors = colorClasses[feature.color as keyof typeof colorClasses]

              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${colors} rounded-xl p-3 flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right side - Map visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="text-center mb-6">
                <div className="bg-green-500 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Healthcare for All Nepal</h3>
                <p className="text-gray-600 text-sm md:text-base">From Terai to Himalayas</p>
              </div>

              {/* Mock map points */}
              <div className="relative h-32 md:h-40 mb-6">
                <div className="absolute top-4 right-8 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs font-medium text-purple-600">Biratnagar</div>
                  <div className="text-xs text-gray-500">Eastern Region</div>
                </div>
                <div className="absolute top-8 left-8 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs font-medium text-blue-600">Kathmandu</div>
                  <div className="text-xs text-gray-500">Central Hub</div>
                </div>
                <div className="absolute bottom-4 left-12 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs font-medium text-indigo-600">Pokhara</div>
                  <div className="text-xs text-gray-500">Western Region</div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-4 md:p-6">
                {[
                  { value: "77", label: "Districts Covered", color: "text-green-600" },
                  { value: "500+", label: "Healthcare Providers", color: "text-blue-600" },
                  { value: "10,000+", label: "Patients Served", color: "text-purple-600" },
                  { value: "24/7", label: "Support Available", color: "text-orange-600" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-lg md:text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
