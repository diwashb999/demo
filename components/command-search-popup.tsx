"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Search,
  X,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Bone,
  Eye,
  UserCheck,
  Clock,
  Star,
  Video,
  Home,
  Shield,
  Calendar,
  Phone,
} from "lucide-react"

interface CommandSearchPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandSearchPopup({ open, onOpenChange }: CommandSearchPopupProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState("")

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "Cardiology",
      location: "Kathmandu",
      rating: 4.8,
      experience: "15 years",
      available: "Available Today",
      icon: Heart,
      color: "text-red-500",
    },
    {
      name: "Dr. Priya Patel",
      specialty: "Neurology",
      location: "Pokhara",
      rating: 4.9,
      experience: "12 years",
      available: "Available Tomorrow",
      icon: Brain,
      color: "text-purple-500",
    },
    {
      name: "Dr. Amit Thapa",
      specialty: "Pediatrics",
      location: "Chitwan",
      rating: 4.7,
      experience: "8 years",
      available: "Available Today",
      icon: Baby,
      color: "text-blue-500",
    },
    {
      name: "Dr. Sunita Rai",
      specialty: "Orthopedics",
      location: "Kathmandu",
      rating: 4.6,
      experience: "10 years",
      available: "This Week",
      icon: Bone,
      color: "text-orange-500",
    },
    {
      name: "Dr. Krishna Gurung",
      specialty: "Ophthalmology",
      location: "Lalitpur",
      rating: 4.8,
      experience: "14 years",
      available: "Available Today",
      icon: Eye,
      color: "text-green-500",
    },
    {
      name: "Dr. Sita Shrestha",
      specialty: "Dermatology",
      location: "Bhaktapur",
      rating: 4.5,
      experience: "6 years",
      available: "Available Tomorrow",
      icon: UserCheck,
      color: "text-pink-500",
    },
  ]

  const hospitals = [
    {
      name: "Tribhuvan University Teaching Hospital",
      location: "Kathmandu",
      type: "Government Hospital",
      rating: 4.2,
      services: "Emergency, Surgery, ICU",
    },
    {
      name: "Norvic International Hospital",
      location: "Kathmandu",
      type: "Private Hospital",
      rating: 4.6,
      services: "Cardiology, Neurology, Oncology",
    },
    {
      name: "Grande International Hospital",
      location: "Kathmandu",
      type: "Private Hospital",
      rating: 4.4,
      services: "Emergency, Surgery, Maternity",
    },
  ]

  const quickFilters = [
    { name: "Available Now", icon: Clock, color: "bg-green-100 text-green-700" },
    { name: "Online Consultation", icon: Video, color: "bg-blue-100 text-blue-700" },
    { name: "Home Visit", icon: Home, color: "bg-purple-100 text-purple-700" },
    { name: "Emergency", icon: Shield, color: "bg-red-100 text-red-700" },
    { name: "Top Rated", icon: Star, color: "bg-yellow-100 text-yellow-700" },
    { name: "Book Today", icon: Calendar, color: "bg-indigo-100 text-indigo-700" },
  ]

  const specialties = [
    { name: "Cardiology", icon: Heart, color: "text-red-500" },
    { name: "Neurology", icon: Brain, color: "text-purple-500" },
    { name: "Pediatrics", icon: Baby, color: "text-blue-500" },
    { name: "Orthopedics", icon: Bone, color: "text-orange-500" },
    { name: "Ophthalmology", icon: Eye, color: "text-green-500" },
    { name: "Dermatology", icon: UserCheck, color: "text-pink-500" },
  ]

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchValue.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <Command className="rounded-lg border-none shadow-none">
            <CommandInput
              placeholder="Search doctors, hospitals, or services..."
              value={searchValue}
              onValueChange={setSearchValue}
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none"
            />

          {/* Quick Filters */}
          <div className="p-4 border-b">
            <div className="flex flex-wrap gap-2">
              {quickFilters.map((filter) => {
                const Icon = filter.icon
                const isSelected = selectedFilters.includes(filter.name)
                return (
                  <Badge
                    key={filter.name}
                    variant={isSelected ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : `${filter.color} hover:bg-opacity-20 border-current`
                    }`}
                    onClick={() => toggleFilter(filter.name)}
                  >
                    <Icon className="h-3 w-3 mr-1" />
                    {filter.name}
                    {isSelected && <X className="h-3 w-3 ml-1" />}
                  </Badge>
                )
              })}
            </div>
          </div>

          <CommandList className="max-h-[400px]">
            <CommandEmpty>No results found.</CommandEmpty>

            {/* Specialties */}
            {searchValue && (
              <CommandGroup heading="Medical Specialties">
                {specialties
                  .filter((specialty) => specialty.name.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((specialty) => {
                    const Icon = specialty.icon
                    return (
                      <CommandItem key={specialty.name} className="flex items-center space-x-3 p-3">
                        <Icon className={`h-5 w-5 ${specialty.color}`} />
                        <div>
                          <p className="font-medium">{specialty.name}</p>
                          <p className="text-sm text-muted-foreground">Medical Specialty</p>
                        </div>
                      </CommandItem>
                    )
                  })}
              </CommandGroup>
            )}

            {/* Doctors */}
            {filteredDoctors.length > 0 && (
              <CommandGroup heading="Doctors">
                {filteredDoctors.map((doctor) => {
                  const Icon = doctor.icon
                  return (
                    <CommandItem key={doctor.name} className="flex items-center justify-between p-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 rounded-full p-2">
                          <Icon className={`h-5 w-5 ${doctor.color}`} />
                        </div>
                        <div>
                          <p className="font-medium">{doctor.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doctor.specialty} • {doctor.location}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs ml-1">{doctor.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{doctor.experience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                          {doctor.available}
                        </Badge>
                        <div className="mt-2">
                          <Button size="sm" className="h-7 text-xs">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            )}

            {/* Hospitals */}
            {filteredHospitals.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup heading="Hospitals & Clinics">
                  {filteredHospitals.map((hospital) => (
                    <CommandItem key={hospital.name} className="flex items-center justify-between p-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <Stethoscope className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{hospital.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {hospital.type} • {hospital.location}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{hospital.services}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs ml-1">{hospital.rating}</span>
                        </div>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          View Details
                        </Button>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}

            {/* Quick Actions */}
            {!searchValue && (
              <CommandGroup heading="Quick Actions">
                <CommandItem className="flex items-center space-x-3 p-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Book Emergency Appointment</p>
                    <p className="text-sm text-muted-foreground">Get immediate medical attention</p>
                  </div>
                </CommandItem>
                <CommandItem className="flex items-center space-x-3 p-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Call Health Helpline</p>
                    <p className="text-sm text-muted-foreground">24/7 medical consultation</p>
                  </div>
                </CommandItem>
                <CommandItem className="flex items-center space-x-3 p-3">
                  <Video className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Start Video Consultation</p>
                    <p className="text-sm text-muted-foreground">Connect with doctors online</p>
                  </div>
                </CommandItem>
              </CommandGroup>
            )}
          </CommandList>

          {/* Footer */}
          <div className="border-t p-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  ESC
                </kbd>{" "}
                to close
              </span>
              <span>{filteredDoctors.length + filteredHospitals.length} results</span>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
