import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Newspaper, Calendar, ArrowRight, FileText, ImageIcon, Video, Download, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsMediaPage() {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: "UpchaarNepal Launches New Telemedicine Service",
      date: "June 1, 2024",
      category: "Press Release",
      excerpt:
        "UpchaarNepal announces the launch of its new telemedicine service, making healthcare more accessible across Nepal.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Partnership with Ministry of Health to Improve Rural Healthcare",
      date: "May 15, 2024",
      category: "Announcement",
      excerpt:
        "UpchaarNepal partners with Nepal's Ministry of Health to expand digital healthcare services to rural areas.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "UpchaarNepal Raises $5M in Series A Funding",
      date: "April 22, 2024",
      category: "Press Release",
      excerpt:
        "UpchaarNepal secures $5 million in Series A funding to accelerate growth and expand services across Nepal.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "New Mobile App Features for Patient Convenience",
      date: "April 10, 2024",
      category: "Product Update",
      excerpt: "UpchaarNepal releases new features in its mobile app to enhance patient experience and convenience.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "UpchaarNepal Wins 'Best Healthcare Startup' Award",
      date: "March 28, 2024",
      category: "Award",
      excerpt: "UpchaarNepal recognized as the 'Best Healthcare Startup' at the Nepal Digital Innovation Awards 2024.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Expanding Network: 500+ Hospitals Now on Platform",
      date: "March 15, 2024",
      category: "Milestone",
      excerpt:
        "UpchaarNepal celebrates milestone of connecting over 500 hospitals and clinics across Nepal on its platform.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  // Sample media coverage
  const mediaCoverage = [
    {
      id: 1,
      title: "How UpchaarNepal is Transforming Healthcare in Nepal",
      publication: "The Kathmandu Post",
      date: "May 20, 2024",
      link: "#",
    },
    {
      id: 2,
      title: "Digital Health Revolution: UpchaarNepal Leading the Way",
      publication: "Himalayan Times",
      date: "April 25, 2024",
      link: "#",
    },
    {
      id: 3,
      title: "Interview with UpchaarNepal CEO on Healthcare Innovation",
      publication: "Nepal Business Digest",
      date: "April 12, 2024",
      link: "#",
    },
    {
      id: 4,
      title: "UpchaarNepal: Bridging Healthcare Gaps in Rural Nepal",
      publication: "Tech Nepal",
      date: "March 30, 2024",
      link: "#",
    },
  ]

  // Sample resources
  const resources = [
    {
      id: 1,
      title: "UpchaarNepal Company Brochure",
      type: "PDF",
      icon: FileText,
      link: "#",
    },
    {
      id: 2,
      title: "Brand Assets and Logos",
      type: "ZIP",
      icon: ImageIcon,
      link: "#",
    },
    {
      id: 3,
      title: "Introduction to UpchaarNepal",
      type: "Video",
      icon: Video,
      link: "#",
    },
    {
      id: 4,
      title: "Healthcare Impact Report 2024",
      type: "PDF",
      icon: FileText,
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 mb-6">News & Media</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest News and Updates</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Stay informed about the latest developments, announcements, and media coverage of UpchaarNepal.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 rounded-full p-4">
                <Newspaper className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="news" className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="news">News & Press Releases</TabsTrigger>
                <TabsTrigger value="media">Media Coverage</TabsTrigger>
                <TabsTrigger value="resources">Media Resources</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search news..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* News & Press Releases Tab */}
            <TabsContent value="news" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700">{article.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mr-2">
                  Previous
                </Button>
                <Button variant="outline" className="mx-1">
                  1
                </Button>
                <Button variant="outline" className="mx-1 bg-blue-50">
                  2
                </Button>
                <Button variant="outline" className="mx-1">
                  3
                </Button>
                <Button variant="outline" className="ml-2">
                  Next
                </Button>
              </div>
            </TabsContent>

            {/* Media Coverage Tab */}
            <TabsContent value="media" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Coverage</h2>

              {mediaCoverage.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="font-medium text-blue-600 mr-3">{item.publication}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.date}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={item.link}>Read Article</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="bg-blue-50 rounded-xl p-8 mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Media Inquiries</h3>
                <p className="text-gray-600 mb-6">
                  For press inquiries, interview requests, or additional information, please contact our media relations
                  team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">Contact Media Relations</Button>
                  <Button variant="outline">Download Press Kit</Button>
                </div>
              </div>
            </TabsContent>

            {/* Media Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Resources</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource) => {
                  const Icon = resource.icon
                  return (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-blue-100 rounded-full p-3 mr-4">
                              <Icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                              <p className="text-sm text-gray-500">{resource.type}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center" asChild>
                            <Link href={resource.link}>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 mt-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Something Specific?</h3>
                  <p className="text-gray-600 mb-6">
                    If you can't find what you're looking for, our team is here to help. Contact us for specific media
                    resources or information.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Request Custom Resources</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-grow" />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
