import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#059669] to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>

          <p className="text-gray-600 text-lg mb-8">
            We're working hard to bring you this amazing feature. Stay tuned for updates!
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get notified when we launch</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input type="email" placeholder="Enter your email address" className="w-full" />
              </div>
              <Button className="bg-gradient-to-r from-[#059669] to-green-700 hover:from-green-700 hover:to-green-800 whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact-sales">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#059669] to-green-700 hover:from-green-700 hover:to-green-800">
                Contact Sales
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
