import { Users, Heart, Calendar, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Registered Doctors",
      color: "blue",
    },
    {
      icon: Heart,
      value: "1,000,000+",
      label: "Happy Patients",
      color: "green",
    },
    {
      icon: Calendar,
      value: "24/7",
      label: "Service Available",
      color: "purple",
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      color: "orange",
    },
  ]

  const colorClasses = {
    blue: "from-blue-50 to-indigo-50 text-blue-600",
    green: "from-green-50 to-emerald-50 text-green-600",
    purple: "from-purple-50 to-violet-50 text-purple-600",
    orange: "from-orange-50 to-amber-50 text-orange-600",
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div
                  className={`bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-3xl p-8 mb-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
                >
                  <Icon
                    className={`h-10 w-10 ${stat.color === "blue" ? "text-blue-600" : stat.color === "green" ? "text-green-600" : stat.color === "purple" ? "text-purple-600" : "text-orange-600"} mx-auto mb-4`}
                  />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
