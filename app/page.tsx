import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import PsychologyFacts from "@/components/psychology-facts"
import PeacefulQuotes from "@/components/peaceful-quotes"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimationProvider from "@/components/animation-provider"

export default function Home() {
  return (
    <AnimationProvider>
      <main className="min-h-screen bg-[#f8f9fa]">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <PsychologyFacts />
        <PeacefulQuotes />
        <Contact />
        <Footer />
      </main>
    </AnimationProvider>
  )
}
