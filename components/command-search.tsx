"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, MapPin, Filter, CheckCircle, X } from "lucide-react"

export function CommandSearch() {
  const [open, setOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")

  const specialties = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "General Medicine",
    "Surgery",
    "Psychiatry",
    "Gynecology",
    "Ophthalmology",
  ]

  const availabilityOptions = ["Available Today", "Available Tomorrow", "This Week", "Next Week"]
  const experienceOptions = ["0-5 years", "5-10 years", "10-15 years", "15+ years"]
  const ratingOptions = ["4+ Stars", "3+ Stars", "2+ Stars", "Any Rating"]

  const quickFilters = [
    "Available Now",
    "Online Consultation",
    "Home Visit",
    "Emergency",
    "Insurance Accepted",
    "Female Doctor",
    "Video Call",
    "Chat Available",
  ]

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setSearchQuery("")
    setLocation("")
  }

  return (
    <div className="w-full">
      {/* Main Search Bar */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
        <div className="grid md:grid-cols-4 gap-4 items-center">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search doctors, hospitals, or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 flex-1">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {selectedFilters.length > 0 && (
                    <Badge className="ml-2 bg-blue-600 text-white">{selectedFilters.length}</Badge>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Advanced Search Filters</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Specialty Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">Medical Specialty</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant={selectedFilters.includes(specialty) ? "default" : "outline"}
                          className={`cursor-pointer justify-center p-2 ${
                            selectedFilters.includes(specialty) ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"
                          }`}
                          onClick={() => toggleFilter(specialty)}
                        >
                          {selectedFilters.includes(specialty) && <CheckCircle className="h-3 w-3 mr-1" />}
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-semibold mb-3">Availability</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {availabilityOptions.map((option) => (
                        <Badge
                          key={option}
                          variant={selectedFilters.includes(option) ? "default" : "outline"}
                          className={`cursor-pointer justify-center p-2 ${
                            selectedFilters.includes(option) ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"
                          }`}
                          onClick={() => toggleFilter(option)}
                        >
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Rating */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Experience</h3>
                      <div className="space-y-2">
                        {experienceOptions.map((exp) => (
                          <Badge
                            key={exp}
                            variant={selectedFilters.includes(exp) ? "default" : "outline"}
                            className={`cursor-pointer w-full justify-center p-2 ${
                              selectedFilters.includes(exp) ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-50"
                            }`}
                            onClick={() => toggleFilter(exp)}
                          >
                            {exp}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Rating</h3>
                      <div className="space-y-2">
                        {ratingOptions.map((rating) => (
                          <Badge
                            key={rating}
                            variant={selectedFilters.includes(rating) ? "default" : "outline"}
                            className={`cursor-pointer w-full justify-center p-2 ${
                              selectedFilters.includes(rating)
                                ? "bg-orange-600 hover:bg-orange-700"
                                : "hover:bg-orange-50"
                            }`}
                            onClick={() => toggleFilter(rating)}
                          >
                            {rating}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Filters */}
                  <div>
                    <h3 className="font-semibold mb-3">Quick Filters</h3>
                    <div className="flex flex-wrap gap-2">
                      {quickFilters.map((filter) => (
                        <Badge
                          key={filter}
                          variant={selectedFilters.includes(filter) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedFilters.includes(filter) ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"
                          }`}
                          onClick={() => toggleFilter(filter)}
                        >
                          {selectedFilters.includes(filter) && <CheckCircle className="h-3 w-3 mr-1" />}
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between pt-4 border-t">
                    <Button variant="outline" onClick={clearAllFilters}>
                      Clear All Filters
                    </Button>
                    <Button onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                      Apply Filters ({selectedFilters.length})
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Active Filters Display */}
        {selectedFilters.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Active Filters:</span>
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-gray-500 hover:text-gray-700">
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  {filter}
                  <button onClick={() => toggleFilter(filter)} className="ml-1 hover:text-blue-900">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center space-x-8 mt-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>24/7 Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Secure & Trusted</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Instant Booking</span>
        </div>
      </div>
    </div>
  )
}
