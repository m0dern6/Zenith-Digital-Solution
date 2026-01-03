"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [

  {
    title: "Futsal Pay: Book & Play Court",
    category: "App Development",
    image: "https://play-lh.googleusercontent.com/_CDJQqdw-CM3jf8mhHz3CS7jZM0tRLtX2wN_z5f2-iQWVy-sUnXP6gmxkRS1witwYul6L2qcyVXSiYgPiOwGXzw=w5120-h2880-rw",
    description: "The ultimate sports management platform to discover nearby courts, split payments instantly, and join local matches.",
  },
  {
    title: "TripGenie: AI Travel Planner",
    category: "App Development",
    image: "https://play-lh.googleusercontent.com/LUq1kqMH2syezCbUsoP7iSrPQ-OBFwXtTMAgw3xWz6wr7cziYwXn3wGzfQY4hVhhORPTZpK5J7aT3oudS2aIzg=w1052-h592-rw",
    description: "An intelligent travel companion powered by Gemini AI that transforms your wanderlust into reality by generating personalized itineraries, tracking real-time expenses, and providing offline access to curated destination guides for an effortless journey.",
  },
]

export default function PortfolioPage() {
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
            Our <span className="text-primary">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of our best projects and success stories.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-none bg-transparent group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Badge variant="secondary" className="text-lg py-2 px-4">
                          View Case Study
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <Badge variant="outline">{project.category}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
