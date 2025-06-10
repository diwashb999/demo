"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-xl border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">UpchaarNepal</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <a
              href="https://patient.upchaarnepal.com/find/doctors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Doctors
            </a>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://doctor.upchaarnepal.com/login" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Login as Doctor
              </Button>
            </a>
            <a href="https://patient.upchaarnepal.com/login" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                Login as Patient
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
