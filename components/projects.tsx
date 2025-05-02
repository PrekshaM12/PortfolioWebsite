"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Github, Play } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const projectsData = [
  {
    title: "Chakravaat - Cyclone Intensity Estimation",
    description:
      "Engineered multi-headed attention-based CNNs for estimating cyclone intensity, achieving a 70% accuracy enhancement.",
    image: "/Chakra.jpg?height=200&width=400",
    gif: "/chakra2.gif?height=200&width=400",
    technologies: ["Python", "TensorFlow", "CNN", "Attention Mechanisms"],
    links: {
      github: "https://github.com/PrekshaM12/Chakravaat",
      demo: "https://github.com/PrekshaM12/Chakravaat",
    },
  },
  {
    title: "Breast Cancer Detection",
    description: "Led machine learning-driven cancerous cell detection, enhancing diagnostic accuracy by 45%.",
    image: "/breast.webp?height=200&width=400",
    gif: "/breast2.gif?height=200&width=400",
    technologies: ["KNN", "AdaBoost", "Scikit-learn", "Medical Imaging"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Parallelization of Molecular Dynamics Simulations",
    description:
      "Implemented the Verlet algorithm with OpenMP, optimizing computation time for large-scale MD simulations.",
    image: "/md3.jpg?height=200&width=400",
    gif: "/mol dyn.gif?height=200&width=400",
    technologies: ["OpenMP", "C++", "MD Simulations", "Parallel Computing"],
    links: {
      github: "https://github.com/PrekshaM12/Parallelizing-Molecular-Dynamics-Simulation",
      demo: "https://github.com/PrekshaM12/Parallelizing-Molecular-Dynamics-Simulation",
    },
  },
  {
    title: "Spatio-Temporal Health Analytics and Visualization",
    description:
      "Processing and analyzing large-scale health datasets from the CDC's National Center for Chronic Disease Prevention and Health Promotion using PySpark for distributed data processing, Geopandas for spatial data analysis, and Pandas-Profiling for exploratory data analysis and visualization.",
    image: "/spatio temp.png?height=200&width=400",  // Add real image path here
    gif: "/spatio2.gif?height=200&width=400",    // Add real gif if needed
    technologies: ["PySpark", "Geopandas", "Pandas-Profiling", "Python", "Jupyter Notebooks", "AWS"],
    links: {
      github: "https://github.com/PrekshaM12/Spatio-Temporal-Health-Analytics-and-Visualization",  // Add real GitHub link
      demo: "https://github.com/PrekshaM12/Spatio-Temporal-Health-Analytics-and-Visualization",    // Add real demo link if available
    },
  },
  {
    title: "DISHA - Post Graduation Application Management System",
    description:
      "Created a full-stack web app using Python and MongoDB for backend, with React, HTML, and CSS frontend, improving application processing time for graduate schools.",
    image: "/disha.jpg?height=200&width=400",  // Add real image path here
    gif: "/DISHA3.gif?height=200&width=400",    // Add real gif if needed
    technologies: ["Python", "MongoDB", "React", "HTML", "CSS"],
    links: {
      github: "https://github.com/PrekshaM12/DISHA",  // Add real GitHub link
      demo: "https://github.com/PrekshaM12/DISHA",    // Add real demo link if available
    },
  },
  {
    title: "Indian Sign Language Detector",
    description:
      "Developed an AI-driven system for sign language detection, achieving a 60% boost in processing speed.",
    image: "/ISL.png?height=200&width=400",
    gif: "/ISL3.gif?height=200&width=400",
    technologies: ["Python", "CNN", "LSTM", "PyTorch", "Computer Vision"],
    links: {
      github: "https://github.com/PrekshaM12/SignLanguageDetector",
      demo: "https://github.com/PrekshaM12/SignLanguageDetector",
    },
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coolBlue-500 to-techPurple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-500 hover:shadow-coolBlue-500/20 bg-card/80 backdrop-blur-sm border border-coolBlue-500/20 animated-border">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hoveredProject === index ? project.gif : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-coolBlue-500 dark:text-coolBlue-400 group-hover:text-techPurple-500 dark:group-hover:text-techPurple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-techPurple-500/10 text-techPurple-500 dark:text-techPurple-400 hover:bg-techPurple-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-coolBlue-500/50 text-coolBlue-500 dark:text-coolBlue-400 hover:bg-coolBlue-500/10 transition-all duration-300"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="z-[1000]">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-coolBlue-500 to-techPurple-500 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="z-[1000]">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
