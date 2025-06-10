import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Stethoscope, Globe, TrendingUp, Shield, CheckCircle, Building2, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "50,000+", label: "Registered Doctors", color: "text-blue-600" },
    { icon: Heart, value: "1,000,000+", label: "Happy Patients", color: "text-red-500" },
    { icon: Building2, value: "500+", label: "Partner Hospitals", color: "text-green-600" },
    { icon: Globe, value: "77", label: "Districts Covered", color: "text-purple-600" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient First",
      description:
        "Everything we do is centered around improving patient care and making healthcare accessible to all Nepalis.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We maintain the highest standards of data security and privacy to protect our users' sensitive information.",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to bring cutting-edge healthcare technology solutions to Nepal.",
      color: "purple",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together with healthcare providers, patients, and communities to build a healthier Nepal.",
      color: "orange",
    },
  ]

  const team = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=120&width=120",
      bio: "15+ years in healthcare management and digital transformation.",
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=120&width=120",
      bio: "Former tech lead at major healthcare platforms with 12+ years experience.",
    },
    {
      name: "Dr. Amit Thapa",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=120&width=120",
      bio: "Practicing physician with expertise in telemedicine and digital health.",
    },
    {
      name: "Sunita Rai",
      role: "Head of Operations",
      image: "/placeholder.svg?height=120&width=120",
      bio: "Operations expert with deep understanding of Nepal's healthcare landscape.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "UpchaarNepal was founded with a vision to digitize healthcare in Nepal.",
    },
    {
      year: "2021",
      title: "First 1,000 Doctors",
      description: "Reached our first milestone of 1,000 registered healthcare providers.",
    },
    {
      year: "2022",
      title: "Mobile App Launch",
      description: "Launched our mobile application for iOS and Android platforms.",
    },
    {
      year: "2023",
      title: "Telemedicine Platform",
      description: "Introduced comprehensive telemedicine services across Nepal.",
    },
    {
      year: "2024",
      title: "1 Million Users",
      description: "Celebrated reaching 1 million registered users on our platform.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">
              About UpchaarNepal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Healthcare in
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Nepal</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              We're on a mission to make quality healthcare accessible to every Nepali through innovative technology
              solutions and a comprehensive network of healthcare providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Users className="h-5 w-5 mr-2" />
                Join Our Team
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 md:p-6 mb-4 hover:shadow-lg transition-all duration-300">
                    <Icon className={`h-6 w-6 md:h-8 md:w-8 ${stat.color} mx-auto mb-3`} />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Making Healthcare Accessible for All
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Our mission is to bridge the gap between patients and healthcare providers in Nepal through innovative
                technology solutions. We believe that quality healthcare should be accessible to everyone, regardless of
                their location or economic status.
              </p>
              <div className="space-y-4">
                {[
                  "Connect patients with qualified healthcare providers",
                  "Reduce healthcare costs through efficient systems",
                  "Improve health outcomes across Nepal",
                  "Promote preventive healthcare practices",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Healthcare mission"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape the way we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              const colorClasses = {
                blue: "from-blue-50 to-indigo-50 from-blue-500 to-blue-600",
                green: "from-green-50 to-emerald-50 from-green-500 to-green-600",
                purple: "from-purple-50 to-violet-50 from-purple-500 to-purple-600",
                orange: "from-orange-50 to-amber-50 from-orange-500 to-orange-600",
              }
              const colors = colorClasses[value.color as keyof typeof colorClasses]

              return (
                <Card
                  key={index}
                  className={`text-center p-4 md:p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]} border-0`}
                >
                  <div
                    className={`bg-gradient-to-br ${colors.split(" ")[2]} ${colors.split(" ")[3]} rounded-2xl p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4`}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Leaders</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team combines healthcare expertise with technology innovation to serve Nepal better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm md:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Milestones</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to Nepal's leading healthcare platform - here's our journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
                  >
                    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-4 md:p-6">
                        <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Join Us in Transforming Healthcare</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
            Be part of our mission to make healthcare accessible to every Nepali. Whether you're a healthcare provider
            or a patient, we're here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Stethoscope className="h-6 w-6 mr-3" />
              For Healthcare Providers
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <Heart className="h-6 w-6 mr-3" />
              For Patients
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
