"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, LineChart, MessageSquare, Save, Send } from "lucide-react"

// Mock saved roadmaps data
const savedRoadmaps = [
  {
    id: 1,
    title: "Frontend Developer",
    progress: 45,
    lastUpdated: "2 days ago",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "Data Scientist",
    progress: 20,
    lastUpdated: "1 week ago",
    icon: <LineChart className="h-4 w-4" />,
  },
]

// Mock conversations data
const conversations = [
  {
    id: 1,
    title: "Career transition advice",
    date: "March 10, 2025",
    preview: "We discussed transitioning from marketing to UX design...",
  },
  {
    id: 2,
    title: "Skills assessment",
    date: "March 5, 2025",
    preview: "Professor X analyzed my current skills and recommended...",
  },
]

export default function ProfilePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log({ name, email, message })
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setName("")
      setEmail("")
      setMessage("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with user info */}
        <div className="md:w-1/3">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>Manage your account and progress</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Your Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                      <BookOpen className="h-3 w-3 mr-1" /> Learning Enthusiast
                    </Badge>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                      <MessageSquare className="h-3 w-3 mr-1" /> Active Communicator
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Account Info</h3>
                  <div className="text-sm space-y-1">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span>user@example.com</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Member since:</span>
                      <span>March 1, 2025</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Plan:</span>
                      <span>Pro</span>
                    </p>
                  </div>
                </div>

                <Button className="w-full">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="md:w-2/3">
          <Tabs defaultValue="roadmaps">
            <TabsList className="mb-4">
              <TabsTrigger value="roadmaps">Saved Roadmaps</TabsTrigger>
              <TabsTrigger value="conversations">Conversations</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>

            {/* Saved Roadmaps Tab */}
            <TabsContent value="roadmaps">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Saved Roadmaps</h2>
                <p className="text-muted-foreground">Track your progress on different career paths</p>

                <div className="grid gap-4">
                  {savedRoadmaps.map((roadmap) => (
                    <Card key={roadmap.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-primary/10 p-2">{roadmap.icon}</div>
                            <div>
                              <h3 className="font-medium">{roadmap.title}</h3>
                              <p className="text-sm text-muted-foreground">Last updated: {roadmap.lastUpdated}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{roadmap.progress}%</div>
                            <div className="w-24 h-2 bg-muted rounded-full mt-1">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${roadmap.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm">Continue</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">Explore More Career Paths</Button>
                </div>
              </div>
            </TabsContent>

            {/* Conversations Tab */}
            <TabsContent value="conversations">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Conversations</h2>
                <p className="text-muted-foreground">Review your past conversations with Professor X</p>

                <div className="grid gap-4">
                  {conversations.map((conversation) => (
                    <Card key={conversation.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{conversation.title}</h3>
                            <p className="text-sm text-muted-foreground">{conversation.date}</p>
                            <p className="mt-2 text-sm">{conversation.preview}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Save className="h-4 w-4 mr-1" />
                              Export
                            </Button>
                            <Button size="sm">Continue</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button>Start New Conversation</Button>
                </div>
              </div>
            </TabsContent>

            {/* Contact Us Tab */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Have questions or feedback? We'd love to hear from you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={submitted}>
                      {submitted ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

