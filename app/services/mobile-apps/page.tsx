"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Zap, Users, Globe, Bell, Lock } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with React Native and Flutter.",
  },
  {
    icon: Zap,
    title: "Native Performance",
    description: "Optimized code that delivers smooth, native-like user experiences.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed with your users in mind.",
  },
  {
    icon: Globe,
    title: "Offline Capabilities",
    description: "Apps that work seamlessly even without internet connection.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Keep users engaged with timely, personalized notifications.",
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Built with security best practices and compliance standards.",
  },
]

const technologies = [
  "React Native", "Flutter", "Swift", "Kotlin", "Firebase", 
  "GraphQL", "Redux", "TypeScript", "Jest", "Fastlane"
]

const deliverables = [
  "iOS App (App Store ready)",
  "Android App (Play Store ready)",
  "Admin Dashboard",
  "API Integration",
  "Push Notification Setup",
  "Analytics Integration",
  "App Store Optimization",
  "Documentation & Training",
]

export default function MobileAppsPage() {
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
            <Badge className="mb-4">Mobile App Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Native & Cross-Platform Mobile Apps
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create stunning mobile experiences for iOS and Android. We build apps that users love, 
              with seamless performance and beautiful design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mobile App Features</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Mobile Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-lg py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">{item}</span>
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
