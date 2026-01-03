"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore some of our recent work and success stories.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 group">
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
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <Badge variant="outline">{project.category}</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
