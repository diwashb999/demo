"use client"

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
} from "lucide-react"
import Link from "next/link"

export function CareersSection() {
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
      description: "Build and maintain our healthcare platform using React, Node.js, and modern technologies.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      size: "large",
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
      description: "Create and review medical content, ensure clinical accuracy of our platform.",
      skills: ["Medical Writing", "Clinical Research", "Content Strategy"],
      size: "medium",
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
      description: "Lead product strategy and development for our healthcare ecosystem.",
      skills: ["Product Strategy", "User Research", "Analytics"],
      size: "medium",
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
      description: "Expand our network of healthcare providers across Nepal.",
      skills: ["Sales", "Business Development", "Healthcare"],
      size: "medium",
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
      description: "Design intuitive interfaces for our healthcare applications.",
      skills: ["Figma", "User Research", "Prototyping"],
      size: "medium",
    },
  ]

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200 text-blue-700",
    green: "from-green-500 to-green-600 bg-green-50 border-green-200 text-green-700",
    purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200 text-purple-700",
    pink: "from-pink-500 to-pink-600 bg-pink-50 border-pink-200 text-pink-700",
    orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200 text-orange-700",
    cyan: "from-cyan-500 to-cyan-600 bg-cyan-50 border-cyan-200 text-cyan-700",
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Careers</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Often Hire For</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to revolutionize healthcare in Nepal. We're looking for passionate individuals to help us
            build the future of healthcare.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {jobOpenings.map((job, index) => {
            const Icon = job.icon
            const colors = colorClasses[job.color as keyof typeof colorClasses]
            const isLarge = job.size === "large"

            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 border-2 ${colors.split(" ")[2]} hover:scale-[1.02] bg-white/80 backdrop-blur-sm ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className={`${colors.split(" ")[2]} border-current`}>
                        {job.department}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
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

                      <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className={`text-xs ${colors.split(" ")[2]} ${colors.split(" ")[1]}`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href={`/careers/${job.id}`} className="w-full">
                    <Button
                      className={`w-full mt-6 bg-gradient-to-r ${colors.split(" ")[0]} ${colors.split(" ")[1]} hover:opacity-90 text-white`}
                    >
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in joining us? Even if you don't see a specific role listed, we'd love to hear from you. We're
            always looking for talented individuals who share our passion for healthcare innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              onClick={() =>
                window.open("mailto:careers@upchaarnepal.com?subject=Job Application - General Interest", "_blank")
              }
            >
              Submit Your Application
            </Button>
            <Link href="/careers">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                View All Open Positions
              </Button>
            </Link>
          </div>
        </div>

        {/* Company Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-0">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Healthcare Benefits</h3>
            <p className="text-sm text-gray-600">Comprehensive health insurance for you and your family</p>
          </Card>

          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-0">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
            <p className="text-sm text-gray-600">Continuous learning and career advancement programs</p>
          </Card>

          <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-0">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
            <p className="text-sm text-gray-600">Flexible working hours and remote work options</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
