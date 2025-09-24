"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
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
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#059669] to-green-700">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">UpchaarNepal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors"
            >
              How It Works
            </button>
            <a
              href="https://patient.upchaarnepal.com/find/doctors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors"
            >
              Find Doctors
            </a>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors"
            >
              Technology
            </button>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors">
              About
            </Link>
            <Link href="/careers" className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors">
              Careers
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://doctor.upchaarnepal.com/login" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-gray-700 hover:text-[#059669]">
                Login as Doctor
              </Button>
            </a>
            <a href="https://patient.upchaarnepal.com/login" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#059669] to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                Login as Patient
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#059669] transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
              >
                How It Works
              </button>
              <a
                href="https://patient.upchaarnepal.com/find/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Doctors
              </a>
              <button
                onClick={() => scrollToSection("technology")}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
              >
                Technology
              </button>
              <Link
                href="/about"
                className="block text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/careers"
                className="block text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-[#059669] transition-colors py-2"
              >
                Contact
              </button>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <a
                  href="https://doctor.upchaarnepal.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="ghost" className="w-full text-gray-700 hover:text-[#059669]">
                    Login as Doctor
                  </Button>
                </a>
                <a
                  href="https://patient.upchaarnepal.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-[#059669] to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                    Login as Patient
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
