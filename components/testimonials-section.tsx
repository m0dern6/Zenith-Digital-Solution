"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    content: "Zenith Digital transformed our online presence. Their attention to detail and innovative approach is unmatched.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovate Inc",
    content: "The team delivered a complex web application ahead of schedule and beyond our expectations.",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director, GrowthCo",
    content: "Working with Zenith was a pleasure. They truly understand modern design and user experience.",
    avatar: "ED",
  },
  {
    name: "David Wilson",
    role: "Founder, StartupX",
    content: "Exceptional quality and professional service. Highly recommended for any serious business.",
    avatar: "DW",
  },
  {
    name: "Jessica Brown",
    role: "Product Manager, Enterprise Solutions",
    content: "They turned our vision into reality with precision and creativity. A fantastic partner.",
    avatar: "JB",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground">
          Don't just take our word for it. Here's what our clients say.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={index} className="w-[350px] shrink-0 bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 whitespace-normal">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
