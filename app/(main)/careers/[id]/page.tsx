import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Code,
  Heart,
  BarChart3,
  Building2,
  Palette,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle,
  Upload,
  Send,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const jobData = {
  "senior-full-stack-developer": {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    iconName: "Code",
    color: "blue",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "3-5 years",
    salary: "NPR 80,000 - 120,000",
    description: "Build and maintain our healthcare platform using React, Node.js, and modern technologies.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and maintain coding standards",
      "Optimize applications for maximum speed and scalability",
    ],
    requirements: [
      "3+ years of experience in full-stack development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with database design and management",
      "Knowledge of cloud platforms (AWS preferred)",
      "Bachelor's degree in Computer Science or related field",
    ],
  },
  "medical-content-specialist": {
    title: "Medical Content Specialist",
    department: "Medical Affairs",
    iconName: "Heart",
    color: "green",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "2-4 years",
    salary: "NPR 60,000 - 90,000",
    description: "Create and review medical content, ensure clinical accuracy of our platform.",
    skills: ["Medical Writing", "Clinical Research", "Content Strategy", "Healthcare"],
    responsibilities: [
      "Create accurate and engaging medical content for our platform",
      "Review and validate medical information for accuracy",
      "Collaborate with healthcare professionals to ensure content quality",
      "Develop content strategies for patient education",
      "Stay updated with latest medical research and guidelines",
    ],
    requirements: [
      "Medical degree (MBBS) or equivalent qualification",
      "2+ years of experience in medical writing or content creation",
      "Strong understanding of medical terminology and practices",
      "Excellent written and verbal communication skills",
      "Experience in digital health platforms preferred",
    ],
  },
  "product-manager": {
    title: "Product Manager",
    department: "Product",
    iconName: "BarChart3",
    color: "purple",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "4-6 years",
    salary: "NPR 100,000 - 150,000",
    description: "Lead product strategy and development for our healthcare ecosystem.",
    skills: ["Product Strategy", "User Research", "Analytics", "Agile"],
    responsibilities: [
      "Define product vision and strategy for healthcare solutions",
      "Conduct user research and analyze market trends",
      "Work with engineering teams to prioritize features",
      "Monitor product performance and user feedback",
      "Collaborate with stakeholders to align product goals",
    ],
    requirements: [
      "4+ years of product management experience",
      "Experience in healthcare or health-tech industry",
      "Strong analytical and problem-solving skills",
      "Knowledge of agile development methodologies",
      "MBA or equivalent business qualification preferred",
    ],
  },
  "business-development-executive": {
    title: "Business Development Executive",
    department: "Sales",
    iconName: "Building2",
    color: "orange",
    location: "Multiple Cities",
    type: "Full-time",
    experience: "1-3 years",
    salary: "NPR 40,000 - 70,000",
    description: "Expand our network of healthcare providers across Nepal.",
    skills: ["Sales", "Business Development", "Healthcare", "Relationship Management"],
    responsibilities: [
      "Identify and engage potential healthcare partners",
      "Build and maintain relationships with hospitals and clinics",
      "Present our platform benefits to healthcare providers",
      "Negotiate partnership agreements and contracts",
      "Achieve sales targets and expand market presence",
    ],
    requirements: [
      "1+ years of experience in sales or business development",
      "Strong communication and presentation skills",
      "Knowledge of Nepal's healthcare landscape",
      "Willingness to travel across different cities",
      "Bachelor's degree in Business, Marketing, or related field",
    ],
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    department: "Design",
    iconName: "Palette",
    color: "cyan",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "2-4 years",
    salary: "NPR 50,000 - 80,000",
    description: "Design intuitive interfaces for our healthcare applications.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    responsibilities: [
      "Design user-friendly interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design specifications",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems and guidelines",
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design skills",
      "Understanding of user-centered design principles",
      "Experience in healthcare or health-tech design preferred",
    ],
  },
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // Try to find the job by ID
  const job = jobData[params.id as keyof typeof jobData]

  // If job not found, return 404
  if (!job) {
    notFound()
  }

  // Get the appropriate icon based on the job's iconName
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-8 w-8 text-white" />
      case "Heart":
        return <Heart className="h-8 w-8 text-white" />
      case "BarChart3":
        return <BarChart3 className="h-8 w-8 text-white" />
      case "Building2":
        return <Building2 className="h-8 w-8 text-white" />
      case "Palette":
        return <Palette className="h-8 w-8 text-white" />
      default:
        return <Code className="h-8 w-8 text-white" />
    }
  }

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200 text-blue-700",
    green: "from-green-500 to-green-600 bg-green-50 border-green-200 text-green-700",
    purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200 text-purple-700",
    orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200 text-orange-700",
    cyan: "from-cyan-500 to-cyan-600 bg-cyan-50 border-cyan-200 text-cyan-700",
  }
  const colors = colorClasses[job.color as keyof typeof colorClasses]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/careers" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Careers
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.split(" ")[0]} ${colors.split(" ")[1]}`}>
                    {getIcon(job.iconName)}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">{job.salary}/month</div>
                      <Badge className={`${colors.split(" ")[2]} border-current`}>{job.department}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600">{job.description}</p>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {job.responsibilities.map((responsibility: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((requirement: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary" className={`${colors.split(" ")[2]}`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+977-XXX-XXXXXXX" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" placeholder="e.g., 3 years" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume/CV</Label>
                    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you're interested in this position..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${colors.split(" ")[0]} ${colors.split(" ")[1]} hover:opacity-90 text-white h-12`}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this application, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* CTA Section */}
        <section className="py-16 bg-blue-50 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Questions About This Role?</h2>
            <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto">
              Have questions about this position or our company? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact HR Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-blue-600 text-blue-600 hover:bg-blue-100"
              >
                View All Positions
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
