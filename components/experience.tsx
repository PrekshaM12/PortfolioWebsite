"use client"

import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Briefcase, CalendarDays, MapPin } from "lucide-react"

const experienceData = [
  {
    position: "Software Developer Intern",
    company: "Mapsol Mapsol Geospatial Solutions Inc.",
    location: "Beaumont, California",
    period: "Oct 2025 - Present",
   achievements: [
    {
      title: "Interactive GeoTower UI and Map Legend System",
      description:
      "Redesigned the GeoTower component by removing costly UI re-renders, fixing lagging resize behavior, and creating a scalable map-legend interface that aligns color-coded layers with real-time geospatial data.",
      skills: ["UI Optimization", "Angular", "Geospatial Visualization"],
    },
    {
      title: "Modular Frontend Architecture with Lego-Block Components",
      description:
        "Implemented a reusable, component-driven architecture using Angular to support dynamic HTML rendering, enabling faster feature development and simplifying long-term integrations with backend services.",
      skills: ["Angular", "Component Design", "Frontend Architecture"],
    },
    {
      title: "Performance Improvements for Fuse.Earth Portal",
      description:
        "Enhanced portal responsiveness by refactoring heavy DOM rebuilds, improving data population workflows, and streamlining form preloading logic for expert-level specifications and file summaries.",
      skills: ["JavaScript", "Performance Engineering", "Data Handling"],
    },
  ],
  },
  {
    position: "Machine Learning Internship",
    company: "National Institute of Technology",
    location: "Tiruchirappalli, India",
    period: "Jun 2023 - Aug 2023",
    achievements: [
      {
        title: "AI-Powered Insider Threat Detection",
        description:
          "Developed an AI-driven Insider Threat Detection System using anomaly detection and predictive modeling, improving detection accuracy by 6% and reducing false positives by 12%.",
        skills: ["Anomaly Detection", "Predictive Modeling", "Security Analytics"],
      },
      {
        title: "Temporal Sequence Learning for Security Analytics",
        description:
          "Designed and fine-tuned LSTM and Autoencoder to analyze security logs, capturing complex time‑dependent anomalies with a 15% improvement in predictive recall.",
        skills: ["LSTM", "Autoencoder", "Time Series Analysis"],
      },
      {
        title: "Scalable AI Data Pipelines",
        description:
          "Engineered high‑performance ETL pipelines using Python, Pandas, and SQL, optimising preprocessing efficiency by 40%, ensuring real‑time data availability for AI‑driven security monitoring.",
        skills: ["ETL", "Python", "Pandas", "SQL"],
      },
    ],
  },
  {
    position: "Summer Internship",
    company: "Center for Development of Telematics (C‑DOT)",
    location: "Delhi, India",
    period: "May 2023 - Jun 2023",
    achievements: [
      {
        title: "AI‑Driven Safety Mapping",
        description:
          "Developed a real‑time Safety Sign Detection System using Computer Vision and Deep Learning, improving workplace safety by automating hazard identification with 92% accuracy.",
        skills: ["Computer Vision", "Deep Learning", "Safety Systems"],
      },
      {
        title: "Optimised Object Recognition",
        description:
          "Designed a YOLO‑based deep learning model, achieving a 20% improvement in detection speed and 98% precision for identifying safety signs in dynamic indoor environments.",
        skills: ["YOLO", "Object Detection", "Model Optimisation"],
      },
      {
        title: "AI‑Powered Data Optimisation",
        description:
          "Reduced data preprocessing and model training time by 30% by automating workflows with OpenCV, TensorFlow, and Pandas, enabling faster AI model iteration.",
        skills: ["OpenCV", "TensorFlow", "Pandas", "Workflow Automation"],
      },
    ],
  },
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-background to-muted/30 relative"
    >
      <div className="absolute inset-0 code-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        {/* --- SECTION HEADER --- */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coolBlue-500 to-techPurple-500 mx-auto rounded-full" />
        </motion.div>

        {/* --- EXPERIENCE CARDS --- */}
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="mb-12 relative w-full"
            >
              {/* vertical timeline bar */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-[25px] top-[70px] bottom-0 w-0.5 bg-gradient-to-b from-coolBlue-500 to-techPurple-500" />
              )}

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-coolBlue-500/10 bg-card/80 backdrop-blur-sm animated-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* icon */}
                    <div className="bg-gradient-to-br from-coolBlue-500 to-techPurple-500 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>

                    {/* content */}
                    <div className="flex-1">
                      {/* --- HEADER (role / company / location / period) --- */}
                      <div className="flex flex-col md:flex-row md:justify-between gap-2">
                        {/* left: role + company + location (stacked) */}
                        <div className="min-w-0">
                          <h3 className="text-xl font-semibold text-coolBlue-500 dark:text-coolBlue-400 truncate">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-foreground/80 truncate">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-foreground/60 mt-1">
                            <MapPin className="h-4 w-4 text-techPurple-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* right: period */}
                        <div className="flex items-center gap-1 text-sm text-foreground/60 whitespace-nowrap md:justify-end">
                          <CalendarDays className="h-4 w-4 text-techPurple-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* --- ACHIEVEMENTS LIST --- */}
                      <div className="mt-4 space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="border-l-2 border-gradient-to-b from-coolBlue-500 to-techPurple-500 pl-4 py-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                          >
                            <h4 className="font-medium text-lg text-techPurple-500 dark:text-techPurple-400">
                              {achievement.title}
                            </h4>
                            <p className="text-foreground/70 mt-1">
                              {achievement.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {achievement.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="bg-coolBlue-500/10 text-coolBlue-500 dark:text-coolBlue-400 border-coolBlue-500/30 hover:bg-coolBlue-500/20 transition-colors duration-300"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
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

export default Experience

