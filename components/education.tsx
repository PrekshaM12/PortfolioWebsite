"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { CalendarDays, GraduationCap, MapPin } from "lucide-react"

const educationData = [
  {
    institution: "University of California, Riverside",
    degree: "Master of Science - Computer Science",
    location: "California, USA",
    period: "2024 - 2026 (Expected)",
    gpa: "3.9/4.0",
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    location: "Tamil Nadu, India",
    period: "2020 - 2024",
    gpa: "3.8/4.0",
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coolBlue-500 to-techPurple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="mb-8 relative w-full"
            >
              {index !== educationData.length - 1 && (
                <div className="absolute left-[25px] top-[70px] bottom-0 w-0.5 bg-gradient-to-b from-coolBlue-500 to-techPurple-500"></div>
              )}

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover:shadow-coolBlue-500/10 bg-card/80 backdrop-blur-sm animated-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-coolBlue-500 to-techPurple-500 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coolBlue-500 dark:text-coolBlue-400">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-foreground/80">{edu.degree}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-foreground/60">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-techPurple-500" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4 text-techPurple-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <div className="mt-2 inline-block bg-gradient-to-r from-coolBlue-500/20 to-techPurple-500/20 px-2 py-1 rounded text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
