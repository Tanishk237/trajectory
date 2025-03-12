"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mic, MicOff, Send, Save, User, Bot } from "lucide-react"

export default function ProfessorX() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Professor X, your AI career advisor. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const messagesEndRef = useRef(null)
  const recognitionRef = useRef(null)

  // Initialize speech recognition
  useEffect(() => {
    if ((typeof window !== "undefined" && "SpeechRecognition" in window) || "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("")

        setInput(transcript)
      }

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error)
        setIsListening(false)
      }
    }
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
    } else {
      recognitionRef.current?.start()
    }
    setIsListening(!isListening)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isGenerating) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsGenerating(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "Based on your interests, you might want to explore a career in frontend development. The roadmap starts with HTML, CSS, and JavaScript fundamentals.",
        "Data science could be a great fit for your analytical skills. I recommend starting with Python and statistics.",
        "For someone with your background, UX design offers a good blend of creativity and technical skills. You should focus on user research and wireframing first.",
        "Machine learning engineering is an exciting field that combines programming and mathematics. Start by building a strong foundation in Python and linear algebra.",
        "Have you considered DevOps? With your problem-solving abilities, you could excel at streamlining development workflows and managing infrastructure.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
      setIsGenerating(false)
    }, 1500)
  }

  const saveConversation = () => {
    const conversationText = messages
      .map((msg) => `${msg.role === "user" ? "You" : "Professor X"}: ${msg.content}`)
      .join("\n\n")

    const blob = new Blob([conversationText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "conversation-with-professor-x.txt"
    link.click()
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container py-8 md:py-12 max-w-4xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">Professor X</h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
              Your AI career advisor powered by cutting-edge speech recognition and generative AI
            </p>
          </div>
  
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-b from-background to-primary/5">
            <div className="absolute inset-0 bg-grid-small-white/10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
  
            <div className="p-4 h-[500px] overflow-y-auto relative">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.content}
                        {message.role === "assistant" && isGenerating && index === messages.length - 1 && (
                          <span className="ml-1 animate-pulse">...</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
  
            <div className="p-4 border-t bg-background/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Button
                  type="button"
                  size="icon"
                  variant={isListening ? "default" : "outline"}
                  onClick={toggleListening}
                  className={isListening ? "bg-red-500 hover:bg-red-600" : ""}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  <span className="sr-only">{isListening ? "Stop listening" : "Start listening"}</span>
                </Button>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Professor X about your career path..."
                  className="flex-1"
                />
                <Button type="submit" disabled={!input.trim() || isGenerating}>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
                <Button type="button" variant="outline" onClick={saveConversation} disabled={messages.length <= 1}>
                  <Save className="h-4 w-4" />
                  <span className="sr-only">Save conversation</span>
                </Button>
              </form>
            </div>
          </Card>
  
          <div className="text-center text-sm text-muted-foreground mt-4">
            <p>
              Professor X can help you explore career paths, create personalized roadmaps, and provide guidance on skill
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

