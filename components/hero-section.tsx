"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CommandSearchPopup } from "./command-search-popup"
import { VideoPopup } from "./video-popup"
import {
  Search,
  CheckCircle,
  Play,
  Star,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Heart,
  UserCheck,
  Activity,
} from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [activePortal, setActivePortal] = useState<"patient" | "doctor">("patient")

  const stats = [
    { icon: Users, value: "50K+", label: "Doctors", color: "text-[#059669]" },
    { icon: Heart, value: "1M+", label: "Patients", color: "text-red-500" },
    { icon: Clock, value: "24/7", label: "Support", color: "text-green-600" },
    { icon: Star, value: "4.9", label: "Rating", color: "text-yellow-500" },
  ]

  const features = ["Instant booking", "Verified doctors", "Secure platform", "24/7 support"]

  const handleFindDoctors = () => {
    window.open("https://patient.upchaarnepal.com/find/doctors", "_blank")
  }

  const handleDoctorPortal = () => {
    window.open("https://doctor.upchaarnepal.com", "_blank")
  }

  return (
    <section className="pt-36 pb-10 relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/20 to-emerald-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-[#059669] to-green-700 text-white border-0 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                Nepal's #1 Healthcare Platform
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">Your Health,</span>
                <br />
                <span className="bg-gradient-to-r from-[#059669] via-green-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-sm">
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
                className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-[#059669] bg-white/90 backdrop-blur-sm hover:bg-white group"
                onClick={() => setSearchOpen(true)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <Search className="h-6 w-6 text-gray-400 group-hover:text-[#059669] transition-colors" />
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
                className="bg-gradient-to-r from-[#059669] to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-16 px-10 text-lg font-semibold"
                onClick={handleFindDoctors}
              >
                <Search className="h-6 w-6 mr-3" />
                Find Doctors Now
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#059669] hover:bg-green-50 h-16 px-10 bg-white/90 backdrop-blur-sm text-lg font-semibold"
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

          {/* Right Content - Portal Showcase */}
          <div className="relative">
            {/* Portal Toggle */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant={activePortal === "patient" ? "default" : "ghost"}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activePortal === "patient"
                        ? "bg-[#059669] text-white shadow-md"
                        : "text-gray-600 hover:text-[#059669]"
                    }`}
                    onClick={() => setActivePortal("patient")}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    Patient Portal
                  </Button>
                  <Button
                    size="sm"
                    variant={activePortal === "doctor" ? "default" : "ghost"}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activePortal === "doctor"
                        ? "bg-green-600 text-white shadow-md"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                    onClick={() => setActivePortal("doctor")}
                  >
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Doctor Portal
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Status Cards */}
            {/* Health Report Ready - moved to left side */}
            <div className="absolute -top-4 -left-4 z-10">
              <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${activePortal === "patient" ? "bg-green-100" : "bg-green-100"}`}>
                    {activePortal === "patient" ? (
                      <Stethoscope className="h-5 w-5 text-[#059669]" />
                    ) : (
                      <Users className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {activePortal === "patient" ? "Health Report Ready" : "New Patient Added"}
                    </p>
                    <p className="text-xs text-gray-600">
                      {activePortal === "patient" ? "View your results" : "Diwash Bhattarai"}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Appointment Confirmed - moved to right side */}
            <div className="absolute -bottom-4 -right-4 z-10">
              <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                <div className="flex items-center space-x-3">
                  <div className={`rounded-full p-2 ${activePortal === "patient" ? "bg-green-100" : "bg-green-100"}`}>
                    {activePortal === "patient" ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Activity className="h-5 w-5 text-[#059669]" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {activePortal === "patient" ? "Appointment Confirmed" : "Patient Consultation"}
                    </p>
                    <p className="text-xs text-gray-600">
                      {activePortal === "patient" ? "Dr. Sharma - 2:00 PM" : "Video Call - 2:00 PM"}
                    </p>
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
                <p className="text-xs text-gray-600 mt-1">
                  {activePortal === "patient" ? "1000+ Reviews" : "500+ Doctors"}
                </p>
              </Card>
            </div>

            {/* Main Portal Interface */}
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-3xl transform rotate-3 transition-all duration-500 ${
                  activePortal === "patient"
                    ? "bg-gradient-to-br from-green-400/20 to-emerald-400/20"
                    : "bg-gradient-to-br from-green-400/20 to-emerald-400/20"
                }`}
              />
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform -rotate-1 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={activePortal === "patient" ? "/images/patient-portal.png" : "/images/doctor-portal.png"}
                    alt={`${activePortal === "patient" ? "Patient" : "Doctor"} Portal Interface`}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-all duration-500"
                  />

                  {/* Portal Action Button Overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button
                      size="lg"
                      className={`${
                        activePortal === "patient"
                          ? "bg-[#059669] hover:bg-green-700"
                          : "bg-green-600 hover:bg-green-700"
                      } text-white shadow-xl`}
                      onClick={activePortal === "patient" ? handleFindDoctors : handleDoctorPortal}
                    >
                      {activePortal === "patient" ? (
                        <>
                          <UserCheck className="h-5 w-5 mr-2" />
                          Try Patient Portal
                        </>
                      ) : (
                        <>
                          <Stethoscope className="h-5 w-5 mr-2" />
                          Try Doctor Portal
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute top-10 right-10 w-20 h-20 rounded-full opacity-20 animate-pulse transition-all duration-500 ${
                activePortal === "patient"
                  ? "bg-gradient-to-br from-[#059669] to-green-600"
                  : "bg-gradient-to-br from-green-400 to-emerald-500"
              }`}
            />
            <div
              className={`absolute bottom-20 left-10 w-16 h-16 rounded-full opacity-20 animate-pulse delay-1000 transition-all duration-500 ${
                activePortal === "patient"
                  ? "bg-gradient-to-br from-green-400 to-emerald-500"
                  : "bg-gradient-to-br from-teal-400 to-cyan-500"
              }`}
            />
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
