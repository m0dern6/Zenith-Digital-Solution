"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Search, Smartphone as Mobile, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions built from scratch to match your exact requirements.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed with lazy loading, code splitting, and caching strategies.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with SEO best practices to ensure maximum visibility in search engines.",
  },
  {
    icon: Mobile,
    title: "Responsive Design",
    description: "Perfect experience across all devices from mobile to desktop.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Industry-standard security practices and robust error handling.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased traffic seamlessly.",
  },
]

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", 
  "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Docker"
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create wireframes and interactive prototypes to visualize the final product.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build your application using modern frameworks and best practices.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing followed by deployment and ongoing support.",
  },
]

export default function WebDevelopmentPage() {
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
            <Badge className="mb-4">Web Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Powerful Web Applications
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From simple landing pages to complex enterprise applications, we deliver high-performance, 
              scalable web solutions that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Web Development Services</h2>
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

      {/* Technologies */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-lg py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
