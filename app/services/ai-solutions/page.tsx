"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageSquare, BarChart3, Eye, Cpu, Sparkles } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Intelligent Chatbots",
    description: "AI-powered conversational agents that understand context and provide human-like responses.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Machine learning models that forecast trends and optimize decision-making.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition and processing for automation and insights.",
  },
  {
    icon: Cpu,
    title: "Natural Language Processing",
    description: "Extract meaning from text, automate content analysis, and sentiment detection.",
  },
  {
    icon: Sparkles,
    title: "Recommendation Systems",
    description: "Personalized suggestions based on user behavior and preferences.",
  },
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "Tailored machine learning solutions for your specific business needs.",
  },
]

const technologies = [
  "TensorFlow", "PyTorch", "OpenAI GPT", "LangChain", "Hugging Face", 
  "Python", "scikit-learn", "Keras", "BERT", "Vector Databases"
]

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Reduce support costs by 60% with AI chatbots that handle common queries 24/7.",
  },
  {
    title: "Document Processing",
    description: "Automatically extract and classify information from invoices, contracts, and forms.",
  },
  {
    title: "Fraud Detection",
    description: "Identify suspicious patterns and prevent fraudulent transactions in real-time.",
  },
  {
    title: "Content Generation",
    description: "Create marketing copy, product descriptions, and social media content at scale.",
  },
]

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">AI & Machine Learning</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent AI Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and create exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">AI Technologies & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-lg py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
