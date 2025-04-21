"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <AnimatedSection className="flex-1 space-y-6" delay={0.2}>
            <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-2">
              Your journey to wellness starts here
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Your Mental Health{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-teal-500 inline-block"
              >
                Matters
              </motion.span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
              Connect with licensed psychologists and psychiatrists in a safe, confidential environment. Begin your
              journey to better mental health today.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-500 text-teal-500 hover:bg-teal-50 rounded-full px-8"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="flex-1 relative" direction="left" delay={0.4}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full h-[400px] md:h-[500px]"
            >
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-teal-100 rounded-full"></div>
              <Image
                src="/hero-pic.png"
                alt="Mental health professionals"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatedSection>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex gap-8 items-center">
            <div className="text-gray-400 text-sm">Trusted by</div>
            <div className="flex gap-8 items-center">
              {[
                "Pakistan Institute of Psychology",
                "Karachi Institute of Behavioral Sciences",
                "Institute of Clinical Psychology - Punjab University",
                "Centre for Mental Health and Psychosocial Wellbeing - UoP",
              ].map((name, i) => (
                <div
                  key={i}
                  className="h-8 px-4 flex items-center bg-gray-200 rounded-md opacity-80 text-xs text-gray-700"
                >
                  {name}
                </div>
              ))}
           </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
