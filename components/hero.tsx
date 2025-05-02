"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 tech-bg opacity-70 dark:opacity-30"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-coolBlue-500/10 via-transparent to-techPurple-500/10 dark:from-coolBlue-500/5 dark:to-techPurple-500/5"></div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text font-extrabold">Preksha Mathur</span>
          </h1>
          <div className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto h-16">
            <TypeAnimation
              sequence={[
                "Ideas → Algorithms → Action",
                1000,
                "Turning Data into Impact",
                1000,
                "AI-Driven, Human-Focused",
                1000,
                "Problem Solver. Pattern Seeker.",
                1000,
                "Learning, Modeling, Iterating",
                1000,
                "MS CS @ UCR",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-coolBlue-500 dark:text-coolBlue-400"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-coolBlue-500 to-techPurple-500 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="rounded-full border-coolBlue-500 dark:border-coolBlue-400 hover:bg-coolBlue-500/10 transition-all duration-300"
          >
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-4 mb-16"
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full hover:bg-techPurple-500/10 hover:text-techPurple-500 transition-all duration-300"
          >
            <a href="https://linkedin.com/in/preksha-mathur" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full hover:bg-techPurple-500/10 hover:text-techPurple-500 transition-all duration-300"
          >
            <a href="https://github.com/PrekshaM12" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full hover:bg-techPurple-500/10 hover:text-techPurple-500 transition-all duration-300"
          >
            <a href="mailto:mathurpreksha12@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-coolBlue-500 dark:text-coolBlue-400 hover:bg-coolBlue-500/10"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
