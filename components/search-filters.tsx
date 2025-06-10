"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Filter, CheckCircle } from "lucide-react"
import { useState } from "react"

export function SearchFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const specialties = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "General Medicine",
    "Surgery",
    "Psychiatry",
  ]

  const availabilityOptions = ["Available Today", "Available Tomorrow", "This Week", "Next Week"]

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-6">
      {/* Main Search */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search doctors or services"
            className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Select location"
            className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>

      {/* Advanced Filters */}
      <div className="grid md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Specialty" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty.toLowerCase()}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent>
            {availabilityOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-5">0-5 years</SelectItem>
            <SelectItem value="5-10">5-10 years</SelectItem>
            <SelectItem value="10-15">10-15 years</SelectItem>
            <SelectItem value="15+">15+ years</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4+">4+ Stars</SelectItem>
            <SelectItem value="3+">3+ Stars</SelectItem>
            <SelectItem value="2+">2+ Stars</SelectItem>
            <SelectItem value="any">Any Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Quick Filters */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {[
            "Available Now",
            "Online Consultation",
            "Home Visit",
            "Emergency",
            "Insurance Accepted",
            "Female Doctor",
            "Video Call",
            "Chat Available",
          ].map((filter) => (
            <Badge
              key={filter}
              variant={selectedFilters.includes(filter) ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedFilters.includes(filter)
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
              onClick={() => toggleFilter(filter)}
            >
              {selectedFilters.includes(filter) && <CheckCircle className="h-3 w-3 mr-1" />}
              {filter}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <div className="flex items-center space-x-2 pt-2 border-t">
          <span className="text-sm text-gray-600">Active filters:</span>
          <div className="flex flex-wrap gap-1">
            {selectedFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {filter}
                <button onClick={() => toggleFilter(filter)} className="ml-1 hover:text-blue-900">
                  ×
                </button>
              </Badge>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedFilters([])}
            className="text-gray-500 hover:text-gray-700"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  )
}
