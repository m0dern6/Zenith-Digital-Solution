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
    href: "https://www.draegan.com/content/images/size/w1200/2021/08/YT-Cloud-Computing-2.png",
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
              <Card className="group relative h-[300px] overflow-hidden border-0 hover:shadow-xl transition-all duration-300">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.href})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10 text-white">
                  <div className="mb-auto pt-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <CardTitle className="text-2xl font-bold mb-2 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-200 text-sm font-medium">
                    {service.description}
                  </CardDescription>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
