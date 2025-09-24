import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Stethoscope, TestTube, Pill } from "lucide-react"
import Link from "next/link"

export function StakeholderSection() {
  const stakeholders = [
    {
      icon: Users,
      title: "Patients",
      description: "Book appointments, consult doctors online, and access healthcare services.",
      color: "bg-blue-500",
      link: "https://patient.upchaarnepal.com",
      external: true,
      comingSoon: false,
    },
    {
      icon: Stethoscope,
      title: "Healthcare Providers",
      description: "Manage patients, conduct consultations, and grow your practice.",
      color: "bg-[#059669]",
      link: "https://doctor.upchaarnepal.com",
      external: true,
      comingSoon: false,
    },
    {
      icon: TestTube,
      title: "Diagnostic Centers",
      description: "Manage test bookings and deliver digital reports to patients.",
      color: "bg-purple-500",
      link: "/coming-soon",
      external: false,
      comingSoon: true,
    },
    {
      icon: Pill,
      title: "Pharmacies",
      description: "Process prescriptions, manage inventory, and provide delivery services.",
      color: "bg-orange-500",
      link: "/coming-soon",
      external: false,
      comingSoon: true,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Every Healthcare Stakeholder</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stakeholders.map((stakeholder, index) => {
            const IconComponent = stakeholder.icon
            const content = (
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${stakeholder.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {stakeholder.title}
                    {stakeholder.comingSoon && (
                      <span className="ml-2 text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Coming Soon</span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{stakeholder.description}</p>
                  <Button className="w-full bg-[#059669] hover:bg-green-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            )

            if (stakeholder.external) {
              return (
                <a key={index} href={stakeholder.link} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              )
            }

            return (
              <Link key={index} href={stakeholder.link}>
                {content}
              </Link>
            )
          })}
        </div>

        {/* Getting Started Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting Started is Simple</h2>
            <p className="text-gray-600 text-lg">Three easy steps to access quality healthcare anywhere in Nepal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Register an account</h3>
              <p className="text-gray-600 text-sm">
                Create your account with basic information. Verification is quick and secure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Service</h3>
              <p className="text-gray-600 text-sm">Select from our range of services based on your needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Care Delivered</h3>
              <p className="text-gray-600 text-sm">Receive quality healthcare services at your preferred location.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
