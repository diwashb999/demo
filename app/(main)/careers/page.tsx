import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Heart,
  BarChart3,
  Building2,
  Palette,
  MapPin,
  Clock,
  Briefcase,
  Stethoscope,
  TrendingUp,
  Shield,
  Users,
  Star,
  Coffee,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: "senior-full-stack-developer",
      title: "Senior Full Stack Developer",
      department: "Engineering",
      icon: Code,
      color: "blue",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      experience: "3-5 years",
      salary: "NPR 80,000 - 120,000",
      description: "Build and maintain our healthcare platform using React, Node.js, and modern technologies.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    },
    {
      id: "medical-content-specialist",
      title: "Medical Content Specialist",
      department: "Medical Affairs",
      icon: Heart,
      color: "green",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      experience: "2-4 years",
      salary: "NPR 60,000 - 90,000",
      description: "Create and review medical content, ensure clinical accuracy of our platform.",
      skills: ["Medical Writing", "Clinical Research", "Content Strategy", "Healthcare"],
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      icon: BarChart3,
      color: "purple",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      experience: "4-6 years",
      salary: "NPR 100,000 - 150,000",
      description: "Lead product strategy and development for our healthcare ecosystem.",
      skills: ["Product Strategy", "User Research", "Analytics", "Agile"],
    },
    {
      id: "business-development-executive",
      title: "Business Development Executive",
      department: "Sales",
      icon: Building2,
      color: "orange",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "1-3 years",
      salary: "NPR 40,000 - 70,000",
      description: "Expand our network of healthcare providers across Nepal.",
      skills: ["Sales", "Business Development", "Healthcare", "Relationship Management"],
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      icon: Palette,
      color: "cyan",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      experience: "2-4 years",
      salary: "NPR 50,000 - 80,000",
      description: "Design intuitive interfaces for our healthcare applications.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
  ]

  const benefits = [
    {
      icon: Stethoscope,
      title: "Healthcare Benefits",
      description: "Comprehensive health insurance for you and your family",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement programs",
      color: "green",
    },
    {
      icon: Shield,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
      color: "purple",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative and inclusive work environment",
      color: "orange",
    },
    {
      icon: Star,
      title: "Performance Bonus",
      description: "Annual performance-based bonuses and incentives",
      color: "yellow",
    },
    {
      icon: Coffee,
      title: "Office Perks",
      description: "Free meals, snacks, and recreational facilities",
      color: "pink",
    },
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200 text-blue-700",
    green: "from-green-500 to-green-600 bg-green-50 border-green-200 text-green-700",
    purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200 text-purple-700",
    orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200 text-orange-700",
    cyan: "from-cyan-500 to-cyan-600 bg-cyan-50 border-cyan-200 text-cyan-700",
    yellow: "from-yellow-500 to-yellow-600 bg-yellow-50 border-yellow-200 text-yellow-700",
    pink: "from-pink-500 to-pink-600 bg-pink-50 border-pink-200 text-pink-700",
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">Join Our Team</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build the Future of
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Healthcare in Nepal
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join our mission to revolutionize healthcare in Nepal. We're looking for passionate individuals who want
              to make a real impact on people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Zap className="h-5 w-5 mr-2" />
                View Open Positions
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Users className="h-5 w-5 mr-2" />
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Open Positions</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to join our growing team and make a difference in Nepal's healthcare
              landscape.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => {
              const Icon = job.icon
              const colors = colorClasses[job.color as keyof typeof colorClasses]

              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]}`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-semibold text-green-600">{job.salary}/month</div>
                            <div className="flex flex-wrap gap-1">
                              {job.skills.slice(0, 3).map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className={`text-xs ${colors.split(" ")[2]}`}
                                >
                                  {skill}
                                </Badge>
                              ))}
                              {job.skills.length > 3 && (
                                <Badge variant="secondary" className="text-xs text-gray-600">
                                  +{job.skills.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className={`${colors.split(" ")[2]} border-current whitespace-nowrap`}>
                        {job.department}
                      </Badge>
                    </div>

                    <div className="flex gap-4">
                      <Link href={`/careers/${job.id}`} className="flex-1">
                        <Button
                          className={`w-full bg-gradient-to-r ${colors.split(" ")[0]} ${colors.split(" ")[1]} hover:opacity-90 text-white`}
                        >
                          View Details & Apply
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Why Join Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and a supportive work
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              const colors = colorClasses[benefit.color as keyof typeof colorClasses]

              return (
                <Card
                  key={index}
                  className={`text-center p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colors.split(" ")[1]} border-0`}
                >
                  <div
                    className={`bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]} rounded-2xl p-4 w-16 h-16 mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Make an Impact?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals. Send us your resume and let's
            talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Heart className="h-6 w-6 mr-3" />
              Submit Your Application
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <Users className="h-6 w-6 mr-3" />
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
