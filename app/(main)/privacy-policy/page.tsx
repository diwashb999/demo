import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">Legal</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 rounded-full p-4">
                <Shield className="h-8 w-8 text-blue-600" />
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

            <h2>Introduction</h2>
            <p>
              UpchaarNepal ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you
              have read, understood, and agree to be bound by all the terms outlined in this policy.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Book appointments with healthcare providers</li>
              <li>Fill out forms or surveys</li>
              <li>Contact our customer support</li>
              <li>Participate in promotions or contests</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name, email address, phone number, and address</li>
              <li>Date of birth and gender</li>
              <li>Health information related to your appointments</li>
              <li>Payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Health Information</h3>
            <p>
              As a healthcare platform, we may collect health-related information necessary for providing our services.
              This information is treated with the highest level of confidentiality and security in compliance with
              applicable healthcare privacy laws and regulations.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you access our website or services, we may automatically collect certain information about your
              device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Usage patterns and preferences</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process and manage appointments with healthcare providers</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against, identify, and prevent fraud and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in
              this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date and will be effective as soon as it is accessible. We encourage you to review this
              Privacy Policy frequently to stay informed about how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us
              at:
            </p>
            <p>
              Email: privacy@upchaarnepal.com
              <br />
              Phone: +977-1-4234567
              <br />
              Address: Kathmandu, Nepal
            </p>

            <div className="mt-12 flex justify-center">
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Have Questions About Our Privacy Policy?</h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto">
            Contact our privacy team if you have any questions or concerns.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Privacy Team</Button>
        </div>
      </section>
    </div>
  )
}
