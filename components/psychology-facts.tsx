"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Lightbulb } from "lucide-react"
import AnimatedSection from "./animated-section"
import { motion, AnimatePresence } from "framer-motion"

export default function PsychologyFacts() {
  const facts = [
    "The brain typically accounts for about 2% of a person's body weight but uses approximately 20% of the body's energy.",
    "The human brain can process images that the eyes see for as little as 13 milliseconds.",
    "Studies suggest that spending time in nature can improve mental health by reducing stress and anxiety levels.",
    "The 'feel-good' hormone dopamine is released when you accomplish something or experience pleasure.",
    "Humans are capable of making decisions within 200 milliseconds, though we're often not conscious of this process.",
    "Regular physical exercise has been proven to be as effective as medication for treating mild to moderate depression.",
    "The brain continues to develop until your mid-20s, with the prefrontal cortex (responsible for decision-making) being one of the last areas to mature.",
    "Smiling, even when you don't feel happy, can actually improve your mood by triggering the release of endorphins.",
    "Multilingual people have been shown to have better memory, problem-solving abilities, and critical thinking skills.",
    "Sleep is crucial for memory consolidation, with studies showing that a good night's sleep after learning something new helps cement that information in your brain.",
  ]

  const [currentFact, setCurrentFact] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomFact = () => {
    if (isAnimating) return

    setIsAnimating(true)

    let newIndex
    do {
      newIndex = Math.floor(Math.random() * facts.length)
    } while (newIndex === currentFact && facts.length > 1)

    setTimeout(() => {
      setCurrentFact(newIndex)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section id="facts" className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-4">
            Did You Know?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Psychology Facts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fascinating insights about the human mind and behavior.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <CardContent className="pt-10 pb-10">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-teal-100 rounded-full p-4 mb-8"
                >
                  <Lightbulb className="h-8 w-8 text-teal-500" />
                </motion.div>
                <div className="h-32 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentFact}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl text-gray-700 mb-8"
                    >
                      {facts[currentFact]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    onClick={getRandomFact}
                    variant="outline"
                    className="border-teal-500 text-teal-500 hover:bg-teal-50 flex items-center gap-2"
                    disabled={isAnimating}
                  >
                    <RefreshCw className={cn("h-4 w-4", isAnimating && "animate-spin")} />
                    Show Another Fact
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
