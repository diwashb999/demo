import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Scale, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">Legal</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Please read these terms carefully before using our platform and services.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 rounded-full p-4">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <p className="text-gray-600">Last Updated: June 6, 2024</p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the UpchaarNepal website, mobile application, or any other services provided by
              UpchaarNepal (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If
              you do not agree to these Terms, please do not use our Services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              UpchaarNepal provides a platform that connects users with healthcare providers in Nepal. Our Services
              include but are not limited to:
            </p>
            <ul>
              <li>Searching for healthcare providers</li>
              <li>Booking appointments with healthcare providers</li>
              <li>Accessing telemedicine services</li>
              <li>Managing health records</li>
              <li>Receiving health-related information and resources</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our Services, you may need to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account. You agree to provide accurate and complete information when creating your account and to update
              your information as necessary.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>When using our Services, you agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Use the Services only for lawful purposes</li>
              <li>Not engage in any activity that could harm, disable, or impair our Services</li>
              <li>Not attempt to gain unauthorized access to any part of our Services</li>
              <li>Not use our Services to transmit any harmful code or material</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>5. Healthcare Providers</h2>
            <p>
              UpchaarNepal is a platform that connects users with healthcare providers. We do not provide medical
              services directly. Healthcare providers listed on our platform are independent professionals who are
              responsible for the services they provide. We do not endorse or recommend any specific healthcare
              provider.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-yellow-800 font-semibold">Important Medical Disclaimer</h3>
                  <p className="text-yellow-700">
                    The information provided through our Services is for general informational purposes only and is not
                    intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the
                    advice of your physician or other qualified health provider with any questions you may have
                    regarding a medical condition.
                  </p>
                </div>
              </div>
            </div>

            <h2>6. Payments and Fees</h2>
            <p>
              Some of our Services may require payment of fees. All fees are stated in Nepalese Rupees (NPR) and are
              inclusive of all applicable taxes unless stated otherwise. You agree to pay all fees and charges
              associated with your use of our Services at the rates in effect when the charges were incurred.
            </p>

            <h2>7. Cancellation and Refund Policy</h2>
            <p>
              Appointment cancellations and refunds are subject to the policies of the individual healthcare providers.
              Please refer to the specific healthcare provider's cancellation policy before booking an appointment.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our Services, including but not limited to text, graphics,
              logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive
              property of UpchaarNepal or its licensors and are protected by copyright, trademark, and other
              intellectual property laws.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, UpchaarNepal and its affiliates, officers, employees, agents,
              partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
              losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless UpchaarNepal and its affiliates, officers, employees,
              agents, partners, and licensors from and against any claims, liabilities, damages, losses, and expenses,
              including without limitation reasonable legal and accounting fees, arising out of or in any way connected
              with your access to or use of the Services or your violation of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our Services immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. The most current version will always be
              posted on our website. By continuing to access or use our Services after any revisions become effective,
              you agree to be bound by the revised terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its
              conflict of law provisions.
            </p>

            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@upchaarnepal.com
              <br />
              Phone: +977-1-4234567
              <br />
              Address: Kathmandu, Nepal
            </p>

            <div className="mt-12 flex justify-center bg-blue-50">
              <Link href="/">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions About Our Terms?</h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto">
            Contact our legal team if you have any questions about our terms of service.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Legal Team</Button>
        </div>
      </section>
    </div>
  )
}
