"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import AnimatedSection from "./animated-section"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "RAISC has been life-changing for me. The therapist I was matched with understood my anxiety issues perfectly, and I've made more progress in three months than I did in years of trying to manage on my own.",
      name: "Sarah J.",
      title: "Anxiety Management",
      image: "/Female-pic.png",
    },
    {
      quote:
        "As someone who works irregular hours, finding a therapist was always difficult. With RAISC, I can schedule sessions that work with my changing schedule, and the video sessions are just as effective as in-person.",
      name: "Michael T.",
      title: "Depression Treatment",
      image: "/Male-pic.png",
    },
    {
      quote:
        "The psychiatrist I connected with through this platform took the time to really understand my history before suggesting medication. I appreciate the thoughtful, personalized approach to my treatment.",
      name: "Elena R.",
      title: "Bipolar Disorder Management",
      image: "/Female-pic.png",
    },
    {
      quote:
        "After my divorce, I was struggling to cope. The group therapy sessions have been incredibly supportive. It helps knowing you're not alone, and the facilitator does an amazing job guiding the conversations.",
      name: "David K.",
      title: "Grief Counseling",
      image: "/Male-pic.png",
    },
  ]

  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from people who have transformed their lives through our platform.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <Card className="border-none shadow-lg bg-gradient-to-br from-teal-50 to-white">
                  <CardContent className="pt-10 pb-10">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="h-12 w-12 text-teal-500 mb-6" />
                      <p className="text-lg text-gray-700 italic mb-8">"{testimonials[current].quote}"</p>
                      <div className="flex items-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="relative h-16 w-16 rounded-full overflow-hidden mr-4"
                        >
                          <Image
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-800">{testimonials[current].name}</h4>
                          <p className="text-gray-600">{testimonials[current].title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  current === index ? "bg-teal-500" : "bg-gray-300",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
