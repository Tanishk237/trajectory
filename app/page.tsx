import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart2, Brain, GitBranch } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Find Your Perfect Career Path with AI Guidance
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Get personalized career roadmaps, in-depth career insights, and live AI consultations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/flowchart">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Explore My Career Path
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/professor-x">
                  <Button size="lg" variant="outline">
                    Talk to Professor X
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Career Guidance"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover Your Career Potential
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered platform helps you navigate your career journey with personalized guidance and insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Guidance</h3>
              <p className="text-center text-muted-foreground">
                Get personalized career recommendations based on your skills, interests, and goals.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">In-Depth Career Insights</h3>
              <p className="text-center text-muted-foreground">
                Explore detailed information about various career paths, including skills, salary, and job outlook.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Interactive Roadmap Visualizer</h3>
              <p className="text-center text-muted-foreground">
                Visualize your career journey with interactive roadmaps that show you the path to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Career Journey?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals who have found their perfect career path with our AI-powered platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/career-insights">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Explore Career Insights
                </Button>
              </Link>
              <Link href="/professor-x">
                <Button size="lg" variant="outline">
                  Chat with Professor X
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

