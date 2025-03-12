"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ReactFlow, { Background, Controls, MiniMap, Panel, useNodesState, useEdgesState } from "reactflow"
import "reactflow/dist/style.css"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, ZoomIn, ZoomOut } from "lucide-react"
import { Card } from "@/components/ui/card"
import CustomNode from "@/components/custom-node"

// Register custom node types
const nodeTypes = {
  customNode: CustomNode,
}

// Career path data
const careerPaths = {
  "frontend-developer": {
    name: "Frontend Developer",
    nodes: [
      {
        id: "1",
        type: "customNode",
        data: {
          label: "HTML & CSS",
          description: "Learn the fundamentals of web development with HTML for structure and CSS for styling.",
          resources: ["MDN Web Docs", "freeCodeCamp", "CSS-Tricks"],
        },
        position: { x: 250, y: 0 },
      },
      {
        id: "2",
        type: "customNode",
        data: {
          label: "JavaScript",
          description: "Master the core programming language of the web to create interactive experiences.",
          resources: ["JavaScript.info", "Eloquent JavaScript", "You Don't Know JS"],
        },
        position: { x: 250, y: 100 },
      },
      {
        id: "3",
        type: "customNode",
        data: {
          label: "CSS Frameworks",
          description: "Learn popular CSS frameworks to speed up development and ensure consistency.",
          resources: ["Tailwind CSS", "Bootstrap", "Bulma"],
        },
        position: { x: 100, y: 200 },
      },
      {
        id: "4",
        type: "customNode",
        data: {
          label: "JavaScript Frameworks",
          description: "Master modern JavaScript frameworks to build complex, interactive UIs.",
          resources: ["React", "Vue.js", "Angular"],
        },
        position: { x: 400, y: 200 },
      },
      {
        id: "5",
        type: "customNode",
        data: {
          label: "State Management",
          description: "Learn how to manage application state in complex applications.",
          resources: ["Redux", "Zustand", "Context API"],
        },
        position: { x: 400, y: 300 },
      },
      {
        id: "6",
        type: "customNode",
        data: {
          label: "Testing",
          description: "Master testing methodologies to ensure your code works as expected.",
          resources: ["Jest", "React Testing Library", "Cypress"],
        },
        position: { x: 250, y: 400 },
      },
      {
        id: "7",
        type: "customNode",
        data: {
          label: "Performance Optimization",
          description: "Learn techniques to make your applications fast and responsive.",
          resources: ["Web Vitals", "Lighthouse", "Chrome DevTools"],
        },
        position: { x: 400, y: 400 },
      },
      {
        id: "8",
        type: "customNode",
        data: {
          label: "Accessibility",
          description: "Ensure your applications are usable by everyone, including people with disabilities.",
          resources: ["WCAG", "A11y Project", "Axe"],
        },
        position: { x: 100, y: 400 },
      },
      {
        id: "9",
        type: "customNode",
        data: {
          label: "Senior Frontend Developer",
          description: "Combine all your skills to build complex, accessible, and performant applications.",
          resources: ["Frontend Masters", "Tech Conferences", "Open Source Contributions"],
        },
        position: { x: 250, y: 500 },
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
      { id: "e2-4", source: "2", target: "4" },
      { id: "e3-8", source: "3", target: "8" },
      { id: "e4-5", source: "4", target: "5" },
      { id: "e5-7", source: "5", target: "7" },
      { id: "e7-9", source: "7", target: "9" },
      { id: "e8-9", source: "8", target: "9" },
      { id: "e6-9", source: "6", target: "9" },
    ],
  },
  "data-scientist": {
    name: "Data Scientist",
    nodes: [
      {
        id: "1",
        type: "customNode",
        data: {
          label: "Mathematics & Statistics",
          description: "Build a strong foundation in linear algebra, calculus, probability, and statistics.",
          resources: ["Khan Academy", "StatQuest", "3Blue1Brown"],
        },
        position: { x: 250, y: 0 },
      },
      {
        id: "2",
        type: "customNode",
        data: {
          label: "Programming Basics",
          description: "Learn Python, the most popular language for data science and machine learning.",
          resources: ["Python.org", "Codecademy", "DataCamp"],
        },
        position: { x: 250, y: 100 },
      },
      {
        id: "3",
        type: "customNode",
        data: {
          label: "Data Analysis",
          description: "Master data manipulation, cleaning, and exploratory data analysis.",
          resources: ["Pandas", "NumPy", "Matplotlib"],
        },
        position: { x: 100, y: 200 },
      },
      {
        id: "4",
        type: "customNode",
        data: {
          label: "Machine Learning",
          description: "Learn the fundamentals of machine learning algorithms and techniques.",
          resources: ["Scikit-learn", "Andrew Ng's Course", "Machine Learning Mastery"],
        },
        position: { x: 400, y: 200 },
      },
      {
        id: "5",
        type: "customNode",
        data: {
          label: "Deep Learning",
          description: "Explore neural networks and deep learning architectures.",
          resources: ["TensorFlow", "PyTorch", "Deep Learning Book"],
        },
        position: { x: 400, y: 300 },
      },
      {
        id: "6",
        type: "customNode",
        data: {
          label: "Big Data",
          description: "Learn how to work with large-scale data processing systems.",
          resources: ["Spark", "Hadoop", "Databricks"],
        },
        position: { x: 100, y: 300 },
      },
      {
        id: "7",
        type: "customNode",
        data: {
          label: "Data Visualization",
          description: "Master the art of communicating insights through effective visualizations.",
          resources: ["Tableau", "Power BI", "D3.js"],
        },
        position: { x: 250, y: 400 },
      },
      {
        id: "8",
        type: "customNode",
        data: {
          label: "Senior Data Scientist",
          description: "Apply your skills to solve complex business problems and drive decision-making.",
          resources: ["Kaggle", "Research Papers", "Industry Conferences"],
        },
        position: { x: 250, y: 500 },
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
      { id: "e2-4", source: "2", target: "4" },
      { id: "e3-6", source: "3", target: "6" },
      { id: "e3-7", source: "3", target: "7" },
      { id: "e4-5", source: "4", target: "5" },
      { id: "e5-8", source: "5", target: "8" },
      { id: "e6-8", source: "6", target: "8" },
      { id: "e7-8", source: "7", target: "8" },
    ],
  },
}

export default function FlowchartPage() {
  const searchParams = useSearchParams()
  const [selectedCareer, setSelectedCareer] = useState("frontend-developer")
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectedNode, setSelectedNode] = useState(null)

  useEffect(() => {
    const careerParam = searchParams.get("career")
    if (careerParam && careerPaths[careerParam]) {
      setSelectedCareer(careerParam)
    }
  }, [searchParams])

  useEffect(() => {
    if (careerPaths[selectedCareer]) {
      setNodes(careerPaths[selectedCareer].nodes)
      setEdges(careerPaths[selectedCareer].edges)
    }
  }, [selectedCareer, setNodes, setEdges])

  const handleNodeClick = (_, node) => {
    setSelectedNode(node)
  }

  const handleDownload = () => {
    const svgElement = document.querySelector(".react-flow__renderer svg")
    if (svgElement) {
      // Create a canvas element
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      // Set canvas dimensions
      const svgRect = svgElement.getBoundingClientRect()
      canvas.width = svgRect.width
      canvas.height = svgRect.height

      // Draw white background
      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Convert SVG to image
      const svgData = new XMLSerializer().serializeToString(svgElement)
      const img = new Image()
      img.crossOrigin = "anonymous"

      img.onload = () => {
        ctx.drawImage(img, 0, 0)

        // Download the image
        const link = document.createElement("a")
        link.download = `${careerPaths[selectedCareer].name.replace(/\s+/g, "-").toLowerCase()}-roadmap.png`
        link.href = canvas.toDataURL("image/png")
        link.click()
      }

      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
    }
  }

  return (
    <div className="container py-8 h-[calc(100vh-4rem)]">
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Career Roadmap</h1>
            <p className="text-muted-foreground">
              Explore the skills and technologies needed for your chosen career path
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[200px]">
              <Select value={selectedCareer} onValueChange={setSelectedCareer}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a career" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                  <SelectItem value="data-scientist">Data Scientist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        <Card className="flex-1 overflow-hidden">
          <div className="h-full w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={handleNodeClick}
              nodeTypes={nodeTypes}
              fitView
              attributionPosition="bottom-right"
            >
              <Background />
              <Controls />
              <MiniMap />
              <Panel position="top-right" className="bg-background p-2 rounded-md shadow-md">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.querySelector(".react-flow__controls-zoomin").click()}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => document.querySelector(".react-flow__controls-zoomout").click()}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                </div>
              </Panel>
            </ReactFlow>
          </div>
        </Card>
      </div>

      {selectedNode && (
        <Dialog open={!!selectedNode} onOpenChange={() => setSelectedNode(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedNode.data.label}</DialogTitle>
              <DialogDescription className="pt-4">
                <p className="mb-4">{selectedNode.data.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Recommended Resources:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedNode.data.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

