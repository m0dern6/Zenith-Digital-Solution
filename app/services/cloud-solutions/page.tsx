"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap, Database, GitBranch } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless transition from on-premise to cloud infrastructure with zero downtime.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Automated provisioning and management using Terraform and CloudFormation.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with SOC 2, HIPAA, and GDPR compliance.",
  },
  {
    icon: Zap,
    title: "Auto-Scaling",
    description: "Automatically adjust resources based on demand to optimize costs.",
  },
  {
    icon: Database,
    title: "Managed Databases",
    description: "Fully managed database solutions with automatic backups and replication.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated deployment workflows for faster, more reliable releases.",
  },
]

const platforms = [
  "AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Kubernetes", 
  "Docker", "Terraform", "Jenkins", "GitHub Actions", "Prometheus"
]

const services = [
  {
    title: "Cloud Strategy & Consulting",
    items: ["Architecture Design", "Cost Optimization", "Migration Planning", "Vendor Selection"],
  },
  {
    title: "Infrastructure Management",
    items: ["24/7 Monitoring", "Performance Tuning", "Disaster Recovery", "Backup Solutions"],
  },
  {
    title: "DevOps Services",
    items: ["CI/CD Setup", "Container Orchestration", "Infrastructure Automation", "Security Scanning"],
  },
  {
    title: "Serverless Solutions",
    items: ["Lambda Functions", "API Gateway", "Event-Driven Architecture", "Microservices"],
  },
]

export default function CloudSolutionsPage() {
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
            <Badge className="mb-4">Cloud Infrastructure</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scalable Cloud Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build, deploy, and scale your applications on secure, reliable cloud infrastructure. 
              We help you leverage the full power of AWS, Azure, and Google Cloud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud Infrastructure Features</h2>
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

      {/* Services Breakdown */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mr-3 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud Platforms & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {platforms.map((platform) => (
              <Badge key={platform} variant="outline" className="text-lg py-2 px-4">
                {platform}
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
