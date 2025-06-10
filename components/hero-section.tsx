"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CommandSearchPopup } from "./command-search-popup"
import { VideoPopup } from "./video-popup"
import { Search, CheckCircle, Play, Star, Users, Clock, Sparkles, ArrowRight, Stethoscope, Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  const stats = [
    { icon: Users, value: "50K+", label: "Doctors", color: "text-blue-600" },
    { icon: Heart, value: "1M+", label: "Patients", color: "text-red-500" },
    { icon: Clock, value: "24/7", label: "Support", color: "text-green-600" },
    { icon: Star, value: "4.9", label: "Rating", color: "text-yellow-500" },
  ]

  const features = ["Instant booking", "Verified doctors", "Secure platform", "24/7 support"]

  const handleFindDoctors = () => {
    window.open("https://patient.upchaarnepal.com/find/doctors", "_blank")
  }

  return (
    <section className="pt-36 pb-10 relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                Nepal's #1 Healthcare Platform
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">Your Health,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Connect with Nepal's best doctors and healthcare providers. Book appointments, get consultations, and
                manage your health - all in one place.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <Card
                className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400 bg-white/90 backdrop-blur-sm hover:bg-white group"
                onClick={() => setSearchOpen(true)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <Search className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span className="text-gray-500 group-hover:text-gray-700 text-lg">
                      Search doctors, hospitals, or services...
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <kbd className="pointer-events-none inline-flex h-7 select-none items-center gap-1 rounded border bg-muted px-3 font-mono text-sm font-medium text-muted-foreground">
                      ⌘K
                    </kbd>
                  </div>
                </div>
              </Card>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-16 px-10 text-lg font-semibold"
                onClick={handleFindDoctors}
              >
                <Search className="h-6 w-6 mr-3" />
                Find Doctors Now
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 h-16 px-10 bg-white/90 backdrop-blur-sm text-lg font-semibold"
                onClick={() => setVideoOpen(true)}
              >
                <Play className="h-6 w-6 mr-3" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <Icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 z-10">
              <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Appointment Confirmed</p>
                    <p className="text-xs text-gray-600">Dr. Sharma - 2:00 PM</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="absolute -bottom-4 -right-4 z-10">
              <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Health Report Ready</p>
                    <p className="text-xs text-gray-600">View your results</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="absolute top-1/2 -left-8 z-10">
              <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium">4.9/5</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">1000+ Reviews</p>
              </Card>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform -rotate-1">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Healthcare professionals in Nepal"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* Command Search Popup */}
      <CommandSearchPopup open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Video Popup */}
      <VideoPopup open={videoOpen} onOpenChange={setVideoOpen} videoId="eSMnYmgjh7c" />
    </section>
  )
}
