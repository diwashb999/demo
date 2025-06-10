"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("doctors")

  const tabs = [
    { id: "doctors", label: "Doctors" },
    { id: "clinics", label: "Clinics" },
    { id: "diagnostic", label: "Diagnostic Centers" },
    { id: "pharmacy", label: "Pharmacy" },
  ]

  const pricingPlans = {
    doctors: [
      {
        name: "Basic",
        description: "Perfect for individual practitioners",
        price: "2,999",
        features: [
          "Up to 100 patients",
          "Appointment scheduling",
          "Digital prescriptions",
          "Basic telemedicine",
          "Email support",
        ],
        buttonText: "Start 30-Day Free Trial",
        popular: false,
      },
      {
        name: "Professional",
        description: "For growing medical practices",
        price: "4,999",
        features: [
          "Up to 500 patients",
          "Advanced scheduling",
          "Full telemedicine suite",
          "Patient management",
          "Analytics dashboard",
          "Priority support",
        ],
        buttonText: "Start 30-Day Free Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        description: "For large medical practices",
        price: "9,999",
        features: [
          "Unlimited patients",
          "Multi-location support",
          "Advanced analytics",
          "Custom integrations",
          "Dedicated account manager",
          "24/7 support",
        ],
        buttonText: "Contact Sales",
        popular: false,
      },
    ],
    clinics: [
      {
        name: "Starter",
        description: "Perfect for small clinics",
        price: "5,999",
        features: ["Up to 3 doctors", "Patient management", "Appointment booking", "Basic reporting", "Email support"],
        buttonText: "Start Free Trial",
        popular: false,
      },
      {
        name: "Growth",
        description: "For expanding clinics",
        price: "12,999",
        features: [
          "Up to 10 doctors",
          "Advanced scheduling",
          "Inventory management",
          "Financial reporting",
          "Priority support",
        ],
        buttonText: "Start Free Trial",
        popular: true,
      },
      {
        name: "Scale",
        description: "For large clinic networks",
        price: "24,999",
        features: [
          "Unlimited doctors",
          "Multi-location support",
          "Advanced analytics",
          "Custom workflows",
          "Dedicated support",
        ],
        buttonText: "Contact Sales",
        popular: false,
      },
    ],
    diagnostic: [
      {
        name: "Essential",
        description: "For diagnostic centers",
        price: "7,999",
        features: ["Test management", "Report generation", "Patient portal", "Basic analytics", "Email support"],
        buttonText: "Start Free Trial",
        popular: false,
      },
      {
        name: "Advanced",
        description: "For growing diagnostic centers",
        price: "15,999",
        features: [
          "Advanced test management",
          "Digital reports",
          "Integration with labs",
          "Detailed analytics",
          "Priority support",
        ],
        buttonText: "Start Free Trial",
        popular: true,
      },
      {
        name: "Premium",
        description: "For large diagnostic networks",
        price: "29,999",
        features: ["Multi-location support", "Custom integrations", "Advanced reporting", "API access", "24/7 support"],
        buttonText: "Contact Sales",
        popular: false,
      },
    ],
    pharmacy: [
      {
        name: "Basic",
        description: "For small pharmacies",
        price: "3,999",
        features: ["Inventory management", "Sales tracking", "Customer database", "Basic reporting", "Email support"],
        buttonText: "Start Free Trial",
        popular: false,
      },
      {
        name: "Professional",
        description: "For growing pharmacies",
        price: "8,999",
        features: [
          "Advanced inventory",
          "Prescription management",
          "Financial reporting",
          "Customer analytics",
          "Priority support",
        ],
        buttonText: "Start Free Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        description: "For pharmacy chains",
        price: "18,999",
        features: [
          "Multi-store management",
          "Advanced analytics",
          "Custom integrations",
          "Compliance tools",
          "Dedicated support",
        ],
        buttonText: "Contact Sales",
        popular: false,
      },
    ],
  }

  const currentPlans = pricingPlans[activeTab as keyof typeof pricingPlans]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Pricing Plans</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscription Plans Tailored for Nepal</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable pricing designed for Nepali healthcare providers. All plans include free setup and training.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 overflow-x-auto">
            <div className="flex space-x-1 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative py-8 transition-all duration-300 hover:shadow-2xl flex flex-col h-full ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-2xl lg:scale-105 bg-gradient-to-br from-blue-600 to-indigo-700 text-white z-20"
                  : "px-4 border border-gray-200 hover:border-blue-300 bg-white hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-white text-blue-600 px-3 md:px-4 py-1 text-xs md:text-sm font-semibold shadow-lg flex items-center space-x-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 md:pb-6 flex-shrink-0">
                <CardTitle
                  className={`text-xl md:text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className={`mb-4 md:mb-6 text-sm md:text-base ${plan.popular ? "text-blue-100" : "text-gray-600"}`}
                >
                  {plan.description}
                </CardDescription>
                <div className="mb-2">
                  <span className="text-xs md:text-sm opacity-75">NPR</span>
                  <span
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold ml-1 ${plan.popular ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm md:text-base ml-1 ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                    /month
                  </span>
                </div>
                <p className={`text-xs md:text-sm ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                  + 13% VAT as per Nepal Government
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                <div className="flex-1 space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-blue-200" : "text-green-500"
                        }`}
                      />
                      <span className={`text-sm md:text-base ${plan.popular ? "text-white" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    className={`w-full h-10 md:h-12 font-semibold transition-all duration-300 text-sm md:text-base ${
                      plan.popular
                        ? "bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                    }`}
                    onClick={() => {
                      if (plan.buttonText === "Contact Sales") {
                        window.open("/contact-sales", "_blank")
                      } else {
                        window.open("https://app.upchaarnepal.com/signup", "_blank")
                      }
                    }}
                  >
                    {plan.buttonText}
                  </Button>

                  <p
                    className={`text-center text-xs md:text-sm mt-3 md:mt-4 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}
                  >
                    No setup fees • Cancel anytime
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Need a custom solution? We offer tailored packages for large healthcare organizations.
          </p>
          <Link href="/contact-sales">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm md:text-base">
              Contact Our Sales Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
