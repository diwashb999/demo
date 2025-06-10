import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cookie, Info } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">Legal</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Learn how we use cookies and similar technologies to enhance your experience on our platform.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 rounded-full p-4">
                <Cookie className="h-8 w-8 text-blue-600" />
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
              This Cookie Policy explains how UpchaarNepal ("we", "our", or "us") uses cookies and similar technologies
              to recognize you when you visit our website and use our services. It explains what these technologies are
              and why we use them, as well as your rights to control our use of them.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-blue-800 font-semibold">What are cookies?</h3>
                  <p className="text-blue-700">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a
                    website. Cookies are widely used by website owners to make their websites work, or to work more
                    efficiently, as well as to provide reporting information.
                  </p>
                </div>
              </div>
            </div>

            <h2>Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They
              are usually only set in response to actions made by you which amount to a request for services, such as
              setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or
              alert you about these cookies, but some parts of the site will not then work.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance
              of our site. They help us to know which pages are the most and least popular and see how visitors move
              around the site. All information these cookies collect is aggregated and therefore anonymous.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by
              us or by third-party providers whose services we have added to our pages. If you do not allow these
              cookies, then some or all of these services may not function properly.
            </p>

            <h3>Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies
              to build a profile of your interests and show you relevant advertisements on other sites. They do not
              directly store personal information but are based on uniquely identifying your browser and internet
              device.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the service, deliver advertisements on and through the service, and so on. These may include:
            </p>
            <ul>
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Advertising networks</li>
              <li>Social media platforms</li>
            </ul>

            <h2>Cookie Management</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies,
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and
              from version to version.
            </p>
            <p>
              Please note that if you choose to block cookies, you may not be able to use the full functionality of our
              website and services.
            </p>

            <h3>How to manage cookies in major browsers:</h3>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data
              </li>
            </ul>

            <h2>Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your
              online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
              business practices. Any changes will become effective when we post the revised Cookie Policy on our
              website. We encourage you to periodically review this page for the latest information on our cookie
              practices.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookie Settings & Questions</h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto">
            Manage your cookie preferences or contact us with questions about our cookie policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Manage Cookie Settings</Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
