import { Stethoscope, Heart, Activity, UserCheck } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Checkup",
      description: "Regular health checkups and consultations",
      color: "green",
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart-related problem treatments",
      color: "green",
    },
    {
      icon: Activity,
      title: "Emergency",
      description: "24-hour emergency medical services",
      color: "green",
    },
    {
      icon: UserCheck,
      title: "Specialist Care",
      description: "Expert doctors from various fields",
      color: "green",
    },
  ]

  const colorClasses = {
    green: "from-[#059669] to-green-600",
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div
                  className={`bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-3xl p-6 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#059669] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
