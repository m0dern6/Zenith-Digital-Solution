"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Code, Smartphone, Brain, Cloud, Shield, BarChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "We build high-performance, SEO-friendly websites using the latest technologies like Next.js, React, and Node.js. From simple landing pages to complex web applications, we deliver solutions that drive growth.",
    icon: Code,
    features: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "API Integration"],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-apps",
    description: "Create seamless mobile experiences for iOS and Android. Our cross-platform solutions ensure your app reaches the widest audience without compromising on performance.",
    icon: Smartphone,
    features: ["iOS & Android Apps", "React Native Development", "App Store Optimization", "Maintenance & Support"],
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-solutions",
    description: "Leverage the power of Artificial Intelligence to automate processes, gain insights, and enhance customer experiences. We build intelligent systems tailored to your specific needs.",
    icon: Brain,
    features: ["Chatbots & Virtual Assistants", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scale your business with secure and reliable cloud infrastructure. We help you migrate, manage, and optimize your cloud environment for maximum efficiency.",
    icon: Cloud,
    features: ["Cloud Migration", "AWS/Azure/GCP Management", "DevOps Automation", "Serverless Architecture"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive digital solutions designed to propel your business forward.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="mt-4 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 relative h-[400px] w-full rounded-3xl overflow-hidden bg-secondary/50 border border-border/50">
                  {/* Placeholder for service image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                    <service.icon className="h-32 w-32 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
