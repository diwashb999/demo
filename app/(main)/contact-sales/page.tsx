import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageCircle, Send, Users, Stethoscope, Calendar } from "lucide-react"

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">Contact Sales</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Let's Discuss Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Healthcare Needs
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to transform your healthcare organization? Our sales team is here to help you find the perfect
              solution for your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch with Our Sales Team</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our experienced sales consultants are ready to help you understand how UpchaarNepal can benefit your
                organization.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Our Sales Team</h3>
                      <p className="text-gray-600">+977-1-4234567</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Sales</h3>
                      <p className="text-gray-600">sales@upchaarnepal.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 4 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Schedule a Demo</h3>
                      <p className="text-gray-600">Book a personalized demo session</p>
                      <p className="text-sm text-gray-500">30-minute consultation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Personalized consultation based on your needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Live demo of our platform features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Custom pricing proposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Implementation timeline discussion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Custom Quote</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Work Email *</Label>
                  <Input id="email" type="email" placeholder="your.email@organization.com" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+977-XXX-XXXXXXX" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="organization">Organization Name *</Label>
                  <Input id="organization" placeholder="Your hospital/clinic name" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="organizationType">Organization Type *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital">Hospital</SelectItem>
                      <SelectItem value="clinic">Clinic</SelectItem>
                      <SelectItem value="diagnostic">Diagnostic Center</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="individual">Individual Practice</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="size">Organization Size *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select organization size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[
                      "Patient Management",
                      "Appointment Booking",
                      "Telemedicine",
                      "Digital Records",
                      "Analytics Dashboard",
                      "Mobile App",
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your current challenges and what you're looking for..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Implementation Timeline</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="When are you looking to implement?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12">
                  <Send className="h-5 w-5 mr-2" />
                  Request Custom Quote
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll never share your
                  information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UpchaarNepal?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who trust us to digitize their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">Trusted by 500+ healthcare providers across Nepal</p>
            </Card>

            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Focused</h3>
              <p className="text-gray-600 text-sm">Built specifically for Nepal's healthcare ecosystem</p>
            </Card>

            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support team available round the clock</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
