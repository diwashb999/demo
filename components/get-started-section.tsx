import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Calendar } from "lucide-react"

export function GetStartedSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-4">Ready to Start</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Nepalis who are already benefiting from our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Download Our App</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Get instant access to healthcare services on your mobile device
              </p>
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-sm md:text-base">
                  <Smartphone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Book Your First Appointment</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">Start your healthcare journey with us today</p>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-sm md:text-base">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
