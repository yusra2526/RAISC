"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedSection from "./animated-section"
import { motion, AnimatePresence } from "framer-motion"

export default function PeacefulQuotes() {
  const quotes = [
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      text: "The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear.",
      author: "Prasad Mahes",
    },
    {
      text: "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
      author: "Eckhart Tolle",
    },
    {
      text: "Healing takes courage, and we all have courage, even if we have to dig a little to find it.",
      author: "Tori Amos",
    },
    {
      text: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
      author: "Etty Hillesum",
    },
    {
      text: "In the midst of movement and chaos, keep stillness inside of you.",
      author: "Deepak Chopra",
    },
    {
      text: "Your mind will answer most questions if you learn to relax and wait for the answer.",
      author: "William S. Burroughs",
    },
    {
      text: "The greatest weapon against stress is our ability to choose one thought over another.",
      author: "William James",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const prev = () => {
    setCurrent((current - 1 + quotes.length) % quotes.length)
  }

  const next = () => {
    setCurrent((current + 1) % quotes.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 8000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section id="quotes" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-4">
            Inspiration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Peaceful Quotes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find inspiration and tranquility in these thoughtful words.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <Card className="border-none shadow-lg bg-gradient-to-br from-teal-50 to-blue-50 h-[300px] flex items-center justify-center">
                  <CardContent className="pt-10 pb-10 flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center text-center">
                      <p className="text-xl md:text-2xl text-gray-700 italic mb-6">"{quotes[current].text}"</p>
                      <p className="text-gray-600 font-medium">— {quotes[current].author}</p>
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
            aria-label="Previous quote"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>

          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  current === index ? "bg-teal-500" : "bg-gray-300",
                )}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={() => setAutoplay(!autoplay)}
                variant="outline"
                className={cn("border-teal-500 text-teal-500 hover:bg-teal-50", autoplay ? "bg-teal-50" : "bg-white")}
              >
                {autoplay ? "Pause Autoplay" : "Start Autoplay"}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
