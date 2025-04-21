"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-600 mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your mental health journey? Reach out to us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection>
            <Card className="border-none shadow-lg h-full bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center h-[300px] text-center"
                  >
                    <div className="bg-teal-100 rounded-full p-4 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-teal-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="w-full min-h-[120px]"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-teal-100 rounded-full p-2 mt-1">
                      <Mail className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">contact@raisc.com</p>
                      <p className="text-gray-600">support@raisc.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-teal-100 rounded-full p-2 mt-1">
                      <Phone className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+92 XXX XXXXXXX</p>
                      <p className="text-gray-600">Mon-Fri: 8am - 8pm</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-teal-100 rounded-full p-2 mt-1">
                      <MapPin className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Office</h4>
                      <p className="text-gray-600">NSTP, NUST</p>
                      <p className="text-gray-600">H-12, Islamabad</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="border-none shadow-lg bg-gradient-to-r from-teal-400 to-teal-500 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                    <p className="mb-6">
                      If you're experiencing a mental health emergency, please call our 24/7 crisis line or the national
                      crisis hotline.
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">Crisis Line: +92 XXX XXXXXXX</p>
                      <p className="font-medium">National Hotline: ZZZ</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
