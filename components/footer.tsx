"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Heart } from "lucide-react"
import { motion } from "framer-motion"

const socialMediaLinks = [
  { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61573101555981" },
  { Icon: Instagram, url: "https://www.instagram.com/raiscnust/" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/raiscnust/" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white text-lg font-semibold mb-4"
            >
              RAISC
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              Connecting you with mental health professionals for a healthier mind and better life.
            </motion.p>
             <div className="flex space-x-4">
              {socialMediaLinks.map(({ Icon, url }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                  whileHover={{ y: -5, color: "#4FD1C5" }}
                >
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">Social Media</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["hero", "about", "services", "testimonials", "contact"].map((id, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ x: 5, color: "#4FD1C5" }}
                >
                  <button
                    onClick={() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Individual Therapy",
                "Couples Counseling",
                "Group Therapy",
                "Psychiatric Services",
                "Online Therapy",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ x: 5, color: "#4FD1C5" }}
                >
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "HIPAA Compliance", "Accessibility"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    whileHover={{ x: 5, color: "#4FD1C5" }}
                  >
                    <Link href="#" className="hover:text-teal-400 transition-colors">
                      {item}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p>&copy; {new Date().getFullYear()} RAISC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mx-1"
            >
              <Heart className="h-4 w-4 text-red-400" />
            </motion.span>
            <span>for better mental health</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
