"use client"

import { Brain, Heart, Users, MessageSquare, Calendar, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: <Brain className="h-10 w-10 text-teal-500" />,
      title: "Psychological Therapy",
      description:
        "One-on-one therapy sessions with licensed psychologists specializing in various therapeutic approaches.",
    },
    {
      icon: <Heart className="h-10 w-10 text-teal-500" />,
      title: "Psychiatric Consultation",
      description:
        "Medication management and treatment from experienced psychiatrists for various mental health conditions.",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-500" />,
      title: "Group Therapy",
      description:
        "Supportive group sessions led by professionals where you can connect with others facing similar challenges.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-teal-500" />,
      title: "Text-Based Therapy",
      description: "Convenient messaging with your therapist for ongoing support between scheduled sessions.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-teal-500" />,
      title: "Flexible Scheduling",
      description: "Book appointments that fit your schedule with options for evenings and weekends.",
    },
    {
      icon: <Video className="h-10 w-10 text-teal-500" />,
      title: "Video Sessions",
      description: "High-quality video therapy from the comfort and privacy of your own space.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of mental health services to support your wellbeing journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="mb-4 bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
