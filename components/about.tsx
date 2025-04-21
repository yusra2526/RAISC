"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

export default function About() {
  const features = [
    {
      title: "Licensed Professionals",
      description:
        "All our psychologists and psychiatrists are fully licensed, vetted, and experienced in various mental health specialties.",
    },
    {
      title: "Secure & Confidential",
      description:
        "Your privacy is our priority. All sessions and communications are encrypted and completely confidential.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Book appointments that fit your schedule, with options for evenings and weekends. Access care when you need it.",
    },
    {
      title: "Personalized Care",
      description:
        "We match you with professionals who specialize in your specific needs for the most effective treatment.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About RAISC</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making mental healthcare accessible, affordable, and stigma-free for everyone.
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection className="flex-1 order-2 md:order-1" delay={0.3}>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 rounded-full bg-teal-100 p-1">
                    <CheckCircle2 className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex-1 order-1 md:order-2" direction="left" delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
              <Image
                src="/about-pic.png"
                alt="About RAISC"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
