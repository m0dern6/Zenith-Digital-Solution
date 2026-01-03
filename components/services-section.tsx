"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Cloud, Shield, BarChart } from "lucide-react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies like Next.js and React.",
    icon: Code,
    href: "https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    href: "https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?s=612x612&w=0&k=20&c=loFqul06ggwtkwqSmzZnYfA72Vk7nFQOvDSzAN6YbtQ=",
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems and chatbots to automate your business processes.",
    icon: Brain,
    href: "https://static.vecteezy.com/system/resources/thumbnails/024/820/398/small/robot-man-artificial-intelligence-with-a-beautiful-face-look-at-logo-ai-on-hand-in-blue-circuit-bokeh-blur-virtual-cyberspace-futuristic-technology-vector.jpg",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions using AWS, Azure, or Google Cloud.",
    icon: Cloud,
    href: "/services/cloud-infrastructure",
  },
  {
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security measures.",
    icon: Shield,
    href: "https://t3.ftcdn.net/jpg/05/64/97/12/360_F_564971239_YvaLsmD5d5AJUHpbn8KXktJOGFUynIDv.jpg",
  },
  {
    title: "Data Analytics",
    description: "Actionable insights derived from your business data.",
    icon: BarChart,
    href: "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
