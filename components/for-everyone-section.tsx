"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Stethoscope, Building2, Briefcase } from "lucide-react"

export function ForEveryoneSection() {
  const stakeholders = [
    {
      icon: Users,
      title: "Patients",
      description: "Easy healthcare access",
      features: ["Find nearby doctors", "Book appointments", "Health records"],
      color: "blue",
    },
    {
      icon: Stethoscope,
      title: "Doctors",
      description: "Manage your practice",
      features: ["Patient management", "Schedule appointments", "Digital prescriptions"],
      color: "green",
    },
    {
      icon: Building2,
      title: "Hospitals",
      description: "Streamline operations",
      features: ["Bed management", "Staff scheduling", "Analytics dashboard"],
      color: "purple",
    },
    {
      icon: Briefcase,
      title: "Clinics",
      description: "Grow your business",
      features: ["Online presence", "Appointment booking", "Payment processing"],
      color: "orange",
    },
  ]

  const colorClasses = {
    blue: "border-blue-200 hover:border-blue-400 from-blue-500 to-blue-600 text-blue-500",
    green: "border-green-200 hover:border-green-400 from-green-500 to-green-600 text-green-500",
    purple: "border-purple-200 hover:border-purple-400 from-purple-500 to-purple-600 text-purple-500",
    orange: "border-orange-200 hover:border-orange-400 from-orange-500 to-orange-600 text-orange-500",
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">For Everyone</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best for Every Healthcare Stakeholder</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon
            const colors = colorClasses[stakeholder.color as keyof typeof colorClasses]

            return (
              <Card
                key={index}
                className={`relative border-2 ${colors.split(" ")[0]} ${colors.split(" ")[1]} transition-all duration-300 bg-white/80 backdrop-blur-sm h-full flex flex-col`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`bg-gradient-to-br ${colors.split(" ")[2]} ${colors.split(" ")[3]} rounded-2xl p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4`}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900">{stakeholder.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm md:text-base">
                    {stakeholder.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-2">
                    {stakeholder.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${colors.split(" ")[4]} flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full mt-4 bg-gradient-to-r ${colors.split(" ")[2]} ${colors.split(" ")[3]} hover:opacity-90 transition-all duration-300 font-semibold text-sm md:text-base`}
                    onClick={() => {
                      const subdomain =
                        stakeholder.title === "Patients"
                          ? "patient"
                          : stakeholder.title === "Doctors"
                            ? "doctor"
                            : stakeholder.title === "Hospitals"
                              ? "hospital"
                              : "clinic"
                      window.open(`https://${subdomain}.upchaarnepal.com`, "_blank")
                    }}
                  >
                    {stakeholder.title === "Hospitals" || stakeholder.title === "Clinics"
                      ? "Learn More"
                      : stakeholder.title === "Doctors"
                        ? "Join Now"
                        : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
