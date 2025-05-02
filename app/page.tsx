import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import InteractiveBackground from "@/components/interactive-background"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="relative">
          <InteractiveBackground />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
