"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Database, LineChart, Server, Cpu, PenTool, Globe } from "lucide-react"

const careerPaths = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "Build user interfaces and create engaging web experiences",
    icon: <Code className="h-8 w-8" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description: "Create server-side logic and APIs that power applications",
    icon: <Server className="h-8 w-8" />,
    skills: ["Node.js", "Python", "Databases", "APIs", "Security"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze data and build models to extract valuable insights",
    icon: <LineChart className="h-8 w-8" />,
    skills: ["Python", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    description: "Design and maintain database systems for organizations",
    icon: <Database className="h-8 w-8" />,
    skills: ["SQL", "Database Design", "Performance Tuning", "Backup & Recovery", "Security"],
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    description: "Build and deploy machine learning models at scale",
    icon: <Cpu className="h-8 w-8" />,
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Computer Science"],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create user-centered designs for digital products",
    icon: <PenTool className="h-8 w-8" />,
    skills: ["User Research", "Wireframing", "Prototyping", "UI Design", "Usability Testing"],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Streamline development and operations processes",
    icon: <Globe className="h-8 w-8" />,
    skills: ["CI/CD", "Docker", "Kubernetes", "Cloud Platforms", "Infrastructure as Code"],
  },
  {
    id: "fullstack-developer",
    title: "Fullstack Developer",
    description: "Work on both frontend and backend aspects of applications",
    icon: <Code className="h-8 w-8" />,
    skills: ["JavaScript", "React", "Node.js", "Databases", "API Design"],
  },
]

export default function CareerInsights() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCareers = careerPaths.filter(
    (career) =>
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Career Paths</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Discover different career paths in technology and find the one that matches your interests and skills.
        </p>
        <div className="w-full max-w-md flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search careers or skills..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCareers.map((career) => (
          <Card key={career.id} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="pb-4">
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-12 h-12 flex items-center justify-center">
                {career.icon}
              </div>
              <CardTitle>{career.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{career.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/flowchart?career=${career.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Career Roadmap
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

